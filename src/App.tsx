import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home } from './components/Home';
import { Work } from './components/Work';
import { Insights } from './components/Insights';
import { About } from './components/About';
import { Contact } from './components/Contact';
import toddLogo from 'figma:asset/347c327e93f757b38013444742883c32c7d05493.png';

type PageType = 'home' | 'work' | 'insights' | 'about' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 'home' as PageType, label: 'Home', number: '01' },
    { id: 'work' as PageType, label: 'Work', number: '02' },
    { id: 'insights' as PageType, label: 'Insights', number: '03' },
    { id: 'about' as PageType, label: 'About', number: '04' },
    { id: 'contact' as PageType, label: 'Contact', number: '05' },
  ];

  return (
    <div className="min-h-screen bg-black relative">
      {/* Header Navigation - Experimental Dark Style */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
      >
        <nav className="max-w-[1800px] mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo - Experimental */}
            <motion.div 
              className="cursor-pointer relative group"
              onClick={() => setCurrentPage('home')}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="relative flex items-center gap-2">
                {/* Star Symbol with Est. */}
                <div className="flex flex-col items-center">
                  <span className="text-xl text-white">✹</span>
                  <span className="text-[8px] text-gray-500 tracking-wider mt-0.5">EST. 2025</span>
                </div>
                
                <div className="relative">
                  <h1 className="text-2xl tracking-tighter text-white relative z-10">
                    TODD
                  </h1>
                  <h1 
                    className="text-2xl tracking-tighter text-[#4a5fdc] absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ transform: 'translate(2px, -2px)' }}
                  >
                    TODD
                  </h1>
                  <h1 
                    className="text-2xl tracking-tighter text-[#ff6b6b] absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ transform: 'translate(-2px, 2px)' }}
                  >
                    TODD
                  </h1>
                </div>
              </div>
              
              {/* Underline Animation */}
              <motion.div 
                className="h-0.5 bg-gradient-to-r from-[#4a5fdc] via-white to-[#ff6b6b] mt-1"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Desktop Navigation - Experimental Layout */}
            <div className="hidden lg:flex items-center gap-12">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className="relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.6 }}
                  whileHover={{ y: -2 }}
                >
                  {/* Number */}
                  <div className="text-[10px] text-gray-600 mb-0.5 tracking-wider">
                    {item.number}
                  </div>
                  
                  {/* Label */}
                  <div className={`text-sm tracking-wide transition-all duration-300 ${
                    currentPage === item.id 
                      ? 'text-white' 
                      : 'text-gray-500 group-hover:text-white'
                  }`}>
                    {item.label}
                  </div>
                  
                  {/* Active Indicator - Experimental */}
                  {currentPage === item.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#4a5fdc] to-[#ff6b6b]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  
                  {/* Hover Effect */}
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-white/30"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: currentPage === item.id ? 0 : 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden relative w-10 h-10 flex items-center justify-center"
              onClick={() => setMenuOpen(!menuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <div className="relative w-6 h-4 flex flex-col justify-between">
                <motion.span
                  className="w-full h-0.5 bg-white"
                  animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-full h-0.5 bg-white"
                  animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="w-full h-0.5 bg-white"
                  animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="lg:hidden fixed inset-0 top-20 bg-black/95 backdrop-blur-2xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col items-center justify-center h-full gap-8 px-8">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id);
                      setMenuOpen(false);
                    }}
                    className="relative text-center"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ delay: index * 0.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Mobile Number */}
                    <div className="text-sm text-gray-600 mb-2 tracking-widest">
                      {item.number}
                    </div>
                    
                    {/* Mobile Label */}
                    <div className={`text-4xl tracking-tight transition-colors ${
                      currentPage === item.id 
                        ? 'text-white' 
                        : 'text-gray-500'
                    }`}>
                      {item.label}
                    </div>
                    
                    {/* Active Indicator */}
                    {currentPage === item.id && (
                      <motion.div
                        className="h-1 bg-gradient-to-r from-[#4a5fdc] to-[#ff6b6b] mt-4"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.2 }}
                      />
                    )}
                  </motion.button>
                ))}
                
                {/* Mobile Menu Footer */}
                <div className="absolute bottom-12 left-0 right-0 text-center">
                  <div className="text-gray-600 text-xs tracking-widest">
                    TODD — 2025
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Page Content with Animation */}
      <AnimatePresence mode="wait">
        <motion.main
          key={currentPage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {currentPage === 'home' && <Home />}
          {currentPage === 'work' && <Work />}
          {currentPage === 'insights' && <Insights />}
          {currentPage === 'about' && <About />}
          {currentPage === 'contact' && <Contact />}
        </motion.main>
      </AnimatePresence>
    </div>
  );
}