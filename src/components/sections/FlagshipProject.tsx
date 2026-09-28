import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiPlay, 
  FiInfo, 
  FiArrowRight, 
  FiGithub, 
  FiImage, 
  FiAward, 
  FiCpu, 
  FiChevronLeft, 
  FiChevronRight,
  FiVolume2,
  FiLayers,
  FiCompass
} from 'react-icons/fi';
import { FaFacebook } from 'react-icons/fa';

export interface ProjectMedia {
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
  label?: string;
  orientation?: 'portrait' | 'landscape';
}

export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  image: string;
  video?: string;
  videoThumbnail?: string;
  github: string;
  live: string;
  facebook?: string;
  youtube?: string;
  category: string;
  media?: ProjectMedia[];
}

interface FlagshipProjectProps {
  project: Project;
  onSelectProject: (project: Project) => void;
  onOpenMediaModal: (projectId: number, index: number) => void;
}

const FlagshipProject: React.FC<FlagshipProjectProps> = ({
  project,
  onSelectProject,
  onOpenMediaModal,
}) => {
  interface SubSlide {
    label: string;
    src: string;
  }

  interface HighlightMilestone {
    src: string;
    title: string;
    subtitle: string;
    tag: string;
    subSlides?: SubSlide[];
  }

  // 4 Curated Key Milestones for Thesis, Symposium, PDAO & NCDA
  const highlightImages: HighlightMilestone[] = [
    {
      src: '/images/symposium-presentation.jpg',
      title: 'Research Symposium Presentation',
      subtitle: 'Invention Showcase & Public Academic Research Defense',
      tag: 'Symposium',
    },
    {
      src: '/images/pdao-presentation 1.jpeg',
      title: 'PDAO Caloocan Presentation',
      subtitle: 'Persons with Disability Affairs Office Presentation & LOI Endorsement',
      tag: 'PDAO Caloocan',
      subSlides: [
        { label: 'Overview', src: '/images/pdao-presentation.jpg' },
        { label: 'Part 1', src: '/images/pdao-presentation 1.jpeg' },
      ],
    },
    {
      src: '/images/ncda-presentation 1.jpeg',
      title: 'NCDA Presentation (Parts 1–5)',
      subtitle: 'National Council on Disability Affairs Defense & Technical Review',
      tag: 'NCDA National',
      subSlides: [
        { label: 'Part 1', src: '/images/ncda-presentation 1.jpeg' },
        { label: 'Part 2', src: '/images/ncda-presentation 2.jpeg' },
        { label: 'Part 3', src: '/images/ncda-presentation 3.jpeg' },
        { label: 'Part 4', src: '/images/ncda-presentation 4.jpeg' },
        { label: 'Part 5', src: '/images/ncda-presentation 5.jpeg' },
      ],
    },
    {
      src: '/images/Visually Impaired Testing7.jpg',
      title: 'Actual Blind User Testing',
      subtitle: 'Real-World Usability, Obstacle Detection & Walking Trials with Visually Impaired Users',
      tag: 'User Trials',
      subSlides: [
        { label: 'Trial 7', src: '/images/Visually Impaired Testing7.jpg' },
        { label: 'Trial 8', src: '/images/Visually Impaired Testing8.jpg' },
        { label: 'Trial 9', src: '/images/Visually Impaired Testing9.jpg' },
        { label: 'Trial 10', src: '/images/Visually Impaired Testing10.jpg' },
        { label: 'Trial 13', src: '/images/Visually Impaired Testing13.jpg' },
      ],
    },
    {
      src: '/images/thesis-presentation.jpg',
      title: 'Bachelor Thesis Defense',
      subtitle: 'Official Degree Defense, Live Hardware Evaluation & Panel Review',
      tag: 'Thesis Defense',
    },
  ];

  // All image slides for the auto-animating hero showcase
  const imageSlides = project.media && project.media.length > 0 
    ? project.media.filter(m => m.type === 'image')
    : [{ type: 'image' as const, src: project.image, label: project.title }];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideDuration = 3800; // ms per slide
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-play animation when page/card is on standby
  useEffect(() => {
    if (isPaused || imageSlides.length <= 1) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageSlides.length);
    }, slideDuration);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, imageSlides.length, currentIndex]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % imageSlides.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + imageSlides.length) % imageSlides.length);
  };

  // Jump to slide matching a highlight image
  const handleSelectHighlight = (highlightSrc: string) => {
    const normalize = (path: string) => decodeURI(path).toLowerCase().replace(/\\/g, '/');
    const target = normalize(highlightSrc);
    const foundIdx = imageSlides.findIndex(slide => {
      const sSrc = normalize(slide.src);
      const sThumb = slide.thumbnail ? normalize(slide.thumbnail) : '';
      return sSrc === target || sThumb === target;
    });
    if (foundIdx >= 0) {
      setCurrentIndex(foundIdx);
    }
  };

  const currentSlide = imageSlides[currentIndex] || imageSlides[0];
  const hasVideo = Boolean(project.video || project.media?.some(m => m.type === 'video'));
  const videoIndex = project.media?.findIndex(m => m.type === 'video') ?? -1;

  return (
    <div className="mb-24">
      {/* 1. Flagship Header: Thesis & Symposium Official Honors */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#c29f74] to-[#a88154] text-slate-950 font-bold shadow-lg shadow-[#c29f74]/30">
            <FiAward size={24} />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-extrabold uppercase tracking-widest text-[#a88154] dark:text-[#dfbe95]">
                Independent Thesis & Research Symposium Project
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/25">
                🏆 DOST-TAPI GIA-Galing Candidate
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-white/60 mt-0.5">
              Presented to <strong>PDAO Caloocan City</strong> & <strong>National Council on Disability Affairs (NCDA)</strong>
            </p>
          </div>
        </div>

        {/* Media items counter badge */}
        <button
          type="button"
          onClick={() => onOpenMediaModal(project.id, 0)}
          className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-slate-900/90 dark:bg-white/10 hover:bg-[#c29f74] hover:text-slate-950 text-white border border-[#c29f74]/30 transition-all cursor-pointer backdrop-blur-md shadow-md"
        >
          <FiImage size={14} />
          <span>{project.media?.length || 18} Verified Project Items</span>
        </button>
      </div>

      {/* 2. Main Full-Viewport Hero Showcase Card (Desktop Full Screen View) */}
      <div 
        className="glass-effect rounded-3xl overflow-hidden border-2 border-[#c29f74]/40 hover:border-[#c29f74]/70 shadow-2xl shadow-[#c29f74]/20 transition-all duration-500 flex flex-col lg:flex-row items-stretch lg:min-h-[82vh] xl:min-h-[86vh]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left / Top: Interactive Auto-Animating Visual Showcase (Takes 55% of desktop) */}
        <div className="w-full lg:w-[55%] xl:w-[57%] relative bg-slate-950 overflow-hidden flex flex-col justify-between min-h-[380px] sm:min-h-[460px] lg:min-h-full">
          {/* Animated Slide Image Container */}
          <div className="relative w-full h-full flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={currentSlide.src}
                alt={currentSlide.label || project.title}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="absolute inset-0 w-full h-full object-cover object-center"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/portfolio-video-thumbnail.png';
                }}
              />
            </AnimatePresence>

            {/* Minimal edge gradient so images remain 100% visible & vibrant */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/25 pointer-events-none"></div>

            {/* Top Bar inside Media Viewer */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#b88755] text-white shadow-lg backdrop-blur-md">
                  {project.category}
                </span>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-black/60 text-white/90 backdrop-blur-md border border-white/10">
                  Slide {currentIndex + 1} of {imageSlides.length}
                </span>
              </div>

              {/* Auto-Slide Indicator Pill */}
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-black/75 text-white/90 backdrop-blur-md border border-white/15">
                <span className={`w-2 h-2 rounded-full ${isPaused ? 'bg-amber-400' : 'bg-emerald-400 animate-pulse'}`}></span>
                <span>{isPaused ? 'Paused on hover' : 'Auto-animating on standby'}</span>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-[#c29f74] hover:text-slate-950 text-white backdrop-blur-md border border-white/15 flex items-center justify-center transition-all cursor-pointer shadow-lg"
              aria-label="Previous Slide"
            >
              <FiChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-[#c29f74] hover:text-slate-950 text-white backdrop-blur-md border border-white/15 flex items-center justify-center transition-all cursor-pointer shadow-lg"
              aria-label="Next Slide"
            >
              <FiChevronRight size={22} />
            </button>

            {/* Transparent Video Play Button Overlay to see background image */}
            {hasVideo && (
              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={() => onOpenMediaModal(project.id, videoIndex >= 0 ? videoIndex : 0)}
                  className="pointer-events-auto group/play flex items-center gap-3 px-4 py-2 rounded-full bg-transparent hover:bg-black/30 text-white backdrop-blur-[1.5px] border border-white/40 hover:border-[#c29f74] transition-all shadow-xl cursor-pointer"
                  title="Watch Working Video Demonstration"
                >
                  <div className="w-9 h-9 rounded-full bg-black/25 group-hover/play:bg-[#c29f74] text-white group-hover/play:text-slate-950 flex items-center justify-center border border-white/50 group-hover/play:border-[#c29f74] shadow-md group-hover/play:scale-110 transition-all">
                    <FiPlay size={16} className="ml-0.5 fill-current" />
                  </div>
                  <div className="text-left pr-1">
                    <div className="text-xs font-bold leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Watch Video Demo</div>
                    <div className="text-[10px] text-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">Hardware & Sensor Proof</div>
                  </div>
                </motion.button>
              </div>
            )}

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-4 left-4 right-4 z-20 flex items-end justify-between gap-4 pointer-events-none">
              <div className="bg-black/80 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15 max-w-[80%]">
                <p className="text-[10px] text-[#dfbe95] uppercase tracking-wider font-bold">Image View</p>
                <p className="text-sm font-bold text-white truncate">
                  {currentSlide.label || `Hardware Showcase ${currentIndex + 1}`}
                </p>
              </div>

              {/* View all gallery button */}
              <button
                type="button"
                onClick={() => onOpenMediaModal(project.id, currentIndex)}
                className="pointer-events-auto px-3.5 py-2 rounded-xl text-xs font-semibold bg-white/15 hover:bg-white/30 text-white backdrop-blur-md transition-colors cursor-pointer border border-white/20 flex items-center gap-1.5"
                title="Expand Full Gallery"
              >
                <span>Full View</span>
                <FiArrowRight size={13} />
              </button>
            </div>
          </div>

          {/* Standby Progress Bar & Dot Scrubbers */}
          <div className="relative w-full bg-slate-950/95 border-t border-white/10 p-3 z-20">
            {/* Auto-Slide Progress Bar */}
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-2.5">
              {!isPaused && (
                <motion.div
                  key={currentIndex}
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: slideDuration / 1000, ease: 'linear' }}
                  className="h-full bg-gradient-to-r from-[#c29f74] to-[#dfbe95]"
                />
              )}
            </div>

            {/* Thumbnail Scrubbing Dots */}
            <div className="flex items-center justify-center gap-1.5 overflow-x-auto py-0.5 scrollbar-none">
              {imageSlides.map((slide, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx 
                      ? 'w-7 bg-gradient-to-r from-[#c29f74] to-[#dfbe95]' 
                      : 'w-2 bg-white/25 hover:bg-white/50'
                  }`}
                  title={slide.label || `Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right / Bottom: Detailed Engineering Narrative & Invention Specs (Takes 45% of desktop) */}
        <div className="w-full lg:w-[45%] xl:w-[43%] p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-gradient-to-b from-transparent to-slate-950/20">
          <div>
            {/* Patent / Invention Eyebrow */}
            <div className="mb-2">
              <span className="text-[11px] uppercase tracking-widest font-black text-[#c29f74] dark:text-[#dfbe95] flex items-center gap-1.5">
                <FiCpu size={14} />
                Title of the Invention
              </span>
              <p className="text-xs italic text-slate-600 dark:text-white/70 font-medium mt-0.5">
                "A Wearable Obstacle Detection and Voice-Guided Navigation Headband for Visually Impaired Individuals"
              </p>
            </div>

            {/* Big Project Title */}
            <h3 
              onClick={() => onSelectProject(project)}
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2.5 hover:text-[#a88154] dark:hover:text-[#dfbe95] transition-colors cursor-pointer"
            >
              {project.title}
            </h3>

            {/* Summary Narrative */}
            <p className="text-xs sm:text-sm text-slate-700 dark:text-white/80 leading-relaxed mb-5">
              Independently conceptualized, designed, built, and defended. Powered by an <strong>ESP32 Microcontroller</strong>, embedded C++, 4-axis ultrasonic transducers, localized haptic vibration motors, and real-time voice guidance to detect head-height, side, and ground hazards up to <strong>200 cm</strong>.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-2 gap-2.5 mb-5">
              <div className="p-3 rounded-xl bg-slate-50/70 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white mb-1">
                  <FiCpu className="text-[#c29f74]" size={14} />
                  <span>4x Sensor Array</span>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-white/60 leading-tight">
                  Front, left, right, and downward drop-off detection with 200cm range.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50/70 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white mb-1">
                  <FiLayers className="text-[#c29f74]" size={14} />
                  <span>Dual Multi-Sensory</span>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-white/60 leading-tight">
                  Directional haptic motors + localized PWM passive buzzers.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50/70 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white mb-1">
                  <FiVolume2 className="text-[#c29f74]" size={14} />
                  <span>Dynamic Decision Matrix</span>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-white/60 leading-tight">
                  Critical Danger alarm at &lt;60cm; proportional tracking at 60–200cm.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50/70 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white mb-1">
                  <FiCompass className="text-[#c29f74]" size={14} />
                  <span>Voice & AI Navigation</span>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-white/60 leading-tight">
                  DAC audio announcements + destination queries & turn-by-turn guidance.
                </p>
              </div>
            </div>

            {/* Core Technologies */}
            <div className="mb-5">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-white/40 mb-2">
                Embedded & IoT Stack
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['ESP32', 'Embedded C++', 'Ultrasonic Sensors', 'Haptic Drivers', 'I2C DAC Audio', 'GPS Telemetry', 'Arduino IDE', 'Android Studio'].map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-medium px-2 py-0.5 rounded-lg bg-[#c29f74]/10 text-[#a88154] dark:text-[#dfbe95] border border-[#c29f74]/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Area */}
          <div className="pt-5 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
            <motion.button
              type="button"
              onClick={() => onSelectProject(project)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-bold bg-gradient-to-r from-[#b88755] to-[#a88154] hover:from-[#a88154] hover:to-[#967045] text-white shadow-xl shadow-[#c29f74]/25 transition-all cursor-pointer"
            >
              <FiInfo size={17} />
              <span>Full Patent & Thesis Case Study</span>
              <FiArrowRight size={15} />
            </motion.button>

            {/* Direct Project Links */}
            <div className="flex items-center gap-2.5">
              {project.github && project.github !== '#' && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-xl text-slate-700 dark:text-white/80 hover:text-white hover:bg-slate-800 dark:hover:bg-white/10 transition-colors border border-slate-300 dark:border-white/10"
                  title="View Source on GitHub"
                >
                  <FiGithub size={19} />
                </motion.a>
              )}

              {project.facebook && (
                <motion.a
                  href={project.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-xl text-blue-500 hover:text-blue-400 hover:bg-blue-500/10 transition-colors border border-blue-500/20"
                  title="Official Department Defense Feature on Facebook"
                >
                  <FaFacebook size={19} />
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 3. The 5 Highlight Showcase Images Section */}
      <div className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#a88154] dark:text-[#dfbe95]">
              Key Research & User Testing Milestones
            </span>
            <span className="text-xs text-slate-400 dark:text-white/40">• Click any milestone to view</span>
          </div>
          <span className="text-xs text-slate-500 dark:text-white/50 hidden sm:inline">
            Symposium • PDAO Caloocan • NCDA • User Testing • Thesis Defense
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {highlightImages.map((highlight, hIdx) => (
            <motion.div
              key={highlight.title}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleSelectHighlight(highlight.src)}
              className="glass-effect rounded-2xl overflow-hidden border border-white/10 hover:border-[#c29f74]/50 hover:shadow-xl hover:shadow-[#c29f74]/15 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={highlight.src}
                  alt={highlight.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/portfolio-video-thumbnail.png';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-50 transition-opacity"></div>
                
                {/* Highlight Tag */}
                <div className="absolute top-2.5 left-2.5">
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#b88755]/90 text-white shadow-md backdrop-blur-md">
                    {highlight.tag}
                  </span>
                </div>

                <div className="absolute bottom-2 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-[11px] font-semibold text-[#dfbe95] bg-black/70 px-2 py-0.5 rounded-md backdrop-blur-md">
                  <span>Display</span>
                  <FiArrowRight size={11} />
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#a88154] dark:group-hover:text-[#dfbe95] transition-colors line-clamp-1 mb-1">
                    {highlight.title}
                  </h4>
                  <p className="text-[11px] text-slate-600 dark:text-white/70 line-clamp-2 leading-relaxed">
                    {highlight.subtitle}
                  </p>
                  {highlight.subSlides && (
                    <div className="flex items-center gap-1.5 mt-2.5 pt-2 border-t border-slate-200/60 dark:border-white/10" onClick={(e) => e.stopPropagation()}>
                      <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-white/40">
                        {highlight.subSlides.length > 2 ? 'Parts:' : 'Views:'}
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {highlight.subSlides.map((sub) => {
                          const isActive = decodeURI(currentSlide.src).toLowerCase() === decodeURI(sub.src).toLowerCase();
                          return (
                            <button
                              key={sub.src}
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSelectHighlight(sub.src);
                              }}
                              className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all cursor-pointer ${
                                isActive
                                  ? 'bg-[#c29f74] text-slate-950 shadow-sm'
                                  : 'bg-slate-200/80 dark:bg-white/10 hover:bg-[#c29f74]/30 text-slate-700 dark:text-white/80'
                              }`}
                            >
                              {sub.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
                <div className="mt-3 pt-2.5 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-[11px] text-slate-400 dark:text-white/40">
                  <span>Milestone 0{hIdx + 1}</span>
                  <span className="group-hover:text-[#c29f74] transition-colors font-medium">Click to Load →</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlagshipProject;
