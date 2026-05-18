import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiSend, FiCheckCircle } from 'react-icons/fi';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Initialize EmailJS
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (!publicKey) {
      console.warn('EmailJS public key not configured');
    } else {
      emailjs.init(publicKey);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrorMessage('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

      if (!serviceId || !templateId) {
        setErrorMessage('Email service is not properly configured. Please contact support.');
        return;
      }

      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          to_email: 'aljonrisasalonzo@gmail.com',
          message: formData.message,
        }
      );

      if (result.status === 200) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      setErrorMessage('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'aljonrisasalonzo@gmail.com',
      href: 'mailto:aljonrisasalonzo@gmail.com',
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+63 951 364 4817',
      href: 'tel:+639513644817',
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Caloocan City, Philippines',
      href: '#',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 100, y: 20 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { 
        duration: 0.7,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="contact" className="relative py-20 px-4 md:px-0">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-slate-600 dark:text-white/70 text-lg mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: '-100px' }}
            className="lg:col-span-1 flex flex-col gap-6"
          >
            {contactInfo.map((info) => (
              <motion.a
                key={info.label}
                href={info.href}
                variants={itemVariants}
                whileHover={{ x: 8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="glass-effect w-full p-6 rounded-xl hover:border-indigo-500/50 transition-all group cursor-pointer"
              >
                <div className="flex items-start gap-4 w-full">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform flex-shrink-0">
                    <info.icon size={24} />
                  </div>
                  <div className="min-w-0 w-full">
                    <h4 className="text-slate-900 dark:text-white font-semibold mb-1">{info.label}</h4>
                    <p className="text-slate-700 dark:text-white/80 break-words hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors w-full">
                      {info.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ margin: '-100px' }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="glass-effect p-8 rounded-xl">
              <div className="space-y-6">
                {/* Name Input */}
                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <label htmlFor="name" className="block text-slate-900 dark:text-white font-semibold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="ex. Aljon Alonzo"
                    className="w-full px-4 py-3 bg-slate-50/50 dark:bg-white/10 border border-slate-300 dark:border-white/20 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/50 focus:outline-none focus:border-indigo-600 dark:focus:border-indigo-400 transition-colors"
                  />
                </motion.div>

                {/* Email Input */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block text-slate-900 dark:text-white font-semibold mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="ex. aljonrisasalonzo@gmail.com"
                    className="w-full px-4 py-3 bg-slate-50/50 dark:bg-white/10 border border-slate-300 dark:border-white/20 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/50 focus:outline-none focus:border-indigo-600 dark:focus:border-indigo-400 transition-colors"
                  />
                </motion.div>

                {/* Message Input */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-slate-900 dark:text-white font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-50/50 dark:bg-white/10 border border-slate-300 dark:border-white/20 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/50 focus:outline-none focus:border-indigo-600 dark:focus:border-indigo-400 transition-colors resize-none"
                  ></textarea>
                </motion.div>

                {/* Error Message */}
                {errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/20 border border-red-500/50 text-red-600 dark:text-red-400 rounded-lg text-sm"
                  >
                    {errorMessage}
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isLoading || isSubmitted}
                  whileHover={{ scale: isLoading ? 1 : 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitted ? (
                    <>
                      <FiCheckCircle size={20} />
                      Message Sent!
                    </>
                  ) : isLoading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1 }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center"
        >
         
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
