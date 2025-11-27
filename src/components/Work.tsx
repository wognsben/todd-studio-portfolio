import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Instagram, Play, X } from 'lucide-react';
import { portfolioProjects } from '../data/portfolio';
import { getPortfolios, urlFor } from '../lib/sanity';

type PageType = 'home' | 'work' | 'insights' | 'about' | 'contact';

interface WorkProps {
  onNavigate: (page: PageType) => void;
}

interface SanityPortfolio {
  _id: string;
  title: string;
  year: string;
  description: string;
  mainImage: any;
  images: Array<{ asset: any; alt?: string }>;
  videoUrl?: string;
  videoFile?: { url: string };
  order?: number;
}

export function Work({ onNavigate }: WorkProps) {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [displayedCount, setDisplayedCount] = useState(3); // 처음 3개만 표시
  const [isLoading, setIsLoading] = useState(false);
  const [sanityProjects, setSanityProjects] = useState<SanityPortfolio[]>([]);
  const [useSanity, setUseSanity] = useState(true); // Sanity 사용 여부
  const videoRef = useRef<HTMLVideoElement>(null);

  // Sanity에서 포트폴리오 가져오기
  useEffect(() => {
    async function fetchProjects() {
      try {
        const projects = await getPortfolios();
        if (projects && projects.length > 0) {
          setSanityProjects(projects);
          setUseSanity(true);
        } else {
          setUseSanity(false); // 데이터 없으면 로컬 데이터 사용
        }
      } catch (error) {
        console.error('Sanity 데이터 로드 실패:', error);
        setUseSanity(false); // 에러 시 로컬 데이터 사용
      }
    }
    fetchProjects();
  }, []);

  // 모달이 열릴 때 비디오 음소거 해제
  useEffect(() => {
    if (selectedProject && videoRef.current) {
      // 모달이 열린 후 비디오가 로드되면 음소거 해제
      const handleCanPlay = () => {
        if (videoRef.current) {
          videoRef.current.muted = false;
        }
      };
      
      const video = videoRef.current;
      if (video) {
        video.addEventListener('canplay', handleCanPlay);
        // 이미 로드된 경우 즉시 음소거 해제
        if (video.readyState >= 2) {
          video.muted = false;
        }
      }
      
      return () => {
        if (video) {
          video.removeEventListener('canplay', handleCanPlay);
        }
      };
    }
  }, [selectedProject]);

  // 사용할 프로젝트 결정
  const projects = useSanity ? sanityProjects : portfolioProjects;
  const selectedProjectData = useSanity 
    ? sanityProjects.find(p => p._id === selectedProject)
    : portfolioProjects.find(p => p.id.toString() === selectedProject);
  const displayedProjects = projects.slice(0, displayedCount);
  const hasMore = displayedCount < projects.length;

  // 무한 스크롤 구현
  useEffect(() => {
    const handleScroll = () => {
      if (isLoading || !hasMore) return;

      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.documentElement.scrollHeight - 500; // 바닥에서 500px 전에 로드

      if (scrollPosition >= threshold) {
        setIsLoading(true);
        setTimeout(() => {
          setDisplayedCount(prev => prev + 3); // 3개씩 추가
          setIsLoading(false);
        }, 500); // 로딩 효과
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading, hasMore]);

  return (
    <div className="relative bg-black text-white min-h-screen pt-20">
      {/* Hero Section with Background Image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image (4번) */}
        <div className="absolute inset-0 z-0">
          <motion.img
            src="/images/dlalwl/scribble-portrait.png"
            alt="Work Background"
            className="w-full h-full object-cover opacity-35"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black" />
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

      {/* Projects Grid - Each project shows all 3 images */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="space-y-32">
            {displayedProjects.map((project, index) => {
              const projectId = useSanity ? (project as SanityPortfolio)._id : (project as any).id;
              const mainImageUrl = useSanity 
                ? urlFor((project as SanityPortfolio).mainImage).width(1200).url()
                : (project as any).images.main;
              const image2Url = useSanity && (project as SanityPortfolio).images?.[0]
                ? urlFor((project as SanityPortfolio).images[0].asset).width(800).url()
                : (project as any).images?.image2;
              const image3Url = useSanity && (project as SanityPortfolio).images?.[1]
                ? urlFor((project as SanityPortfolio).images[1].asset).width(800).url()
                : (project as any).images?.image3;
              
              return (
                <motion.div
                  key={projectId}
                  className="group"
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.2 }}
                >
                  {/* Project Header */}
                  <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div>
                      <div className="text-6xl sm:text-7xl lg:text-9xl opacity-10 leading-none mb-4">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <h2 className="text-5xl sm:text-6xl lg:text-7xl mb-4">
                        <span 
                          className="text-transparent"
                          style={{ WebkitTextStroke: '2px white' }}
                        >
                          {project.title}
                        </span>
                      </h2>
                      <div className="text-gray-500 text-sm tracking-wider mb-2">
                        {project.year}
                      </div>
                    </div>
                    
                  <motion.div
                    className="w-16 h-16 rounded-full bg-gradient-to-r from-[#4a5fdc] to-[#ff6b6b] flex items-center justify-center text-white text-2xl cursor-pointer"
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    onClick={() => setSelectedProject(projectId)}
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
                      onClick={() => setSelectedProject(projectId)}
                    >
                      <img
                        src={mainImageUrl}
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
                      {image2Url && (
                        <motion.div
                          className="relative aspect-[4/3] overflow-hidden bg-black cursor-pointer group"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.4 }}
                          onClick={() => setSelectedProject(projectId)}
                        >
                          <img
                            src={image2Url}
                            alt={`${project.title} - Image 2`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                      )}

                      {image3Url && (
                        <motion.div
                          className="relative aspect-[4/3] overflow-hidden bg-black cursor-pointer group"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.4 }}
                          onClick={() => setSelectedProject(projectId)}
                        >
                          <img
                            src={image3Url}
                            alt={`${project.title} - Image 3`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                      )}
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
              );
            })}
          </div>

          {/* Loading Indicator */}
          {isLoading && (
            <motion.div
              className="flex justify-center items-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="flex gap-2">
                <motion.div
                  className="w-3 h-3 bg-[#4a5fdc] rounded-full"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                />
                <motion.div
                  className="w-3 h-3 bg-[#4a5fdc] rounded-full"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                />
                <motion.div
                  className="w-3 h-3 bg-[#4a5fdc] rounded-full"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                />
              </div>
            </motion.div>
          )}

          {/* End Message */}
          {!hasMore && portfolioProjects.length > 3 && (
            <motion.div
              className="text-center py-12 text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-sm tracking-widest">모든 포트폴리오를 확인했습니다</div>
            </motion.div>
          )}
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
                <div className="text-gray-400 mb-6">
                  {selectedProjectData.year}
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {selectedProjectData.description}
                </p>
              </div>

              {/* Video (if exists) */}
              {useSanity && (selectedProjectData as SanityPortfolio).videoUrl && (
                <div className="w-full aspect-video bg-black rounded overflow-hidden">
                  <iframe
                    src={
                      (() => {
                        const videoUrl = (selectedProjectData as SanityPortfolio).videoUrl;
                        if (!videoUrl) return '';
                        
                        let embedUrl = '';
                        if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
                          // YouTube URL 처리
                          let videoId = '';
                          if (videoUrl.includes('watch?v=')) {
                            videoId = videoUrl.split('watch?v=')[1].split('&')[0];
                          } else if (videoUrl.includes('youtu.be/')) {
                            videoId = videoUrl.split('youtu.be/')[1].split('?')[0];
                          } else if (videoUrl.includes('embed/')) {
                            videoId = videoUrl.split('embed/')[1].split('?')[0];
                          }
                          // 브라우저 정책상 자동재생은 음소거로 시작 (사용자가 플레이어에서 음소거 해제 가능)
                          embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0`;
                        } else if (videoUrl.includes('vimeo.com')) {
                          // Vimeo URL 처리
                          let videoId = '';
                          if (videoUrl.includes('player.vimeo.com/video/')) {
                            videoId = videoUrl.split('player.vimeo.com/video/')[1].split('?')[0];
                          } else if (videoUrl.includes('vimeo.com/')) {
                            videoId = videoUrl.split('vimeo.com/')[1].split('?')[0];
                          }
                          // 브라우저 정책상 자동재생은 음소거로 시작 (사용자가 플레이어에서 음소거 해제 가능)
                          embedUrl = `https://player.vimeo.com/video/${videoId}?autoplay=1&muted=1`;
                        } else {
                          embedUrl = videoUrl;
                        }
                        return embedUrl;
                      })()
                    }
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}

              {useSanity && (selectedProjectData as SanityPortfolio).videoFile?.url && (
                <div className="w-full">
                  <video
                    ref={videoRef}
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full aspect-video bg-black rounded"
                    src={(selectedProjectData as SanityPortfolio).videoFile.url}
                    onPlay={() => {
                      // 재생 시작 시 음소거 해제 시도
                      if (videoRef.current) {
                        videoRef.current.muted = false;
                      }
                    }}
                  >
                    브라우저가 비디오를 지원하지 않습니다.
                  </video>
                </div>
              )}

              {/* All Images */}
              <div className="space-y-6">
                <img
                  src={useSanity 
                    ? urlFor((selectedProjectData as SanityPortfolio).mainImage).width(1200).url()
                    : (selectedProjectData as any).images.main
                  }
                  alt={`${selectedProjectData.title} - Main`}
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="grid sm:grid-cols-2 gap-6">
                  {useSanity && (selectedProjectData as SanityPortfolio).images?.[0] && (
                    <img
                      src={urlFor((selectedProjectData as SanityPortfolio).images[0].asset).width(800).url()}
                      alt={`${selectedProjectData.title} - Image 2`}
                      className="w-full aspect-[4/3] object-cover"
                    />
                  )}
                  {!useSanity && (selectedProjectData as any).images?.image2 && (
                    <img
                      src={(selectedProjectData as any).images.image2}
                      alt={`${selectedProjectData.title} - Image 2`}
                      className="w-full aspect-[4/3] object-cover"
                    />
                  )}
                  {useSanity && (selectedProjectData as SanityPortfolio).images?.[1] && (
                    <img
                      src={urlFor((selectedProjectData as SanityPortfolio).images[1].asset).width(800).url()}
                      alt={`${selectedProjectData.title} - Image 3`}
                      className="w-full aspect-[4/3] object-cover"
                    />
                  )}
                  {!useSanity && (selectedProjectData as any).images?.image3 && (
                    <img
                      src={(selectedProjectData as any).images.image3}
                      alt={`${selectedProjectData.title} - Image 3`}
                      className="w-full aspect-[4/3] object-cover"
                    />
                  )}
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
              onClick={() => onNavigate('contact')}
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