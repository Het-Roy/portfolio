import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

export default function Carousel({ items, renderItem }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideLeft = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  const slideRight = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden', padding: '40px 0' }}>
      <div style={{
        position: 'relative', 
        width: '100%', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        perspective: '1000px',
        padding: '0 20px' // Add a little padding for mobile
      }}>
        {/* Invisible relative item for maintaining container height */}
        <div style={{ opacity: 0, pointerEvents: 'none', visibility: 'hidden', width: '100%', maxWidth: '850px' }}>
          {renderItem(items[0], 0, false)}
        </div>

        {items.map((item, i) => {
          let diff = i - currentIndex;
          if (diff < -Math.floor(items.length / 2)) diff += items.length;
          if (diff > Math.floor(items.length / 2)) diff -= items.length;

          let isCenter = diff === 0;
          let isLeft = diff === -1 || (currentIndex === 0 && i === items.length - 1 && items.length <= 2);
          let isRight = diff === 1 || (currentIndex === items.length - 1 && i === 0 && items.length <= 2);

          let x = 0;
          let scale = 0.8;
          let opacity = 0;
          let zIndex = 0;
          let blur = '10px';

          if (isCenter) {
            x = '0%';
            scale = 1;
            opacity = 1;
            zIndex = 10;
            blur = '0px';
          } else if (isRight) {
            x = '60%'; 
            scale = 0.85;
            opacity = 0.5;
            zIndex = 5;
            blur = '4px';
          } else if (isLeft) {
            x = '-60%';
            scale = 0.85;
            opacity = 0.5;
            zIndex = 5;
            blur = '4px';
          } else {
            // Further away items
            x = diff > 0 ? '120%' : '-120%';
            scale = 0.6;
            opacity = 0;
            zIndex = 1;
            blur = '10px';
          }

          return (
            <motion.div
              key={i}
              initial={false}
              animate={{ x, scale, opacity, zIndex, filter: `blur(${blur})` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              style={{
                position: 'absolute',
                width: '100%',
                maxWidth: '850px',
                left: 0,
                right: 0,
                margin: '0 auto',
                cursor: isCenter ? 'default' : 'pointer'
              }}
              drag={isCenter ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) slideRight();
                else if (swipe > swipeConfidenceThreshold) slideLeft();
              }}
              onClick={() => {
                if (isRight) slideRight();
                if (isLeft) slideLeft();
              }}
            >
              <div style={{ pointerEvents: isCenter ? 'auto' : 'none' }}>
                {renderItem(item, i, isCenter)}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', marginTop: '30px' }}>
        <button 
          onClick={slideLeft}
          aria-label="Previous slide"
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            color: '#fff',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
          onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
             <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <div style={{ display: 'flex', gap: '10px' }}>
          {items.map((_, idx) => (
             <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: idx === currentIndex ? 'var(--accent-secondary, #5CE1E6)' : 'rgba(255,255,255,0.2)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  transform: idx === currentIndex ? 'scale(1.2)' : 'scale(1)',
                }}
                aria-label={`Go to slide ${idx + 1}`}
             />
          ))}
        </div>
        <button 
          onClick={slideRight}
          aria-label="Next slide"
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            color: '#fff',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
          onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
             <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
}
