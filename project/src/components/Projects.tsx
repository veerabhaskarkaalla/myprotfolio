import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Shield, CreditCard, BookOpen } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Image Encryption System',
      description: 'Advanced security system using XOR logic and chaotic maps to secure medical images with high-level encryption.',
      icon: Shield,
      technologies: ['Python', 'Cryptography', 'Chaotic Maps', 'XOR Logic'],
      features: ['Medical Image Security', 'Chaotic Map Permutation', 'XOR-based Diffusion'],
    },
    {
      title: 'Credit Card Fraud Detection',
      description: 'Machine learning model using logistic regression with comprehensive evaluation metrics for fraud detection.',
      icon: CreditCard,
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
      features: ['Logistic Regression', 'Data Preprocessing', 'Model Evaluation'],
    },
    {
      title: 'Library Management System',
      description: 'Complete library management solution built with Java and MySQL for efficient book and user management.',
      icon: BookOpen,
      technologies: ['Java', 'MySQL', 'Java Swing', 'JDBC'],
      features: ['Book Management', 'User Authentication', 'Database Integration'],
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-emerald-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-emerald-400/50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-emerald-400/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-400/30 transition-colors">
                <project.icon size={32} className="text-emerald-400" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

              <div className="mb-6">
                <h4 className="text-emerald-400 font-medium mb-3">Key Features:</h4>
                <ul className="space-y-1">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-300 text-sm flex items-center gap-2">
                      <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-emerald-400 font-medium mb-3">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <Github size={16} />
                  <span className="text-sm">Code</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <ExternalLink size={16} />
                  <span className="text-sm">Demo</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;