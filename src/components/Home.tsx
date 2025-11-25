import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Instagram } from 'lucide-react';
import twoCows from 'figma:asset/a82612d2cba4580a0a02341ee522bea35c57bcc9.png';
import scribbleBouquet from 'figma:asset/e642f3a26144e8fc59144d43a92d2a476ca151ff.png';
import toddLogo from 'figma:asset/347c327e93f757b38013444742883c32c7d05493.png';
import { portfolioProjects } from '../data/portfolio';

type PageType = 'home' | 'work' | 'insights' | 'about' | 'contact';

interface HomeProps {
  onNavigate: (page: PageType) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* BRAND LOGO - Absolute positioned at top level */}
      <motion.div
        className="absolute top-[50vh] left-[51%] -translate-x-1/2 -translate-y-1/2 z-[100]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          delay: 1.8, 
          duration: 1.2,
        }}
      >
        {/* Logo Container */}
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center">
          <img
            src={toddLogo}
            alt="TODD Logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Text Under Logo */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-center">
          <div className="text-white text-xs tracking-[0.3em] opacity-70">
            EST. 2025
          </div>
        </div>
      </motion.div>

      {/* TORN PAPER DIAGONAL LINE - Extended across Hero */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-[25]" style={{ height: '100vh' }}>
        <svg 
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <defs>
            {/* Paper texture filter */}
            <filter id="paperTexture">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
            </filter>
            
            {/* Rough edge effect */}
            <filter id="roughEdge">
              <feTurbulence baseFrequency="0.05" numOctaves="3" result="turbulence" />
              <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="8" />
            </filter>
          </defs>
          
          {/* Main torn paper path - 왼쪽으로 이동 */}
          <path
            d={`
              M 55 0
              L 58 0
              Q 57 3, 58 6
              Q 56 9, 57.5 12
              Q 56.5 15, 57 18
              Q 58 21, 56.5 24
              Q 57.5 27, 57 30
              Q 56 33, 57 36
              Q 56.5 39, 57.5 42
              Q 56 45, 56.8 48
              Q 57.5 51, 56.2 54
              Q 57 57, 56.5 60
              Q 55.5 63, 55 66
              Q 54.5 69, 54 72
              Q 53.5 75, 53 78
              Q 52.5 81, 52 84
              Q 51.5 87, 51 90
              Q 50.5 93, 50 96
              Q 49.5 98, 49 100
              L 35 100
              Q 35.5 98, 36 96
              Q 36.5 93, 37 90
              Q 37.5 87, 38 84
              Q 38.5 81, 39 78
              Q 39.5 75, 40 72
              Q 40.5 69, 41 66
              Q 41.5 63, 42 60
              Q 42.5 57, 43 54
              Q 43.5 51, 44 48
              Q 44.5 45, 45 42
              Q 45.5 39, 46 36
              Q 46.5 33, 47 30
              Q 47.5 27, 48 24
              Q 48.5 21, 49 18
              Q 49.5 15, 50 12
              Q 50.5 9, 51 6
              Q 51.5 3, 52 0
              Z
            `}
            fill="white"
            filter="url(#roughEdge)"
          />
          
          {/* Shadow/depth - 왼쪽으로 이동 */}
          <path
            d={`
              M 55 0
              Q 57 3, 58 6
              Q 56 9, 57.5 12
              Q 56.5 15, 57 18
              Q 58 21, 56.5 24
              Q 57.5 27, 57 30
              Q 56 33, 57 36
              Q 56.5 39, 57.5 42
              Q 56 45, 56.8 48
              Q 57.5 51, 56.2 54
              Q 57 57, 56.5 60
              Q 55.5 63, 55 66
              Q 54.5 69, 54 72
              Q 53.5 75, 53 78
              Q 52.5 81, 52 84
              Q 51.5 87, 51 90
              Q 50.5 93, 50 96
              Q 49.5 98, 49 100
              L 52 100
              Q 52.5 98, 53 96
              Q 53.5 93, 54 90
              Q 54.5 87, 55 84
              Q 55.5 81, 56 78
              Q 56.5 75, 57 72
              Q 57.5 69, 58 66
              Q 58.5 63, 59 60
              Q 59.5 57, 60 54
              Q 60.5 51, 61 48
              Q 61.5 45, 62 42
              Q 62.5 39, 63 36
              Q 63.5 33, 64 30
              Q 64.5 27, 65 24
              Q 65.5 21, 66 18
              Q 66.5 15, 67 12
              Q 67.5 9, 68 6
              Q 68.5 3, 69 0
              Z
            `}
            fill="rgba(0,0,0,0.08)"
            filter="url(#paperTexture)"
          />
        </svg>
      </div>

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black z-[5] pt-20">
        
        {/* GRID OVERLAY */}
        <div 
          className="absolute inset-0 pointer-events-none z-[5]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px',
          }}
        />

        {/* FILM GRAIN TEXTURE */}
        <div 
          className="absolute inset-0 pointer-events-none z-[6] opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        />

        {/* LOCATION INFO - Top Right */}
        <motion.div
          className="absolute top-28 right-8 text-white/50 text-[10px] tracking-[0.4em] z-30"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          SEOUL, KR / EST. 2025
        </motion.div>

        {/* VERTICAL TEXT - Left Side */}
        <motion.div
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          style={{ writingMode: 'vertical-rl' }}
        >
          <span className="text-white/40 text-[10px] tracking-[0.4em]">
            DESIGN × CODE
          </span>
        </motion.div>

        {/* PAGE INDEX - Bottom Left Corner */}
        <motion.div
          className="absolute top-28 left-8 text-white/30 text-[9px] tracking-[0.3em] z-30"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          001 / HOMEPAGE
        </motion.div>

        {/* TWO COWS - Single Image */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src={twoCows}
            alt="Two Cows"
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* LEFT - Main Title */}
        <motion.div
          className="absolute top-[15%] left-8 max-w-lg z-30"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-none text-white mb-8" style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            Torn, Raw, Alive
          </h1>
        </motion.div>

        {/* BOTTOM LEFT - Description */}
        <motion.div
          className="absolute bottom-12 left-8 max-w-md text-white/90 text-sm leading-relaxed z-30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          style={{
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
          }}
        >
          Break. Build. Repeat.<br/>
          Digital experiences with attitude.
        </motion.div>

        {/* BOTTOM RIGHT - Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 right-8 w-12 h-12 bg-black rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform z-30"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, type: "spring" }}
          whileHover={{ rotate: 90 }}
        >
          ↓
        </motion.div>

      </section>

      {/* ==================== PHILOSOPHY SECTION ==================== */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="text-sm tracking-[0.4em] text-gray-500 mb-8">— STUDIO PHILOSOPHY —</div>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl leading-tight mb-12">
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #4a5fdc' }}>
                Experimental
              </span>
              <br />
              <span className="text-white">By Default</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              규칙을 깨는 디자인, 기술로 구현하는 아이디어.<br />
              TODD Studio는 대담하고 실험적인 웹 경험을 창조합니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ==================== SERVICES SECTION ==================== */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-sm tracking-[0.4em] text-gray-500 mb-4">— WHAT WE DO —</div>
            <h2 className="text-6xl sm:text-8xl lg:text-9xl leading-none">
              <span className="text-white">Services</span>
            </h2>
          </motion.div>

          <div className="space-y-0">
            {[
              {
                number: "01",
                title: "UI/UX Design",
                description: "실험적이고 대담한 사용자 경험 디자인",
              },
              {
                number: "02",
                title: "Frontend Development",
                description: "최신 기술 스택으로 구현하는 인터랙티브 웹",
              },
              {
                number: "03",
                title: "Branding & Identity",
                description: "차별화된 브랜드 아이덴티티 구축",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="group border-t border-white/10 py-12 hover:bg-white/5 transition-all"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="grid md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-2">
                    <div className="text-4xl text-gray-600 group-hover:text-white transition-colors">
                      {service.number}
                    </div>
                  </div>
                  <div className="md:col-span-10">
                    <h3 className="text-4xl sm:text-5xl lg:text-6xl mb-4 group-hover:text-transparent group-hover:[-webkit-text-stroke:2px_white] transition-all">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-lg">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Services Button */}
          <motion.div
            className="mt-16 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.button
              className="px-12 py-6 bg-gradient-to-r from-[#4a5fdc] to-[#ff6b6b] text-white text-lg hover:shadow-2xl hover:shadow-[#4a5fdc]/50 transition-all border-2 border-transparent hover:border-white"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('insights')}
            >
              VIEW ALL SERVICES →
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ==================== MARQUEE SECTION ==================== */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-[#4a5fdc] to-[#ff6b6b]">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 text-5xl sm:text-7xl lg:text-9xl text-white px-8">
              <span>TODD STUDIO</span>
              <span className="text-black">×</span>
              <span>DESIGN</span>
              <span className="text-black">×</span>
              <span>CODE</span>
              <span className="text-black">×</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ==================== LATEST WORK PREVIEW ==================== */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 flex justify-between items-end"
          >
            <div>
              <div className="text-sm tracking-[0.4em] text-gray-500 mb-4">— SELECTED PROJECTS —</div>
              <h2 className="text-6xl sm:text-8xl lg:text-9xl leading-none">
                <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>
                  Latest Work
                </span>
              </h2>
            </div>
            <motion.button
              className="text-white border-2 border-white px-8 py-4 hover:bg-white hover:text-black transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('work')}
            >
              VIEW ALL →
            </motion.button>
          </motion.div>

          {/* Grid of 3 projects */}
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => onNavigate('work')}
              >
                {/* Project Image - 4:3 aspect ratio */}
                <div className="relative aspect-[4/3] mb-4 overflow-hidden bg-black">
                  <img
                    src={project.images.main}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="text-white text-6xl opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </div>
                  </div>
                  
                  {/* Project Number Badge */}
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm text-white px-4 py-2 border border-white/20">
                    <div className="text-2xl">{String(project.id).padStart(2, '0')}</div>
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="space-y-2">
                  <div className="text-sm text-gray-500 tracking-widest">{project.category} — {project.year}</div>
                  <h3 className="text-2xl text-white group-hover:text-[#4a5fdc] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400">{project.client}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION (2번 이미지 사용) ==================== */}
      <section className="relative h-screen">
        <div className="grid lg:grid-cols-2 h-full">
          {/* Left - CTA */}
          <motion.div
            className="bg-gradient-to-br from-[#4a5fdc] to-[#ff6b6b] flex items-center justify-center p-8 relative overflow-hidden"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>

            <div className="max-w-md relative z-10">
              <motion.h3
                className="text-6xl sm:text-7xl lg:text-8xl mb-8 leading-none text-white"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Let's Create<br />Together
              </motion.h3>
              <motion.p
                className="text-xl mb-12 text-white/90 leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                새로운 프로젝트를 시작할 준비가 되셨나요?<br />
                함께 혁신적인 경험을 만들어갑니다.
              </motion.p>
              <motion.button
                className="w-full px-8 py-6 bg-black text-white text-xl hover:bg-white hover:text-black transition-all border-2 border-black"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                onClick={() => onNavigate('contact')}
              >
                START A PROJECT →
              </motion.button>
            </div>
          </motion.div>

          {/* Right - Image (2번 scribbleBouquet) */}
          <motion.div
            className="bg-black flex items-center justify-center relative overflow-hidden"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-full h-full relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={scribbleBouquet}
                alt="Scribble Archive"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="relative bg-black border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="cursor-pointer relative group mb-4">
                <div className="relative flex items-center gap-2">
                  <div className="flex flex-col items-center">
                    <span className="text-xl text-white">✹</span>
                    <span className="text-[8px] text-gray-500 tracking-wider mt-0.5">EST. 2025</span>
                  </div>
                  <div className="relative">
                    <h1 className="text-4xl tracking-tighter text-white relative z-10">TODD</h1>
                    <h1 
                      className="text-4xl tracking-tighter text-[#4a5fdc] absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ transform: 'translate(2px, -2px)' }}
                    >
                      TODD
                    </h1>
                    <h1 
                      className="text-4xl tracking-tighter text-[#ff6b6b] absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ transform: 'translate(-2px, 2px)' }}
                    >
                      TODD
                    </h1>
                  </div>
                </div>
                <div 
                  className="h-0.5 bg-gradient-to-r from-[#4a5fdc] via-white to-[#ff6b6b] mt-1"
                  style={{ transform: 'scaleX(0)' }}
                />
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
                {[
                  { name: 'Work', page: 'work' as PageType },
                  { name: 'Insights', page: 'insights' as PageType },
                  { name: 'About', page: 'about' as PageType },
                  { name: 'Contact', page: 'contact' as PageType }
                ].map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => onNavigate(link.page)}
                      className="hover:text-white transition-colors hover:pl-2 inline-block text-left"
                    >
                      {link.name}</button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm tracking-widest mb-6 text-gray-500">CONTACT</h4>
              <p className="text-gray-400 text-sm mb-2">wognsben1997@naver.com</p>
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