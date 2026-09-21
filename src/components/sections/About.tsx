import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiX,
  FiArrowRight,
  FiCheckCircle,
  FiLayers,
  FiInfo,
} from 'react-icons/fi';
import {
  SiLaravel,
  SiPhp,
  SiReact,
  SiInertia,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiPostman,
  SiEspressif,
  SiStmicroelectronics,
  SiArduino,
  SiCplusplus,
  SiVisualstudiocode,
  SiNetlify,
} from 'react-icons/si';
import { VscCopilot } from 'react-icons/vsc';
import { TbApi } from 'react-icons/tb';
import { useTheme } from '../../context/ThemeContext';

type TechCategory = 'all' | 'backend' | 'frontend' | 'iot' | 'database' | 'devops';

interface CategoryFilter {
  id: TechCategory;
  label: string;
}

const CATEGORIES: CategoryFilter[] = [
  { id: 'all', label: 'All Stack' },
  { id: 'backend', label: 'Backend & APIs' },
  { id: 'frontend', label: 'Frontend & UI' },
  { id: 'iot', label: 'Embedded & IoT' },
  { id: 'database', label: 'Databases' },
  { id: 'devops', label: 'DevOps & AI' },
];

export interface TechStackItem {
  name: string;
  category: TechCategory;
  categoryName: string;
  role: string;
  icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
  brandColor: string;
  core?: boolean;
  usedIn: {
    projectTitle: string;
    sectionLink: string;
    summary: string;
    highlights: string[];
  };
}

export const TECH_STACK_ITEMS: TechStackItem[] = [
  // Backend & APIs
  {
    name: 'Laravel',
    category: 'backend',
    categoryName: 'Backend & APIs',
    role: 'Primary PHP MVC Framework',
    icon: SiLaravel,
    brandColor: '#FF2D20',
    core: true,
    usedIn: {
      projectTitle: 'ALMKA Water Utility Billing Platform & APIs',
      sectionLink: '#projects',
      summary: 'Used as the primary backend MVC framework for building the production ALMKA Water Billing management portal and high-efficiency API services.',
      highlights: [
        'Engineered automated billing calculations and meter reading workflows',
        'Integrated SMS gateway triggers for automated customer notifications',
        'Configured secure Eloquent ORM relational queries with MySQL',
        'Implemented role-based authentication and route middleware',
      ],
    },
  },
  {
    name: 'PHP',
    category: 'backend',
    categoryName: 'Backend & APIs',
    role: 'Server-Side Language & OOP',
    icon: SiPhp,
    brandColor: '#777BB4',
    core: true,
    usedIn: {
      projectTitle: 'Certicode Backend Internship & Utility Web Apps',
      sectionLink: '#experience',
      summary: 'Primary server-side language utilized during the remote internship at Certicode Inc. to engineer RESTful endpoints and business logic.',
      highlights: [
        'Built and maintained server-side features within an Agile sprint workflow',
        'Designed secure data-processing pipelines and CRUD endpoints',
        'Leveraged OOP design patterns and clean error-handling practices',
        'Worked with relational database connectors and automated unit tests',
      ],
    },
  },
  {
    name: 'Node.js',
    category: 'backend',
    categoryName: 'Backend & APIs',
    role: 'Backend JavaScript Runtime',
    icon: SiNodedotjs,
    brandColor: '#5FA04E',
    usedIn: {
      projectTitle: 'Backend Microservices & Full-Stack Tooling',
      sectionLink: '#projects',
      summary: 'Employed for asynchronous server-side scripts, lightweight RESTful microservices, and JavaScript runtime operations.',
      highlights: [
        'Implemented asynchronous event loops and REST API services',
        'Utilized npm packages and build pipeline tools across web projects',
        'Built backend utility scripts for automated file and data processing',
      ],
    },
  },
  {
    name: 'REST APIs',
    category: 'backend',
    categoryName: 'Backend & APIs',
    role: 'Architecture & Secure Endpoints',
    icon: TbApi,
    brandColor: '#c29f74',
    core: true,
    usedIn: {
      projectTitle: 'Certicode APIs & IoT Telemetry Endpoints',
      sectionLink: '#experience',
      summary: 'Designed standardized HTTP/JSON interfaces connecting frontend dashboards, mobile apps, and embedded IoT hardware modules.',
      highlights: [
        'Created secure endpoints with JWT/Token-based authentication',
        'Connected ESP32 hardware telemetry feeds to web monitoring dashboards',
        'Optimized response payloads and HTTP status code standards',
        'Tested and validated all endpoint contracts using Postman',
      ],
    },
  },

  // Frontend & UI
  {
    name: 'React',
    category: 'frontend',
    categoryName: 'Frontend & UI',
    role: 'Component UI Library & Hooks',
    icon: SiReact,
    brandColor: '#61DAFB',
    core: true,
    usedIn: {
      projectTitle: 'Portfolio Website & ALMKA Blind Web App',
      sectionLink: '#projects',
      summary: 'Primary frontend library used to build this modern portfolio and the real-time ALMKA assistive web dashboard.',
      highlights: [
        'Developed modern component hierarchies with React 19 and Hooks',
        'Created interactive Framer Motion animations and theme toggles',
        'Connected live camera feeds and GPS tracking telemetry in ALMKA',
        'Designed responsive UI states and modals for seamless user experience',
      ],
    },
  },
  {
    name: 'TypeScript',
    category: 'frontend',
    categoryName: 'Frontend & UI',
    role: 'Type-Safe Architecture',
    icon: SiTypescript,
    brandColor: '#3178C6',
    core: true,
    usedIn: {
      projectTitle: 'Portfolio Architecture & Type-Safe Applications',
      sectionLink: '#about',
      summary: 'Used across this portfolio application to provide compile-time type safety, strict interface contracts, and bug-free code.',
      highlights: [
        'Defined type contracts for AI chat messages, project media, and tech items',
        'Prevented runtime bugs with strict null-checking and compiler rules',
        'Streamlined developer experience with IDE autocomplete and IntelliSense',
      ],
    },
  },
  {
    name: 'JavaScript',
    category: 'frontend',
    categoryName: 'Frontend & UI',
    role: 'Modern ES6+ Web Logic',
    icon: SiJavascript,
    brandColor: '#F7DF1E',
    usedIn: {
      projectTitle: 'Interactive Client-Side Web Applications',
      sectionLink: '#experience',
      summary: 'Core web programming language used across frontend user interfaces, dynamic DOM mutations, and backend scripts.',
      highlights: [
        'Engineered modern ES6+ asynchronous logic with async/await and promises',
        'Built dynamic client-side filtering, form validation, and event handling',
        'Maintained frontend features during the Certicode remote internship',
      ],
    },
  },
  {
    name: 'Inertia.js',
    category: 'frontend',
    categoryName: 'Frontend & UI',
    role: 'Monolith-to-SPA Bridge',
    icon: SiInertia,
    brandColor: '#9553E9',
    usedIn: {
      projectTitle: 'Full-Stack Monolith-to-SPA Web Portals',
      sectionLink: '#projects',
      summary: 'Used as the modern connector between Laravel server-side controllers and React client-side components without complex API layers.',
      highlights: [
        'Eliminated boilerplate REST API routes while preserving single-page app speed',
        'Handled seamless server-driven routing and form submissions',
        'Shared authentication and session state effortlessly across frontend/backend',
      ],
    },
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    categoryName: 'Frontend & UI',
    role: 'Utility-First Styling Engine',
    icon: SiTailwindcss,
    brandColor: '#06B6D4',
    usedIn: {
      projectTitle: 'Portfolio Website Design & Custom Theme System',
      sectionLink: '#about',
      summary: 'Utility-first CSS framework utilized to build the bespoke aesthetic of this portfolio, featuring champagne gold gradients and dark/light modes.',
      highlights: [
        'Engineered custom glassmorphic backdrop-filter effects',
        'Designed high-contrast responsive layouts for mobile, tablet, and PC',
        'Configured customized gold/bronze color palettes (#c29f74, #dfbe95)',
      ],
    },
  },

  // Embedded & IoT
  {
    name: 'ESP32',
    category: 'iot',
    categoryName: 'Embedded & IoT',
    role: 'Wi-Fi / BLE Dual-Core SoC',
    icon: SiEspressif,
    brandColor: '#E7352C',
    core: true,
    usedIn: {
      projectTitle: 'Blind Assistive Head Tech (BAHT) Thesis & ALMKA IoT',
      sectionLink: '#projects',
      summary: 'Dual-core Wi-Fi/Bluetooth SoC that powers Aljon’s flagship BSCS thesis project (BAHT Smart Helmet) and live camera telemetry.',
      highlights: [
        'Coordinated 4 ultrasonic distance sensors with non-blocking polling',
        'Implemented Exponential Moving Average (EMA) obstacle signal filtering',
        'Controlled dual vibration haptic feedback motors and sound alerts',
        'Integrated GPS tracking module and streamed camera feeds via ESP32-CAM',
      ],
    },
  },
  {
    name: 'STM32',
    category: 'iot',
    categoryName: 'Embedded & IoT',
    role: '32-Bit ARM Cortex Hardware',
    icon: SiStmicroelectronics,
    brandColor: '#03234B',
    usedIn: {
      projectTitle: 'Automated Rain Detection Cargo Cover',
      sectionLink: '#projects',
      summary: '32-bit ARM Cortex microcontroller programmed to drive an automated weather-protection shelter for cargo delivery trucks.',
      highlights: [
        'Programmed C/C++ firmware with a finite state-machine architecture',
        'Processed real-time moisture signals from external rain sensors',
        'Controlled stepper motor drivers for smooth automatic cover sliding',
        'Triggered audio buzzer and visual alert status indicators',
      ],
    },
  },
  {
    name: 'Arduino',
    category: 'iot',
    categoryName: 'Embedded & IoT',
    role: 'Rapid Prototyping Platform',
    icon: SiArduino,
    brandColor: '#00979D',
    usedIn: {
      projectTitle: 'Hardware Prototyping & Sensor Integration',
      sectionLink: '#projects',
      summary: 'Prototyping platform used for early-stage sensor testing, pinout validation, and rapid circuit troubleshooting.',
      highlights: [
        'Bench-tested ultrasonic distance sensors, buzzers, and vibration motors',
        'Calibrated analog and digital sensor thresholds before PCB deployment',
        'Built rapid hardware proofs-of-concept for thesis evaluation',
      ],
    },
  },
  {
    name: 'C/C++',
    category: 'iot',
    categoryName: 'Embedded & IoT',
    role: 'Embedded Firmware & Drivers',
    icon: SiCplusplus,
    brandColor: '#00599C',
    core: true,
    usedIn: {
      projectTitle: 'Embedded Firmware for BAHT Helmet & Cargo Cover',
      sectionLink: '#projects',
      summary: 'Low-level programming language used to develop bare-metal and RTOS firmware for microcontrollers with strict latency requirements.',
      highlights: [
        'Wrote non-blocking timing loops without delay() for instant response',
        'Implemented mathematical EMA filtering algorithms on sensor streams',
        'Optimized memory usage and flash storage on resource-constrained chips',
        'Engineered hardware communication over UART, SPI, and I2C protocols',
      ],
    },
  },

  // Databases
  {
    name: 'MySQL',
    category: 'database',
    categoryName: 'Databases',
    role: 'Relational Schemas & Queries',
    icon: SiMysql,
    brandColor: '#4479A1',
    core: true,
    usedIn: {
      projectTitle: 'Certicode Internship & Water Billing Database',
      sectionLink: '#experience',
      summary: 'Primary relational database management system used to architect data schemas, store accounts, and manage transaction records.',
      highlights: [
        'Designed normalized relational schemas with foreign key constraints',
        'Optimized complex SQL queries, JOINs, and database indexing',
        'Managed CRUD transactions in Agile development sprints at Certicode',
        'Maintained customer account records and automated billing histories',
      ],
    },
  },
  {
    name: 'PostgreSQL',
    category: 'database',
    categoryName: 'Databases',
    role: 'ACID-Compliant Relational DB',
    icon: SiPostgresql,
    brandColor: '#4169E1',
    usedIn: {
      projectTitle: 'Enterprise Relational Database Architectures',
      sectionLink: '#projects',
      summary: 'Relational database engine leveraged for robust ACID transactions, complex schema relationships, and advanced data types.',
      highlights: [
        'Engineered transactional safety with strict foreign keys and constraints',
        'Practiced advanced SQL aggregation and analytical querying',
        'Designed scalable schemas for data-intensive web applications',
      ],
    },
  },

  // DevOps & AI
  {
    name: 'GitHub Copilot',
    category: 'devops',
    categoryName: 'DevOps & AI',
    role: 'AI Pair Programming & Prompts',
    icon: VscCopilot,
    brandColor: '#8a63d2',
    core: true,
    usedIn: {
      projectTitle: 'Certicode Backend Internship & AI Workflow',
      sectionLink: '#experience',
      summary: 'AI pair-programmer utilized inside VS Code to accelerate backend development, refactor algorithms, and reduce unit test cycle times.',
      highlights: [
        'Streamlined repetitive boilerplate code generation in PHP and JavaScript',
        'Accelerated root-cause analysis and bug diagnosis in Agile sprints',
        'Drafted unit test cases and edge-case validation scenarios',
        'Applied prompt engineering techniques to ensure clean code standards',
      ],
    },
  },
  {
    name: 'Git',
    category: 'devops',
    categoryName: 'DevOps & AI',
    role: 'Branching & Version Control',
    icon: SiGit,
    brandColor: '#F05032',
    usedIn: {
      projectTitle: 'Certicode Team Workflow & GitHub Repositories',
      sectionLink: '#experience',
      summary: 'Industry-standard version control system used to track code changes, coordinate pull requests, and collaborate with teams.',
      highlights: [
        'Managed feature branches, code reviews, and Git commit histories',
        'Resolved complex merge conflicts in multi-developer Agile teams',
        'Maintained open-source project repositories at github.com/JONTECH1999',
      ],
    },
  },
  {
    name: 'Docker',
    category: 'devops',
    categoryName: 'DevOps & AI',
    role: 'Containerized Environments',
    icon: SiDocker,
    brandColor: '#2496ED',
    usedIn: {
      projectTitle: 'Containerized Development Environments',
      sectionLink: '#projects',
      summary: 'Containerization tool used to create reproducible local development stacks for PHP, MySQL, and Node.js without environment drift.',
      highlights: [
        'Configured multi-container development stacks using Docker Compose',
        'Isolated database and web server dependencies for consistent testing',
        'Ensured seamless portability between local workstations and deployment',
      ],
    },
  },
  {
    name: 'Postman',
    category: 'devops',
    categoryName: 'DevOps & AI',
    role: 'API Testing & Documentation',
    icon: SiPostman,
    brandColor: '#FF6C37',
    usedIn: {
      projectTitle: 'Certicode API Testing & Endpoint Documentation',
      sectionLink: '#experience',
      summary: 'API platform used during backend internship to test REST endpoints, inspect payload headers, and verify server responses.',
      highlights: [
        'Created organized API collection workspaces for team collaboration',
        'Validated HTTP status codes, error payloads, and authentication tokens',
        'Authored technical API specifications for frontend team integration',
      ],
    },
  },
  {
    name: 'VS Code',
    category: 'devops',
    categoryName: 'DevOps & AI',
    role: 'Primary Development Environment',
    icon: SiVisualstudiocode,
    brandColor: '#007ACC',
    usedIn: {
      projectTitle: 'Primary Daily Driver Development Environment',
      sectionLink: '#about',
      summary: 'Core code editor customized with AI extensions, language servers, Git integrations, and embedded development tools.',
      highlights: [
        'Integrated GitHub Copilot, PHP Intelephense, and Tailwind CSS tools',
        'Configured PlatformIO and C/C++ extensions for microcontroller flashing',
        'Utilized integrated terminal and debugger for rapid local development',
      ],
    },
  },
  {
    name: 'Netlify',
    category: 'devops',
    categoryName: 'DevOps & AI',
    role: 'Automated CI/CD Web Hosting',
    icon: SiNetlify,
    brandColor: '#00C7B7',
    usedIn: {
      projectTitle: 'Live Portfolio Deployment & Continuous Integration',
      sectionLink: '#about',
      summary: 'Modern cloud edge platform hosting this live portfolio with automated Git deployment pipelines and SSL encryption.',
      highlights: [
        'Configured automated push-to-deploy CI/CD build pipelines from GitHub',
        'Leveraged global edge CDN caching for ultra-fast worldwide load times',
        'Managed environment variables and custom domain routing',
      ],
    },
  },
];

const About: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [activeCategory, setActiveCategory] = useState<TechCategory>('all');
  const [selectedTech, setSelectedTech] = useState<TechStackItem | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedTech(null);
    };
    if (selectedTech) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedTech]);

  const filteredItems =
    activeCategory === 'all'
      ? TECH_STACK_ITEMS
      : TECH_STACK_ITEMS.filter((item) => item.category === activeCategory);

  const stats = [
    { value: '5+', label: 'Projects Completed' },
    { value: '2+', label: 'Years Experience' },
    { value: '12+', label: 'Tech Skills' },
    { value: '100%', label: 'Dedication' },
  ];

  const handleNavigateToProject = (link: string) => {
    setSelectedTech(null);
    setTimeout(() => {
      const target = document.querySelector(link);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <section
      id="about"
      className="relative py-12 lg:py-16 px-4 sm:px-6 md:px-8 max-w-[1440px] mx-auto min-h-screen flex flex-col justify-center"
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#c29f74]/8 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Single-Screen Desktop Layout (Side-by-Side on PC / Stacked on Mobile) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-stretch">
        {/* Left Column: About Me Bio & Key Metrics */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div>
            {/* Section Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c29f74]/15 border border-[#c29f74]/30 text-[#8c673d] dark:text-[#dfbe95] text-xs font-semibold uppercase tracking-wider mb-2">
                <span>Aljon Alonzo</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                About Me
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#c29f74] to-[#dfbe95] rounded-full mt-2"></div>
            </div>

            {/* Bio Paragraphs (Optimized for One-Page Desktop Viewing) */}
            <div className="space-y-4 text-sm sm:text-base text-slate-700 dark:text-white/80 leading-relaxed">
              <p>
                I am a Computer Science graduate and Full-Stack & Embedded Software Developer with hands-on experience building web applications, IoT systems, and AI-accelerated software workflows. I specialize in leveraging Generative AI tools such as GitHub Copilot, ChatGPT, Gemini, and Prompt Engineering to accelerate backend work, refactor code quickly, and resolve bugs efficiently.
              </p>
              <p>
                My technical focus spans Laravel, PHP, React, RESTful API design, embedded firmware with ESP32 and STM32, and database-driven application architecture. I have built and maintained software solutions that combine business logic, hardware integration, and user-friendly interfaces for real-world use cases.
              </p>
              <p className="hidden sm:block">
                Beyond development, I enjoy leading technical work, documenting system architecture, and collaborating with teams to deliver reliable software. I am committed to continuous learning, practical problem solving, and building solutions that meaningfully improve accessibility and daily life.
              </p>
            </div>
          </div>

          {/* 4 Stats Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 pt-2">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -2 }}
                className="glass-effect p-4 rounded-2xl text-center border border-black/[0.06] dark:border-white/[0.08] shadow-sm cursor-default"
              >
                <h3 className="text-2xl sm:text-3xl font-black gradient-text tracking-tight">
                  {stat.value}
                </h3>
                <p className="text-xs text-slate-600 dark:text-white/70 font-medium mt-0.5">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Interactive Tech Stack & Engineering Ecosystem */}
        <div className="lg:col-span-7 flex flex-col justify-between glass-effect p-5 sm:p-7 rounded-3xl border border-black/[0.08] dark:border-white/[0.08] shadow-lg relative overflow-hidden">
          {/* Top Ribbon & Description */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-black/[0.06] dark:border-white/[0.08]">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#a88154] dark:text-[#dfbe95] block">
                  Production & Embedded Stack
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  Tech Stack & Engineering Ecosystem
                </h3>
              </div>
              <div className="inline-flex items-center gap-1.5 text-[11px] text-[#8c673d] dark:text-[#dfbe95] font-semibold bg-[#c29f74]/15 px-3 py-1 rounded-full border border-[#c29f74]/30 w-fit">
                <FiInfo size={13} />
                <span>Click any card for project details</span>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 mb-4 p-1.5 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] backdrop-blur-md w-fit">
              {CATEGORIES.map((cat) => {
                const count =
                  cat.id === 'all'
                    ? TECH_STACK_ITEMS.length
                    : TECH_STACK_ITEMS.filter((item) => item.category === cat.id).length;
                const isActive = activeCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    type="button"
                    className={`relative px-2.5 sm:px-3 py-1 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 select-none ${
                      isActive
                        ? 'text-slate-950 dark:text-white'
                        : 'text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTechTabCategory"
                        className="absolute inset-0 rounded-xl bg-white dark:bg-[#c29f74]/25 border border-black/10 dark:border-[#c29f74]/40 shadow-sm"
                        transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                      />
                    )}
                    <span className="relative z-10">{cat.label}</span>
                    <span
                      className={`relative z-10 text-[10px] px-1.5 py-0.2 rounded-full font-mono transition-colors ${
                        isActive
                          ? 'bg-[#c29f74]/25 text-[#7a562a] dark:text-[#fbf8f3] font-bold'
                          : 'bg-black/5 dark:bg-white/10 text-slate-500 dark:text-white/40'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Cards Grid Container (Designed to fit on One Page in PC with smooth responsive grid) */}
          <div className="lg:max-h-[500px] overflow-y-auto pr-1 no-scrollbar">
            <motion.div
              layout
              className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-3 gap-2.5 sm:gap-3"
            >
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item) => {
                  const IconComponent = item.icon;

                  return (
                    <motion.button
                      layout
                      key={item.name}
                      onClick={() => setSelectedTech(item)}
                      initial={{ opacity: 0, scale: 0.9, y: 8 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: 8 }}
                      transition={{ duration: 0.18 }}
                      whileHover={{ y: -3, scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      type="button"
                      className="text-left relative group p-3 sm:p-3.5 rounded-2xl bg-white/85 dark:bg-black/40 border border-black/[0.08] dark:border-white/[0.08] hover:border-[#c29f74]/70 dark:hover:border-[#c29f74]/70 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden backdrop-blur-md cursor-pointer"
                    >
                      {/* Top Row: Icon Container & Core Badge */}
                      <div className="flex items-start justify-between gap-1.5 w-full">
                        <div
                          className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center border transition-transform duration-200 group-hover:scale-110 shadow-inner flex-shrink-0"
                          style={{
                            backgroundColor: `${item.brandColor}18`,
                            borderColor: `${item.brandColor}35`,
                            color: item.brandColor,
                          }}
                        >
                          <IconComponent size={18} />
                        </div>

                        {item.core ? (
                          <span className="inline-flex items-center gap-1 text-[9px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 flex-shrink-0">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span>Core</span>
                          </span>
                        ) : (
                          <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400 dark:text-white/35 flex-shrink-0">
                            {item.category}
                          </span>
                        )}
                      </div>

                      {/* Middle: Name & Role */}
                      <div className="mt-2.5 mb-1.5 w-full">
                        <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white group-hover:text-[#a88154] dark:group-hover:text-[#dfbe95] transition-colors leading-tight">
                          {item.name}
                        </h4>
                        <p className="text-[10px] sm:text-[11px] text-slate-500 dark:text-white/60 line-clamp-1 mt-0.5 leading-snug">
                          {item.role}
                        </p>
                      </div>

                      {/* Bottom Metadata & Click Hint */}
                      <div className="pt-2 border-t border-black/[0.04] dark:border-white/5 flex items-center justify-between text-[9px] text-slate-400 dark:text-white/40 font-mono w-full">
                        <span className="truncate">{item.categoryName}</span>
                        <span className="text-[#a88154] dark:text-[#dfbe95] opacity-0 group-hover:opacity-100 transition-opacity font-bold ml-1 flex-shrink-0">
                          View details →
                        </span>
                      </div>

                      {/* Ambient Brand Accent Glow */}
                      <div
                        className="absolute -right-6 -bottom-6 w-16 h-16 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                        style={{ backgroundColor: item.brandColor }}
                      />
                    </motion.button>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Interactive Tech Stack Detail Modal */}
      <AnimatePresence>
        {selectedTech && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTech(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Dialog Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: 'spring', stiffness: 360, damping: 26 }}
              className="relative w-full max-w-xl rounded-3xl p-6 sm:p-8 shadow-2xl border overflow-hidden z-10 my-auto"
              style={{
                background: isDarkMode ? '#171412' : '#ffffff',
                borderColor: isDarkMode ? 'rgba(194, 159, 116, 0.3)' : '#e8dfd1',
                boxShadow: isDarkMode
                  ? '0 25px 60px rgba(0, 0, 0, 0.7)'
                  : '0 25px 60px rgba(168, 129, 84, 0.25)',
              }}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedTech(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <FiX size={20} />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center border shadow-inner flex-shrink-0"
                  style={{
                    backgroundColor: `${selectedTech.brandColor}18`,
                    borderColor: `${selectedTech.brandColor}40`,
                    color: selectedTech.brandColor,
                  }}
                >
                  <selectedTech.icon size={30} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-tight">
                      {selectedTech.name}
                    </h3>
                    {selectedTech.core && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Core Stack</span>
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-[#8c673d] dark:text-[#dfbe95] mt-0.5">
                    {selectedTech.role} • <span className="font-mono text-slate-500 dark:text-white/50">{selectedTech.categoryName}</span>
                  </p>
                </div>
              </div>

              {/* Where Can I See This Tech Stack? */}
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-[#faf7f2] dark:bg-white/[0.04] border border-[#e8dfd1] dark:border-white/10">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#a88154] dark:text-[#dfbe95] mb-1.5">
                    <FiLayers size={14} />
                    <span>Where you can see this in Aljon's portfolio:</span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1">
                    {selectedTech.usedIn.projectTitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-white/80 leading-relaxed">
                    {selectedTech.usedIn.summary}
                  </p>
                </div>

                {/* Key Technical Highlights */}
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-white/50 mb-2">
                    Key Practical Deliverables:
                  </h5>
                  <div className="space-y-2">
                    {selectedTech.usedIn.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-white/80">
                        <FiCheckCircle size={15} className="text-[#c29f74] flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-7 pt-4 border-t border-black/[0.06] dark:border-white/10 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => handleNavigateToProject(selectedTech.usedIn.sectionLink)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#c29f74] to-[#a88154] hover:from-[#b59062] hover:to-[#956f42] text-white text-xs sm:text-sm font-semibold shadow-md shadow-[#c29f74]/20 transition-all cursor-pointer group"
                >
                  <span>View in {selectedTech.usedIn.sectionLink === '#experience' ? 'Experience Section' : selectedTech.usedIn.sectionLink === '#projects' ? 'Featured Projects' : 'About Section'}</span>
                  <FiArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedTech(null)}
                  className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
