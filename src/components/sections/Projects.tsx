import React, { useState } from 'react';
import MediaCarousel from '../MediaCarousel';
import MediaModal from '../MediaModal';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiX, FiPlay, FiInfo, FiImage } from 'react-icons/fi';
import { FaFacebook, FaYoutube } from 'react-icons/fa';

interface ProjectMedia {
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
  label?: string;
  orientation?: 'portrait' | 'landscape';
}

interface Project {
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

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  // For controlling the current media index in the modal carousel
  const [carouselIndex, setCarouselIndex] = useState<number>(0);
  const [mediaModalOpen, setMediaModalOpen] = useState(false);
  const [mediaModalProjectId, setMediaModalProjectId] = useState<number | null>(null);
  const [mediaModalIndex, setMediaModalIndex] = useState(0);


  const projects: Project[] = [
    {
      id: 1,
      title: 'Blind Assistive Head Tech ',
      description: 'Advanced wearable assistive technology with multi-directional ultrasonic sensors, directional vibration feedback, and voice guidance for intelligent obstacle detection and independent navigation of visually impaired users.',
      fullDescription: 'Advanced wearable assistive technology designed to support blind and visually impaired individuals through intelligent obstacle detection, real-time sensory feedback, and voice-guided navigation. The system is developed in the form of a wearable headband that enhances environmental awareness by combining hardware innovation with smart assistive software, enabling users to navigate safely and independently in different environments.\n\nThe device utilizes four ultrasonic sensors strategically positioned at the front, left, right, and downward directions to continuously scan the surroundings and detect nearby obstacles, including ground-level hazards that are commonly difficult to identify using traditional mobility aids alone. These sensors can detect objects within an approximate range of up to 200 centimeters, allowing users to receive early warnings and improve reaction time while moving.\n\nTo provide intuitive navigation assistance, each sensor is paired with a dedicated vibration motor placed at the corresponding area of the headband. When an obstacle is detected, the user receives directional vibration feedback that indicates the exact location of the hazard. The vibration intensity dynamically changes based on the obstacle\'s distance — weak vibrations indicate distant objects, moderate vibrations signal approaching obstacles, and strong vibrations warn the user of immediate proximity.\n\nThe system also includes an optional voice-guided feedback feature that delivers real-time distance announcements and warning notifications. When obstacles are detected within critical range thresholds, the device activates continuous alert warnings to notify the user of immediate danger, further improving navigation safety and situational awareness.\n\nTo accommodate different user preferences and accessibility needs, the device supports multiple operating modes including vibration-only mode, voice-only mode, and combined vibration-and-voice mode. Additional customization settings such as voice volume and vibration intensity can also be adjusted and automatically stored within the system memory for consistent user experience after restarting the device.\n\nThe primary objective of the Blind Assistive Head Tech is to improve the independence, mobility, confidence, and safety of visually impaired individuals by providing an accessible wearable assistive solution. Rather than replacing traditional mobility tools such as white canes, the system is designed to complement them by offering enhanced multi-directional environmental awareness and earlier obstacle detection capabilities.\n\nThe project also undergoes usability and performance testing to evaluate obstacle detection accuracy, comfort during prolonged usage, effectiveness of sensory feedback, and overall user experience in real-world environments. Feedback gathered from testing is used to continuously improve the system\'s design, accessibility, and reliability.\n\nThis project represents one of the user\'s most advanced and innovative developments, combining IoT hardware integration, embedded systems programming, and intelligent assistive software into a single wearable technology solution focused on improving accessibility for the visually impaired community.',
      technologies: ['IoT', 'Sensors', 'Arduino IDE', 'C++', 'Android Studio', 'Java', 'Ultrasonic Sensors', 'Voice Feedback System', 'Vibration Feedback System', 'Wearable Assistive Technology'],
      image: '/images/blind-tech-main.png',
      video: '/videos/projects/blind-tech-video-landscape-thumb.webm',
      videoThumbnail: '/images/blind-tech-thumb.png',
      github: 'https://github.com/JONTECH1999/Blind-Assistive-Head-Tech',
      live: '#',
      facebook: 'https://web.facebook.com/iccbscsdept/posts/pfbid02w73f7anrUwk8NEDMaPTjtiLuqtwQSxgp8jdzY8ozXhj9TkFuc8DYJP7cooZrMC4Ll',
      category: 'React',
      media: [
        // ===== LANDSCAPE IMAGES (Overview/Hero) =====
        {
          type: 'image',
          src: '/images/blind-tech-landscape-04-thumb.jpg',
          thumbnail: '/images/blind-tech-landscape-04-thumb.jpg',
          label: 'Integration View',
          orientation: 'landscape',
        },
        {
          type: 'image',
          src: '/images/blind-tech-landscape-01-thumb.jpg',
          thumbnail: '/images/blind-tech-landscape-01-thumb.jpg',
          label: 'Device Overview',
          orientation: 'landscape',
        },
        {
          type: 'image',
          src: '/images/blind-tech-landscape-02-thumb.jpg',
          thumbnail: '/images/blind-tech-landscape-02-thumb.jpg',
          label: 'Full System Setup',
          orientation: 'landscape',
        },
        {
          type: 'image',
          src: '/images/blind-tech-landscape-03-thumb.jpg',
          thumbnail: '/images/blind-tech-landscape-03-thumb.jpg',
          label: 'Hardware Components',
          orientation: 'landscape',
        },
        {
          type: 'image',
          src: '/images/blind-tech-landscape-05-thumb.jpg',
          thumbnail: '/images/blind-tech-landscape-05-thumb.jpg',
          label: 'Testing Phase',
          orientation: 'landscape',
        },
        {
          type: 'image',
          src: '/images/blind-tech-landscape-06-thumb.jpg',
          thumbnail: '/images/blind-tech-landscape-06-thumb.jpg',
          label: 'Deployment',
          orientation: 'landscape',
        },
        {
          type: 'image',
          src: '/images/blind-tech-landscape-07-thumb.jpg',
          thumbnail: '/images/blind-tech-landscape-07-thumb.jpg',
          label: 'Real-World Usage',
          orientation: 'landscape',
        },
        {
          type: 'image',
          src: '/images/blind-tech-landscape-08-thumb.jpg',
          thumbnail: '/images/blind-tech-landscape-08-thumb.jpg',
          label: 'System Architecture',
          orientation: 'landscape',
        },
        // ===== PORTRAIT IMAGES (UI/Interface) =====
        {
          type: 'image',
          src: '/images/blind-tech-portrait-ui-01-thumb.jpg',
          thumbnail: '/images/blind-tech-portrait-ui-01-thumb.jpg',
          label: 'Main Interface',
          orientation: 'portrait',
        },
        {
          type: 'image',
          src: '/images/blind-tech-portrait-ui-02-thumb.jpg',
          thumbnail: '/images/blind-tech-portrait-ui-02-thumb.jpg',
          label: 'Voice Control Screen',
          orientation: 'portrait',
        },
        {
          type: 'image',
          src: '/images/blind-tech-portrait-ui-03-thumb.jpg',
          thumbnail: '/images/blind-tech-portrait-ui-03-thumb.jpg',
          label: 'Navigation Dashboard',
          orientation: 'portrait',
        },
        {
          type: 'image',
          src: '/images/blind-tech-portrait-ui-04-thumb.jpg',
          thumbnail: '/images/blind-tech-portrait-ui-04-thumb.jpg',
          label: 'Settings Panel',
          orientation: 'portrait',
        },
        {
          type: 'image',
          src: '/images/blind-tech-portrait-ui-05-thumb.jpg',
          thumbnail: '/images/blind-tech-portrait-ui-05-thumb.jpg',
          label: 'Accessibility Features',
          orientation: 'portrait',
        },
        {
          type: 'image',
          src: '/images/blind-tech-portrait-ui-06-thumb.jpg',
          thumbnail: '/images/blind-tech-portrait-ui-06-thumb.jpg',
          label: 'User Preferences',
          orientation: 'portrait',
        },
        // ===== LANDSCAPE VIDEO (Demo/Overview) =====
        {
          type: 'video',
          src: '/videos/projects/blind-tech-video-landscape-thumb.webm',
          thumbnail: '/images/blind-tech-video-landscape-thumb.png',
          label: 'Full System Demo',
          orientation: 'landscape',
        },
        // ===== PORTRAIT VIDEOS (Feature Demos) =====
        {
          type: 'video',
          src: '/videos/projects/blind-tech-video-portrait-01-thumb.mp4',
          thumbnail: '/images/blind-tech-video-portrait-01-thumb.png',
          label: 'Voice Control Demo',
          orientation: 'portrait',
        },
        {
          type: 'video',
          src: '/videos/projects/blind-tech-video-portrait-02-thumb.mp4',
          thumbnail: '/images/blind-tech-video-portrait-02-thumb.png',
          label: 'Navigation Feature',
          orientation: 'portrait',
        },
        {
          type: 'video',
          src: '/videos/projects/blind-tech-video-portrait-03-thumb.mp4',
          thumbnail: '/images/blind-tech-video-portrait-03-thumb.png',
          label: 'User Experience Demo',
          orientation: 'portrait',
        },
      ],
    },
    {
      id: 2,
      title: 'ALMKA Blind Web App',
      description: 'IoT-integrated web platform with wearable smart belt device featuring ultrasonic sensors, GPS tracking, and real-time camera streaming for assistive navigation and safety monitoring of the blind community.',
      fullDescription: 'Comprehensive web application designed to support the blind community through real-time monitoring, assistive navigation, and safety-focused IoT integration. The system connects a wearable smart belt device equipped with ultrasonic sensors, GPS tracking, and live camera streaming to a centralized web platform, allowing caregivers and administrators to monitor the user\'s surroundings and location efficiently.\n\nThe wearable device utilizes three ultrasonic sensors positioned at the front, left, and right sides to detect nearby obstacles and provide immediate auditory feedback through strategically placed buzzers. The buzzer intensity changes dynamically based on the distance of detected objects — producing softer sounds for distant obstacles and louder alerts as objects become closer — enabling visually impaired users to navigate safely without physical contact with surrounding hazards.\n\nTo further enhance environmental awareness, a front-mounted camera streams real-time video footage to the web application, functioning similarly to a mobile CCTV system for monitoring purposes. Integrated GPS technology also allows real-time location tracking, improving user safety and assisting guardians or caregivers during emergencies.\n\nDeveloped as an assistive technology solution for the visually impaired community of Ang Lakas ng May Kapansanan Association – Brgy. 185, the project aims to promote independence, mobility, and safety through accessible IoT-based innovations. This project was created to support a schoolmate\'s thesis after being endorsed by a professor to assist with the development, as the researcher was handling the project independently. Since the concepts and objectives were closely related to the user\'s own thesis work, technical assistance and collaboration were provided in both the hardware and software implementation of the system.',
      technologies: ['React', 'JavaScript', 'PHP', 'MySQL', 'Arduino IDE', 'C++', 'IoT Sensors', 'GPS Module', 'Ultrasonic Sensors', 'Camera Integration', 'Web-Based Monitoring System'],
      image: '/images/almka-main.png',
      video: '/videos/projects/almka-demo.webm',
      videoThumbnail: '/images/almka-thumb.png',
      github: 'https://github.com/JONTECH1999/ALMKA.git',
      live: '#',
      facebook: 'https://web.facebook.com/iccbscsdept/posts/pfbid0bXhWwsTzar47PTA9xPqA6S18p4Yxh25ubRM6SHSuojMsEfKeAV7Cy3YM5zgqW3gBl',
      category: 'React',
      media: [
        {
          type: 'image',
          src: '/images/almka-main.png',
          thumbnail: '/images/almka-main.png',
          label: 'Dashboard',
          orientation: 'landscape',
        },
        {
          type: 'image',
          src: '/images/almka-features.png',
          thumbnail: '/images/almka-features.png',
          label: 'Login',
          orientation: 'landscape',
        },
        {
          type: 'image',
          src: '/images/almka-dashboard.png',
          thumbnail: '/images/almka-dashboard.png',
          label: 'Create Account',
          orientation: 'landscape',
        },
        {
          type: 'image',
          src: '/images/almka-community.png',
          thumbnail: '/images/almka-community.png',
          label: 'Forget Password',
          orientation: 'landscape',
        },
        {
          type: 'image',
          src: '/images/almka-resources.png',
          thumbnail: '/images/almka-resources.png',
          label: 'Dashboard',
          orientation: 'landscape',
        },
        {
          type: 'image',
          src: '/images/almka-appointments.png',
          thumbnail: '/images/almka-appointments.png',
          label: 'Live Monitoring',
          orientation: 'landscape',
        },
        {
          type: 'image',
          src: '/images/almka-profile.png',
          thumbnail: '/images/almka-profile.png',
          label: 'User History',
          orientation: 'landscape',
        },
        {
          type: 'image',
          src: '/images/almka-poster.png',
          thumbnail: '/images/almka-poster.png',
          label: 'Poster',
          orientation: 'portrait',
        },
        {
          type: 'image',
          src: '/images/almka-device-photo.png',
          thumbnail: '/images/almka-device-photo.png',
          label: 'Physical Device Photo',
          orientation: 'portrait',
        },
        {
          type: 'image',
          src: '/images/almka-device-components.png',
          thumbnail: '/images/almka-device-components.png',
          label: 'Device Components Hardware',
          orientation: 'portrait',
        },
        {
          type: 'video',
          src: '/videos/projects/almka-demo.webm',
          thumbnail: '/images/almka-thumb.png',
          label: 'Recording',
          orientation: 'landscape',
        },
      ],
    },
    {
      id: 3,
      title: 'Good Shepherd Medical Clinic Web App',
      description: 'Comprehensive multi-user medical management system featuring role-based access for Doctors, Nurses, and Admins with secure patient records and encrypted data management.',
      fullDescription: 'Built a web-based medical management system for Good Shepherd Children\'s Medical and Maternity Clinic as my thesis project. The goal was to make it easier to handle patient records, get billing right, and improve how the clinic runs day-to-day. Everything is secure and organized in one place.\n\nThe system has three types of users: Doctors, Nurses, and Admin staff. Each one gets access to what they need based on their job. This keeps patient data safe and makes sure only the right people can see or change sensitive information.\n\nDoctors can input patient diagnoses, update medical records, and review patient history to make better treatment decisions. Nurses handle patient registration for regular checkups, pediatric cases, and OB-GYN cases. They also collect the initial patient information before the doctor sees them. The admin side manages user accounts, handles system settings, and keeps an eye on the database.\n\nPatient records are stored in a structured database so retrieval is fast and everything is organized by patient history. Billing is integrated directly into the patient records, which cuts down on errors and makes financial tracking accurate.\n\nAuthentication is built in to protect patient data, and all sensitive information is handled securely. Role-based access means each person only sees what they\'re allowed to see.\n\nThe whole platform was built to speed things up in the clinic - less time processing patients, fewer billing mistakes, and better teamwork between staff. It gives everyone a single system to work from, so decisions are faster and patient management is more accurate.\n\nThis was built with PHP, MySQL, JavaScript, and HTML/CSS. It shows how to combine a working interface with solid backend database work for a real healthcare environment.',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
      image: '/images/portfolio-screenshot-27.png',
      video: '/videos/projects/clinic-demo.mp4',
      videoThumbnail: '/videos/projects/clinic-thumb.png',
      github: '#',
      live: '#',
      youtube: 'https://www.youtube.com/watch?v=MU-UjYPPahY',
      category: 'PHP',
      media: [
        // ===== NURSE SECTION =====
        {
          type: 'image',
          src: '/images/clinic-nurse-login.png',
          thumbnail: '/images/clinic-nurse-login.png',
          label: 'Nurse Login',
          orientation: 'portrait',
        },
        {
          type: 'image',
          src: '/images/clinic-nurse-patient-registration.png',
          thumbnail: '/images/clinic-nurse-patient-registration.png',
          label: 'Nurse Patient Registration',
          orientation: 'portrait',
        },
        {
          type: 'image',
          src: '/images/clinic-nurse-pedia-patient-registration.png',
          thumbnail: '/images/clinic-nurse-pedia-patient-registration.png',
          label: 'Nurse Pedia Patient Registration',
          orientation: 'portrait',
        },
        {
          type: 'image',
          src: '/images/clinic-obgyn-patient-registration.png',
          thumbnail: '/images/clinic-obgyn-patient-registration.png',
          label: 'OBGYN Patient Registration',
          orientation: 'portrait',
        },
        // ===== DOCTOR SECTION =====
        {
          type: 'image',
          src: '/images/clinic-doctor-login.png',
          thumbnail: '/images/clinic-doctor-login.png',
          label: 'Doctor Login',
          orientation: 'portrait',
        },
        {
          type: 'image',
          src: '/images/clinic-doctor-patient-record.png',
          thumbnail: '/images/clinic-doctor-patient-record.png',
          label: 'Doctor Patient Record',
          orientation: 'portrait',
        },
        {
          type: 'image',
          src: '/images/clinic-doctor-obgyn-patient-record.png',
          thumbnail: '/images/clinic-doctor-obgyn-patient-record.png',
          label: 'Doctor OBGYN Patient Record',
          orientation: 'portrait',
        },
        {
          type: 'image',
          src: '/images/clinic-doctor-pedia-patient-record.png',
          thumbnail: '/images/clinic-doctor-pedia-patient-record.png',
          label: 'Doctor Pedia Patient Record',
          orientation: 'portrait',
        },
        {
          type: 'image',
          src: '/images/clinic-admission-record-obgyn.png',
          thumbnail: '/images/clinic-admission-record-obgyn.png',
          label: 'Admission Record OBGYN',
          orientation: 'portrait',
        },
        // ===== ADMIN SECTION =====
        {
          type: 'image',
          src: '/images/clinic-admin-login.png',
          thumbnail: '/images/clinic-admin-login.png',
          label: 'Admin Login',
          orientation: 'portrait',
        },
        {
          type: 'image',
          src: '/images/clinic-admin-dashboard.png',
          thumbnail: '/images/clinic-admin-dashboard.png',
          label: 'Admin Dashboard',
          orientation: 'portrait',
        },
        {
          type: 'image',
          src: '/images/clinic-admin-manage-account.png',
          thumbnail: '/images/clinic-admin-manage-account.png',
          label: 'Manage Account',
          orientation: 'portrait',
        },
        {
          type: 'image',
          src: '/images/clinic-admin-medical-records.png',
          thumbnail: '/images/clinic-admin-medical-records.png',
          label: 'Medical Records',
          orientation: 'portrait',
        },
        {
          type: 'image',
          src: '/images/clinic-admin-patient-details.png',
          thumbnail: '/images/clinic-admin-patient-details.png',
          label: 'Patient Details',
          orientation: 'portrait',
        },
        // ===== DEMO VIDEO =====
        {
          type: 'video',
          src: '/videos/projects/clinic-demo.mp4',
          thumbnail: '/videos/projects/clinic-thumb.png',
          label: 'Demo Video',
          orientation: 'landscape',
        },
      ],
    },
    {
      id: 4,
      title: 'School CRUD System',
      description: 'Role-based system for managing school data with Java and MySQL',
      fullDescription: 'Built an academic management system as a freelance project for STI students, focused on making it easy to handle educational records with secure CRUD operations and role-based permissions. Developed using Java with MySQL database through XAMPP, creating a practical environment for managing school records and day-to-day administrative tasks.\n\nThe system has three main user types: Educators, Learners, and Admin staff, each with their own set of permissions and features. This keeps data secure and makes sure the right people have access to the right information at the right time.\n\nTeachers can manage student records, update grades and progress, and keep track of class information. Students can view their own personal and academic details in a limited capacity. The admin side handles user accounts, system settings, and takes care of the database.\n\nYou can create, read, update, and delete records throughout the system. I also added activity logging so you can see what changes were made and who made them, which helps with accountability.\n\nAuthentication is built in to keep student data safe, and the MySQL database handles all the storage and retrieval efficiently. The whole thing was built with Apache NetBeans, and it demonstrates how to combine a clean user interface with solid backend database work.\n\nThis project was made to help STI students complete their system project requirements while giving them a real, working school management solution they can actually use.',
      technologies: ['Java', 'MySQL', 'XAMPP', 'Apache NetBeans', 'CRUD Operations', 'Role-Based Access Control', 'Secure Authentication', 'Database Management'],
      image: '/images/school-crud-main.jpg',
      video: '/videos/projects/school-crud-demo.mp4',
      videoThumbnail: '/videos/projects/school-crud-thumb.jpg',
      github: 'https://github.com/JONTECH1999/School_MIS.git',
      live: '#',
      youtube: 'https://www.youtube.com/watch?v=CdUPFF7nfmQ',
      category: 'Java',
      media: [
        {
          type: 'image',
          src: '/images/school-crud-main.jpg',
          thumbnail: '/images/school-crud-main.jpg',
          label: 'Main Interface',
        },
        {
          type: 'video',
          src: '/videos/projects/school-crud-demo.mp4',
          thumbnail: '/videos/projects/school-crud-thumb.jpg',
          label: 'Demo Video',
          orientation: 'portrait',
        },
      ],
    },
    {
      id: 5,
      title: 'MCGI Leaflets Event Landing Page',
      description: 'Mobile-first event landing page web application designed for MCGI events with QR code-based promotion, multimedia features, and interactive communication tools.',
      fullDescription: 'Mobile-first event landing page web application designed for MCGI (Mass Indoctrination) events, created to provide fast and accessible digital engagement through QR code-based event promotion. The system allows users to scan QR codes printed on physical leaflets and instantly access a mobile-optimized platform containing event information, multimedia features, interactive communication tools, and session-related content.\n\nThe platform is designed to improve event accessibility and audience engagement by providing a centralized digital experience that works efficiently across mobile devices. Its lightweight and optimized architecture ensures fast loading performance, making it highly effective for real-world QR code scanning scenarios during public event promotions and outreach activities.\n\nThe system provides users with complete event details including schedules, dates, time, venue information, and direct access to Google Maps location integration for easier navigation and attendance. To improve participant interaction and engagement, the application also includes video recording functionality, allowing users to record and share video messages directly from their mobile devices.\n\nIntegrated communication tools enable users to instantly connect with organizers through multiple channels including direct phone calls, WhatsApp messaging, email access, and social sharing features. These functionalities improve communication efficiency and simplify participant inquiries and coordination during event campaigns.\n\nThe platform also features a multimedia session carousel that allows users to access recorded sessions, videos, and event-related media content in an organized and interactive format. An integrated admin settings panel provides configurable management options for updating event information, controlling displayed content, and maintaining system flexibility without requiring backend infrastructure.\n\nThe application is developed as a fully static web platform, eliminating the need for server-side backend processing while maintaining high-speed performance and reliability. This architecture improves deployment simplicity, scalability, and accessibility while reducing hosting and maintenance complexity.\n\nDesigned with responsive user interface principles, the system delivers a seamless mobile experience optimized for smartphones and tablet devices. Tailwind CSS was utilized to create a clean, modern, and responsive interface, while React and TypeScript were used to build scalable and maintainable frontend functionality.\n\nThis project demonstrates practical implementation of modern frontend web development technologies, focusing on performance optimization, responsive design, user engagement, and real-world deployment for digital event promotion systems.',
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Lucide React', 'PostCSS', 'Autoprefixer', 'Google Maps Integration', 'QR Code Event System', 'Mobile-Responsive Web Design', 'Netlify Deployment'],
      image: '/images/mcgi-thumb.png',
      video: '/videos/projects/mcgi-demo.mp4',
      videoThumbnail: '/images/mcgi-thumb.png',
      github: 'https://github.com/JONTECH1999/mcgi-.git',
      live: 'https://timely-kringle-a4d819.netlify.app/',
      category: 'React',
      media: [
        {
          type: 'image',
          src: '/images/mcgi-thumb.png',
          thumbnail: '/images/mcgi-thumb.png',
          label: 'Sessions of Doctrine',
          orientation: 'portrait',
        },
        {
          type: 'image',
          src: '/images/mcgi-main.png',
          thumbnail: '/images/mcgi-main.png',
          label: 'Videos of Bro Eli and Kuya Daniel',
          orientation: 'portrait',
        },
        {
          type: 'image',
          src: '/images/mcgi-services.png',
          thumbnail: '/images/mcgi-services.png',
          label: 'GMaps and Contacts and Other Info',
          orientation: 'portrait',
        },
        {
          type: 'image',
          src: '/images/leaflets printable.png',
          thumbnail: '/images/leaflets printable.png',
          label: 'leaflets printable',
          orientation: 'landscape',
        },
      ],
    },
    {
      id: 6,
      title: 'AVAA – Autopilot Virtual Agency Assistant',
      description: 'Employer-side IT resource management platform for identifying and selecting qualified IT professionals',
      fullDescription: 'Comprehensive employer-side IT resource management platform developed to streamline the process of identifying, evaluating, and selecting qualified IT professionals through a centralized and data-driven digital system. The platform is designed to help employers and organizations efficiently manage IT talent sourcing by replacing fragmented workflows and manual candidate searching with a structured, scalable, and intelligent resource management solution.\n\nThe system centralizes detailed IT professional profiles including technical skills, work experience, project background, specialization, and other relevant qualifications within a unified platform. This allows employers to quickly evaluate potential candidates and make informed workforce decisions using organized and accessible talent information.\n\nTo improve recruitment efficiency and workforce matching accuracy, the platform integrates an advanced criteria-based filtering and search engine that enables employers to locate IT professionals based on specific technical requirements, expertise, experience level, and project-related qualifications. This structured filtering mechanism minimizes manual searching and significantly improves the speed and precision of talent selection.\n\nThe platform is designed with scalable system architecture to support evolving workforce demands and continuously changing IT industry requirements. Its centralized structure enhances navigation, simplifies resource management workflows, and provides a more transparent and reliable approach to identifying suitable professionals for technical projects and organizational needs.\n\nThis project was developed as a collaborative team project during internship training, where the user was assigned as a Backend Developer responsible for supporting server-side functionality, database operations, backend logic implementation, and system integration processes. The project demonstrates practical industry experience in collaborative software development, backend engineering, database management, and scalable web application architecture within a professional development environment.',
      technologies: ['PHP 8.2+', 'Laravel 12', 'Laravel Sanctum', 'Inertia.js', 'React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Headless UI', 'Lucide React', 'Chart.js', 'Axios', 'Laravel Breeze', 'Docker', 'RESTful API', 'MySQL', 'PostgreSQL'],
      image: '/images/avaa-main.png',
      video: '/videos/projects/avaa-demo.mp4',
      videoThumbnail: '/videos/projects/avaa-thumb.png',
      github: 'https://github.com/Bilmark1009/AVAA-RMS.git',
      live: 'https://avaa-rms.autopilotvirtual.com/',
      youtube: 'https://www.youtube.com/watch?v=HO6Uzk6zJwE',
      category: 'PHP',
      media: [
        // ===== LOGIN FORM (CARD THUMBNAIL) =====
        {
          type: 'image',
          src: '/images/avaa-main.png',
          thumbnail: '/images/avaa-main.png',
          label: 'Login Form',
          orientation: 'landscape',
        },
        // ===== ADMIN PANEL IMAGES =====
        {
          type: 'image',
          src: '/images/portfolio-screenshot-01.png',
          thumbnail: '/images/portfolio-screenshot-01.png',
          label: 'Admin Dashboard',
          orientation: 'landscape',
        },
        {
          type: 'image',
          src: '/images/portfolio-screenshot-02.png',
          thumbnail: '/images/portfolio-screenshot-02.png',
          label: 'Admin User Management',
          orientation: 'landscape',
        },
        {
          type: 'image',
          src: '/images/portfolio-screenshot-03.png',
          thumbnail: '/images/portfolio-screenshot-03.png',
          label: 'Admin Job Management',
          orientation: 'landscape',
        },
        {
          type: 'image',
          src: '/images/portfolio-screenshot-04.png',
          thumbnail: '/images/portfolio-screenshot-04.png',
          label: 'Admin Verifications',
          orientation: 'landscape',
        },
        {
          type: 'image',
          src: '/images/portfolio-screenshot-05.png',
          thumbnail: '/images/portfolio-screenshot-05.png',
          label: 'Admin Report View Messages',
          orientation: 'landscape',
        },
        {
          type: 'image',
          src: '/images/portfolio-screenshot-06.png',
          thumbnail: '/images/portfolio-screenshot-06.png',
          label: 'Admin Report View Job Posts',
          orientation: 'landscape',
        },
        {
          type: 'image',
          src: '/images/portfolio-screenshot-07.png',
          thumbnail: '/images/portfolio-screenshot-07.png',
          label: 'Admin Account Settings',
          orientation: 'landscape',
        },
        {
          type: 'image',
          src: '/images/portfolio-screenshot-08.png',
          thumbnail: '/images/portfolio-screenshot-08.png',
          label: 'Admin Notifications',
          orientation: 'landscape',
        },
        // ===== JOBSEEKER PANEL IMAGES =====
        {
          type: 'image',
          src: '/images/portfolio-screenshot-09.png',
          thumbnail: '/images/portfolio-screenshot-09.png',
          label: 'Jobseeker Browse Jobs',
          orientation: 'landscape',
        },
        {
          type: 'image',
          src: '/images/portfolio-screenshot-10.png',
          thumbnail: '/images/portfolio-screenshot-10.png',
          label: 'Jobseeker Save Jobs',
          orientation: 'landscape',
        },
        {
          type: 'image',
          src: '/images/portfolio-screenshot-11.png',
          thumbnail: '/images/portfolio-screenshot-11.png',
          label: 'Jobseeker Application History',
          orientation: 'landscape',
        },
        {
          type: 'image',
          src: '/images/portfolio-screenshot-12.png',
          thumbnail: '/images/portfolio-screenshot-12.png',
          label: 'Jobseeker Job History',
          orientation: 'landscape',
        },
        {
          type: 'image',
          src: '/images/portfolio-screenshot-13.png',
          thumbnail: '/images/portfolio-screenshot-13.png',
          label: 'Jobseeker Messages',
          orientation: 'landscape',
        },
        {
          type: 'image',
          src: '/images/portfolio-screenshot-14.png',
          thumbnail: '/images/portfolio-screenshot-14.png',
          label: 'Jobseeker Settings',
          orientation: 'landscape',
        },
        // ===== EMPLOYER PANEL IMAGES =====
        {
          type: 'image',
          src: '/images/portfolio-screenshot-15.png',
          thumbnail: '/images/portfolio-screenshot-15.png',
          label: 'Employer Dashboard',
          orientation: 'landscape',
        },
        {
          type: 'image',
          src: '/images/portfolio-screenshot-16.png',
          thumbnail: '/images/portfolio-screenshot-16.png',
          label: 'Employer User Management',
          orientation: 'landscape',
        },
        {
          type: 'image',
          src: '/images/portfolio-screenshot-17.png',
          thumbnail: '/images/portfolio-screenshot-17.png',
          label: 'Employer Job Management',
          orientation: 'landscape',
        },
        {
          type: 'image',
          src: '/images/portfolio-screenshot-18.png',
          thumbnail: '/images/portfolio-screenshot-18.png',
          label: 'Employer Interview',
          orientation: 'landscape',
        },
        {
          type: 'image',
          src: '/images/portfolio-screenshot-19.png',
          thumbnail: '/images/portfolio-screenshot-19.png',
          label: 'Employer Messages',
          orientation: 'landscape',
        },
        {
          type: 'image',
          src: '/images/portfolio-screenshot-20.png',
          thumbnail: '/images/portfolio-screenshot-20.png',
          label: 'Employer Account Settings',
          orientation: 'landscape',
        },
        // ===== PUBLIC PAGES IMAGES =====
        {
          type: 'image',
          src: '/images/portfolio-screenshot-21.png',
          thumbnail: '/images/portfolio-screenshot-21.png',
          label: 'Home',
          orientation: 'landscape',
        },
        {
          type: 'image',
          src: '/images/portfolio-screenshot-22.png',
          thumbnail: '/images/portfolio-screenshot-22.png',
          label: 'About Us',
          orientation: 'landscape',
        },
        {
          type: 'image',
          src: '/images/portfolio-screenshot-23.png',
          thumbnail: '/images/portfolio-screenshot-23.png',
          label: 'How It Works',
          orientation: 'landscape',
        },
        {
          type: 'image',
          src: '/images/portfolio-screenshot-24.png',
          thumbnail: '/images/portfolio-screenshot-24.png',
          label: 'Services',
          orientation: 'landscape',
        },
        {
          type: 'image',
          src: '/images/portfolio-screenshot-25.png',
          thumbnail: '/images/portfolio-screenshot-25.png',
          label: 'FAQ',
          orientation: 'landscape',
        },
        {
          type: 'image',
          src: '/images/portfolio-screenshot-26.png',
          thumbnail: '/images/portfolio-screenshot-26.png',
          label: 'Register Now',
          orientation: 'landscape',
        },
        // ===== DEBUGGING IMAGES =====
        {
          type: 'image',
          src: '/images/portfolio-screenshot-28.png',
          thumbnail: '/images/portfolio-screenshot-28.png',
          label: 'Debugging Sheet',
          orientation: 'landscape',
        },
        {
          type: 'image',
          src: '/images/portfolio-screenshot-29.png',
          thumbnail: '/images/portfolio-screenshot-29.png',
          label: 'Debugging Sheet 2',
          orientation: 'landscape',
        },
        // ===== LANDSCAPE VIDEO =====
        {
          type: 'video',
          src: '/videos/projects/portfolio-demo-video-01.webm',
          thumbnail: '/images/portfolio-video-thumbnail.png',
          label: 'Workflow Video',
          orientation: 'landscape',
        },
      ],
    },
  ];

  const categories = ['all', 'React', 'PHP', 'Java'];

  const filteredProjects = projects.filter((project) =>
    activeFilter === 'all' ? true : project.category === activeFilter
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.8,
      },
    },
    exit: {
      opacity: 0,
      x: 100,
      scale: 0.95,
      rotate: 2,
      transition: { 
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="relative py-20 px-4 md:px-0">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#c29f74] to-[#dfbe95] mx-auto rounded-full"></div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === category
                  ? 'btn-primary'
                  : 'btn-secondary'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => {
              const hasVideo = Boolean(project.video || project.media?.some(m => m.type === 'video'));
              const mediaCount = project.media?.length || 0;
              const previewImage = project.videoThumbnail || project.image || project.media?.[0]?.src || '/images/placeholder.png';

              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  exit="exit"
                  layout
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                  className="glass-effect rounded-2xl overflow-hidden border border-white/10 hover:border-[#c29f74]/40 hover:shadow-2xl hover:shadow-[#c29f74]/10 flex flex-col justify-between transition-colors duration-300 group"
                >
                  {/* Top Media Preview Container */}
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-900/60">
                    <img
                      src={previewImage}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/placeholder.png';
                      }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
                      <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#b88755]/90 text-white shadow-lg backdrop-blur-md">
                        {project.category}
                      </span>

                      {mediaCount > 1 && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setMediaModalProjectId(project.id);
                            setMediaModalIndex(0);
                            setMediaModalOpen(true);
                          }}
                          className="pointer-events-auto flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-black/60 hover:bg-black/80 text-white/90 backdrop-blur-md transition-colors cursor-pointer border border-white/10"
                          title="View Media Gallery"
                        >
                          <FiImage size={12} />
                          <span>{mediaCount} items</span>
                        </button>
                      )}
                    </div>

                    {/* Prominent Center Play Button if Video Available */}
                    {hasVideo && (
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <motion.button
                          type="button"
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => {
                            if (project.media && project.media.length > 0) {
                              const vidIdx = project.media.findIndex(m => m.type === 'video');
                              setMediaModalProjectId(project.id);
                              setMediaModalIndex(vidIdx >= 0 ? vidIdx : 0);
                              setMediaModalOpen(true);
                            } else {
                              setSelectedProject(project);
                            }
                          }}
                          className="w-14 h-14 rounded-full bg-gradient-to-r from-[#c29f74] to-[#a88154] flex items-center justify-center text-white shadow-xl shadow-[#c29f74]/30 border-2 border-white/80 group-hover:shadow-[#c29f74]/60 transition-all cursor-pointer"
                          aria-label="Play Video Demo"
                        >
                          <FiPlay size={22} className="ml-1 text-white" />
                        </motion.button>
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-[#a88154] dark:group-hover:text-[#dfbe95] transition-colors line-clamp-1">
                        {project.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-white/70 leading-relaxed mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] font-medium px-2 py-0.5 rounded-md"
                            style={{
                              backgroundColor: 'rgba(194, 159, 116, 0.12)',
                              color: 'var(--color-primary)',
                              border: '1px solid rgba(194, 159, 116, 0.25)',
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="text-[11px] font-medium px-1.5 py-0.5 rounded-md text-slate-500 dark:text-white/40">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Interactive Action Bar */}
                    <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between gap-2">
                      <motion.button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold bg-[#b88755] hover:bg-[#a88154] text-white shadow-md shadow-[#c29f74]/20 transition-all cursor-pointer"
                      >
                        <FiInfo size={14} />
                        <span>Case Study</span>
                      </motion.button>

                      {hasVideo && (
                        <motion.button
                          type="button"
                          onClick={() => {
                            if (project.media && project.media.length > 0) {
                              const vidIdx = project.media.findIndex(m => m.type === 'video');
                              setMediaModalProjectId(project.id);
                              setMediaModalIndex(vidIdx >= 0 ? vidIdx : 0);
                              setMediaModalOpen(true);
                            } else {
                              setSelectedProject(project);
                            }
                          }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-1.5 py-2 px-2.5 rounded-lg text-xs font-semibold text-[#a88154] dark:text-[#dfbe95] bg-[#c29f74]/10 hover:bg-[#c29f74]/20 border border-[#c29f74]/30 transition-all cursor-pointer"
                          title="Watch Demo Video"
                        >
                          <FiPlay size={13} />
                          <span className="hidden sm:inline">Demo</span>
                        </motion.button>
                      )}

                      {/* Icon Links */}
                      <div className="flex items-center gap-1">
                        {project.github && project.github !== '#' && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.15, y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 rounded-lg text-slate-600 dark:text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                            title="GitHub Repository"
                          >
                            <FiGithub size={16} />
                          </motion.a>
                        )}

                        {project.live && project.live !== '#' && (
                          <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.15, y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 rounded-lg text-[#c29f74] hover:text-[#dfbe95] hover:bg-white/10 transition-colors"
                            title="Live Demo Website"
                          >
                            <FiExternalLink size={16} />
                          </motion.a>
                        )}

                        {project.youtube && (
                          <motion.a
                            href={project.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.15, y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 rounded-lg text-red-500 hover:text-red-400 hover:bg-white/10 transition-colors"
                            title="YouTube Video"
                          >
                            <FaYoutube size={16} />
                          </motion.a>
                        )}

                        {project.facebook && (
                          <motion.a
                            href={project.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.15, y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 rounded-lg text-blue-500 hover:text-blue-400 hover:bg-white/10 transition-colors"
                            title="Facebook Post"
                          >
                            <FaFacebook size={16} />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-effect rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <div className="sticky top-0 flex justify-end p-4 bg-slate-200/30 dark:bg-slate-900/50 backdrop-blur-sm">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-lg hover:bg-slate-300/40 dark:hover:bg-white/20 transition-colors"
                >
                  <FiX size={24} />
                </motion.button>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                {/* Media Carousel/Gallery */}
                {selectedProject.media && selectedProject.media.length > 0 ? (
                  <div className="mb-6">
                    <MediaCarousel
                      media={selectedProject.media}
                      title={selectedProject.title}
                      initialIndex={carouselIndex}
                      onIndexChange={setCarouselIndex}
                    />
                  </div>
                ) : selectedProject.video ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 relative group/video"
                  >
                    <video
                      controls
                      autoPlay
                      playsInline
                      poster={selectedProject.videoThumbnail || selectedProject.image}
                      className="w-full h-auto max-h-96 object-contain rounded-lg shadow-2xl bg-black"
                      controlsList="nodownload"
                    >
                      {selectedProject.video?.endsWith('.webm') && (
                        <source src={selectedProject.video} type="video/webm" />
                      )}
                      {(selectedProject.video?.endsWith('.mp4') || !selectedProject.video?.includes('.')) && (
                        <source src={selectedProject.video} type="video/mp4" />
                      )}
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute top-3 right-3 bg-black/60 px-3 py-1 rounded-full text-sm text-white backdrop-blur-sm">
                      Demo Video
                    </div>
                  </motion.div>
                ) : (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/placeholder.png';
                    }}
                  />
                )}

                {/* Title and Category */}
                <div className="mb-6">
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-2">{selectedProject.title}</h2>
                  <div className="inline-block px-3 py-1 bg-[#c29f74]/15 text-[#a88154] dark:text-[#dfbe95] rounded-full text-xs sm:text-sm font-semibold border border-[#c29f74]/25">
                    {selectedProject.category}
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-700 dark:text-white/80 text-base sm:text-lg mb-8 leading-relaxed whitespace-pre-wrap">
                  {selectedProject.fullDescription}
                </p>

                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="text-slate-900 dark:text-white font-semibold mb-4 text-base sm:text-lg">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-[#c29f74]/10 text-[#a88154] dark:text-[#dfbe95] rounded-lg text-xs sm:text-sm font-medium border border-[#c29f74]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 flex-wrap">
                  {selectedProject.github && selectedProject.github !== '#' && (
                    <motion.a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary flex items-center gap-2 text-sm sm:text-base"
                    >
                      <FiGithub size={20} />
                      View on GitHub
                    </motion.a>
                  )}
                  {selectedProject.live && selectedProject.live !== '#' && (
                    <motion.a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-secondary flex items-center gap-2 text-sm sm:text-base"
                    >
                      <FiExternalLink size={20} />
                      Live Demo Website
                    </motion.a>
                  )}
                  {(selectedProject.id === 3 || selectedProject.id === 4 || selectedProject.id === 5 || selectedProject.id === 6) && selectedProject.youtube && (
                    <motion.a
                      href={selectedProject.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-secondary flex items-center gap-2"
                    >
                      <FaYoutube size={20} />
                      View on YouTube
                    </motion.a>
                  )}
                  {selectedProject.facebook && (
                    <motion.a
                      href={selectedProject.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-secondary flex items-center gap-2"
                    >
                      <FaFacebook size={20} />
                      View on Facebook
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Media Modal */}
      {mediaModalProjectId !== null && (
        <MediaModal
          isOpen={mediaModalOpen}
          media={filteredProjects.find(p => p.id === mediaModalProjectId)?.media || []}
          currentIndex={mediaModalIndex}
          onClose={() => setMediaModalOpen(false)}
          onPrev={() => {
            setMediaModalIndex((prev) => {
              const max = filteredProjects.find(p => p.id === mediaModalProjectId)?.media?.length || 1;
              return prev === 0 ? max - 1 : prev - 1;
            });
          }}
          onNext={() => {
            setMediaModalIndex((prev) => {
              const max = filteredProjects.find(p => p.id === mediaModalProjectId)?.media?.length || 1;
              return prev === max - 1 ? 0 : prev + 1;
            });
          }}
          title={filteredProjects.find(p => p.id === mediaModalProjectId)?.title || 'Project Media'}
        />
      )}
    </section>
  );
};

export default Projects;
