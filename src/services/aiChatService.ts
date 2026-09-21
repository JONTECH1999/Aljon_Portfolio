/**
 * AI Chat Service for 'Aljon' Portfolio Assistant
 * Powered by Anthropic Claude Messages API with Smart Local Fallback
 */

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  isFallback?: boolean;
}

export const ALJON_SYSTEM_PROMPT = `
You are "Aljon", the personal AI assistant and digital twin representing Aljon Alonzo on his portfolio website.
You are an exceptionally accurate, helpful, and articulate software engineer and technical representative.

### PRIMARY GOALS:
1. **Explain Everything in Simple, Easy-to-Understand Language**:
   - Many people who chat with you are HR recruiters, hiring managers, non-technical clients, or everyday visitors.
   - **Always lead with a plain-English summary**: Start with 1 to 2 simple sentences explaining what a project, skill, or concept actually does in the real world and who it helps, avoiding confusing technical jargon upfront.
   - **Use intuitive everyday analogies** when explaining complex technical terms or hardware:
     - *APIs*: Compare to a friendly waiter taking an order from a customer's table to the kitchen and bringing back the meal.
     - *Backend Development*: Compare to the engine inside a car or the kitchen in a restaurant — the behind-the-scenes system that securely handles data, processes logins, and makes everything run smoothly.
     - *Frontend Development*: Compare to the car's steering wheel, dashboard, and seats — the visual part users can see, tap, and click.
     - *BAHT Smart Helmet / Ultrasonic Sensors*: Compare to the parking backup beepers on modern cars, but built into a lightweight wearable helmet that gently buzzes and beeps to prevent visually impaired people from bumping into obstacles, while GPS keeps family members informed.
     - *Microcontrollers & IoT (ESP32 / STM32)*: Giving everyday physical objects "brains" and sensors so they can sense the real world (like rain or obstacles) and react automatically.
     - *Databases*: A secure digital filing cabinet where information is neatly sorted so it can be retrieved in milliseconds.
     - *AI Developer Tools (GitHub Copilot, Claude, Gemini)*: Like having a smart digital co-pilot sitting beside a programmer to catch typos, draft code faster, and speed up testing.
   - **Dual Structure**:
     - *Layer 1 (Non-Tech Summary)*: Simple, friendly explanation of the real-world purpose and benefits.
     - *Layer 2 (Technical Details)*: Clean bullet points with the exact languages, frameworks, sensors, and technical architecture for engineers and technical interviewers.

2. **Absolute Accuracy & Grounding**:
   - Strictly adhere to Aljon Alonzo's verified credentials and background. Never guess or hallucinate facts.
   - Always represent him truthfully, positively, and professionally.

3. **Strict Formatting Rules**:
   - **NO EMOJIS**: Strictly DO NOT use emojis anywhere in your responses (no icons, no pictograms). Use clean typography, markdown formatting, bullet points, bold text, and structured sections instead.
   - **Language**: English and Filipino / Tagalog. If the user asks in Filipino/Tagalog, answer politely in natural Tagalog or Taglish while keeping the simple explanations.

### VERIFIED PROFILE OF ALJON ALONZO:
- **Full Name**: Aljon R. Alonzo
- **Birth Year & Age**: Born in 1999 (mid-20s, around 25-26 years old)
- **Title**: Computer Science Graduate & Full-Stack & Embedded Software Developer
- **Degree**: Bachelor of Science in Computer Science (BSCS)
- **Institution**: Immaculada Concepcion College, North Caloocan City
- **Graduation Date**: June 16, 2026
- **Spelling Requirement**: The college name is strictly spelled **Immaculada Concepcion College** (with a "d", NEVER with a "t" as "Immaculata").
- **Location**: Block 8 Lot 4 Manggahan Malaria, North Caloocan City, Metro Manila, Philippines
- **Email**: aljonrisasalonzo@gmail.com
- **Phone**: +63 951 364 4817 / 09513644817
- **Portfolio URL**: cute-marigold-6a6a30.netlify.app
- **GitHub**: https://github.com/JONTECH1999
- **LinkedIn**: https://www.linkedin.com/in/aljon-alonzo-ba3bb4339/
- **Facebook**: https://web.facebook.com/aljon11onsi

### WORK AVAILABILITY & PREFERENCES:
- **Earliest Start Date**: Available to start **immediately** (0 days notice; ready for immediate onboarding and technical interviews).
- **Work Setup**: Primarily **Remote or Hybrid** arrangements (open to hybrid schedules anywhere across Metro Manila, including Quezon City, BGC, Makati, Ortigas, and Caloocan).
- **Salary Expectations**:
  - Baseline monthly expected range: **PHP 25,000 – PHP 35,000**.
  - Open to negotiation based on comprehensive benefits (HMO), mentorship opportunities, and long-term career growth.
- **Top Priority Job Roles**:
  1. Backend Developer (PHP / Laravel / Node.js)
  2. Full-Stack Developer (React / Laravel / TypeScript)
  3. Embedded Systems / IoT Firmware Engineer (ESP32 / STM32 / C++)

### VERIFIED WORK EXPERIENCE:
- **Certicode | Remote Backend Developer Intern** (January 2026 – April 2026):
  - *Simple explanation*: Aljon worked remotely helping build the secure "behind-the-scenes" engine of web applications. He used modern AI tools like GitHub Copilot to write code faster and catch software bugs early.
  - *Technical achievements*:
    - Streamlined backend code generation, algorithm refactoring, and unit testing using GitHub Copilot and prompt engineering in VS Code.
    - Developed and maintained server-side features using PHP, JavaScript, and MySQL in Agile sprints.
    - Designed and tested RESTful APIs and backend business logic for high-efficiency data operations.
    - Managed relational database schemas and complex CRUD queries.
    - Collaborated via Git/GitHub and authored technical API documentation.

### KEY PROJECTS (EXPLAINED SIMPLY & TECHNICALLY):
- **Official Google Drive Demo Folder**: [Open Project Demonstrations](https://drive.google.com/drive/folders/1Ga65VCl8V-m3EKraqQ-sxeIr1F_BSlIs?usp=sharing) (Contains working video demonstrations, hardware prototype tests, and thesis documentation).

1. **Blind Assistive Head Tech (BAHT) | Lead Thesis Developer**:
   - *In Simple Terms*: A smart assistive wearable helmet created to help blind and visually impaired people navigate safely. Just like parking sensors in a car that beep when you get close to a wall, this helmet detects nearby obstacles and warns the wearer through gentle vibrations and sound alerts. It also includes GPS so loved ones can see where the wearer is, plus a mobile app to customize settings.
   - *Technical Specs*:
     - Microcontroller: ESP32 programmed in C++.
     - 4 ultrasonic distance sensors with real-time non-blocking polling and Exponential Moving Average (EMA) filtering to eliminate false alarms.
     - Dual vibration haptic feedback motors, audio buzzer alerts, and GPS module integration.
     - Custom Android companion configuration application.
     - Honors: 2nd Place at BSCS Symposium 2025 Robotics Competition; Department Outstanding Contribution Award; Thesis Team Leader.
     - Presented to PDAO Caloocan (Persons with Disability Affairs Office) and NCDA (National Council on Disability Affairs); submitted for DOST funding evaluation.

2. **ALMKA Blind Web App | IoT & Full-Stack Developer**:
   - *In Simple Terms*: A companion live website for the assistive helmet. It acts like a guardian dashboard where caregivers or family members can open a browser to see the user's real-time GPS location and camera feed.
   - *Technical Specs*: ESP32, ESP32-CAM, GPS modules, React frontend, PHP/MySQL backend for live telemetry streaming.

3. **Automated Rain Detection Cargo Cover | Embedded Developer**:
   - *In Simple Terms*: An intelligent weather-protection system for delivery trucks and outdoor cargo. When rain sensors detect the first drops of rain, a motorized cover automatically slides over the cargo to keep goods dry, and reopens when the weather clears.
   - *Technical Specs*: STM32 microcontroller running C/C++ firmware with a finite state-machine architecture, rain sensor modules, stepper motor drivers, and alert sound indicators.

4. **ALMKA Water Billing & Customer Management Portal**:
   - *In Simple Terms*: A digital billing and customer management website for water utilities that replaces manual paper meter reading. It automatically calculates customer water bills and sends instant SMS text notifications.
   - *Technical Specs*: Built with Laravel, PHP, MySQL, React/Blade, SMS gateway integration, and automated calculation modules.

### CORE TECHNICAL SKILLS:
- **AI-Accelerated Development**: GitHub Copilot, Prompt Engineering, Gemini, ChatGPT, Claude AI, Model Context Protocol (MCP), AI-assisted debugging.
- **Web & Backend**: PHP, Laravel, React, Inertia.js, Node.js, TypeScript, JavaScript, RESTful APIs, Tailwind CSS.
- **Embedded & IoT**: ESP32, STM32, Arduino, ESP-01, C/C++ firmware, UART, SPI, I2C, sensor integration.
- **Databases**: MySQL, PostgreSQL, relational schema design, SQL query optimization.
- **Hardware & Repair**: Hardware diagnostics, mobile phone repair, Android firmware flashing, IoT circuit wiring.

### LEADERSHIP & COMMUNITY:
- **Thesis Team Leader**: Led a 3-member engineering team across software architecture, circuit wiring, field trials, and thesis defense.
- **Youth Organization President**: Led 63 members and 7 executive officers in community outreach programs and service initiatives.
`;

const LOCAL_STORAGE_KEY = 'aljon_anthropic_api_key';

/**
 * Helper to simulate realistic thinking delay
 */
export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Retrieve the active Anthropic API Key from localStorage or environment variables
 */
export const getActiveApiKey = (): string => {
  if (typeof window !== 'undefined') {
    const local = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (local && local.trim().length > 0) return local.trim();
  }
  return (import.meta.env.VITE_ANTHROPIC_API_KEY || '').trim();
};

/**
 * Persist custom API key to localStorage
 */
export const setStoredApiKey = (key: string): void => {
  if (typeof window !== 'undefined') {
    if (key.trim()) {
      localStorage.setItem(LOCAL_STORAGE_KEY, key.trim());
    } else {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
  }
};

/**
 * Checks if an API key is available
 */
export const hasConfiguredApiKey = (): boolean => {
  return getActiveApiKey().length > 0;
};

/**
 * Intelligent pattern-matching fallback engine
 * Provides immediate, accurate, non-tech-friendly answers if Anthropic API is not configured or offline.
 * Absolutely NO emojis.
 */
export const getSmartFallbackResponse = (query: string): string => {
  const q = query.toLowerCase().trim();

  // Salary & Compensation
  if (
    q.includes('salary') ||
    q.includes('rate') ||
    q.includes('compensation') ||
    q.includes('pay') ||
    q.includes('expect') ||
    q.includes('how much')
  ) {
    return `### Expected Salary & Compensation

Aljon keeps his salary expectations realistic, competitive, and open to discussion:

- **Expected Range**: **PHP 25,000 – PHP 35,000 per month** for junior software engineering, backend developer, or full-stack roles.
- **Open to Negotiation**: Highly flexible depending on total benefits (such as healthcare/HMO, government benefits), hybrid perks, mentorship opportunities, and long-term career growth.

He is focused on joining a forward-thinking team where he can deliver immediate value and continue expanding his skills.`;
  }

  // Availability & Start Date
  if (
    q.includes('start') ||
    q.includes('available') ||
    q.includes('notice') ||
    q.includes('when can') ||
    q.includes('immediate') ||
    q.includes('join')
  ) {
    return `### Work Availability & Start Date

- **Earliest Start Date**: Aljon is available to start **immediately**.
- **Notice Period**: None (0 days notice required).
- **Readiness**: Graduating with a Bachelor of Science in Computer Science from **Immaculada Concepcion College** on **June 16, 2026**, he is 100% ready for technical interviews, coding challenges, and immediate onboarding for full-time or contract positions.`;
  }

  // Work Setup & Location
  if (
    q.includes('remote') ||
    q.includes('hybrid') ||
    q.includes('onsite') ||
    q.includes('setup') ||
    q.includes('work arrangement') ||
    q.includes('office') ||
    q.includes('where do you live') ||
    q.includes('location')
  ) {
    return `### Work Arrangement Preferences

- **Primary Preference**: **Remote or Hybrid**.
- **Accessible Hybrid Locations**: Conveniently accessible across Metro Manila, including Quezon City, Bonifacio Global City (BGC), Makati, Ortigas, and Caloocan.
- **Home Base**: North Caloocan City, Metro Manila, Philippines (equipped with a reliable home workstation and high-speed internet).`;
  }

  // Demos, Videos & Google Drive
  if (
    q.includes('demo') ||
    q.includes('video') ||
    q.includes('drive') ||
    q.includes('proof') ||
    q.includes('watch') ||
    q.includes('recording')
  ) {
    return `### Project Demonstrations & Video Proof

You can watch real working video recordings, hardware tests, and prototype walkthroughs directly on Google Drive:

- **Official Google Drive Demo Folder**: [Open Video Demonstrations](https://drive.google.com/drive/folders/1Ga65VCl8V-m3EKraqQ-sxeIr1F_BSlIs?usp=sharing)
- **What is inside**:
  - Live obstacle detection tests for the BAHT Smart Assistive Helmet.
  - Haptic vibration and sound buzzer demos.
  - Mobile Android configuration app walkthrough.
  - Presentation photos at PDAO Caloocan and NCDA.

You can also explore live code and interactive media in the **[Featured Projects](#projects)** section on this page.`;
  }

  // Projects & Thesis (Plain English + Tech details)
  if (
    q.includes('project') ||
    q.includes('thesis') ||
    q.includes('baht') ||
    q.includes('helmet') ||
    q.includes('blind') ||
    q.includes('cargo') ||
    q.includes('rain') ||
    q.includes('water billing') ||
    q.includes('almka')
  ) {
    return `### Key Projects (Explained Simply & Technically)

Here is an easy-to-understand breakdown of Aljon's featured engineering projects:

1. **Blind Assistive Head Tech (BAHT) | Lead Thesis Developer**
   - **In Plain English**: Think of this as parking backup sensors in modern cars, but miniaturized into a wearable helmet. It helps blind and visually impaired people walk safely by sensing obstacles in front of them and giving gentle vibration and audio warnings. It also has GPS so family members know where they are.
   - **Technical Details**: Built with an ESP32 microcontroller, C++ firmware, 4 ultrasonic distance sensors with signal smoothing (EMA filtering), vibration motors, GPS, and a custom Android companion app.
   - **Recognition**: Awarded 2nd Place in the BSCS Symposium Robotics Competition; Department Outstanding Contribution Award; presented to PDAO Caloocan and NCDA.
   - **Video Demos**: [Watch Working Videos on Google Drive](https://drive.google.com/drive/folders/1Ga65VCl8V-m3EKraqQ-sxeIr1F_BSlIs?usp=sharing)

2. **ALMKA Blind Web App | IoT & Full-Stack Developer**
   - **In Plain English**: A live monitoring website for caregivers. It shows the helmet user's real-time location on a map and connects to camera feeds so family members can check in anytime from their phone or computer.
   - **Technical Details**: ESP32-CAM and GPS telemetry streams connected to a responsive React, PHP, and MySQL web application.

3. **Automated Rain Detection Cargo Cover | Embedded Developer**
   - **In Plain English**: An automated weather guard for cargo trucks. When it senses rain, a motorized cover slides shut automatically to protect merchandise, and reopens when the rain stops.
   - **Technical Details**: Programmed on an STM32 microcontroller in C/C++ using state-machine logic, rain sensors, and stepper motors.

4. **ALMKA Water Utility Billing Platform | Full-Stack Developer**
   - **In Plain English**: A digital management portal for water providers that replaces manual paper billing with automated bill calculations and instant SMS payment reminders to customers.
   - **Technical Details**: Built with Laravel, PHP, MySQL, and React.

Check out the **[Featured Projects](#projects)** section for photos and technical breakdowns.`;
  }

  // Work Experience / Certicode
  if (
    q.includes('certicode') ||
    q.includes('experience') ||
    q.includes('work') ||
    q.includes('intern') ||
    q.includes('ojt') ||
    q.includes('job history')
  ) {
    return `### Professional Experience

**Certicode | Remote Backend Developer Intern (January 2026 – April 2026)**

- **In Plain English**: Aljon worked as a backend developer, which means building the behind-the-scenes engine that powers websites — handling user logins, storing data securely, and connecting different services together. He also used modern AI coding assistants (like GitHub Copilot) to write code faster and catch mistakes early.

- **Key Responsibilities & Achievements**:
  - Accelerated backend feature development and reduced testing time using GitHub Copilot and context-aware prompt engineering in VS Code.
  - Developed server-side features using PHP, JavaScript, and MySQL in an Agile team environment.
  - Designed and tested RESTful APIs to deliver fast and reliable data exchange between the server and the website interface.
  - Handled relational database management, CRUD operations, and bug fixes.
  - Managed version control with Git/GitHub and wrote clear technical documentation.`;
  }

  // Skills & Tech Stack (Non-Tech Explanation + Specifics)
  if (
    q.includes('skill') ||
    q.includes('stack') ||
    q.includes('technology') ||
    q.includes('tool') ||
    q.includes('what can you do') ||
    q.includes('capable')
  ) {
    return `### Core Technical Skills (Explained for Everyone)

Aljon's skillset bridges modern web software, smart physical hardware, and AI productivity tools:

1. **AI & Developer Productivity**:
   - *What it means*: Using smart AI tools like GitHub Copilot, ChatGPT, Claude, and Gemini to write cleaner code, solve complex bugs faster, and speed up testing.
   - *Tools*: GitHub Copilot, Prompt Engineering, Model Context Protocol (MCP), Git, Docker, Postman, VS Code.

2. **Web & Backend Development**:
   - *What it means*: Building both the visual parts of websites that people interact with (frontend) and the secure behind-the-scenes database engines that store information (backend).
   - *Stack*: PHP, Laravel, React, TypeScript, JavaScript, Node.js, Inertia.js, RESTful APIs, Tailwind CSS.

3. **Smart Hardware & IoT (Internet of Things)**:
   - *What it means*: Giving everyday physical items "brains" and sensors so they can sense the real world (like distance, heat, or rain) and act automatically.
   - *Technologies*: ESP32, STM32, Arduino, Embedded C/C++, sensor integration, circuit wiring.

4. **Databases & Systems**:
   - *What it means*: Secure digital filing cabinets that organize information so it can be searched and updated in milliseconds.
   - *Technologies*: MySQL, PostgreSQL, relational database design, SQL query optimization.`;
  }

  // Education & Degree
  if (
    q.includes('education') ||
    q.includes('college') ||
    q.includes('degree') ||
    q.includes('school') ||
    q.includes('graduate') ||
    q.includes('university')
  ) {
    return `### Educational Background

- **Degree**: Bachelor of Science in Computer Science (BSCS)
- **Institution**: **Immaculada Concepcion College**, North Caloocan City (spelled with a "d", not a "t")
- **Graduation Date**: **June 16, 2026**
- **Academic Highlights**:
  - Thesis Team Leader for the BAHT Smart Assistive Helmet project.
  - 2nd Place Winner in the BSCS Symposium 2025 Robotics Competition.
  - Department Outstanding Contribution Award recipient for innovations in assistive technology.`;
  }

  // Leadership & Community
  if (
    q.includes('leader') ||
    q.includes('president') ||
    q.includes('youth') ||
    q.includes('team') ||
    q.includes('organization')
  ) {
    return `### Leadership & Community Roles

Beyond technical engineering, Aljon has a proven track record of teamwork and leadership:

- **Thesis Team Leader (2024 – 2025)**:
  - Led a 3-person engineering team in designing the BAHT assistive helmet from concept to prototype.
  - Coordinated software code, electronics wiring, user safety field tests, and formal thesis presentations before academic panels and government disability councils.

- **Youth Organization President**:
  - Managed 63 active members and 7 executive officers.
  - Spearheaded community outreach programs, youth development workshops, and civic service activities.`;
  }

  // Languages Spoken
  if (
    q.includes('language') &&
    (q.includes('speak') || q.includes('tagalog') || q.includes('english') || q.includes('filipino'))
  ) {
    return `### Languages Spoken

Aljon is bilingual with full professional communication skills:

- **English**: Full professional proficiency (fluent in written technical documentation, verbal presentations, and team meetings).
- **Filipino / Tagalog**: Native proficiency.`;
  }

  // Age & Birthday
  if (
    q.includes('how old') ||
    q.includes('age') ||
    q.includes('birth') ||
    q.includes('born')
  ) {
    return `Aljon Alonzo was born in 1999 and is currently in his mid-20s (around 25 to 26 years old). He is graduating with a Bachelor of Science in Computer Science from Immaculada Concepcion College on June 16, 2026.`;
  }

  // Contact, Hire, Availability & Resume
  if (
    q.includes('hire') ||
    q.includes('contact') ||
    q.includes('email') ||
    q.includes('phone') ||
    q.includes('reach') ||
    q.includes('interview') ||
    q.includes('job') ||
    q.includes('resume')
  ) {
    return `### How to Contact & Hire Aljon

Aljon is actively seeking full-time or contract software roles and is ready to start **immediately**.

- **Email**: [aljonrisasalonzo@gmail.com](mailto:aljonrisasalonzo@gmail.com)
- **Phone / Mobile**: [+63 951 364 4817](tel:+639513644817) (09513644817)
- **Location**: North Caloocan City, Metro Manila, Philippines
- **Portfolio**: [cute-marigold-6a6a30.netlify.app](https://cute-marigold-6a6a30.netlify.app)
- **GitHub**: [github.com/JONTECH1999](https://github.com/JONTECH1999)
- **LinkedIn**: [linkedin.com/in/aljon-alonzo-ba3bb4339](https://www.linkedin.com/in/aljon-alonzo-ba3bb4339/)

### Quick Summary for Recruiters:
- **Roles**: Backend Developer (PHP/Laravel), Full-Stack Developer (React/Laravel), Embedded IoT Developer (ESP32/C++).
- **Availability**: Immediate (0 days notice).
- **Setup**: Remote or Hybrid across Metro Manila.
- **Salary**: PHP 25,000 – PHP 35,000 / month (negotiable).`;
  }

  // General Concept: What is an API?
  if (q.includes('what is an api') || q.includes('what is api') || q.includes('explain api')) {
    return `### What is an API? (Explained in Plain English)

Think of an **API** (Application Programming Interface) like a **waiter in a restaurant**:

1. You are sitting at a table with a menu.
2. The kitchen is the system that prepares the food.
3. You cannot walk into the kitchen yourself to cook. Instead, the **waiter** takes your order, delivers it to the kitchen, and brings your meal back to your table.

In computer terms, an API is a secure messenger that lets two different software applications talk to each other and exchange information safely without having to know how the other system is built inside.`;
  }

  // General Concept: Backend vs Frontend
  if (
    q.includes('backend vs frontend') ||
    q.includes('frontend vs backend') ||
    q.includes('what is backend') ||
    q.includes('what is frontend')
  ) {
    return `### Frontend vs. Backend (Explained in Plain English)

Think of a website or app like a **car**:

- **Frontend (The Surface)**: This is the steering wheel, dashboard, seats, and touchscreen. It is everything the user sees, touches, and clicks on. Technologies used include **React, HTML, CSS, and JavaScript**.
- **Backend (The Engine)**: This is the engine under the hood, the fuel injection, and the transmission. You do not see it while driving, but without it, the car does not move. The backend securely checks passwords, stores data, and processes payments. Technologies used include **PHP, Laravel, Node.js, and MySQL**.

Aljon has hands-on experience in both, with a strong focus on backend and system architecture!`;
  }

  // General Concept: What is IoT?
  if (q.includes('what is iot') || q.includes('internet of things') || q.includes('embedded')) {
    return `### What is IoT & Embedded Systems? (In Plain English)

**IoT** stands for the **Internet of Things**.

In simple terms, it means giving everyday physical items (like a helmet, a rain cover, or a water meter) a tiny computer "brain" and sensors so they can connect to the internet or communicate with humans automatically.

For example, in Aljon's **BAHT Thesis Project**, he attached small sensors to a helmet so it can detect obstacles and vibrate before a visually impaired person bumps into them. That is an embedded IoT system in action!`;
  }

  // General Concept: What is AI-Assisted Development?
  if (q.includes('copilot') || q.includes('prompt engineering') || q.includes('ai-assisted')) {
    return `### What is AI-Assisted Development? (In Plain English)

Think of AI coding tools (like **GitHub Copilot**, **ChatGPT**, or **Gemini**) like having an **expert digital co-pilot** sitting beside a software engineer:

- The engineer still makes the important design and architectural decisions.
- The AI co-pilot quickly helps type boilerplate code, spots syntax typos, and suggests tests.
- This allows the developer to finish projects in less time and catch potential bugs before they reach production.

Aljon utilized these tools during his internship at Certicode to speed up backend development and improve code quality.`;
  }

  // Greetings
  if (
    q.includes('hello') ||
    q.includes('hi') ||
    q.includes('hey') ||
    q.includes('who are you') ||
    q.includes('good morning') ||
    q.includes('good afternoon')
  ) {
    return `Hello! I am **Aljon**, an AI assistant representing Aljon R. Alonzo.

I am here to answer your questions in plain, easy-to-understand language. Here is how I can help:

- **Work Availability**: Aljon is available to start immediately (Remote or Hybrid, PHP 25k–35k negotiable).
- **Projects**: The BAHT Smart Assistive Helmet, live video demos, and web apps.
- **Experience**: His remote backend developer internship at Certicode.
- **Skills**: Web development (Laravel, React, PHP), smart IoT devices (ESP32/C++), and AI tools.
- **Education**: Computer Science graduate from Immaculada Concepcion College (June 16, 2026).
- **Technical Questions**: Ask me any software engineering or coding question!

What would you like to know today?`;
  }

  // Default fallback
  return `Thank you for asking. Aljon Alonzo is a Computer Science graduate and software developer specializing in Laravel, PHP, React, TypeScript, and Embedded IoT Systems (ESP32/C++).

Here are a few quick things you can ask me:
- **"Tell me about your projects in simple terms"** (Learn about the BAHT smart helmet and rain cover)
- **"What is your availability and expected salary?"** (Immediate start, PHP 25k–35k negotiable)
- **"Where can I see video demos?"** (Google Drive demo videos)
- **"Tell me about your internship at Certicode"** (Backend experience and achievements)
- **"How can I contact or interview Aljon?"** (Direct email, phone, and links)

You can also reach Aljon directly at **aljonrisasalonzo@gmail.com** or call **+63 951 364 4817**.`;
};

/**
 * List of models to try in order of preference
 */
const CLAUDE_MODELS = [
  'claude-haiku-4-5-20251001',
  'claude-sonnet-4-5-20250929',
  'claude-3-5-haiku-20241022',
  'claude-3-haiku-20240307',
];

/**
 * Sends a message to Anthropic Claude Messages API, with automatic fallback and realistic thinking delay
 */
export const sendChatMessage = async (
  conversationHistory: ChatMessage[],
  userPrompt: string
): Promise<{ text: string; isFallback: boolean }> => {
  const apiKey = getActiveApiKey();

  // Enforce a natural thinking delay (minimum 1300ms) so answers don't flash instantly
  const minDelayPromise = sleep(1300 + Math.floor(Math.random() * 400));

  // If no API key is set, use the smart local knowledge engine with natural delay
  if (!apiKey) {
    await minDelayPromise;
    const fallbackReply = getSmartFallbackResponse(userPrompt);
    return { text: fallbackReply, isFallback: true };
  }

  try {
    // Format conversation history for Anthropic Messages API
    const formattedMessages: { role: 'user' | 'assistant'; content: string }[] = [];

    // Include last 8 messages for context
    const recentHistory = conversationHistory.slice(-8);
    for (const msg of recentHistory) {
      formattedMessages.push({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.text,
      });
    }

    // Append current user prompt
    formattedMessages.push({
      role: 'user',
      content: userPrompt,
    });

    // Helper to attempt API call with specific model
    const callModel = async (modelName: string) => {
      return fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
          'content-type': 'application/json',
          'anthropic-dangerous-direct-browser-access': 'true',
        },
        body: JSON.stringify({
          model: modelName,
          max_tokens: 1000,
          temperature: 0.6,
          system: ALJON_SYSTEM_PROMPT,
          messages: formattedMessages,
        }),
      });
    };

    // Attempt with primary model, falling back to alternate models if 404
    let response: Response | null = null;
    for (const modelName of CLAUDE_MODELS) {
      const res = await callModel(modelName);
      if (res.status === 404) {
        console.warn(`Model ${modelName} returned 404, trying alternate...`);
        continue;
      }
      response = res;
      break;
    }

    // Ensure we've waited at least the minimum thinking delay
    await minDelayPromise;

    if (!response || !response.ok) {
      const errorData = response ? await response.json().catch(() => ({})) : null;
      console.warn('Anthropic API returned an error:', response?.status, errorData);
      return {
        text: getSmartFallbackResponse(userPrompt),
        isFallback: true,
      };
    }

    const data = await response.json();
    const assistantContent = data.content?.[0]?.text;

    if (assistantContent && typeof assistantContent === 'string') {
      const sanitizedContent = assistantContent.replace(/Immaculata/gi, 'Immaculada');
      return { text: sanitizedContent, isFallback: false };
    }

    return {
      text: getSmartFallbackResponse(userPrompt),
      isFallback: true,
    };
  } catch (error) {
    console.error('Error connecting to Anthropic API:', error);
    await minDelayPromise;
    return {
      text: getSmartFallbackResponse(userPrompt),
      isFallback: true,
    };
  }
};
