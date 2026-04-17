import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GlowWrapper } from './GlowWrapper.jsx';

const DESIGNS = [
  {
    id: 1,
    title: 'Brand Identity Exploration',
    image: 'https://res.cloudinary.com/dwpjwccxd/image/upload/q_auto/f_auto/v1776424141/Screenshot_2026-04-17_163731_qigux0.png',
    link: 'https://www.figma.com/@hetroy',
    accentRGB: '162, 89, 255',
  },
  {
    id: 2,
    title: 'Finance Dashboard UI',
    image: 'https://res.cloudinary.com/dwpjwccxd/image/upload/q_auto/f_auto/v1776424141/Screenshot_2026-04-17_163659_kn3cfr.png',
    link: 'https://www.figma.com/@hetroy',
    accentRGB: '242, 78, 30',
  },
  {
    id: 3,
    title: 'E-Commerce User Flow',
    image: 'https://res.cloudinary.com/dwpjwccxd/image/upload/q_auto/f_auto/v1776424141/Screenshot_2026-04-17_163018_a0zbg5.png',
    link: 'https://www.figma.com/@hetroy',
    accentRGB: '26, 188, 254',
  },
  {
    id: 4,
    title: 'Social App Mockups',
    image: 'https://res.cloudinary.com/dwpjwccxd/image/upload/q_auto/f_auto/v1776424141/Screenshot_2026-04-17_163622_yrqsag.png',
    link: 'https://www.figma.com/@hetroy',
    accentRGB: '10, 207, 131',
  },
  {
    id: 5,
    title: 'Healthcare Wireframes',
    image: 'https://res.cloudinary.com/dwpjwccxd/image/upload/q_auto/f_auto/v1776424141/Screenshot_2026-04-17_163003_vexu6k.png',
    link: 'https://www.figma.com/@hetroy',
    accentRGB: '162, 89, 255',
  },
  {
    id: 6,
    title: 'Hotel Booking UI',
    image: 'https://res.cloudinary.com/dwpjwccxd/image/upload/q_auto/f_auto/v1776424141/Screenshot_2026-04-17_162937_lcv036.png',
    link: 'https://www.figma.com/@hetroy',
    accentRGB: '242, 78, 30',
  },
  {
    id: 7,
    title: 'Mobile Wallet App',
    image: 'https://res.cloudinary.com/dwpjwccxd/image/upload/q_auto/f_auto/v1776424142/Screenshot_2026-04-17_163638_ufbee5.png',
    link: 'https://www.figma.com/@hetroy',
    accentRGB: '26, 188, 254',
  },
  {
    id: 8,
    title: 'Dark Mode Design System',
    image: 'https://res.cloudinary.com/dwpjwccxd/image/upload/q_auto/f_auto/v1776424143/Screenshot_2026-04-17_163100_z8mdr0.png',
    link: 'https://www.figma.com/@hetroy',
    
    accentRGB: '10, 207, 131',
  },
  {
    id: 9,
    title: 'Personal Portfolio UI',
    image: 'https://res.cloudinary.com/dwpjwccxd/image/upload/q_auto/f_auto/v1776424554/Screenshot_2026-04-17_164532_aydwik.png',
    link: 'https://www.figma.com/@hetroy',
    accentRGB: '162, 89, 255',
  }
];

export default function FigmaSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section id="designs" className="section" style={{ overflow: 'hidden' }}>
      <style>{`
        /* Masonry Layout */
        .figma-masonry {
          column-count: 1;
          column-gap: 24px;
        }
        @media (min-width: 640px) {
          .figma-masonry {
            column-count: 2;
          }
        }
        @media (min-width: 1024px) {
          .figma-masonry {
            column-count: 3;
          }
        }

        .figma-masonry-item {
          break-inside: avoid;
          margin-bottom: 24px;
          display: inline-block;
          width: 100%;
          border-radius: 16px;
        }

        /* Card internals */
        .figma-card-inner {
          position: relative;
          width: 100%;
          border-radius: inherit;
          overflow: hidden;
          background: #121218;
          display: block;
          text-decoration: none;
        }

        /* Image retains natural aspect ratio without cropping */
        .figma-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease;
          border-radius: inherit;
        }
        
        .figma-card-inner:hover .figma-img {
          transform: scale(1.04);
          filter: brightness(0.7) blur(2px);
        }

        /* Animated Tooltip Centered */
        .figma-tooltip {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, calc(-50% + 15px));
          background: rgba(10, 10, 15, 0.95);
          color: #ffffff;
          padding: 10px 20px;
          border-radius: 999px;
          font-family: var(--font-display);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          opacity: 0;
          pointer-events: none;
          white-space: nowrap;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 10;
        }

        .figma-card-inner:hover .figma-tooltip {
          opacity: 1;
          transform: translate(-50%, -50%);
        }

        .figma-cta-wrap {
          display: flex;
          justify-content: center;
          margin-top: 50px;
        }
        
        /* Animated, Iconless button */
        .figma-animated-btn {
          position: relative;
          padding: 16px 44px;
          background: rgba(162, 89, 255, 0.05);
          color: #ffffff;
          font-family: var(--font-display);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          border: 1px solid rgba(162, 89, 255, 0.4);
          border-radius: 999px;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
          z-index: 1;
        }
        .figma-animated-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(162, 89, 255, 0.8), #a259ff);
          transition: left 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: -1;
        }
        .figma-animated-btn:hover {
          border-color: #a259ff;
          box-shadow: 0 0 24px rgba(162, 89, 255, 0.5);
          transform: translateY(-4px);
          color: #ffffff;
        }
        .figma-animated-btn:hover::before {
          left: 0;
        }
        .figma-animated-btn:active {
          transform: translateY(0) scale(0.97);
        }
      `}</style>
      
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
           initial={{ opacity: 0, y: 24 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.5, ease: 'easeOut' }}
           style={{ marginBottom: 'clamp(32px, 5vh, 48px)' }}
        >
          <h2 className="section-title" style={{ color: '#a259ff' }}>Design Showcase</h2>
          <p className="section-subtitle">
            A curated collection of user interfaces, interactive mockups, and experience designs capturing pixel-perfect structure without compromising on aesthetic.
          </p>
        </motion.div>

        <div ref={sectionRef} className="figma-masonry">
          {DESIGNS.map((item, index) => (
            <motion.div 
              key={item.id} 
              className="figma-masonry-item"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
            >
              <GlowWrapper 
                accentRGB={item.accentRGB} 
                style={{ borderRadius: '16px', height: '100%' }}
              >
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="figma-card-inner">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="figma-img" 
                    loading="lazy" 
                  />
                  <div className="figma-tooltip">{item.title}</div>
                </a>
              </GlowWrapper>
            </motion.div>
          ))}
        </div>

        <motion.div 
           className="figma-cta-wrap"
           initial={{ opacity: 0, y: 20 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.5, delay: 0.4 }}
        >
           <a href="https://www.figma.com/@hetroy" target="_blank" rel="noopener noreferrer" className="figma-animated-btn">
             View Figma Profile
           </a>
        </motion.div>
      </div>
    </section>
  );
}
