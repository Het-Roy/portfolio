import React, { useEffect, useMemo, useRef } from 'react';

export default function Background() {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const mouseRef = useRef({ x: 0.5, y: 0.5, active: false });
  const sizeRef = useRef({ w: 0, h: 0, dpr: 1 });
  const starsRef = useRef([]);
  const shootersRef = useRef([]);
  const lastShooterRef = useRef(0);

  const reduceMotion = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const rand = (min, max) => min + Math.random() * (max - min);
    let lastT = 0;

    // ── Star factory ──────────────────────────────────────────
    const makeStars = (w, h) => {
      const area = w * h;
      // ≈3× more stars than before
      const count = Math.max(250, Math.min(700, Math.round(area * 0.00016)));
      return Array.from({ length: count }, () => {
        const depth = rand(0.2, 1);
        return {
          ox: rand(0, w),   // original x (stable)
          oy: rand(0, h),   // original y
          x: 0, y: 0,       // computed each frame
          r: rand(0.5, 2.2) * depth,
          baseAlpha: rand(0.2, 0.9),
          tw: rand(0.4, 1.8),
          phase: rand(0, Math.PI * 2),
          d: depth,
        };
      });
    };

    // ── Shooting-star factory ─────────────────────────────────
    const makeShooter = (w, h) => {
      const angle = rand(-0.4, 0.4); // mostly horizontal
      const speed = rand(500, 900);  // px/s
      const len   = rand(80, 200);
      const startX = rand(0, w);
      const startY = rand(0, h * 0.6);
      return {
        x: startX, y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        len,
        life: 1,    // 0–1 opacity
        decay: rand(0.6, 1.2), // life units per second
      };
    };

    // ── Resize ────────────────────────────────────────────────
    const resize = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const w   = Math.max(1, window.innerWidth);
      const h   = Math.max(1, window.innerHeight);
      sizeRef.current = { w, h, dpr };
      canvas.width  = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width  = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      starsRef.current = makeStars(w, h);
    };

    // ── Mouse tracking ─────────────────────────────────────────
    const onMove = (e) => {
      mouseRef.current = {
        x: e.clientX / Math.max(1, window.innerWidth),
        y: e.clientY / Math.max(1, window.innerHeight),
        active: true,
      };
    };
    const onLeave = () => { mouseRef.current.active = false; };

    // ── Render loop ────────────────────────────────────────────
    const step = (t) => {
      const { w, h } = sizeRef.current;
      if (!w || !h) { rafRef.current = requestAnimationFrame(step); return; }

      const dt  = Math.min(0.05, (t - lastT) / 1000 || 0);
      lastT = t;

      ctx.clearRect(0, 0, w, h);

      const mouse  = mouseRef.current;
      const mx     = mouse.x * w;
      const my     = mouse.y * h;
      const PULL_R = 200;   // attraction zone radius (px)
      const PUSH_R = 80;    // inner repulsion zone  (px)

      // ── Draw stars ─────────────────────────────────────────
      const stars = starsRef.current;
      for (let i = 0; i < stars.length; i += 1) {
        const s = stars[i];

        // Twinkle
        const twinkle = reduceMotion ? 1 : 0.7 + 0.3 * Math.sin(t * 0.001 * s.tw + s.phase);

        let alpha = s.baseAlpha * twinkle;
        let x     = s.ox;
        let y     = s.oy;
        let r     = s.r;

        // Mouse interaction
        if (mouse.active) {
          const dx   = x - mx;
          const dy   = y - my;
          const dist = Math.hypot(dx, dy);

          if (dist < PULL_R) {
            const t01  = dist / PULL_R;           // 0 = at cursor, 1 = edge
            const ease = 1 - t01 * t01;           // quadratic falloff

            if (dist < PUSH_R) {
              // Inner zone: repel
              const push = (1 - dist / PUSH_R) * 30 * s.d;
              if (dist > 0.5) { x += (dx / dist) * push; y += (dy / dist) * push; }
            } else {
              // Outer zone: gentle pull toward cursor
              const pull = ease * 8 * (1 - s.d);
              if (dist > 0.5) { x -= (dx / dist) * pull; y -= (dy / dist) * pull; }
            }

            // Glow & enlarge near cursor
            alpha = Math.min(1, alpha + ease * 0.65);
            r     = r * (1 + ease * 1.2);
          }
        }

        // Glow halo for larger / close stars
        if (r > 1.2 || (mouse.active && Math.hypot(x - mx, y - my) < PULL_R)) {
          const glowR = r * 4;
          const grad  = ctx.createRadialGradient(x, y, 0, x, y, glowR);
          grad.addColorStop(0, `rgba(255,255,255,${alpha * 0.35})`);
          grad.addColorStop(1, 'rgba(255,255,255,0)');
          ctx.beginPath();
          ctx.fillStyle = grad;
          ctx.arc(x, y, glowR, 0, Math.PI * 2);
          ctx.fill();
        }

        // Core dot
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      // ── Shooting stars ──────────────────────────────────────
      if (!reduceMotion) {
        // Spawn a new shooter every ~2.5 s
        if (t - lastShooterRef.current > 2500 && Math.random() < 0.4) {
          shootersRef.current.push(makeShooter(w, h));
          lastShooterRef.current = t;
        }

        const alive = [];
        for (let i = 0; i < shootersRef.current.length; i += 1) {
          const sh = shootersRef.current[i];
          sh.x    += sh.vx * dt;
          sh.y    += sh.vy * dt;
          sh.life -= sh.decay * dt;

          if (sh.life <= 0 || sh.x > w + 50 || sh.y > h + 50) continue;
          alive.push(sh);

          const tailX  = sh.x - (sh.vx / Math.hypot(sh.vx, sh.vy)) * sh.len;
          const tailY  = sh.y - (sh.vy / Math.hypot(sh.vx, sh.vy)) * sh.len;
          const alpha2 = sh.life;

          const grad = ctx.createLinearGradient(tailX, tailY, sh.x, sh.y);
          grad.addColorStop(0, `rgba(255,255,255,0)`);
          grad.addColorStop(0.6, `rgba(255,255,255,${alpha2 * 0.5})`);
          grad.addColorStop(1, `rgba(255,255,255,${alpha2})`);

          ctx.beginPath();
          ctx.strokeStyle = grad;
          ctx.lineWidth   = 1.5;
          ctx.moveTo(tailX, tailY);
          ctx.lineTo(sh.x, sh.y);
          ctx.stroke();

          // Bright head
          ctx.beginPath();
          ctx.fillStyle = `rgba(255,255,255,${alpha2})`;
          ctx.arc(sh.x, sh.y, 1.8, 0, Math.PI * 2);
          ctx.fill();
        }
        shootersRef.current = alive;
      }

      rafRef.current = requestAnimationFrame(step);
    };

    // ── Touch support (mobile) ─────────────────────────────────
    const onTouch = (e) => {
      const touch = e.touches[0];
      if (!touch) return;
      mouseRef.current = {
        x: touch.clientX / Math.max(1, window.innerWidth),
        y: touch.clientY / Math.max(1, window.innerHeight),
        active: true,
      };
    };
    const onTouchEnd = () => { mouseRef.current.active = false; };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseleave', onLeave);
    window.addEventListener('touchstart', onTouch, { passive: true });
    window.addEventListener('touchmove', onTouch, { passive: true });
    window.addEventListener('touchend', onTouchEnd);
    rafRef.current = requestAnimationFrame(step);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('touchstart', onTouch);
      window.removeEventListener('touchmove', onTouch);
      window.removeEventListener('touchend', onTouchEnd);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [reduceMotion]);

  return <canvas ref={canvasRef} className="background-stars" aria-hidden="true" />;
}
