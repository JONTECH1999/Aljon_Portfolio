import React, { useState, useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  FiChevronDown,
  FiGithub,
  FiLinkedin,
  FiFacebook,
  FiInstagram,
  FiArrowRight,
  FiMail,
  FiPlay,
} from 'react-icons/fi';
import { SiLaravel, SiEspressif } from 'react-icons/si';

const ROLES = [
  'Full-Stack & Embedded Developer',
  'Laravel & React Specialist',
  'IoT & ESP32 Firmware Engineer',
  'AI-Accelerated Software Builder',
];

const TECH_PILLS = [
  { label: 'Laravel', color: '#FF2D20' },
  { label: 'React', color: '#61DAFB' },
  { label: 'ESP32', color: '#E7352C' },
  { label: 'TypeScript', color: '#3178C6' },
  { label: 'PHP', color: '#777BB4' },
  { label: 'C/C++', color: '#00599C' },
  { label: 'MySQL', color: '#4479A1' },
  { label: 'GitHub Copilot', color: '#8a63d2' },
];

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Smooth multi-role typewriter cycle
  useEffect(() => {
    const currentRole = ROLES[roleIndex];

    if (!isDeleting && subIndex === currentRole.length) {
      const pauseTimeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(pauseTimeout);
    }

    if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
      return;
    }

    const typeTimeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 30 : 65);

    return () => clearTimeout(typeTimeout);
  }, [subIndex, isDeleting, roleIndex]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 md:px-8 overflow-hidden"
    >
      {/* Dynamic Ambient Background Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#c29f74]/15 rounded-full blur-3xl pointer-events-none -z-10"
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 sm:w-96 h-80 sm:h-96 bg-[#dfbe95]/15 rounded-full blur-3xl pointer-events-none -z-10"
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#c29f74]/5 via-transparent to-transparent rounded-full blur-2xl pointer-events-none -z-10"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl mx-auto relative z-10"
      >
        {/* Live Availability Status Beacon */}
        <motion.div variants={itemVariants} className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#c29f74]/15 border border-[#c29f74]/35 shadow-sm backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-xs font-bold text-[#8c673d] dark:text-[#dfbe95] tracking-wide">
              Available for Immediate Start • Remote / Hybrid (Metro Manila)
            </span>
          </div>
        </motion.div>

        {/* Futuristic Living Avatar with Floating Satellites */}
        <motion.div
          variants={itemVariants}
          className="relative mb-8 w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 mx-auto"
        >
          {/* Animated Halo Glow Ring */}
          <motion.div
            className="absolute -inset-2.5 rounded-3xl bg-gradient-to-tr from-[#c29f74] via-[#dfbe95] to-[#a88154] opacity-40 blur-lg"
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          />

          {/* Avatar Card */}
          <div className="relative w-full h-full rounded-2xl border-2 border-[#c29f74]/50 glass-effect p-2 shadow-2xl overflow-hidden group">
            <img
              src="/images/profile.jpg"
              alt="Aljon Alonzo"
              className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'https://ui-avatars.com/api/?name=Aljon&background=c29f74&color=fff';
              }}
            />
          </div>

          {/* Left Floating Satellite: Full-Stack Badge */}
          <motion.div
            animate={{ y: [-5, 5, -5], rotate: [-1, 2, -1] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="hidden sm:flex absolute -left-16 sm:-left-20 top-4 items-center gap-2 px-3 py-1.5 rounded-2xl glass-effect border border-black/10 dark:border-white/15 shadow-xl backdrop-blur-md"
          >
            <div className="w-7 h-7 rounded-lg bg-[#FF2D20]/15 flex items-center justify-center text-[#FF2D20] shadow-inner">
              <SiLaravel size={15} />
            </div>
            <div className="text-left text-[11px] leading-tight">
              <span className="font-bold text-slate-900 dark:text-white block">Full-Stack Web</span>
              <span className="text-slate-500 dark:text-white/60 text-[10px]">Laravel & React</span>
            </div>
          </motion.div>

          {/* Right Floating Satellite: Embedded IoT Badge */}
          <motion.div
            animate={{ y: [5, -5, 5], rotate: [1, -2, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
            className="hidden sm:flex absolute -right-16 sm:-right-20 top-8 items-center gap-2 px-3 py-1.5 rounded-2xl glass-effect border border-black/10 dark:border-white/15 shadow-xl backdrop-blur-md"
          >
            <div className="w-7 h-7 rounded-lg bg-[#E7352C]/15 flex items-center justify-center text-[#E7352C] shadow-inner">
              <SiEspressif size={15} />
            </div>
            <div className="text-left text-[11px] leading-tight">
              <span className="font-bold text-slate-900 dark:text-white block">Embedded IoT</span>
              <span className="text-slate-500 dark:text-white/60 text-[10px]">ESP32 & C/C++</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Main Heading */}
        <motion.div variants={itemVariants} className="mb-3">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
            <span className="text-slate-900 dark:text-white">Hi, I'm </span>
            <span className="gradient-text drop-shadow-sm">Aljon</span>
          </h1>
        </motion.div>

        {/* Dynamic Multi-Role Typewriter Headline */}
        <motion.div variants={itemVariants} className="mb-6 h-12 sm:h-14 flex items-center justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#a88154] dark:text-[#dfbe95] font-bold tracking-tight">
            <span>{ROLES[roleIndex].substring(0, subIndex)}</span>
            <span className="inline-block w-0.5 h-6 sm:h-8 bg-[#c29f74] ml-1.5 animate-pulse align-middle" />
          </h2>
        </motion.div>

        {/* Accurate Descriptive Bio */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-white/75 mb-8 max-w-3xl mx-auto leading-relaxed font-normal"
        >
          Computer Science graduate and Full-Stack & Embedded Software Developer building web applications, IoT systems, and AI-assisted workflows. I specialize in Laravel, React, PHP, C/C++, ESP32, REST APIs, and hardware-software integration with a strong focus on clean architecture and technical documentation.
        </motion.p>

        {/* Interactive CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-3.5 justify-center items-center mb-8"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center gap-2 shadow-lg shadow-[#c29f74]/25 text-sm sm:text-base px-6 py-3"
          >
            <span>View My Projects</span>
            <FiArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary inline-flex items-center gap-2 text-sm sm:text-base px-6 py-3"
          >
            <FiMail size={17} />
            <span>Get In Touch</span>
          </motion.a>

          <motion.a
            href="https://drive.google.com/drive/folders/1Ga65VCl8V-m3EKraqQ-sxeIr1F_BSlIs?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-3 rounded-xl glass-effect text-xs sm:text-sm font-semibold text-slate-700 dark:text-white/80 hover:text-[#a88154] dark:hover:text-[#dfbe95] border border-black/10 dark:border-white/10 hover:border-[#c29f74]/50 transition-all inline-flex items-center gap-2 shadow-sm"
          >
            <FiPlay size={14} className="text-[#c29f74]" />
            <span>Watch Demo Videos</span>
          </motion.a>
        </motion.div>

        {/* Live Tech Stack Ribbon Pills */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center items-center gap-2 sm:gap-2.5 max-w-2xl mx-auto mb-10"
        >
          {TECH_PILLS.map((tech) => (
            <span
              key={tech.label}
              className="px-3 py-1 rounded-full text-xs font-medium bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.07] dark:border-white/[0.08] text-slate-600 dark:text-white/75 hover:border-[#c29f74]/50 transition-colors cursor-default select-none shadow-sm"
            >
              <span
                className="inline-block w-1.5 h-1.5 rounded-full mr-1.5 align-middle"
                style={{ backgroundColor: tech.color }}
              />
              {tech.label}
            </span>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-4 mb-10"
        >
          <motion.a
            href="https://github.com/JONTECH1999"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-xl glass-effect hover:bg-white/20 transition-all text-slate-700 dark:text-white/80 hover:text-[#a88154] dark:hover:text-[#dfbe95] border border-black/[0.06] dark:border-white/10"
            aria-label="GitHub Profile"
          >
            <FiGithub size={20} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/aljon-alonzo-ba3bb4339/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-xl glass-effect hover:bg-white/20 transition-all text-slate-700 dark:text-white/80 hover:text-[#a88154] dark:hover:text-[#dfbe95] border border-black/[0.06] dark:border-white/10"
            aria-label="LinkedIn Profile"
          >
            <FiLinkedin size={20} />
          </motion.a>
          <motion.a
            href="https://web.facebook.com/aljon11onsi"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-xl glass-effect hover:bg-white/20 transition-all text-slate-700 dark:text-white/80 hover:text-[#a88154] dark:hover:text-[#dfbe95] border border-black/[0.06] dark:border-white/10"
            aria-label="Facebook Profile"
          >
            <FiFacebook size={20} />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/aljon_alonzo/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-xl glass-effect hover:bg-white/20 transition-all text-slate-700 dark:text-white/80 hover:text-[#a88154] dark:hover:text-[#dfbe95] border border-black/[0.06] dark:border-white/10"
            aria-label="Instagram Profile"
          >
            <FiInstagram size={20} />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex justify-center"
        >
          <a
            href="#about"
            className="text-slate-400 dark:text-white/40 hover:text-[#c29f74] dark:hover:text-[#dfbe95] transition-colors p-2"
            aria-label="Scroll to About Me"
          >
            <FiChevronDown size={28} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
