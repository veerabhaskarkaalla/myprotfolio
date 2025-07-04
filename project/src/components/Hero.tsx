import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, ExternalLink, Linkedin, Code, Trophy } from 'lucide-react';

const Hero: React.FC = () => {
  const handleResumeDownload = () => {
    // Create a link to download the resume
    const link = document.createElement('a');
    link.href = '/VeeraBhaskar (3).pdf';
    link.download = 'VeeraBhaskar_Resume.pdf';
    link.click();
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/veera-bhaskar-kaalla',
      icon: Linkedin,
      color: 'hover:bg-blue-600',
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/veerabhaskar',
      icon: Code,
      color: 'hover:bg-orange-600',
    },
    {
      name: 'HackerRank',
      url: 'https://hackerrank.com/veerabhaskar',
      icon: Trophy,
      color: 'hover:bg-green-600',
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative w-80 h-80 mx-auto lg:w-96 lg:h-96">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-emerald-400/30 border-dashed"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 rounded-full border border-emerald-400/20"
            />
            <img
              src="/H2.jpg"
              alt="Veera Bhaskar Kaalla"
              className="absolute inset-8 w-full h-full object-cover rounded-full border-4 border-emerald-400/50"
            />
          </div>
        </motion.div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center lg:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            <span className="text-white">Veera Bhaskar</span>
            <br />
            <span className="text-emerald-400">Kaalla</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-6"
          >
            Aspiring Data Engineer & Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-gray-400 mb-8 max-w-lg"
          >
            Solving problems, building solutions, and securing data with passion and technical expertise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleResumeDownload}
              className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-8 py-3 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Download size={20} />
              View Resume
            </motion.button>

            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black font-semibold px-8 py-3 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Github size={20} />
              GitHub
            </motion.a>
          </motion.div>

          {/* Social Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="space-y-4"
          >
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                  className={`
                    flex items-center gap-3 px-6 py-3 
                    bg-gray-800/50 backdrop-blur-sm border border-gray-700 
                    rounded-lg text-gray-300 font-medium
                    hover:border-gray-500 hover:text-white
                    transition-all duration-300 group
                    ${social.color}
                  `}
                >
                  <social.icon 
                    size={20} 
                    className="group-hover:scale-110 transition-transform duration-300" 
                  />
                  <span className="text-sm font-semibold">{social.name}</span>
                  <ExternalLink 
                    size={14} 
                    className="opacity-60 group-hover:opacity-100 transition-opacity duration-300" 
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;