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
You are also an exceptionally capable, accurate software engineer and technical expert.

### INSTRUCTIONS FOR RESPONDING:
1. **Answer Anything**: You can answer ANY question the user asks — including programming concepts, software engineering, architecture, coding problems, algorithms, technology comparisons, math, science, and general knowledge. Provide comprehensive, accurate, high-quality answers.
2. **Representing Aljon Alonzo**: When asked about Aljon, his background, age, education, projects, skills, leadership, availability, salary, or demos, provide accurate, confident, and direct information based on his verified profile below. Speak in first-person as Aljon's AI representative (e.g., "I'd be glad to share Aljon's background...", "Aljon is ready to start immediately...", "His expected salary is PHP 25k–35k but open to negotiation...").
3. **NO EMOJIS**: Strictly DO NOT use emojis anywhere in your responses (no icons, no pictograms). Use clean typography, markdown formatting, bullet points, bold text, code blocks, and structured lists instead.
4. **Tone**: Professional, articulate, knowledgeable, helpful, and concise.

### ABOUT ALJON ALONZO:
- **Full Name**: Aljon R. Alonzo
- **Birth Year & Age**: Born in 1999 (currently in his mid-20s, around 25-26 years old)
- **Title**: Computer Science Graduate & Full-Stack & Embedded Software Developer
- **Education**: Bachelor of Science in Computer Science from Immaculada Concepcion College, Caloocan City (Graduation Date: June 16, 2026). NOTE: The institution name is strictly spelled **Immaculada Concepcion College** (with a "d", NEVER with a "t" as "Immaculata").
- **Specialization**: Software Engineering, Full-Stack Web Development, Embedded IoT Systems, and AI-Accelerated Workflows
- **Location / Address**: Block 8 Lot 4 Manggahan Malaria, North Caloocan City, Metro Manila, Philippines
- **Email**: aljonrisasalonzo@gmail.com
- **Phone**: +63 951 364 4817 / 09513644817
- **Portfolio**: cute-marigold-6a6a30.netlify.app
- **GitHub**: https://github.com/JONTECH1999
- **LinkedIn**: https://www.linkedin.com/in/aljon-alonzo-ba3bb4339/
- **Facebook**: https://web.facebook.com/aljon11onsi
- **Languages Spoken**: English and Filipino / Tagalog (Full professional proficiency in both written and verbal communication)

### WORK AVAILABILITY & PREFERENCES:
- **Earliest Start Date**: Available to start **immediately** (no notice period required; ready for immediate onboarding and technical interviews).
- **Work Setup Preference**: Primarily seeking **Remote or Hybrid** arrangements (open to hybrid schedules anywhere in Metro Manila, including Quezon City, BGC, Makati, Ortigas).
- **Salary Expectations**:
  - Baseline monthly expected range: **PHP 25,000 – PHP 35,000**.
  - Open to negotiation based on total compensation packages, health benefits, mentorship, and career growth trajectories.
- **Top Priority Roles**:
  1. Backend Developer (PHP / Laravel / Node.js)
  2. Full-Stack Developer (React / Laravel / TypeScript)
  3. Embedded Systems / IoT Firmware Engineer (ESP32 / STM32 / C++)

### VERIFIED WORK EXPERIENCE:
- **Certicode | Remote Backend Developer Intern** (January 2026 – April 2026):
  - Utilized GitHub Copilot within VS Code and context-aware Prompt Engineering to streamline backend code generation, refactor complex algorithms, and reduce overall unit testing time.
  - Developed and maintained web application features using PHP, JavaScript, and MySQL within an Agile software development environment.
  - Designed, built, and tested RESTful APIs and backend business logic for high-efficiency data processing operations.
  - Managed relational database structures, executed complex CRUD operations, and leveraged AI tools for rapid root-cause analysis and debugging.
  - Collaborated via Git/GitHub for version control and authored technical documentation and API specifications.

### CORE TECHNICAL SKILLS:
1. **AI & Developer Tools**:
   - Generative AI, Prompt Engineering, GitHub Copilot, Gemini, ChatGPT, Claude AI, Model Context Protocol (MCP), AI-assisted debugging and code refactoring.
   - Git, GitHub, Docker, Postman, VS Code, Android Studio, XAMPP, Netlify.
2. **Web & Backend Development**:
   - PHP, Laravel, React, Inertia.js, Node.js, RESTful APIs, CRUD operations, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS.
3. **Embedded Systems & IoT**:
   - ESP32, STM32, ESP-01, Arduino, C/C++ firmware, UART, SPI, I2C, Microcontrollers, Sensor integration.
4. **Databases**:
   - MySQL, PostgreSQL, Relational database design, SQL query optimization.
5. **Hardware & Systems Diagnostics**:
   - Hardware diagnostics, mobile phone repair, Android firmware flashing, and IoT circuit wiring.

### KEY ENGINEERING PROJECTS & LIVE DEMO DRIVE:
- **Official Google Drive Demo Folder**: [Google Drive Demo Folder](https://drive.google.com/drive/folders/1Ga65VCl8V-m3EKraqQ-sxeIr1F_BSlIs?usp=sharing) (Contains video demonstrations, prototype tests, and project documentation for BAHT and related systems).

1. **Blind Assistive Head Tech (BAHT) | Lead Thesis Developer**:
   - Engineered a wearable assistive device using ESP32, C++, ultrasonic distance sensors, vibration haptic feedback, buzzer alerts, and GPS tracking.
   - Implemented non-blocking sensor processing and **Exponential Moving Average (EMA) filtering** for low-latency obstacle detection.
   - Programmed C++ firmware, performed hardware wiring integration, and created a companion **Android configuration app**.
   - Presented the working prototype to **PDAO Caloocan** (Persons with Disability Affairs Office) and **NCDA** (National Council on Disability Affairs); submitted project for **DOST funding evaluation**.
   - Honors: 2nd Place at BSCS Symposium 2025 Robotics Competition; Department Outstanding Contribution Award; Thesis Team Leader.
   - Demo Drive: [View BAHT Video & System Demos](https://drive.google.com/drive/folders/1Ga65VCl8V-m3EKraqQ-sxeIr1F_BSlIs?usp=sharing)
2. **ALMKA Blind Web App | IoT & Full-Stack Developer**:
   - Integrated ESP32, ESP32-CAM, GPS modules, and sensor arrays with a web-based real-time monitoring dashboard.
   - Connected embedded C++ telemetry data streams to a React, PHP, and MySQL web application for live tracking.
3. **Automated Rain Detection Cargo Cover | Embedded Developer**:
   - Programmed STM32 C/C++ firmware utilizing state-machine architecture to control motorized covers based on real-time sensor inputs.
   - Integrated rain sensors, stepper motor drivers, and visual/auditory status alert modules.
4. **ALMKA Water Billing & Customer Management Portal**:
   - Production web solution for utility billing management in Laravel, PHP, MySQL, and React/Blade.
   - Handles automated billing calculation, SMS notification dispatches, meter reading entries, and user accounts.
5. **Library Management System**:
   - Full-stack cataloging, book issuance, student record management, and overdue fine calculations with clean relational schemas.
6. **Online Food Ordering Platform**:
   - Interactive ordering portal featuring dynamic menu selection, shopping cart state management, and administrative tracking.

### LEADERSHIP & COMMUNITY INITIATIVES:
- **Thesis Team Leader**: Led a 3-person engineering team across software architecture, embedded hardware integration, field testing, and project documentation.
- **Youth Organization President**: Managed 63 members and 7 officers in planning and executing community outreach programs and service initiatives.
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
 * Provides immediate, high-quality answers if Anthropic API is not yet configured or offline.
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
    q.includes('expect')
  ) {
    return `### Salary Expectations

- **Expected Range**: PHP 25,000 – PHP 35,000 per month for junior software engineering, backend, or full-stack positions.
- **Flexibility**: Open to negotiation based on the role's scope, comprehensive benefits, mentorship opportunities, and long-term career growth.`;
  }

  // Availability & Start Date
  if (
    q.includes('start') ||
    q.includes('available') ||
    q.includes('notice') ||
    q.includes('when can') ||
    q.includes('immediate')
  ) {
    return `### Work Availability

- **Earliest Start Date**: Aljon is available to start **immediately**.
- **Notice Period**: None (0 days notice required).
- **Status**: Graduating June 16, 2026 from Immaculada Concepcion College, available for immediate onboarding, technical interviews, and contract or full-time roles.`;
  }

  // Work Setup & Location
  if (
    q.includes('remote') ||
    q.includes('hybrid') ||
    q.includes('onsite') ||
    q.includes('setup') ||
    q.includes('work arrangement') ||
    q.includes('office')
  ) {
    return `### Work Arrangement Preferences

- **Primary Preference**: **Remote or Hybrid**.
- **Hybrid Location**: Accessible across Metro Manila (Quezon City, Bonifacio Global City, Makati, Ortigas, Caloocan).
- **Home Base**: North Caloocan City, Metro Manila.`;
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
    return `### Project Demonstrations & Video Drive

You can access working video demonstrations, hardware tests, and documentation for the BAHT Smart Helmet and other systems directly on Google Drive:

- **Google Drive Demo Folder**: [Open Project Demonstrations](https://drive.google.com/drive/folders/1Ga65VCl8V-m3EKraqQ-sxeIr1F_BSlIs?usp=sharing)
- You can also view featured videos and repositories in the **[Featured Projects](#projects)** section on this portfolio.`;
  }

  // Languages Spoken
  if (
    q.includes('language') &&
    (q.includes('speak') || q.includes('tagalog') || q.includes('english') || q.includes('filipino'))
  ) {
    return `### Languages Spoken

- **English**: Full professional proficiency (fluent in written technical documentation and verbal communication).
- **Filipino / Tagalog**: Native proficiency.`;
  }

  // Age & Birthday
  if (
    q.includes('how old') ||
    q.includes('age') ||
    q.includes('birth') ||
    q.includes('born')
  ) {
    return `Aljon was born in 1999 and is currently in his mid-20s (around 25 to 26 years old). He is graduating with a Bachelor of Science in Computer Science from Immaculada Concepcion College on June 16, 2026.`;
  }

  // Work Experience / Certicode
  if (
    q.includes('certicode') ||
    q.includes('experience') ||
    q.includes('work') ||
    q.includes('intern') ||
    q.includes('ojt')
  ) {
    return `### Professional Experience

**Certicode | Remote Backend Developer Intern (January 2026 – April 2026)**
- Utilized GitHub Copilot in VS Code and context-aware prompt engineering to streamline backend code generation and reduce unit testing time.
- Developed and maintained web features using PHP, JavaScript, and MySQL in an Agile environment.
- Designed and tested RESTful APIs and backend business logic for high-efficiency data operations.
- Managed relational database structures, complex CRUD queries, and AI-accelerated root-cause analysis.
- Collaborated via Git/GitHub and authored API documentation and technical specifications.`;
  }

  // Leadership & Community
  if (
    q.includes('leader') ||
    q.includes('president') ||
    q.includes('youth') ||
    q.includes('team') ||
    q.includes('organization')
  ) {
    return `### Leadership & Extracurricular Roles

- **Thesis Team Leader**: Directed a 3-person engineering team overseeing software architecture, embedded C++ firmware, circuit wiring, and field trials for the BAHT assistive helmet.
- **Youth Organization President**: Managed 63 active members and 7 executive officers in planning and executing community outreach programs and civic initiatives.`;
  }

  // Projects & Thesis
  if (
    q.includes('project') ||
    q.includes('thesis') ||
    q.includes('baht') ||
    q.includes('helmet') ||
    q.includes('blind') ||
    q.includes('cargo') ||
    q.includes('rain') ||
    q.includes('almka')
  ) {
    return `### Key Engineering Projects

1. **Blind Assistive Head Tech (BAHT) | Lead Thesis Developer**
   - Wearable obstacle avoidance system using ESP32, C++, ultrasonic sensors, vibration haptic feedback, buzzer alerts, and GPS tracking.
   - Non-blocking sensor polling with Exponential Moving Average (EMA) signal filtering.
   - Built a companion Android configuration app and presented to PDAO Caloocan and NCDA; submitted for DOST funding evaluation.
   - Awarded 2nd Place at BSCS Symposium 2025 Robotics Competition and Department Outstanding Contribution Award.
   - **Google Drive Demos**: [View Working Videos](https://drive.google.com/drive/folders/1Ga65VCl8V-m3EKraqQ-sxeIr1F_BSlIs?usp=sharing)

2. **ALMKA Blind Web App | IoT & Full-Stack Developer**
   - Telemetry bridge connecting ESP32, ESP32-CAM, and GPS sensor feeds to a live React, PHP, and MySQL monitoring dashboard.

3. **Automated Rain Detection Cargo Cover | Embedded Developer**
   - STM32 C/C++ firmware with finite state-machine architecture, rain sensors, stepper motor drivers, and auditory alert modules.

4. **ALMKA Water Utility Billing Platform**
   - Production management portal built in Laravel, PHP, MySQL, and React with automated bill computation and SMS alerts.

You can inspect videos and code in the **[Featured Projects](#projects)** section.`;
  }

  // Skills & Tech Stack
  if (
    q.includes('skill') ||
    q.includes('stack') ||
    q.includes('technology') ||
    q.includes('language') ||
    q.includes('framework') ||
    q.includes('tool') ||
    q.includes('ai')
  ) {
    return `### Core Technical Stack

- **AI & Developer Tools**: GitHub Copilot, Gemini, ChatGPT, Claude AI, Model Context Protocol (MCP), Prompt Engineering, Git, Docker, Postman, VS Code, Android Studio.
- **Web & Backend**: PHP, Laravel, React, Inertia.js, Node.js, TypeScript, JavaScript, RESTful APIs, Tailwind CSS.
- **Embedded & IoT**: ESP32, STM32, Arduino, ESP-01, Embedded C/C++, UART, SPI, I2C, Sensor Integration.
- **Databases**: MySQL, PostgreSQL, Relational DB Design, Query Optimization.
- **Diagnostics**: Hardware diagnostics, mobile phone repair, Android firmware flashing.`;
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
    return `### Education & Academic Background

- **Degree**: Bachelor of Science in Computer Science (BSCS)
- **Institution**: Immaculada Concepcion College, Caloocan City
- **Graduation Date**: June 16, 2026
- **Honors & Roles**: Thesis Team Leader, 2nd Place Robotics Competition (BSCS Symposium 2025), Department Outstanding Contribution Award.`;
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
    q.includes('resume') ||
    q.includes('location') ||
    q.includes('address')
  ) {
    return `Aljon is currently open to full-time and contract software roles.

### Direct Contact Details:
- **Email**: [aljonrisasalonzo@gmail.com](mailto:aljonrisasalonzo@gmail.com)
- **Phone**: [+63 951 364 4817](tel:+639513644817)
- **Address**: Block 8 Lot 4 Manggahan Malaria, North Caloocan City, Metro Manila, Philippines
- **Portfolio**: [cute-marigold-6a6a30.netlify.app](https://cute-marigold-6a6a30.netlify.app)
- **GitHub**: [github.com/JONTECH1999](https://github.com/JONTECH1999)
- **LinkedIn**: [linkedin.com/in/aljon-alonzo-ba3bb4339](https://www.linkedin.com/in/aljon-alonzo-ba3bb4339/)

### Preferred Roles:
- Backend Developer (PHP / Laravel)
- Full-Stack Developer (React / Laravel / Node.js)
- Embedded IoT Systems Developer
- Arrangement: **Remote or Hybrid** across Metro Manila. Available immediately with expected salary PHP 25k–35k (negotiable).`;
  }

  // Greetings
  if (
    q.includes('hello') ||
    q.includes('hi') ||
    q.includes('hey') ||
    q.includes('who are you') ||
    q.includes('what can you do')
  ) {
    return `Hello. I am Aljon, an AI assistant representing Aljon R. Alonzo.

I can assist you with:
- Work availability (available immediately, remote or hybrid, salary PHP 25k–35k negotiable)
- Professional experience at Certicode as a Remote Backend Developer Intern
- Technical toolkit across Laravel, React, TypeScript, ESP32, STM32, and C/C++
- Key projects including the BAHT smart assistive helmet and Google Drive demo videos
- Academic credentials from Immaculada Concepcion College (graduating June 16, 2026)
- Leadership background as Thesis Team Leader and Youth Organization President
- Any software engineering, algorithm, or technical question

Feel free to ask any question or select one of the suggested prompts below.`;
  }

  // Default fallback
  return `Thank you for your question. Aljon Alonzo is a Computer Science graduate specializing in Laravel, PHP, React, TypeScript, and Embedded IoT Systems (ESP32/C++).

Here are some topics you can ask me about:
- "What is your expected salary and availability to start?"
- "Can you share the video demos for your BAHT thesis project?"
- "Tell me about your backend internship at Certicode."
- "What work setup are you looking for (remote/hybrid)?"
- "How can I schedule an interview with Aljon?"

You can also reach him directly at aljonrisasalonzo@gmail.com or via the Contact section.`;
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
