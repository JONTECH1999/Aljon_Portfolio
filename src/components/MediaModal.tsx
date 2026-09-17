import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiX, FiPlay } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
  label?: string;
  orientation?: 'portrait' | 'landscape';
}

interface MediaModalProps {
  isOpen: boolean;
  media: MediaItem[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  title: string;
}

const MediaModal: React.FC<MediaModalProps> = ({
  isOpen,
  media,
  currentIndex,
  onClose,
  onPrev,
  onNext,
  title,
}) => {
  const { isDarkMode, themeConfig } = useTheme();
  const currentItem = media[currentIndex];
  const total = media.length;
  const [dragX, setDragX] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);
  const [startX, setStartX] = React.useState(0);

  // Handle mouse down on media
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  // Handle mouse move during drag
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const diff = currentX - startX;
    setDragX(diff);
  };

  // Handle mouse up to complete drag
  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setIsDragging(false);

    const diff = e.clientX - startX;
    const threshold = 80; // Minimum distance to trigger navigation

    if (diff > threshold) {
      // Swiped right - go to previous
      onPrev();
    } else if (diff < -threshold) {
      // Swiped left - go to next
      onNext();
    }

    setDragX(0);
  };

  // Handle touch start
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  // Handle touch move
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    setDragX(diff);
  };

  // Handle touch end
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging) return;
    setIsDragging(false);

    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX;
    const threshold = 50; // Minimum distance for touch (more sensitive than mouse)

    if (diff > threshold) {
      // Swiped right - go to previous
      onPrev();
    } else if (diff < -threshold) {
      // Swiped left - go to next
      onNext();
    }

    setDragX(0);
  };

  // Handle scroll wheel to change media
  React.useEffect(() => {
    if (!isOpen) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (e.deltaY < 0) {
        // Scroll up - go to previous
        onPrev();
      } else if (e.deltaY > 0) {
        // Scroll down - go to next
        onNext();
      }
    };

    // Add passive: false to allow preventDefault
    window.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isOpen, onPrev, onNext]);

  // Get container classes based on orientation
  const getContainerClasses = (item: MediaItem) => {
    const bgGradient = isDarkMode 
      ? 'bg-gradient-to-b from-slate-900 to-slate-950' 
      : 'bg-gradient-to-b from-slate-100 to-slate-200';
    
    if (item.orientation === 'portrait') {
      return `flex items-center justify-center p-6 ${bgGradient} h-[70vh]`;
    }
    return `flex-1 overflow-auto flex items-center justify-center p-6 ${bgGradient}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            {/* Content */}
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="relative rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col"
              style={{
                backgroundColor: isDarkMode ? themeConfig.darkCardBg : themeConfig.lightCardBg,
                transition: 'background-color 0.3s ease'
              }}
            >
              {/* Header */}
              <div 
                className="flex items-center justify-between p-6 border-b"
                style={{
                  borderColor: isDarkMode ? themeConfig.darkBorder : themeConfig.lightBorder,
                  backgroundColor: isDarkMode ? themeConfig.darkBg : themeConfig.lightBg,
                  transition: 'all 0.3s ease'
                }}
              >
                <div>
                  <h3 className="text-xl font-bold" style={{ color: isDarkMode ? themeConfig.darkText : themeConfig.lightText }}>{title}</h3>
                  <p className="text-sm mt-1" style={{ color: isDarkMode ? themeConfig.darkSecondaryText : themeConfig.lightSecondaryText, transition: 'color 0.3s ease' }}>
                    {currentItem.label && `${currentItem.label} •`} {currentIndex + 1} of {total}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg transition-colors"
                  style={{
                    color: isDarkMode ? themeConfig.darkText : themeConfig.lightText,
                    backgroundColor: isDarkMode ? `${themeConfig.darkBorder}40` : `${themeConfig.lightBorder}60`,
                  }}
                  aria-label="Close"
                >
                  <FiX size={24} />
                </button>
              </div>

              {/* Media Container */}
              <div 
                className="relative flex-1 overflow-hidden flex items-center justify-center"
                style={{
                  backgroundImage: isDarkMode 
                    ? 'linear-gradient(to bottom, rgb(15, 23, 42), rgb(15, 23, 42))' 
                    : 'linear-gradient(to bottom, rgb(241, 245, 249), rgb(226, 232, 240))',
                }}
              >
                <motion.div 
                  className={getContainerClasses(currentItem)}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                  onMouseLeave={() => {
                    if (isDragging) {
                      setIsDragging(false);
                      setDragX(0);
                    }
                  }}
                  animate={{ x: dragX }}
                  transition={isDragging ? { type: 'tween', duration: 0.1, ease: 'linear' } : { type: 'spring', stiffness: 300, damping: 30 }}
                  style={{
                    cursor: isDragging ? 'grabbing' : 'grab',
                  }}
                >
                  {currentItem.type === 'image' ? (
                    <motion.img
                      key={currentItem.src}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      src={currentItem.src}
                      alt={currentItem.label || title}
                      className={`rounded-lg object-contain ${currentItem.orientation === 'portrait' ? 'max-h-full w-auto' : 'max-w-full max-h-full'}`}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/placeholder.png';
                      }}
                    />
                  ) : (
                    <motion.video
                      key={currentItem.src}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      controls
                      autoPlay
                      poster={currentItem.thumbnail}
                      className={`rounded-lg bg-black object-contain ${currentItem.orientation === 'portrait' ? 'max-h-full w-auto' : 'max-w-full max-h-full'}`}
                      onError={(e) => {
                        const video = e.target as HTMLVideoElement;
                        video.poster = '/images/placeholder.png';
                      }}
                    >
                      {currentItem.src.endsWith('.webm') && (
                        <source src={currentItem.src} type="video/webm" />
                      )}
                      {currentItem.src.endsWith('.mp4') && (
                        <source src={currentItem.src} type="video/mp4" />
                      )}
                      Your browser does not support the video tag.
                    </motion.video>
                  )}
                </motion.div>

                {/* Floating Left/Right Navigation Arrows (Non-blocking) */}
                {total > 1 && (
                  <>
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (!isDragging) onPrev();
                      }}
                      whileHover={{ scale: 1.1, x: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-effect bg-black/40 hover:bg-black/70 text-white flex items-center justify-center shadow-xl border border-white/20 z-20 transition-all cursor-pointer"
                      aria-label="Previous Media"
                    >
                      <FiChevronLeft size={24} />
                    </motion.button>

                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (!isDragging) onNext();
                      }}
                      whileHover={{ scale: 1.1, x: 2 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-effect bg-black/40 hover:bg-black/70 text-white flex items-center justify-center shadow-xl border border-white/20 z-20 transition-all cursor-pointer"
                      aria-label="Next Media"
                    >
                      <FiChevronRight size={24} />
                    </motion.button>
                  </>
                )}
              </div>

              {/* Navigation */}
              {total > 1 && (
                <div 
                  className="flex items-center justify-center p-6 border-t"
                  style={{
                    borderColor: isDarkMode ? themeConfig.darkBorder : themeConfig.lightBorder,
                    backgroundColor: isDarkMode ? `${themeConfig.darkBg}80` : `${themeConfig.lightBg}80`,
                    transition: 'all 0.3s ease'
                  }}
                >
                  {/* Thumbnails Only */}
                  <div className="flex gap-3 overflow-x-auto flex-1 pb-2">
                    {media.map((item, idx) => (
                      <motion.button
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          // Calculate how many steps to move
                          const diff = idx - currentIndex;
                          if (diff > 0) {
                            for (let i = 0; i < diff; i++) onNext();
                          } else if (diff < 0) {
                            for (let i = 0; i < Math.abs(diff); i++) onPrev();
                          }
                        }}
                        className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all"
                        style={{
                          borderColor: idx === currentIndex ? themeConfig.primary : isDarkMode ? themeConfig.darkBorder : themeConfig.lightBorder,
                          boxShadow: idx === currentIndex ? `0 0 12px ${themeConfig.primary}40` : 'none'
                        }}
                      >
                        {item.type === 'image' ? (
                          <img
                            src={item.thumbnail || item.src}
                            alt={item.label}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = '/images/placeholder.png';
                            }}
                          />
                        ) : (
                          <div className="relative w-full h-full group">
                            <img
                              src={item.thumbnail}
                              alt={item.label}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = '/images/placeholder.png';
                              }}
                            />
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                              <FiPlay className="text-white" size={16} />
                            </div>
                          </div>
                        )}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MediaModal;
