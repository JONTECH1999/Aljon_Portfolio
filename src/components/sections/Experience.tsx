import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiBriefcase, 
  FiAward, 
  FiCalendar, 
  FiChevronDown, 
  FiDownload, 
  FiEye, 
  FiX, 
  FiCheckCircle, 
  FiBookOpen,
  FiExternalLink
} from 'react-icons/fi';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  type: string;
  summary: string;
  details: string[];
  skills: string[];
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(1);
  const [previewPdf, setPreviewPdf] = useState<{ url: string; title: string } | null>(null);

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: 'Remote Backend Developer Intern',
      company: 'Certicode',
      period: 'January 2026 – April 2026',
      type: 'Internship / Remote',
      summary: 'Engineered backend features and APIs utilizing AI-assisted developer tools within an Agile workflow.',
      details: [
        'Utilized GitHub Copilot, prompt engineering, and AI-assisted debugging to streamline backend development, refactor complex algorithms, and reduce testing turnaround times.',
        'Developed server-side PHP and JavaScript application features under strict Agile sprints.',
        'Designed and optimized relational database schemas and RESTful API endpoints for secure, high-speed data transactions.',
        'Collaborated on code reviews, Git branching strategies, and CI/CD development standards.',
      ],
      skills: ['PHP', 'JavaScript', 'MySQL', 'REST API', 'GitHub Copilot', 'Prompt Engineering', 'Agile / Scrum'],
      icon: FiBriefcase,
    },
    {
      id: 2,
      title: 'Lead Thesis Developer & Project Leader',
      company: 'Blind Assistive Head Tech (BAHT)',
      period: '2024 – 2025',
      type: 'Research & Development',
      summary: 'Directed hardware and software architecture of a wearable multi-sensor assistive headband for visually impaired users.',
      details: [
        'Architected an ESP32 embedded system coordinating 4 ultrasonic sensors, dual dynamic vibration feedback motors, and voice guidance.',
        'Engineered real-time non-blocking sensor acquisition loops with Exponential Moving Average (EMA) filtering for accurate obstacle classification up to 200cm.',
        'Created an accompanying Android configuration application and integrated EEPROM/NVS for persisting user accessibility preferences.',
        'Supervised thesis team operations, hardware prototyping, field accessibility testing, and DOST evaluation documentation.',
      ],
      skills: ['ESP32', 'C/C++', 'IoT', 'Embedded Systems', 'Sensor Fusion', 'Android', 'Hardware Integration', 'Accessibility'],
      icon: FiAward,
    },
    {
      id: 3,
      title: 'Full-Stack & IoT Developer',
      company: 'Independent & Collaborative Projects',
      period: '2023 – 2025',
      type: 'Freelance & Open Source',
      summary: 'Developed full-stack web platforms, clinical management portals, and hardware-integrated monitoring systems.',
      details: [
        'Engineered responsive web applications including the ALMKA IoT Blind Web App, Clinic MIS with role-based access, and the MCGI QR-code mobile landing page.',
        'Integrated live camera streaming, GPS telemetry, and auditory buzzer warnings into centralized web dashboards.',
        'Implemented secure authentication, session management, and relational database normalization using MySQL and PHP.',
      ],
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'PHP', 'Laravel', 'MySQL', 'Arduino / C++', 'IoT Dashboards'],
      icon: FiBriefcase,
    },
  ];

  const certificates = [
    {
      id: 'ojt',
      title: 'OJT Certificate of Completion',
      issuer: 'Certicode Inc.',
      date: 'April 2026',
      type: 'Internship Credential',
      file: '/certificates/ojt-certificate-completion.pdf',
      description: 'Official certification honoring completion of backend software development internship and technical deliverables.',
      verified: true,
    },
    {
      id: 'web-dev',
      title: 'Web Development Fundamentals',
      issuer: 'Technical Certification',
      date: '2025',
      type: 'Professional Credential',
      file: '/certificates/web-development-fundamentals.pdf',
      description: 'Core competencies in modern frontend and backend development architectures, web standards, and API integrations.',
      verified: true,
    },
  ];

  const achievements = [
    {
      title: '2nd Place – BSCS Symposium Robotics Competition',
      issuer: 'Immaculada Concepcion College',
      badge: 'Award of Excellence',
      year: '2025',
      description: 'Recognized for superior robotics engineering and autonomous navigation algorithms in inter-college tournament.',
    },
    {
      title: 'Outstanding Contribution Award',
      issuer: 'Blind Assistive Head Tech (BAHT)',
      badge: 'Honor',
      year: '2025',
      description: 'Honored for exceptional technical innovation, lead embedded programming, and accessibility impact.',
    },
    {
      title: 'Lead Thesis Developer Recognition',
      issuer: 'Blind Assistive Head Tech',
      badge: 'Leadership',
      year: '2024 – 2025',
      description: 'Appointed team lead across hardware fabrication, firmware optimization, and clinical field trials.',
    },
    {
      title: 'DOST Funding Evaluation Submission',
      issuer: 'PDAO Caloocan & NCDA Endorsed',
      badge: 'Grant Selection',
      year: '2025',
      description: 'Formulated and submitted comprehensive technical specifications for national government assistive tech funding.',
    },
  ];

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border"
               style={{ 
                 backgroundColor: 'rgba(194, 159, 116, 0.1)', 
                 borderColor: 'rgba(194, 159, 116, 0.25)',
                 color: 'var(--color-primary)' 
               }}>
            Career & Qualifications
          </div>
          <h2 className="section-title mb-4">Experience & Achievements</h2>
          <p className="text-slate-600 dark:text-white/70 max-w-2xl mx-auto text-base sm:text-lg">
            A track record in software engineering, embedded IoT systems, and academic leadership.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#c29f74] via-[#dfbe95] to-[#a88154] mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative mb-24">
          {/* Central Connecting Timeline Line */}
          <div className="absolute left-4 md:left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-[#c29f74] via-[#dfbe95] to-transparent"></div>

          <div className="space-y-10">
            {experiences.map((exp, index) => {
              const isExpanded = expandedId === exp.id;
              const Icon = exp.icon;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-12 md:pl-20"
                >
                  {/* Timeline Node Icon */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    className="absolute left-0 md:left-4 top-1.5 w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-[#c29f74] to-[#a88154] text-white flex items-center justify-center shadow-lg shadow-[#c29f74]/25 border-2 border-slate-900 dark:border-slate-950 z-10 cursor-pointer"
                    onClick={() => toggleExpand(exp.id)}
                  >
                    <Icon size={18} />
                  </motion.div>

                  {/* Interactive Card */}
                  <div
                    className={`glass-effect rounded-2xl p-6 sm:p-7 border transition-all duration-300 ${
                      isExpanded 
                        ? 'border-[#c29f74]/50 shadow-xl shadow-[#c29f74]/10' 
                        : 'border-white/10 hover:border-[#c29f74]/30 hover:shadow-lg'
                    }`}
                  >
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                            {exp.title}
                          </h3>
                          <span 
                            className="text-xs px-2.5 py-0.5 rounded-full font-medium"
                            style={{ 
                              backgroundColor: 'rgba(194, 159, 116, 0.15)', 
                              color: 'var(--color-primary)' 
                            }}
                          >
                            {exp.type}
                          </span>
                        </div>
                        <p className="text-base font-semibold text-[#a88154] dark:text-[#dfbe95]">
                          {exp.company}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500 dark:text-white/60 bg-black/5 dark:bg-white/5 px-3 py-1.5 rounded-lg w-fit">
                        <FiCalendar size={14} className="text-[#c29f74]" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="text-slate-700 dark:text-white/80 leading-relaxed mb-5 text-sm sm:text-base">
                      {exp.summary}
                    </p>

                    {/* Expandable Accordion Details */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          key="details"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="pt-2 pb-5 border-t border-slate-200 dark:border-white/10 mt-4">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-white/50 mb-3">
                              Key Contributions & Outcomes
                            </h4>
                            <ul className="space-y-2.5">
                              {exp.details.map((detail, idx) => (
                                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-white/80 leading-relaxed">
                                  <FiCheckCircle size={16} className="text-[#c29f74] mt-0.5 flex-shrink-0" />
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Card Footer: Skills & Toggle Button */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-white/10">
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {exp.skills.map((skill) => (
                          <motion.span
                            key={skill}
                            whileHover={{ scale: 1.06, y: -1 }}
                            className="text-xs font-medium px-2.5 py-1 rounded-md transition-all cursor-default"
                            style={{
                              backgroundColor: 'rgba(194, 159, 116, 0.12)',
                              color: 'var(--color-primary)',
                              border: '1px solid rgba(194, 159, 116, 0.25)',
                            }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>

                      <motion.button
                        onClick={() => toggleExpand(exp.id)}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#a88154] dark:text-[#dfbe95] hover:text-[#c29f74] dark:hover:text-[#eedcc1] self-start sm:self-auto py-1 px-2 rounded-lg hover:bg-[#c29f74]/10 transition-colors"
                      >
                        <span>{isExpanded ? 'Show less' : 'View responsibilities'}</span>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <FiChevronDown size={16} />
                        </motion.div>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Education Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-50px' }}
          className="mb-24"
        >
          <div className="glass-effect rounded-2xl p-8 border border-white/10 relative overflow-hidden group hover:border-[#c29f74]/30 transition-all">
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-[#c29f74]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#c29f74]/20 transition-all"></div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c29f74] to-[#a88154] text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#c29f74]/20">
                  <FiBookOpen size={26} />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs px-2.5 py-0.5 rounded-full font-medium bg-[#c29f74]/10 text-[#a88154] dark:text-[#dfbe95] border border-[#c29f74]/20">
                      Graduating June 16, 2026
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full font-medium bg-[#c29f74]/10 text-[#a88154] dark:text-[#dfbe95] border border-[#c29f74]/20">
                      Bachelor's Degree
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Bachelor of Science in Computer Science
                  </h3>
                  <p className="text-base font-semibold text-[#a88154] dark:text-[#dfbe95] mt-0.5">
                    Immaculada Concepcion College
                  </p>
                </div>
              </div>

              <div className="text-left md:text-right">
                <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-white/50 block font-semibold mb-1">
                  Primary Specialization
                </span>
                <p className="text-sm font-medium text-slate-800 dark:text-white/90">
                  Software Engineering & Embedded IoT Systems
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-white/10 text-sm text-slate-700 dark:text-white/80 leading-relaxed">
              Focused on software engineering principles, embedded systems, full-stack web architecture, and algorithmic design. Served as Thesis Team Leader for the Blind Assistive Head Tech project and represented the department in the BSCS Symposium Robotics competition.
            </div>
          </div>
        </motion.div>

        {/* Certifications & Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
              Certifications & Credentials
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-white/70">
              Verified certificates with instant preview and download options, alongside competition honors.
            </p>
          </div>

          {/* Grid of Verified Certificates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {certificates.map((cert) => (
              <motion.div
                key={cert.id}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="glass-effect rounded-2xl p-6 border border-white/10 hover:border-[#c29f74]/40 transition-all flex flex-col justify-between relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-[#c29f74]/10 to-transparent pointer-events-none"></div>

                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#c29f74]/15 text-[#a88154] dark:text-[#dfbe95] border border-[#c29f74]/30">
                      <FiCheckCircle size={12} />
                      Verified PDF
                    </span>
                    <span className="text-xs text-slate-500 dark:text-white/50 font-medium">
                      {cert.date}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-xs font-semibold text-[#a88154] dark:text-[#dfbe95] mb-3">
                    {cert.issuer} • {cert.type}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-white/70 leading-relaxed mb-6">
                    {cert.description}
                  </p>
                </div>

                {/* Actions: Preview & Download */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-white/10">
                  <motion.button
                    onClick={() => setPreviewPdf({ url: cert.file, title: cert.title })}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs sm:text-sm font-semibold text-[#a88154] dark:text-[#dfbe95] bg-[#c29f74]/10 hover:bg-[#c29f74]/20 border border-[#c29f74]/30 transition-all cursor-pointer"
                  >
                    <FiEye size={16} />
                    <span>Preview Certificate</span>
                  </motion.button>

                  <motion.a
                    href={cert.file}
                    download
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="flex items-center justify-center gap-2 py-2 px-4 rounded-lg text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#c29f74] to-[#a88154] hover:from-[#a88154] hover:to-[#8c673d] shadow-md shadow-[#c29f74]/20 transition-all cursor-pointer"
                    title="Download PDF File"
                  >
                    <FiDownload size={16} />
                    <span className="hidden sm:inline">Download</span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Honors & Competitions Grid */}
          <div className="mt-8">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <FiAward className="text-amber-500" size={20} />
              <span>Honors & Recognitions</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {achievements.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="glass-effect rounded-xl p-4 border border-white/10 hover:border-amber-500/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                        {item.badge}
                      </span>
                      <span className="text-[11px] text-slate-500 dark:text-white/50">
                        {item.year}
                      </span>
                    </div>
                    <h5 className="font-bold text-sm text-slate-900 dark:text-white mb-1 leading-snug">
                      {item.title}
                    </h5>
                    <p className="text-xs text-[#a88154] dark:text-[#dfbe95] font-medium mb-2">
                      {item.issuer}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-white/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Certificate Live PDF Preview Modal */}
      <AnimatePresence>
        {previewPdf && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewPdf(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-effect rounded-2xl w-full max-w-4xl h-[85vh] flex flex-col overflow-hidden border border-white/20 shadow-2xl bg-slate-900"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-slate-950/80">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#c29f74]/20 text-[#dfbe95] flex items-center justify-center">
                    <FiAward size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {previewPdf.title}
                    </h3>
                    <p className="text-xs text-slate-400">
                      Official Certificate Document
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <motion.a
                    href={previewPdf.url}
                    download
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#b88755] hover:bg-[#a88154] shadow-md shadow-[#c29f74]/20 text-white transition-colors"
                  >
                    <FiDownload size={14} />
                    <span>Download</span>
                  </motion.a>

                  <motion.a
                    href={previewPdf.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                    title="Open in new tab"
                  >
                    <FiExternalLink size={18} />
                  </motion.a>

                  <button
                    onClick={() => setPreviewPdf(null)}
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                    aria-label="Close Preview"
                  >
                    <FiX size={20} />
                  </button>
                </div>
              </div>

              {/* PDF Viewer Body */}
              <div className="flex-1 w-full bg-slate-950 relative">
                <iframe
                  src={`${previewPdf.url}#toolbar=0`}
                  title={previewPdf.title}
                  className="w-full h-full border-none"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;
