import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Java Full Stack Developer',
      company: 'Internship Program',
      period: 'Jan 2025 - Jun 2025',
      description: 'Developing full-stack applications using Java, Spring Boot, and modern web technologies.',
      status: 'Current',
    },
    {
      title: 'Zero Trust Cloud Security Intern',
      company: 'Security Internship',
      period: 'Jan 2025 - Mar 2025',
      description: 'Working on cloud security implementations and zero-trust architecture principles.',
      status: 'Current',
    },
    {
      title: 'Android Developer Intern',
      company: 'Mobile Development',
      period: 'Oct 2024 - Dec 2024',
      description: 'Built Android applications with focus on user experience and performance optimization.',
      status: 'Completed',
    },
    {
      title: 'Industrial Training',
      company: 'Technical Training Program',
      period: 'Sep 2023 - Feb 2024',
      description: 'Comprehensive training in software development practices and industry standards.',
      status: 'Completed',
    },
  ];

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
            Work <span className="text-emerald-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-emerald-400/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                  <div className="flex items-start gap-4 mb-4 md:mb-0 flex-1">
                    <div className="w-12 h-12 bg-emerald-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Briefcase size={24} className="text-emerald-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                      <p className="text-emerald-400 mb-2">{exp.company}</p>
                      <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                  
                  <div className="text-right flex-shrink-0">
                    <div className="flex items-center gap-2 text-gray-300 mb-2 md:justify-end">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      exp.status === 'Current' 
                        ? 'bg-emerald-400/20 text-emerald-400' 
                        : 'bg-gray-700 text-gray-300'
                    }`}>
                      {exp.status}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;