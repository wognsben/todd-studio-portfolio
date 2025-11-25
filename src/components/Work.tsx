import { motion } from 'motion/react';
import { useState } from 'react';
import { Instagram, X } from 'lucide-react';
import { portfolioProjects } from '../data/portfolio';
import scribblePortrait from 'figma:asset/43460bda5851173b4cdca07ffd882dfb8b33bdf2.png';

export function Work() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const categories = ['all', 'UI/UX', 'Web', 'Branding', 'E-commerce'];

  const filteredProjects = filter === 'all' 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.tags.includes(filter));

  const selectedProjectData = portfolioProjects.find(p => p.id === selectedProject);

  return (
    <div className="relative bg-black text-white min-h-screen pt-20">
      {/* Hero Section with Background Image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image (4번) */}
        <div className="absolute inset-0 z-0">
          <motion.img
            src={scribblePortrait}
            alt="Work Background"
            className="w-full h-full object-cover opacity-30"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-sm tracking-[0.4em] text-gray-500 mb-8">— OUR PORTFOLIO —</div>
            <h1 className="text-7xl sm:text-8xl lg:text-9xl xl:text-[12rem] leading-none mb-8">
              <span className="text-transparent" style={{ WebkitTextStroke: '3px white' }}>
                WORK
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              실험적이고 대담한 프로젝트들.<br />
              규칙을 깨고, 새로운 경험을 만듭니다.
            </p>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
              <motion.div
                className="w-1 h-2 bg-white rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 border-2 transition-all ${
                  filter === category
                    ? 'bg-gradient-to-r from-[#4a5fdc] to-[#ff6b6b] border-transparent text-white'
                    : 'border-white/20 text-gray-400 hover:border-white/50 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {category.toUpperCase()}
              </motion.button>
            ))}
          </motion.div>

          {/* Project Count */}
          <motion.div
            className="text-center mt-8 text-gray-500 text-sm tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {filteredProjects.length} PROJECT{filteredProjects.length !== 1 ? 'S' : ''}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid - Each project shows all 3 images */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="space-y-32">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.2 }}
              >
                {/* Project Header */}
                <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                  <div>
                    <div className="text-9xl opacity-10 leading-none mb-4">
                      {String(project.id).padStart(2, '0')}
                    </div>
                    <h2 className="text-5xl sm:text-6xl lg:text-7xl mb-4">
                      <span 
                        className="text-transparent"
                        style={{ WebkitTextStroke: '2px white' }}
                      >
                        {project.title}
                      </span>
                    </h2>
                    <div className="flex flex-wrap gap-3 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <div
                          key={tagIndex}
                          className="bg-white/5 border border-white/20 text-white text-xs px-4 py-2"
                        >
                          {tag}
                        </div>
                      ))}
                    </div>
                    <div className="text-gray-500 text-sm tracking-wider mb-2">
                      {project.client} — {project.year}
                    </div>
                  </div>
                  
                  <motion.div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl cursor-pointer"
                    style={{ backgroundColor: project.color }}
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    onClick={() => setSelectedProject(project.id)}
                  >
                    →
                  </motion.div>
                </div>

                {/* Project Images Grid - All 3 images in 4:3 ratio */}
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Main Image */}
                  <motion.div
                    className="md:col-span-2 relative aspect-[4/3] overflow-hidden bg-black cursor-pointer group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    onClick={() => setSelectedProject(project.id)}
                  >
                    <img
                      src={project.images.main}
                      alt={`${project.title} - Main`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="text-white text-sm tracking-widest">MAIN VIEW</div>
                    </div>
                  </motion.div>

                  {/* Secondary Images */}
                  <div className="space-y-6">
                    <motion.div
                      className="relative aspect-[4/3] overflow-hidden bg-black cursor-pointer group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                      onClick={() => setSelectedProject(project.id)}
                    >
                      <img
                        src={project.images.image2}
                        alt={`${project.title} - Image 2`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>

                    <motion.div
                      className="relative aspect-[4/3] overflow-hidden bg-black cursor-pointer group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                      onClick={() => setSelectedProject(project.id)}
                    >
                      <img
                        src={project.images.image3}
                        alt={`${project.title} - Image 3`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                  </div>
                </div>

                {/* Project Description */}
                <motion.div
                  className="mt-8 max-w-3xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && selectedProjectData && (
        <motion.div
          className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            className="relative max-w-6xl w-full max-h-[90vh] overflow-y-auto bg-black border border-white/20 p-6 sm:p-12"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center border border-white/20 hover:bg-white hover:text-black transition-colors"
              onClick={() => setSelectedProject(null)}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl sm:text-6xl mb-4">{selectedProjectData.title}</h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProjectData.tags.map((tag, index) => (
                    <div key={index} className="bg-white/5 border border-white/20 px-3 py-1 text-xs">
                      {tag}
                    </div>
                  ))}
                </div>
                <div className="text-gray-400 mb-6">
                  {selectedProjectData.client} — {selectedProjectData.year}
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {selectedProjectData.description}
                </p>
              </div>

              {/* All Images */}
              <div className="space-y-6">
                <img
                  src={selectedProjectData.images.main}
                  alt={`${selectedProjectData.title} - Main`}
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="grid sm:grid-cols-2 gap-6">
                  <img
                    src={selectedProjectData.images.image2}
                    alt={`${selectedProjectData.title} - Image 2`}
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <img
                    src={selectedProjectData.images.image3}
                    alt={`${selectedProjectData.title} - Image 3`}
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* CTA Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl sm:text-7xl lg:text-8xl mb-8 leading-tight">
              <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>
                Got a project
              </span>
              <br />
              <span className="text-white">in mind?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              함께 새로운 프로젝트를 시작해보세요.<br />
              대담하고 실험적인 결과물을 만들어드립니다.
            </p>
            <motion.button
              className="px-12 py-6 bg-gradient-to-r from-[#4a5fdc] to-[#ff6b6b] text-white text-xl hover:shadow-2xl transition-all"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              LET'S TALK →
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="text-4xl mb-4 tracking-tighter">
                <span className="text-transparent" style={{ WebkitTextStroke: '1.5px white' }}>TODD</span>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                규칙을 깨는 선<br/>
                실험적이고 대담한 디자인 스튜디오
              </p>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#4a5fdc] hover:to-[#ff6b6b] hover:border-transparent transition-all group"
                >
                  <Instagram className="w-4 h-4 text-white" />
                </a>
                <a 
                  href="https://blog.naver.com/toddstudio" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#4a5fdc] hover:to-[#ff6b6b] hover:border-transparent transition-all text-xs"
                >
                  BL
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm tracking-widest mb-6 text-gray-500">QUICK LINKS</h4>
              <ul className="space-y-3 text-gray-400">
                {['Work', 'Insights', 'About', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition-colors hover:pl-2 inline-block">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm tracking-widest mb-6 text-gray-500">CONTACT</h4>
              <p className="text-gray-400 text-sm mb-2">wognsben19977@naver.com</p>
              <p className="text-gray-400 text-sm">Seoul, South Korea</p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-gray-600 text-xs">
              © 2025 TODD Studio. All rights reserved.
            </div>
            <div className="flex gap-6 text-gray-600 text-xs">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}