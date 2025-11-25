import { motion } from 'motion/react';
import { useState } from 'react';
import { Instagram, Calendar, Clock, ArrowRight } from 'lucide-react';
import scribbleArt from 'figma:asset/704eb0ad72d4b75ea89f692f5bb4f374d8ae5163.png';

export function Insights() {
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);

  const featuredPost = {
    id: 1,
    title: "The Future of Brutalist Web Design",
    excerpt: "실험적이고 대담한 브루탈리즘 웹 디자인의 미래를 탐구합니다. 규칙을 깨고 새로운 표현을 만드는 방법.",
    category: "Design Trends",
    date: "2025.01.15",
    readTime: "8 min read",
    color: "#4a5fdc",
  };

  const blogPosts = [
    {
      id: 2,
      title: "Motion Design in 2025",
      excerpt: "최신 모션 디자인 트렌드와 인터랙티브 애니메이션 기법",
      category: "Motion",
      date: "2025.01.12",
      readTime: "5 min read",
      color: "#ff6b6b",
    },
    {
      id: 3,
      title: "Typography as Art",
      excerpt: "타이포그래피를 예술로 승화시키는 실험적 접근",
      category: "Typography",
      date: "2025.01.10",
      readTime: "6 min read",
      color: "#4ecdc4",
    },
    {
      id: 4,
      title: "Color Psychology in UI",
      excerpt: "사용자 경험을 향상시키는 색채 심리학",
      category: "UI/UX",
      date: "2025.01.08",
      readTime: "7 min read",
      color: "#ffe66d",
    },
    {
      id: 5,
      title: "Micro-interactions Matter",
      excerpt: "디테일이 만드는 차이, 마이크로 인터랙션의 힘",
      category: "Interactive",
      date: "2025.01.05",
      readTime: "4 min read",
      color: "#a8e6cf",
    },
    {
      id: 6,
      title: "Grid Systems Reimagined",
      excerpt: "전통적인 그리드를 깨는 새로운 레이아웃 시스템",
      category: "Layout",
      date: "2025.01.03",
      readTime: "6 min read",
      color: "#ff8b94",
    },
    {
      id: 7,
      title: "The Art of White Space",
      excerpt: "여백의 미학과 시각적 호흡",
      category: "Design",
      date: "2025.01.01",
      readTime: "5 min read",
      color: "#c7ceea",
    },
  ];

  return (
    <div className="relative bg-black text-white min-h-screen pt-20">
      {/* Hero Section with Background Image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image (8번) */}
        <div className="absolute inset-0 z-0">
          <motion.img
            src={scribbleArt}
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
            <div className="text-sm tracking-[0.4em] text-gray-500 mb-8">— THOUGHTS & IDEAS —</div>
            <h1 className="text-7xl sm:text-8xl lg:text-9xl xl:text-[12rem] leading-none mb-8">
              <span className="text-transparent" style={{ WebkitTextStroke: '3px white' }}>
                INSIGHTS
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              디자인, 개발, 그리고 창의성에 대한<br />
              우리의 생각과 경험을 공유합니다.
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

      {/* Featured Post */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="text-sm tracking-[0.4em] text-gray-500 mb-4">— FEATURED —</div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl">Latest Article</h2>
          </motion.div>

          <motion.div
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Featured Image */}
              <motion.div
                className="relative aspect-[4/3] overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, ${featuredPost.color}, ${featuredPost.color}dd)`,
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="text-white/20 text-[15rem] leading-none"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    01
                  </motion.div>
                </div>

                {/* Category Badge */}
                <div
                  className="absolute top-6 left-6 bg-black/70 backdrop-blur-sm text-white px-4 py-2 text-xs tracking-widest border border-white/20"
                >
                  {featuredPost.category}
                </div>

                {/* Hover Arrow */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-black/60"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.div
                    className="text-white text-8xl"
                    initial={{ scale: 0, rotate: 0 }}
                    whileHover={{ scale: 1, rotate: 90 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    →
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Featured Content */}
              <div className="space-y-6">
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </div>
                </div>

                <h3 className="text-4xl sm:text-5xl lg:text-6xl leading-tight group-hover:text-transparent group-hover:[-webkit-text-stroke:2px_white] transition-all">
                  {featuredPost.title}
                </h3>

                <p className="text-xl text-gray-400 leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <motion.button
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#4a5fdc] to-[#ff6b6b] text-white hover:shadow-2xl transition-all"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  READ MORE
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="text-sm tracking-[0.4em] text-gray-500 mb-4">— ALL POSTS —</div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl">Recent Articles</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onHoverStart={() => setHoveredPost(post.id)}
                onHoverEnd={() => setHoveredPost(null)}
                whileHover={{ y: -10 }}
              >
                {/* Post Image */}
                <motion.div
                  className="relative aspect-[4/5] mb-4 overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${post.color}, ${post.color}dd)`,
                    }}
                  />

                  {/* Number */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/20 text-[10rem] leading-none">
                    {String(post.id).padStart(2, '0')}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 text-xs tracking-wider border border-white/20">
                    {post.category}
                  </div>

                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/80 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredPost === post.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="text-white text-6xl"
                      initial={{ scale: 0, rotate: 0 }}
                      animate={{
                        scale: hoveredPost === post.id ? 1 : 0,
                        rotate: hoveredPost === post.id ? 90 : 0,
                      }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      →
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Post Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-2xl group-hover:text-transparent group-hover:[-webkit-text-stroke:1px_white] transition-all">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">{post.excerpt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-[800px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl mb-8 leading-tight">
              <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>
                Stay Updated
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              최신 인사이트와 디자인 트렌드를<br />
              가장 먼저 받아보세요.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-6 py-4 bg-white/5 border border-white/20 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/50 transition-colors"
              />
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[#4a5fdc] to-[#ff6b6b] text-white whitespace-nowrap hover:shadow-2xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                SUBSCRIBE
              </motion.button>
            </div>

            <div className="mt-8 text-sm text-gray-600">
              무료로 구독하고 언제든지 구독 취소 가능합니다.
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