import { motion } from 'motion/react';
import { Instagram, Sparkles, Zap, Target, Users } from 'lucide-react';
import scribbleBlue from 'figma:asset/1f43540dd88c1c8be60fd64cff1e815309e8657b.png';

type PageType = 'home' | 'work' | 'insights' | 'about' | 'contact';

interface AboutProps {
  onNavigate: (page: PageType) => void;
}

export function About({ onNavigate }: AboutProps) {
  const values = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Experimental",
      description: "규칙을 깨고 새로운 표현을 탐구합니다",
      color: "#4a5fdc",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Bold",
      description: "대담하고 독특한 아이디어를 실현합니다",
      color: "#ff6b6b",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Technical",
      description: "최신 기술로 완벽하게 구현합니다",
      color: "#4ecdc4",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative",
      description: "함께 만들어가는 창의적 과정을 중시합니다",
      color: "#ffe66d",
    },
  ];

  return (
    <div className="relative bg-black text-white min-h-screen pt-20">
      {/* Hero Section with Background Image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image (9번) */}
        <div className="absolute inset-0 z-0">
          <motion.img
            src={scribbleBlue}
            alt="About Background"
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
            <div className="text-sm tracking-[0.4em] text-gray-500 mb-8">— WHO WE ARE —</div>
            <h1 className="text-7xl sm:text-8xl lg:text-9xl xl:text-[12rem] leading-none mb-8">
              <span className="text-transparent" style={{ WebkitTextStroke: '3px white' }}>
                ABOUT
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              실험적이고 대담한 디자인으로<br />
              새로운 디지털 경험을 창조합니다.
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

      {/* Mission Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Tag - 왼쪽 상단 */}
            <div className="text-sm tracking-[0.4em] text-gray-500 mb-12">
              — OUR MISSION —
            </div>

            {/* 비대칭 레이아웃 */}
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
              {/* 왼쪽: 타이틀 (7 columns) */}
              <motion.div
                className="lg:col-span-7"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-tight">
                  <span className="text-transparent" style={{ WebkitTextStroke: '2px #4a5fdc' }}>
                    Breaking Rules,
                  </span>
                  <br />
                  <span className="text-white">Making Impact</span>
                </h2>
              </motion.div>

              {/* 오른쪽: 설명 (5 columns, 아래쪽 정렬) */}
              <motion.div
                className="lg:col-span-5 lg:self-end"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <p className="text-xl lg:text-2xl text-gray-400 leading-relaxed">
                  TODD Studio는 전통적인 디자인 규칙을 벗어나 실험적이고 대담한 접근으로 새로운 디지털 경험을 만듭니다.
                </p>
              </motion.div>
            </div>

            {/* 장식용 큰 텍스트 (배경) */}
            <motion.div
              className="absolute top-0 right-0 text-[12rem] lg:text-[20rem] opacity-5 pointer-events-none leading-none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.05 }}
              viewport={{ once: true }}
              style={{ WebkitTextStroke: '2px white' }}
            >
              <span className="text-transparent">TODD</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="text-sm tracking-[0.4em] text-gray-500 mb-4">— OUR VALUES —</div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl">
              What We Stand For
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="group p-8 border border-white/10 hover:border-white/30 transition-all"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div
                  className="mb-6"
                  style={{ color: value.color }}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-2xl mb-4 group-hover:text-transparent group-hover:[-webkit-text-stroke:1px_white] transition-all">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TODD Introduction Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-sm tracking-[0.4em] text-gray-500 mb-8">— MEET TODD —</div>
            <h2 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl mb-12 leading-tight">
              <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>
                TODD를
              </span>
              <br />
              <span className="text-white">만나보세요</span>
            </h2>
            <p className="text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              실험적이고 대담한 디자인으로<br />
              새로운 디지털 경험을 만드는<br className="md:hidden" />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px #4a5fdc' }}>
                TODD Studio
              </span>입니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl sm:text-7xl lg:text-8xl mb-8 leading-tight">
              <span className="text-white">Join</span>
              <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>
                Our Journey
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              함께 새로운 프로젝트를 만들어가고 싶으신가요?<br />
              언제든지 연락 주세요.
            </p>
            <motion.button
              className="px-12 py-6 bg-gradient-to-r from-[#4a5fdc] to-[#ff6b6b] text-white text-xl hover:shadow-2xl transition-all"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('contact')}
            >
              GET IN TOUCH →
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