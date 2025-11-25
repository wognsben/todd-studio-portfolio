import { motion } from 'motion/react';
import { useState } from 'react';
import { Instagram, TrendingUp, Lightbulb, Code, Palette } from 'lucide-react';
import scribbleMarket from 'figma:asset/9c98a73a4f6fe1ac0f31aa9945d703d3874078a3.png';

type PageType = 'home' | 'work' | 'insights' | 'about' | 'contact';

interface InsightsProps {
  onNavigate: (page: PageType) => void;
}

export function Insights({ onNavigate }: InsightsProps) {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      number: '01',
      title: 'UI/UX Design',
      description: '실험적이고 대담한 사용자 경험 디자인',
      details: '규칙을 깨는 인터페이스와 직관적인 인터랙션으로 사용자에게 새로운 경험을 제공합니다.',
      color: '#4a5fdc',
    },
    {
      id: 2,
      number: '02',
      title: 'Frontend Development',
      description: '최신 기술 스택으로 구현하는 인터랙티브 웹',
      details: 'React, TypeScript, Tailwind CSS 등 최신 기술로 빠르고 아름다운 웹을 만듭니다.',
      color: '#ff6b6b',
    },
    {
      id: 3,
      number: '03',
      title: 'Branding & Identity',
      description: '차별화된 브랜드 아이덴티티 구축',
      details: '독창적이고 강렬한 브랜드 경험으로 시장에서 돋보이게 만듭니다.',
      color: '#4ecdc4',
    },
    {
      id: 4,
      number: '04',
      title: 'Motion Design',
      description: '생동감 있는 애니메이션과 인터랙션',
      details: '섬세한 모션과 트랜지션으로 웹사이트에 생명을 불어넣습니다.',
      color: '#ffe66d',
    },
    {
      id: 5,
      number: '05',
      title: 'Web Development',
      description: 'React 기반 고성능 웹 애플리케이션',
      details: '확장 가능하고 유지보수하기 쉬운 웹 애플리케이션을 개발합니다.',
      color: '#a8e6cf',
    },
    {
      id: 6,
      number: '06',
      title: 'Design System',
      description: '확장 가능한 디자인 시스템 구축',
      details: '일관성 있고 체계적인 디자인 시스템으로 브랜드를 강화합니다.',
      color: '#ff8b94',
    },
  ];

  return (
    <div className="relative bg-black text-white min-h-screen pt-20">
      {/* Hero Section with Background Image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image (8번) */}
        <div className="absolute inset-0 z-0">
          <motion.img
            src={scribbleMarket}
            alt="Insights Background"
            className="w-full h-full object-cover opacity-20"
            initial={{ scale: 1.2, rotate: -5 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-sm tracking-[0.4em] text-gray-500 mb-8">— WHAT WE DO —</div>
            <h1 className="text-7xl sm:text-8xl lg:text-9xl xl:text-[12rem] leading-none mb-8">
              <span className="text-transparent" style={{ WebkitTextStroke: '3px white' }}>
                SERVICES
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              실험적이고 대담한 접근으로<br />
              차별화된 디지털 경험을 만듭니다.
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

      {/* Services Grid */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-sm tracking-[0.4em] text-gray-500 mb-4">— OUR EXPERTISE —</div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl">What We Do</h2>
          </motion.div>

          <div className="space-y-1">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="group cursor-pointer border-t border-white/10 py-8 hover:bg-white/5 transition-all px-6"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ x: 10 }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  {/* Number & Content */}
                  <div className="flex items-start gap-6 md:gap-8 flex-1">
                    <div
                      className="text-5xl md:text-6xl opacity-40 group-hover:opacity-100 transition-opacity flex-shrink-0"
                      style={{ color: service.color }}
                    >
                      {service.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl mb-2 group-hover:text-transparent group-hover:[-webkit-text-stroke:1px_white] transition-all">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-sm md:text-base mb-3">
                        {service.description}
                      </p>
                      <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                        {service.details}
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <motion.div
                    className="text-4xl md:text-5xl text-white/20 group-hover:text-white transition-colors flex-shrink-0"
                    whileHover={{ x: 10, rotate: -45 }}
                  >
                    →
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Border */}
          <div className="border-t border-white/10 mt-1" />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-[800px] mx-auto text-center">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl mb-8 leading-tight">
              <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>
                Visit Our Blog
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              최신 인사이트와 디자인 트렌드를<br />
              네이버 블로그에서 확인하세요.
            </p>

            <motion.a
              href="https://blog.naver.com/toddstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-6 bg-gradient-to-r from-[#4a5fdc] to-[#ff6b6b] text-white text-xl hover:shadow-2xl transition-all"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              VISIT BLOG →
            </motion.a>

            <div className="mt-8 text-sm text-gray-600">
              blog.naver.com/toddstudio
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
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
                      {link.name}
                    </button>
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