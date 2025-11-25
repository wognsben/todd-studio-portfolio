import { motion, useMotionValue, useTransform, useScroll } from 'motion/react';
import { useState, useEffect, useMemo } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import heroImage from 'figma:asset/041816a1438c5725d64b6c4914971421357a2e5b.png';
import drawnImage from 'figma:asset/83fdcc3e6d75ec2c930e2272d7a8ded49bd95201.png';
import scribbleGirls from 'figma:asset/ea039ee23a556654d0118d8d231ce3642645dbd3.png';
import scribbleFlowersClouds from 'figma:asset/f152d5908596c6814eea47e93655fb74a52aecd8.png';
import scribbleBouquet from 'figma:asset/e642f3a26144e8fc59144d43a92d2a476ca151ff.png';
import scribblePortrait from 'figma:asset/43460bda5851173b4cdca07ffd882dfb8b33bdf2.png';
import scribbleArt from 'figma:asset/704eb0ad72d4b75ea89f692f5bb4f374d8ae5163.png';
import scribbleDog from 'figma:asset/2859654151b52e65793142075abda8486ff717f9.png';
import scribbleDress from 'figma:asset/d5d28dd51f8ce7a652e2272d03ae2495caef90e0.png';
import scribblePeople from 'figma:asset/263b30ab3afed5c92c17ca0d40a0ee132614a897.png';
import scribbleBird from 'figma:asset/64a3719b6f9b12ce2df23abf15598d419007f1ff.png';
import cowFlesh from 'figma:asset/651d1c80b74e5b16b23f8a335f066acd6fb36bd5.png';
import cowBones from 'figma:asset/0e8d60a8da62a01d5f6f2296cfaa6e2449e276e0.png';
import scribbleBlue from 'figma:asset/d6c974dcd4689ee0b01faa57207ef6bcfe06d967.png';
import toddLogo from 'figma:asset/347c327e93f757b38013444742883c32c7d05493.png';

export function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Portfolio data (expandable)
  const portfolioProjects = [
    {
      id: 1,
      title: "Project Alpha",
      client: "Tech Startup",
      year: "2024",
      category: "UI/UX Design",
      description: "A bold redesign of a fintech platform that challenges conventional banking interfaces.",
      color: "#4a5fdc",
      image: scribbleBouquet,
    },
    {
      id: 2,
      title: "Project Beta",
      client: "Creative Agency",
      year: "2024",
      category: "Frontend Development",
      description: "Experimental web experience with 3D interactions and brutalist aesthetics.",
      color: "#ff6b6b",
      image: scribblePortrait,
    },
    {
      id: 3,
      title: "Project Gamma",
      client: "Fashion Brand",
      year: "2025",
      category: "Web Design",
      description: "Raw, unfiltered digital presence for an avant-garde fashion collective.",
      color: "#4ecdc4",
      image: scribbleArt,
    },
    {
      id: 4,
      title: "Project Delta",
      client: "Music Festival",
      year: "2025",
      category: "Interactive Design",
      description: "Chaotic yet harmonious festival website with generative art elements.",
      color: "#ffe66d",
      image: scribbleBlue,
    },
  ];

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % portfolioProjects.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + portfolioProjects.length) % portfolioProjects.length);
  };

  const scribbleImages = [
    { src: scribbleGirls, id: "001", color: "#4a5fdc" },
    { src: scribbleBouquet, id: "002", color: "#ff6b6b" },
    { src: scribbleDog, id: "003", color: "#ffe66d" },
    { src: scribblePortrait, id: "004", color: "#4ecdc4" },
    { src: scribbleFlowersClouds, id: "005", color: "#ffd3b6" },
    { src: scribbleDress, id: "006", color: "#a8e6cf" },
    { src: scribblePeople, id: "007", color: "#ff8b94" },
    { src: scribbleArt, id: "008", color: "#c7ceea" },
    { src: scribbleBlue, id: "009", color: "#5b6fdc" },
  ];

  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-6 h-6 border-2 border-[#4a5fdc] rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          translateX: '-50%',
          translateY: '-50%',
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* BRAND LOGO - Absolute positioned at top level */}
      <motion.div
        className="absolute top-[50vh] left-[58%] -translate-x-1/2 -translate-y-1/2 z-[100]"
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

      {/* TORN PAPER DIAGONAL LINE - Extended across Hero + Archive */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-[15]" style={{ height: 'calc(100vh + 200vh)' }}>
        <svg 
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 100 200"
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
          
          {/* Main torn paper path - extended from hero to archive */}
          <path
            d={`
              M 65 0
              L 66 0
              Q 65.5 3, 66 6
              Q 65 8, 66.2 10
              Q 65.5 13, 65.8 16
              Q 66.5 19, 65.3 22
              Q 66 25, 65.5 28
              Q 64.8 31, 65.8 34
              Q 65.2 37, 66 40
              Q 65 43, 65.7 46
              Q 66.2 49, 65.3 52
              Q 65.8 55, 65 58
              Q 65.5 61, 64.8 64
              Q 65.3 67, 65 70
              Q 64.5 73, 64.8 76
              Q 64.2 79, 64.5 82
              Q 64 85, 63.8 88
              Q 63.5 91, 63.2 94
              Q 63 97, 62.5 100
              Q 61 105, 59 110
              Q 57 115, 55 120
              Q 53 125, 50 127
              Q 42 130, 34 133
              Q 26 136, 20 140
              Q 18 145, 17.5 150
              Q 17 155, 16.5 160
              Q 16 165, 15.8 170
              Q 15.5 175, 15.2 180
              Q 15 185, 14.8 190
              Q 14.5 195, 14.2 200
              L 12 200
              Q 12.3 195, 12.5 190
              Q 12.8 185, 13 180
              Q 13.2 175, 13.5 170
              Q 13.8 165, 14 160
              Q 14.5 155, 15 150
              Q 16 145, 18 140
              Q 24 136, 32 133
              Q 40 130, 44 127
              Q 47 125, 49 120
              Q 51 115, 53 110
              Q 55 105, 57 100
              Q 45.5 97, 45.8 94
              Q 46 91, 46.5 88
              Q 46.8 85, 47 82
              Q 47.3 79, 47.5 76
              Q 47.8 73, 48 70
              Q 48.5 67, 48.7 64
              Q 49 61, 49.5 58
              Q 49.8 55, 50.2 52
              Q 50.5 49, 51 46
              Q 51.5 43, 52 40
              Q 52.5 37, 53 34
              Q 53.5 31, 54 28
              Q 54.8 25, 55.5 22
              Q 56 19, 56.8 16
              Q 57.5 13, 58.2 10
              Q 59 8, 60 6
              Q 61 3, 62 0
              Z
            `}
            fill="white"
            filter="url(#roughEdge)"
          />
          
          {/* Shadow/depth on left side */}
          <path
            d={`
              M 65 0
              Q 65.5 3, 66 6
              Q 65 8, 66.2 10
              Q 65.5 13, 65.8 16
              Q 66.5 19, 65.3 22
              Q 66 25, 65.5 28
              Q 64.8 31, 65.8 34
              Q 65.2 37, 66 40
              Q 65 43, 65.7 46
              Q 66.2 49, 65.3 52
              Q 65.8 55, 65 58
              Q 65.5 61, 64.8 64
              Q 65.3 67, 65 70
              Q 64.5 73, 64.8 76
              Q 64.2 79, 64.5 82
              Q 64 85, 63.8 88
              Q 63.5 91, 63.2 94
              Q 63 97, 62.5 100
              Q 61 105, 59 110
              Q 57 115, 55 120
              Q 53 125, 50 127
              Q 42 130, 34 133
              Q 26 136, 20 140
              Q 18 145, 17.5 150
              Q 17 155, 16.5 160
              Q 16 165, 15.8 170
              Q 15.5 175, 15.2 180
              Q 15 185, 14.8 190
              Q 14.5 195, 14.2 200
              L 13 200
              Q 13.3 195, 13.5 190
              Q 13.7 185, 14 180
              Q 14.2 175, 14.5 170
              Q 14.8 165, 15 160
              Q 15.5 155, 16 150
              Q 17 145, 19 140
              Q 25 136, 33 133
              Q 41 130, 45 127
              Q 48 125, 50 120
              Q 52 115, 54 110
              Q 56 105, 58 100
              Q 62.5 97, 62.8 94
              Q 63 91, 63.3 88
              Q 63.5 85, 63.8 82
              Q 64 79, 64.3 76
              Q 64.5 73, 64.8 70
              Q 65 67, 65.3 64
              Q 65.5 61, 65.8 58
              Q 66 55, 66.2 52
              Q 66.3 49, 66.5 46
              Q 66.7 43, 67 40
              Q 67.2 37, 67.5 34
              Q 67.8 31, 68 28
              Q 68.3 25, 68.5 22
              Q 68.8 19, 69 16
              Q 69.3 13, 69.5 10
              Q 70 8, 70.5 6
              Q 71 3, 71.5 0
              Z
            `}
            fill="rgba(0,0,0,0.08)"
            filter="url(#paperTexture)"
          />
        </svg>
      </div>

      {/* Hero - Diagonal Split: Inspired by The Vulture and the Cow */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black z-10 pt-20">
        
        {/* Diagonal Split Container */}
        <div className="relative w-full h-screen">
          
          {/* LEFT SIDE - Black Background + Skeleton Cow */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-full bg-black"
            style={{
              clipPath: 'polygon(0 0, 65% 0, 45% 100%, 0 100%)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Skeleton Cow - Moved Right & Same Height as Flesh Cow */}
            <motion.div
              className="absolute top-1/2 left-[38%] -translate-y-1/2 w-[45%] max-w-xl z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src={cowBones}
                alt="Skeleton Cow"
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - Black Background + Purple Cow */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-full bg-black"
            style={{
              clipPath: 'polygon(65% 0, 100% 0, 100% 100%, 45% 100%)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Purple Cow - Same Height as Skeleton Cow */}
            <motion.div
              className="absolute top-1/2 right-[20%] -translate-y-1/2 w-[45%] max-w-xl z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src={cowFlesh}
                alt="Purple Cow"
                className="w-full h-auto"
                style={{ 
                  transform: 'scaleX(-1)'
                }}
              />
            </motion.div>
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
            We tear down conventions and rebuild<br/>
            digital experiences from scratch—<br/>
            raw, experimental, alive.<br/><br/>
            <span className="text-white/70">UI/UX Design × Frontend Development</span>
          </motion.div>

          {/* BOTTOM RIGHT - Small Icon/Badge */}
          <motion.div
            className="absolute bottom-8 right-8 w-12 h-12 bg-black rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform z-30"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, type: "spring" }}
            whileHover={{ rotate: 90 }}
          >
            ↓
          </motion.div>

        </div>

      </section>

      {/* Scribble Collection - Chaotic Grid */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-[1800px] mx-auto">
          {/* Floating Header */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-20 relative"
          >
            <div className="absolute -left-4 top-0 w-1 h-full bg-[#4a5fdc]" />
            <h2 className="text-6xl sm:text-8xl lg:text-9xl leading-none pl-8">
              <span className="text-white">Scribble</span>
              <span className="block text-transparent" style={{ WebkitTextStroke: '2px #4a5fdc' }}>Archive</span>
            </h2>
            <div className="pl-8 mt-4 flex items-center gap-4">
              <div className="w-16 h-1 bg-[#4a5fdc]" />
              <span className="text-gray-500 text-sm">2024 → 2025</span>
            </div>
          </motion.div>

          {/* Chaotic Image Grid */}
          <div className="relative">
            {scribbleImages.map((image, index) => {
              const positions = [
                { top: "0%", left: "5%", width: "35%", rotate: -3 },      // 001
                { top: "10%", right: "8%", width: "28%", rotate: 5 },     // 002
                { top: "30%", left: "45%", width: "32%", rotate: 2 },     // 003 (원래 004 위치)
                { top: "45%", left: "15%", width: "25%", rotate: -8 },    // 004 (원래 003 위치)
                { top: "55%", left: "42%", width: "24%", rotate: 6 },     // 005 (원래 008 위)
                { top: "65%", right: "15%", width: "30%", rotate: -5 },   // 006 (원래 005 위치)
                { top: "80%", left: "8%", width: "27%", rotate: 7 },      // 007 (원래 006 위치)
                { top: "85%", right: "35%", width: "22%", rotate: -4 },   // 008 (원래 007 위치)
                { top: "90%", left: "20%", width: "20%", rotate: 3 },     // 009 (새로운 위치)
              ];

              const position = positions[index];

              return (
                <motion.div
                  key={index}
                  className="absolute cursor-pointer group z-20"
                  style={{
                    top: position.top,
                    left: position.left,
                    right: position.right,
                    width: position.width,
                  }}
                  initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: position.rotate }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 0, 
                    zIndex: 50,
                    transition: { duration: 0.3 }
                  }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  onHoverStart={() => setHoveredImage(index)}
                  onHoverEnd={() => setHoveredImage(null)}
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/5] bg-white overflow-hidden">
                    <img
                      src={image.src}
                      alt={`Scribble ${image.id}`}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* ✨ Shine Effect */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: 'linear-gradient(110deg, transparent 0%, rgba(255,255,255,0.9) 50%, transparent 100%)',
                        width: '200%',
                        height: '200%',
                        left: '-50%',
                        top: '-50%',
                      }}
                      initial={{ x: "-50%", y: "-50%" }}
                      whileInView={{ x: "50%", y: "50%" }}
                      transition={{ 
                        duration: 0.8, 
                        ease: "easeOut",
                        delay: index * 0.05 
                      }}
                      viewport={{ once: true }}
                    />
                    
                    {/* Hover Overlay */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ backgroundColor: image.color }}
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-white text-center">
                        <div className="text-6xl mb-2">{image.id}</div>
                        <div className="text-sm tracking-widest">VIEW</div>
                      </div>
                    </motion.div>

                    {/* ID Badge */}
                    <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-xs">
                      {image.id}
                    </div>
                  </div>

                  {/* Color Strip */}
                  <motion.div
                    className="h-2 mt-2"
                    style={{ backgroundColor: image.color }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  />
                </motion.div>
              );
            })}

            {/* Spacer for absolute positioned items */}
            <div className="h-[200vh]" />
          </div>
        </div>
      </section>

      {/* Book Portfolio Section - Page Flip Interaction */}
      <section className="relative min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <div className="text-sm tracking-[0.3em] text-gray-500 mb-4">— OUR WORKS —</div>
            <h2 className="text-6xl sm:text-8xl lg:text-9xl leading-none">
              <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>Portfolio</span>
            </h2>
          </motion.div>

          {/* Book Container */}
          <div className="relative perspective-[2000px]">
            {/* Current Page Display */}
            <motion.div
              key={currentPage}
              className="relative w-full max-w-5xl mx-auto"
              initial={{ rotateY: -90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: 90, opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Page Content */}
              <div className="relative bg-white text-black p-8 sm:p-12 lg:p-16 shadow-2xl">
                {/* Page Number - Top Left */}
                <div className="absolute top-8 left-8 text-6xl sm:text-8xl opacity-10 leading-none">
                  {currentPage + 1}
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Left: Image */}
                  <motion.div
                    className="relative aspect-[3/4] bg-gray-100 overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={portfolioProjects[currentPage].image}
                      alt={portfolioProjects[currentPage].title}
                      className="w-full h-full object-cover"
                    />
                    {/* Color overlay */}
                    <div 
                      className="absolute inset-0 mix-blend-multiply opacity-20"
                      style={{ backgroundColor: portfolioProjects[currentPage].color }}
                    />
                  </motion.div>

                  {/* Right: Info */}
                  <div className="space-y-6">
                    {/* Category Badge */}
                    <div 
                      className="inline-block px-4 py-2 text-white text-xs tracking-widest"
                      style={{ backgroundColor: portfolioProjects[currentPage].color }}
                    >
                      {portfolioProjects[currentPage].category}
                    </div>

                    {/* Title */}
                    <h3 className="text-4xl sm:text-5xl lg:text-6xl leading-none">
                      {portfolioProjects[currentPage].title}
                    </h3>

                    {/* Client & Year */}
                    <div className="flex gap-8 text-sm text-gray-600">
                      <div>
                        <div className="uppercase tracking-wider mb-1">Client</div>
                        <div className="text-black">{portfolioProjects[currentPage].client}</div>
                      </div>
                      <div>
                        <div className="uppercase tracking-wider mb-1">Year</div>
                        <div className="text-black">{portfolioProjects[currentPage].year}</div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {portfolioProjects[currentPage].description}
                    </p>

                    {/* View Project Button */}
                    <motion.button
                      className="mt-4 px-8 py-3 bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      VIEW PROJECT →
                    </motion.button>
                  </div>
                </div>

                {/* Page Tear Effect - Bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-black opacity-5" 
                  style={{
                    clipPath: 'polygon(0 0, 2% 100%, 5% 0, 7% 100%, 10% 0, 12% 100%, 15% 0, 18% 100%, 20% 0, 23% 100%, 25% 0, 28% 100%, 30% 0, 32% 100%, 35% 0, 38% 100%, 40% 0, 42% 100%, 45% 0, 48% 100%, 50% 0, 52% 100%, 55% 0, 58% 100%, 60% 0, 62% 100%, 65% 0, 68% 100%, 70% 0, 72% 100%, 75% 0, 78% 100%, 80% 0, 82% 100%, 85% 0, 88% 100%, 90% 0, 92% 100%, 95% 0, 98% 100%, 100% 0)'
                  }}
                />
              </div>
            </motion.div>

            {/* Navigation Arrows */}
            <div className="flex justify-between items-center mt-12 max-w-5xl mx-auto">
              {/* Previous Button */}
              <motion.button
                onClick={prevPage}
                className="group flex items-center gap-3 text-white hover:text-[#4a5fdc] transition-colors"
                whileHover={{ x: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-12 h-12 border-2 border-white group-hover:border-[#4a5fdc] flex items-center justify-center text-2xl transition-colors">
                  ←
                </div>
                <span className="text-sm tracking-wider">PREV</span>
              </motion.button>

              {/* Page Indicator */}
              <div className="flex gap-3">
                {portfolioProjects.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className="relative"
                    whileHover={{ scale: 1.2 }}
                  >
                    <div 
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentPage 
                          ? 'bg-white w-8' 
                          : 'bg-gray-600 hover:bg-gray-400'
                      }`}
                    />
                  </motion.button>
                ))}
              </div>

              {/* Next Button */}
              <motion.button
                onClick={nextPage}
                className="group flex items-center gap-3 text-white hover:text-[#4a5fdc] transition-colors"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm tracking-wider">NEXT</span>
                <div className="w-12 h-12 border-2 border-white group-hover:border-[#4a5fdc] flex items-center justify-center text-2xl transition-colors">
                  →
                </div>
              </motion.button>
            </div>

            {/* Page Counter */}
            <div className="text-center mt-8 text-gray-600 text-sm tracking-wider">
              {String(currentPage + 1).padStart(2, '0')} / {String(portfolioProjects.length).padStart(2, '0')}
            </div>
          </div>
        </div>
      </section>

      {/* Split Screen CTA */}
      <section className="relative h-screen">
        <div className="grid lg:grid-cols-2 h-full">
          {/* Left - Newsletter */}
          <motion.div
            className="bg-[#4a5fdc] flex items-center justify-center p-8"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="max-w-md">
              <h3 className="text-6xl sm:text-7xl mb-8 leading-none">
                Join the<br />Archive
              </h3>
              <p className="text-xl mb-8 opacity-90">
                새로운 컬렉션과 독점 콘텐츠를 가장 먼저 만나보세요
              </p>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-6 py-4 bg-white text-black focus:outline-none focus:ring-4 focus:ring-white/50"
                />
                <button className="w-full px-6 py-4 bg-black text-white hover:bg-white hover:text-black transition-colors">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            className="bg-black flex items-center justify-center relative overflow-hidden"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.img
              src={scribbleGirls}
              alt="Scribble"
              className="w-full h-full object-cover"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-12 left-12 text-white">
              <div className="text-6xl mb-2">✹</div>
              <div className="text-2xl">TODD</div>
              <div className="text-sm opacity-70">Est. 2025</div>
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
                실험적이고 대담한 꽃의 아카이브
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                  IG
                </a>
                <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                  TW
                </a>
                <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                  FB
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm tracking-widest mb-6 text-gray-500">QUICK LINKS</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-[#4a5fdc] transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-[#4a5fdc] transition-colors">Shop</a></li>
                <li><a href="#" className="hover:text-[#4a5fdc] transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-[#4a5fdc] transition-colors">About</a></li>
                <li><a href="#" className="hover:text-[#4a5fdc] transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm tracking-widest mb-6 text-gray-500">CONTACT</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>hello@todd.design</li>
                <li>+82 10-1234-5678</li>
                <li className="pt-4">
                  Seoul, South Korea<br/>
                  Experimental Studio
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div>© 2025 TODD. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        .glitch {
          position: relative;
          animation: glitch 3s infinite;
        }
        
        @keyframes glitch {
          0%, 90%, 100% {
            transform: translate(0);
          }
          92% {
            transform: translate(-2px, 2px);
          }
          94% {
            transform: translate(2px, -2px);
          }
          96% {
            transform: translate(-2px, -2px);
          }
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .petal {
          background: radial-gradient(circle, #ff6b6b, #ff6b6b 50%, transparent 50%);
          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
        }

        .star {
          background: radial-gradient(circle, #4a5fdc, #4a5fdc 50%, transparent 50%);
          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
        }

        .special-star {
          animation: twinkle 2s infinite;
        }

        @keyframes twinkle {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  );
}