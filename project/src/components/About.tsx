import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-emerald-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-emerald-400 mb-6">My Journey</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Motivated and technically skilled Computer Science student with hands-on experience in 
                problem-solving, software development, and databases. Seeking opportunities to grow as a 
                data engineer in a dynamic environment.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm passionate about leveraging technology to solve real-world problems, with a particular 
                focus on data engineering, security, and innovative software solutions.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-emerald-400 mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 text-gray-300"
                >
                  <div className="w-10 h-10 bg-emerald-400/20 rounded-lg flex items-center justify-center">
                    <MapPin size={20} className="text-emerald-400" />
                  </div>
                  <span>Kakinada, Andhra Pradesh</span>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 text-gray-300"
                >
                  <div className="w-10 h-10 bg-emerald-400/20 rounded-lg flex items-center justify-center">
                    <Mail size={20} className="text-emerald-400" />
                  </div>
                  <span>k.veerabhaskar2004@gmail.com</span>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 text-gray-300"
                >
                  <div className="w-10 h-10 bg-emerald-400/20 rounded-lg flex items-center justify-center">
                    <Phone size={20} className="text-emerald-400" />
                  </div>
                  <span>+91 9347059393</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;