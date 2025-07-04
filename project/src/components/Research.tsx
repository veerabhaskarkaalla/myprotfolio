import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Calendar, Users } from 'lucide-react';

const Research: React.FC = () => {
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
            Research <span className="text-emerald-400">Work</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-emerald-400/50 transition-colors"
        >
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-emerald-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <FileText size={32} className="text-emerald-400" />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Map Sequence-Based Novel Image Encryption Algorithm
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-center gap-3 text-gray-300">
                  <Calendar size={20} className="text-emerald-400" />
                  <span>Submitted 2025</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Users size={20} className="text-emerald-400" />
                  <span>International Conference</span>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                This research focuses on securing medical images using advanced cryptographic techniques. 
                The algorithm employs XOR-based diffusion and chaotic map permutation to provide robust 
                security for sensitive medical data.
              </p>

              <div className="mb-6">
                <h4 className="text-emerald-400 font-semibold mb-3">Key Contributions:</h4>
                <ul className="space-y-2">
                  {[
                    'Novel encryption algorithm for medical image security',
                    'Implementation of chaotic map-based permutation',
                    'XOR-based diffusion for enhanced security',
                    'Comprehensive security analysis and evaluation',
                  ].map((contribution, index) => (
                    <li key={index} className="text-gray-300 flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      {contribution}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-emerald-400 font-semibold mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Cryptography', 'Image Processing', 'Chaotic Maps', 'Security Analysis'].map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-emerald-400/10 border border-emerald-400/30 rounded-lg p-4">
                <p className="text-emerald-400 font-medium">
                  📄 Submitted to international conference via Microsoft CMT platform
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;