import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiFacebook, FiInstagram, FiMail } from 'react-icons/fi';

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/JONTECH1999', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/aljon-alonzo-ba3bb4339/', label: 'LinkedIn' },
    { icon: FiFacebook, href: 'https://web.facebook.com/aljon11onsi', label: 'Facebook' }, // Replaced Twitter with Facebook
    { icon: FiInstagram, href: 'https://www.instagram.com/aljon_alonzo/', label: 'Instagram' }, // Added Instagram
    { icon: FiMail, href: 'mailto:aljonrisasalonzo@gmail.com', label: 'Email' }, // Added email link
  ];

  return (
    <footer 
      className="relative z-10 border-t backdrop-blur-sm transition-all duration-500"
      style={{
        borderTopColor: isDarkMode ? 'var(--dark-border)' : 'var(--light-border)',
        backgroundColor: isDarkMode ? 'rgba(30, 41, 59, 0.3)' : 'rgba(248, 247, 255, 0.5)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-1"
          >
            <h3 className="text-2xl font-bold gradient-text mb-2">Aljon</h3>
            <p 
              className="text-sm transition-colors duration-300"
              style={{
                color: isDarkMode ? 'var(--dark-secondary-text)' : 'var(--light-secondary-text)',
              }}
            >
              Junior Web & App Developer
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-1"
          >
            <h4 
              className="font-semibold mb-4 transition-colors duration-300"
              style={{
                color: isDarkMode ? 'var(--dark-text)' : 'var(--light-text)',
              }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="#home" 
                  className="transition-colors duration-300 hover:text-[var(--color-primary)]"
                  style={{
                    color: isDarkMode ? 'var(--dark-secondary-text)' : 'var(--light-secondary-text)',
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="transition-colors duration-300 hover:text-[var(--color-primary)]"
                  style={{
                    color: isDarkMode ? 'var(--dark-secondary-text)' : 'var(--light-secondary-text)',
                  }}
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="transition-colors duration-300 hover:text-[var(--color-primary)]"
                  style={{
                    color: isDarkMode ? 'var(--dark-secondary-text)' : 'var(--light-secondary-text)',
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1"
          >
            <h4 
              className="font-semibold mb-4 transition-colors duration-300"
              style={{
                color: isDarkMode ? 'var(--dark-text)' : 'var(--light-text)',
              }}
            >
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg glass-effect border transition-all duration-300"
                  style={{
                    borderColor: isDarkMode ? 'var(--dark-border)' : 'var(--light-border)',
                  }}
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div 
          className="border-t pt-8 transition-colors duration-300"
          style={{
            borderTopColor: isDarkMode ? 'var(--dark-border)' : 'var(--light-border)',
          }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
