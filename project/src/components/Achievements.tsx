import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Trophy, FileCheck } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: 'HackerRank 5★ Certifications',
      description: 'Achieved 5-star ratings in Java, Python, and MySQL on HackerRank platform',
      icon: Star,
      category: 'Programming',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      title: 'LeetCode Problem Solver',
      description: 'Successfully solved 120+ algorithmic problems on LeetCode platform',
      icon: Trophy,
      category: 'Problem Solving',
      color: 'from-emerald-400 to-teal-500',
    },
    {
      title: 'Java Certification',
      description: 'Completed comprehensive Java programming certification',
      icon: FileCheck,
      category: 'Certification',
      color: 'from-blue-400 to-indigo-500',
    },
    {
      title: 'Python Certification',
      description: 'Earned Python programming certification with advanced concepts',
      icon: FileCheck,
      category: 'Certification',
      color: 'from-green-400 to-emerald-500',
    },
    {
      title: 'Full Stack Development',
      description: 'Completed full stack web development certification program',
      icon: Award,
      category: 'Web Development',
      color: 'from-purple-400 to-pink-500',
    },
    {
      title: 'AI & Machine Learning',
      description: 'Certified in Artificial Intelligence and Machine Learning concepts',
      icon: Award,
      category: 'AI/ML',
      color: 'from-red-400 to-rose-500',
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
            My <span className="text-emerald-400">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-emerald-400/50 transition-all duration-300 group"
            >
              <div className="relative mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <achievement.icon size={32} className="text-white" />
                </div>
                <span className="inline-block px-3 py-1 bg-emerald-400/20 text-emerald-400 rounded-full text-xs font-medium">
                  {achievement.category}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white mb-4">{achievement.title}</h3>
              <p className="text-gray-300 leading-relaxed">{achievement.description}</p>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                className="w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mt-6 origin-left"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-emerald-400 mb-4">Recognition Summary</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              These achievements reflect my commitment to continuous learning and excellence in 
              software development, problem-solving, and emerging technologies. Each certification 
              and accomplishment represents hours of dedicated practice and skill development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;