import { motion } from 'motion/react';
import { Instagram, Code, Palette, Zap, Users } from 'lucide-react';
import scribbleBlue from 'figma:asset/d6c974dcd4689ee0b01faa57207ef6bcfe06d967.png';

export function About() {
  const values = [
    {
      icon: <Palette className="w-8 h-8" />,
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
      icon: <Code className="w-8 h-8" />,
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

  const team = [
    {
      name: "김도경",
      role: "Creative Director",
      description: "실험적 디자인과 브랜드 전략 전문",
    },
    {
      name: "이서연",
      role: "Lead Designer",
      description: "UI/UX 디자인과 인터랙션 디자인",
    },
    {
      name: "박준혁",
      role: "Frontend Developer",
      description: "React & Motion 개발 전문",
    },
    {
      name: "최하은",
      role: "Brand Strategist",
      description: "브랜드 아이덴티티와 마케팅",
    },
  ];

  const timeline = [
    { year: "2025", event: "TODD Studio 설립" },
    { year: "2025 Q2", event: "첫 클라이언트 프로젝트 완료" },
    { year: "2025 Q3", event: "디자인 어워드 수상" },
    { year: "2025 Q4", event: "팀 확장 및 오피스 이전" },
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-sm tracking-[0.4em] text-gray-500 mb-8">— OUR MISSION —</div>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl mb-8 leading-tight">
                <span className="text-transparent" style={{ WebkitTextStroke: '2px #4a5fdc' }}>
                  Breaking Rules,
                </span>
                <br />
                <span className="text-white">Making Impact</span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                TODD Studio는 전통적인 디자인 규칙을 벗어나 실험적이고 대담한 접근으로 새로운 디지털 경험을 만듭니다.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                우리는 개성 100, 독특함 100의 철학으로 모든 프로젝트에 임하며, 
                최신 기술과 창의적인 디자인을 결합하여 기억에 남는 결과물을 창조합니다.
              </p>
            </motion.div>

            {/* Right - Stats */}
            <motion.div
              className="grid grid-cols-2 gap-8"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {[
                { value: "100+", label: "Projects", color: "#4a5fdc" },
                { value: "50+", label: "Clients", color: "#ff6b6b" },
                { value: "24/7", label: "Support", color: "#4ecdc4" },
                { value: "100%", label: "Passion", color: "#ffe66d" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-8 border border-white/10 hover:border-white/30 transition-colors"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-6xl mb-4" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <div className="text-sm tracking-widest text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
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

      {/* Team Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="text-sm tracking-[0.4em] text-gray-500 mb-4">— THE TEAM —</div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl mb-8">
              <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>
                Meet the Team
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              열정과 전문성을 가진 크리에이터들이<br />
              함께 모여 독특한 경험을 만들어갑니다.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {/* Avatar Placeholder */}
                <motion.div
                  className="relative aspect-square mb-4 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4a5fdc] to-[#ff6b6b]" />
                  <div className="absolute inset-0 flex items-center justify-center text-white text-6xl">
                    {member.name.charAt(0)}
                  </div>

                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/80 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="text-white text-sm text-center px-4">
                      {member.description}
                    </div>
                  </motion.div>
                </motion.div>

                <div className="text-center">
                  <h3 className="text-xl mb-2 group-hover:text-[#4a5fdc] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500 tracking-wider">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-[1000px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="text-sm tracking-[0.4em] text-gray-500 mb-4">— OUR JOURNEY —</div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl">Timeline</h2>
          </motion.div>

          <div className="space-y-0">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="group border-t border-white/10 py-8 hover:bg-white/5 transition-all"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 20 }}
              >
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="text-4xl text-gray-600 group-hover:text-white transition-colors">
                    {item.year}
                  </div>
                  <div className="md:col-span-2 text-2xl group-hover:text-transparent group-hover:[-webkit-text-stroke:1px_white] transition-all">
                    {item.event}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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