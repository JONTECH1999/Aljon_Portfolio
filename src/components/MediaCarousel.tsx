import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlay } from 'react-icons/fi';

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
  label?: string;
  orientation?: 'portrait' | 'landscape';
}

interface MediaCarouselProps {
  media: MediaItem[];
  title: string;
  initialIndex?: number;
  onIndexChange?: (idx: number) => void;
}

const MediaCarousel: React.FC<MediaCarouselProps> = ({ media, title, initialIndex = 0, onIndexChange }) => {
  const [current, setCurrentState] = useState(initialIndex);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const total = media.length;

  // Detect dark mode changes
  React.useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
    };
    
    checkDarkMode();
    
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);

  // Sync with parent if initialIndex changes
  React.useEffect(() => {
    setCurrentState(initialIndex);
  }, [initialIndex]);

  const setCurrent = (idx: number) => {
    setCurrentState(idx);
    if (onIndexChange) onIndexChange(idx);
  };

  const currentItem = media[current];
  
  // Determine aspect ratio based on orientation
  const getMediaClasses = (item: MediaItem) => {
    const baseClasses = "rounded-lg shadow-2xl";
    if (item.orientation === 'portrait') {
      return `${baseClasses} max-h-96 w-auto object-contain`;
    }
    return `${baseClasses} w-full max-h-96 object-contain`;
  };

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Main Display */}
      <div 
        className="w-full flex flex-col items-center justify-center rounded-lg p-4"
        style={{
          backgroundColor: isDarkMode ? '#1e293b' : '#f1f5f9',
          transition: 'background-color 0.3s ease'
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentItem.src}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="w-full relative"
          >
            {currentItem.type === 'image' ? (
              <img
                src={currentItem.src}
                alt={currentItem.label || title}
                className={`${getMediaClasses(currentItem)} bg-white dark:bg-slate-900`}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/placeholder.png';
                }}
              />
            ) : (
              <div className="relative w-full flex items-center justify-center">
                <video
                  controls
                  autoPlay
                  poster={currentItem.thumbnail}
                  className={`${getMediaClasses(currentItem)} bg-white dark:bg-black`}
                  controlsList="nodownload"
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
                </video>
                <div className="absolute top-3 right-3 bg-black/60 dark:bg-black/60 px-3 py-1 rounded-full text-sm text-white backdrop-blur-sm">
                  {currentItem.label || 'Video'}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
        
        {/* Label and Counter Below Media */}
        <div 
          className="w-full text-center mt-3 px-4 py-2.5 rounded-lg"
          style={{
            backgroundColor: isDarkMode ? '#334155' : '#cbd5e1',
            color: isDarkMode ? '#ffffff' : '#1e293b',
            transition: 'all 0.3s ease'
          }}
        >
          <p className="text-sm font-bold" style={{ textShadow: isDarkMode ? '0 1px 2px rgba(0,0,0,0.5)' : '0 1px 2px rgba(0,0,0,0.1)' }}>
            {currentItem.label} • {current + 1} of {total}
          </p>
        </div>
      </div>
      
      {/* Thumbnail Grid - Simplified Navigation */}
      {total > 1 && (
        <div className="w-full mt-6">
          <div className="flex gap-3 justify-center flex-wrap">
            {media.map((item, idx) => (
              <motion.button
                key={item.src}
                onClick={(e) => { e.stopPropagation(); setCurrent(idx); }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative rounded-lg overflow-hidden transition-all duration-300 group ${
                  idx === current 
                    ? 'ring-2 ring-indigo-500 shadow-lg' 
                    : 'ring-1 ring-slate-300 dark:ring-slate-600 hover:ring-indigo-400'
                }`}
                style={{
                  width: '80px',
                  height: '80px',
                }}
                aria-label={item.label || `Media ${idx + 1}`}
              >
                {item.type === 'image' ? (
                  <img 
                    src={item.thumbnail || item.src} 
                    alt={item.label || title} 
                    className="w-full h-full object-cover" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/placeholder.png';
                    }}
                  />
                ) : (
                  <>
                    <img 
                      src={item.thumbnail} 
                      alt={item.label || title} 
                      className="w-full h-full object-cover" 
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                      <FiPlay className="text-white" size={24} />
                    </div>
                  </>
                )}
                {idx === current && (
                  <motion.div
                    layoutId="activeThumb"
                    className="absolute inset-0 border-2 border-indigo-500 rounded-lg pointer-events-none"
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaCarousel;