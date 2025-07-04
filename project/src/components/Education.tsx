import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'Pragati Engineering College',
      period: '2024 - 2027',
      grade: 'CGPA: 8.93',
      status: 'Current',
    },
    {
      degree: 'Diploma in Computer Engineering',
      institution: 'Andhra Polytechnic College',
      period: '2021 - 2024',
      grade: '83%',
      status: 'Completed',
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'ZPP High School',
      period: '2016 - 2021',
      grade: 'GPA: 9.7',
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
            My <span className="text-emerald-400">Education</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-emerald-400/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="flex items-center gap-4 mb-4 md:mb-0">
                    <div className="w-12 h-12 bg-emerald-400/20 rounded-lg flex items-center justify-center">
                      <GraduationCap size={24} className="text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                      <p className="text-emerald-400">{edu.institution}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-gray-300 mb-2">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="text-emerald-400 font-semibold">{edu.grade}</div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      edu.status === 'Current' 
                        ? 'bg-emerald-400/20 text-emerald-400' 
                        : 'bg-gray-700 text-gray-300'
                    }`}>
                      {edu.status}
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

export default Education;