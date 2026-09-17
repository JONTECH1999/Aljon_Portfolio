import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiX,
  FiSend,
  FiRotateCcw,
  FiExternalLink,
  FiCode,
  FiCpu,
  FiBookOpen,
  FiAward,
  FiMail,
  FiLoader,
} from 'react-icons/fi';
import {
  type ChatMessage,
  sendChatMessage,
} from '../services/aiChatService';
import { useTheme } from '../context/ThemeContext';

const INITIAL_MESSAGE: ChatMessage = {
  id: 'welcome-msg',
  sender: 'assistant',
  text: `Hello. I am **Aljon**, an AI assistant representing Aljon Alonzo.

I am here to assist HR recruiters, hiring managers, and visitors with his engineering background, technical stack, featured projects, and availability. You can also ask me any technical or general software question.

How can I assist you today?`,
  timestamp: 'Just now',
};

interface QuickPrompt {
  id: string;
  label: string;
  query: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const QUICK_PROMPTS: QuickPrompt[] = [
  {
    id: 'skills',
    label: 'Technical Skills',
    query: 'What are your core technical skills and stack?',
    icon: FiCode,
  },
  {
    id: 'projects',
    label: 'Thesis & IoT',
    query: 'Tell me about your thesis and embedded IoT projects',
    icon: FiCpu,
  },
  {
    id: 'education',
    label: 'Education',
    query: 'What is your educational background and degree?',
    icon: FiBookOpen,
  },
  {
    id: 'certs',
    label: 'Certifications',
    query: 'What verified certifications and awards do you have?',
    icon: FiAward,
  },
  {
    id: 'contact',
    label: 'Contact & Hire',
    query: 'How can I contact or interview Aljon for a role?',
    icon: FiMail,
  },
];

const Chatbot: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [showWelcomeTooltip, setShowWelcomeTooltip] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Dismiss welcome tooltip after 12s or when opened
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcomeTooltip(false);
    }, 12000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll messages
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading, isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      setShowWelcomeTooltip(false);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const messageText = (textToSend || inputValue).trim();
    if (!messageText || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: messageText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await sendChatMessage(messages, messageText);

      const assistantMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        text: response.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isFallback: response.isFallback,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error('Chat error:', err);
      const errorMessage: ChatMessage = {
        id: `error-${Date.now()}`,
        sender: 'assistant',
        text: 'A temporary connection error occurred. You can reach Aljon directly at **aljonrisasalonzo@gmail.com** or explore his projects and resume above.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isFallback: true,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleReset = () => {
    setMessages([INITIAL_MESSAGE]);
  };

  // Helper to format text with markdown-like highlights and hash links
  const renderFormattedText = (content: string) => {
    const lines = content.split('\n');

    return lines.map((line, lineIdx) => {
      if (line.startsWith('### ')) {
        return (
          <h4 key={lineIdx} className="font-bold text-sm sm:text-base text-slate-900 dark:text-[#fbf8f3] mt-3 mb-1.5">
            {line.replace('### ', '')}
          </h4>
        );
      }
      if (line.startsWith('## ')) {
        return (
          <h3 key={lineIdx} className="font-bold text-base text-slate-900 dark:text-[#fbf8f3] mt-3 mb-1.5">
            {line.replace('## ', '')}
          </h3>
        );
      }

      // Code blocks (simple single-line backticks)
      const isBullet = line.trim().startsWith('- ') || line.trim().startsWith('* ');
      const cleanLine = isBullet ? line.trim().replace(/^[-*]\s+/, '') : line;

      // Tokenize for bold (**text**), links ([text](url)), code (`text`), and hashtags (#projects)
      const parts = cleanLine.split(/(\*\*.*?\*\*|`.*?`|\[.*?\]\(.*?\)|\#[a-zA-Z0-9_-]+)/g);

      const parsedLine = parts.map((part, partIdx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={partIdx} className="font-semibold text-slate-900 dark:text-[#fbf8f3]">
              {part.slice(2, -2)}
            </strong>
          );
        }

        if (part.startsWith('`') && part.endsWith('`')) {
          return (
            <code
              key={partIdx}
              className="px-1.5 py-0.5 rounded bg-black/10 dark:bg-white/10 font-mono text-[11px] text-[#8c673d] dark:text-[#dfbe95]"
            >
              {part.slice(1, -1)}
            </code>
          );
        }

        // Markdown link [title](url)
        const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
        if (linkMatch) {
          const [, label, href] = linkMatch;
          return (
            <a
              key={partIdx}
              href={href}
              target={href.startsWith('#') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 text-[#a88154] dark:text-[#dfbe95] font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity"
              onClick={() => {
                if (href.startsWith('#')) {
                  const target = document.querySelector(href);
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
            >
              {label}
              {!href.startsWith('#') && <FiExternalLink size={12} className="inline ml-0.5" />}
            </a>
          );
        }

        // Hash anchor links (#projects, #contact, etc.)
        if (part.startsWith('#') && part.length > 2) {
          return (
            <button
              key={partIdx}
              type="button"
              onClick={() => {
                const target = document.querySelector(part);
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center text-[#a88154] dark:text-[#dfbe95] font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity cursor-pointer mx-0.5"
            >
              {part}
            </button>
          );
        }

        return part;
      });

      if (isBullet) {
        return (
          <div key={lineIdx} className="flex items-start gap-2 my-1 text-xs sm:text-sm text-slate-800 dark:text-white/80">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c29f74] mt-1.5 flex-shrink-0" />
            <div className="flex-1">{parsedLine}</div>
          </div>
        );
      }

      return (
        <p key={lineIdx} className="my-1.5 text-xs sm:text-sm text-slate-800 dark:text-white/80 leading-relaxed">
          {parsedLine}
        </p>
      );
    });
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
        {/* Welcome Proactive Tooltip */}
        <AnimatePresence>
          {showWelcomeTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className="mb-3 max-w-[280px] p-3.5 rounded-2xl glass-effect shadow-xl border border-white/20 relative cursor-pointer group"
              onClick={() => setIsOpen(true)}
              style={{
                background: isDarkMode ? 'rgba(28, 23, 20, 0.92)' : 'rgba(255, 255, 255, 0.95)',
                borderColor: isDarkMode ? 'rgba(225, 210, 185, 0.2)' : 'rgba(194, 159, 116, 0.3)',
              }}
            >
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowWelcomeTooltip(false);
                }}
                className="absolute top-2 right-2 p-1 text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors"
                aria-label="Dismiss message"
              >
                <FiX size={14} />
              </button>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-[#c29f74]/40 flex-shrink-0">
                  <img
                    src="/images/profile.jpg"
                    alt="Aljon"
                    className="w-full h-full object-cover"
                    onError={(e) => (e.currentTarget.src = 'https://ui-avatars.com/api/?name=Aljon&background=c29f74&color=fff')}
                  />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span>Chat with Aljon</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  </h5>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 line-clamp-2 mt-0.5">
                    Ask questions about skills, thesis, or career opportunities.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Trigger Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-2xl flex items-center justify-center text-white cursor-pointer group border-2 border-white/30"
          style={{
            background: 'linear-gradient(135deg, #c29f74 0%, #a88154 100%)',
            boxShadow: '0 8px 24px rgba(168, 129, 84, 0.45)',
          }}
          aria-label={isOpen ? 'Close chat' : 'Open Aljon AI Assistant'}
        >
          {isOpen ? (
            <FiX size={26} className="text-white" />
          ) : (
            <>
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-white/40 shadow-inner">
                <img
                  src="/images/profile.jpg"
                  alt="Aljon Alonzo"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Aljon&background=c29f74&color=fff';
                  }}
                />
              </div>
              <span className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 border-2 border-[#14110f] rounded-full" />
            </>
          )}

          {/* Unread badge dot */}
          {hasUnread && !isOpen && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#c29f74] rounded-full border-2 border-white animate-pulse" />
          )}
        </motion.button>
      </div>

      {/* Main Chat Window Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', stiffness: 320, damping: 26 }}
            className="fixed bottom-24 right-4 sm:right-6 z-40 w-[94vw] sm:w-[430px] h-[600px] max-h-[82vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden border backdrop-blur-2xl"
            style={{
              background: isDarkMode ? 'var(--dark-card-bg)' : '#ffffff',
              borderColor: isDarkMode ? 'var(--dark-border)' : '#e8dfd1',
              boxShadow: isDarkMode ? '0 20px 50px rgba(0, 0, 0, 0.45)' : '0 20px 50px rgba(168, 129, 84, 0.18)',
            }}
          >
            {/* Window Header */}
            <div
              className="p-4 flex items-center justify-between border-b"
              style={{
                background: isDarkMode
                  ? 'linear-gradient(135deg, rgba(194, 159, 116, 0.15) 0%, rgba(168, 129, 84, 0.05) 100%)'
                  : 'linear-gradient(135deg, #fbf8f3 0%, #f4ece1 100%)',
                borderColor: isDarkMode ? 'var(--dark-border)' : '#e8dfd1',
              }}
            >
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#c29f74] flex-shrink-0 shadow-md">
                  <img
                    src="/images/profile.jpg"
                    alt="Aljon"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Aljon&background=c29f74&color=fff';
                    }}
                  />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border border-white" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-bold text-sm sm:text-base text-[#26201b] dark:text-white leading-none">
                      Aljon
                    </h3>
                  </div>
                  <p className="text-[11px] text-[#746759] dark:text-white/60 mt-1 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Active • Ready to answer any question</span>
                  </p>
                </div>
              </div>

              {/* Action Icons */}
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handleReset}
                  title="Clear conversation"
                  className="p-2 rounded-lg text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                  aria-label="Reset Chat"
                >
                  <FiRotateCcw size={15} />
                </button>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  title="Minimize chat"
                  className="p-2 rounded-lg text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                  aria-label="Close"
                >
                  <FiX size={18} />
                </button>
              </div>
            </div>

            {/* Message Thread */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] flex gap-2.5 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    {msg.sender === 'assistant' && (
                      <div className="w-7 h-7 rounded-full overflow-hidden border border-[#c29f74]/40 flex-shrink-0 mt-0.5">
                        <img
                          src="/images/profile.jpg"
                          alt="Aljon"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Aljon&background=c29f74&color=fff';
                          }}
                        />
                      </div>
                    )}

                    <div>
                      <div
                        className={`p-3.5 rounded-2xl ${
                          msg.sender === 'user'
                            ? 'text-white rounded-br-none shadow-md'
                            : 'bg-[#f7f3ec] dark:bg-white/5 text-[#26201b] dark:text-white/90 border border-[#e8dfd1] dark:border-white/10 rounded-bl-none shadow-sm'
                        }`}
                        style={{
                          background:
                            msg.sender === 'user'
                              ? 'linear-gradient(135deg, #c29f74 0%, #a88154 100%)'
                              : undefined,
                        }}
                      >
                        {renderFormattedText(msg.text)}
                      </div>
                      <span className="text-[10px] text-slate-400 dark:text-slate-400 mt-1 block px-1">
                        {msg.timestamp}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Realistic Thinking Indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-start gap-2.5"
                >
                  <div className="w-7 h-7 rounded-full overflow-hidden border border-[#c29f74]/40 flex-shrink-0 mt-0.5">
                    <img
                      src="/images/profile.jpg"
                      alt="Aljon"
                      className="w-full h-full object-cover"
                      onError={(e) => (e.currentTarget.src = 'https://ui-avatars.com/api/?name=Aljon&background=c29f74&color=fff')}
                    />
                  </div>
                  <div className="bg-[#f7f3ec] dark:bg-white/5 px-4 py-3 rounded-2xl rounded-bl-none border border-[#c29f74]/40 dark:border-[#c29f74]/30 shadow-md flex flex-col gap-1.5 max-w-[260px]">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#8c673d] dark:text-[#dfbe95]">
                      <FiLoader size={13} className="animate-spin text-[#c29f74]" />
                      <span>Aljon is thinking...</span>
                    </div>
                    <div className="flex items-center gap-1.5 pl-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c29f74] animate-pulse" style={{ animationDuration: '0.8s' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c29f74] animate-pulse" style={{ animationDelay: '0.2s', animationDuration: '0.8s' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c29f74] animate-pulse" style={{ animationDelay: '0.4s', animationDuration: '0.8s' }} />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions Chips with Vector Icons (NO emojis) */}
            <div className="px-3.5 py-2 border-t border-[#e8dfd1] dark:border-white/10 bg-[#faf7f2] dark:bg-black/10 overflow-x-auto flex gap-2 no-scrollbar">
              {QUICK_PROMPTS.map((prompt) => {
                const IconComponent = prompt.icon;
                return (
                  <button
                    key={prompt.id}
                    type="button"
                    onClick={() => handleSendMessage(prompt.query)}
                    disabled={isLoading}
                    className="inline-flex items-center gap-1.5 whitespace-nowrap text-[11px] font-medium px-3 py-1.5 rounded-full bg-[#f2ece1] dark:bg-[#c29f74]/15 hover:bg-[#e8ded0] dark:hover:bg-[#c29f74]/25 text-[#7a562a] dark:text-[#dfbe95] border border-[#c29f74]/35 dark:border-[#c29f74]/30 transition-all cursor-pointer flex-shrink-0 disabled:opacity-50"
                  >
                    <IconComponent size={12} className="text-[#a88154] dark:text-[#c29f74]" />
                    <span>{prompt.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Message Input Footer (Optimized for High Contrast in Light & Dark Mode) */}
            <div className="p-3 sm:p-4 border-t border-[#e8dfd1] dark:border-white/10 bg-[#faf7f2] dark:bg-black/20 flex flex-col gap-1.5">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask Aljon anything..."
                  disabled={isLoading}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-white dark:bg-black/50 border-2 border-[#d6c7b2] dark:border-white/15 text-xs sm:text-sm text-[#26201b] dark:text-white placeholder-[#746759] dark:placeholder-white/40 focus:outline-none focus:border-[#a88154] dark:focus:border-[#c29f74] focus:ring-2 focus:ring-[#c29f74]/25 transition-all font-medium shadow-sm dark:shadow-none"
                />
                <motion.button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-[#c29f74] hover:bg-[#a88154] text-white flex items-center justify-center shadow-md shadow-[#c29f74]/20 transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex-shrink-0"
                  aria-label="Send message"
                >
                  <FiSend size={16} />
                </motion.button>
              </form>

              <div className="flex items-center justify-center text-[10px] text-[#746759] dark:text-white/40 px-1">
                <span>Aljon Alonzo Portfolio Assistant</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
