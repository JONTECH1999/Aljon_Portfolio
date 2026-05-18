import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
  flipDirection?: 'horizontal' | 'vertical';
}

const FlipCard: React.FC<FlipCardProps> = ({ front, back, className = '', flipDirection = 'horizontal' }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);

  // Handle touch start - record initial X position
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  // Handle swipe gesture on touch end
  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const swipeDistance = Math.abs(touchEndX - touchStartX);
    const SWIPE_THRESHOLD = 50; // Minimum swipe distance in pixels

    // If swipe detected, flip the card
    if (swipeDistance > SWIPE_THRESHOLD) {
      setIsFlipped((f) => !f);
    }
  };

  // Handle click - flip card on tap/click
  const handleClick = () => {
    setIsFlipped((f) => !f);
  };

  const animateProps = flipDirection === 'horizontal' 
    ? { rotateY: isFlipped ? 180 : 0 }
    : { rotateX: isFlipped ? 180 : 0 };
  const backTransform = flipDirection === 'horizontal' 
    ? 'rotateY(180deg)'
    : 'rotateX(180deg)';

  return (
    <motion.div
      className={`relative w-full h-full ${className}`}
      style={{
        perspective: '1200px',
        cursor: 'pointer',
        WebkitTapHighlightColor: 'transparent',
      }}
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{
          transformStyle: 'preserve-3d',
        }}
        animate={animateProps}
        transition={{
          type: 'spring',
          stiffness: 120,
          damping: 18,
        }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transition: 'box-shadow 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
          }}
        >
          {front}
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: backTransform,
            transition: 'box-shadow 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
          }}
        >
          {back}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FlipCard;
