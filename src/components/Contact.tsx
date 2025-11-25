import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Instagram, Mail, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

type PageType = 'home' | 'work' | 'insights' | 'about' | 'contact';

interface ContactProps {
  onNavigate: (page: PageType) => void;
}

export function Contact({ onNavigate }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  // EmailJS 초기화
  useEffect(() => {
    // EmailJS Public Key를 여기에 입력하세요
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
    if (PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
      emailjs.init(PUBLIC_KEY);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);
    
    try {
      // EmailJS 설정 확인
      const SERVICE_ID = 'YOUR_SERVICE_ID';
      const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
      const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
      
      // EmailJS가 설정되지 않았으면 mailto 사용
      if (SERVICE_ID === 'YOUR_SERVICE_ID' || TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
        // mailto 방식으로 이메일 전송
        const emailSubject = `[TODD Studio] ${formData.name}님의 프로젝트 문의`;
        const emailBody = `
이름: ${formData.name}
이메일: ${formData.email}
회사: ${formData.company || '없음'}

메시지:
${formData.message}
        `;
        
        const mailtoLink = `mailto:wognsben1997@naver.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
        window.location.href = mailtoLink;
        
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        // 3초 후 폼 초기화
        setTimeout(() => {
          setFormData({ name: '', email: '', company: '', message: '' });
          setSubmitSuccess(false);
        }, 3000);
        
        return;
      }
      
      // EmailJS가 설정되어 있으면 EmailJS 사용
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company || '없음',
          message: formData.message,
          to_email: 'wognsben1997@naver.com',
        }
      );
      
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // 3초 후 폼 초기화
      setTimeout(() => {
        setFormData({ name: '', email: '', company: '', message: '' });
        setSubmitSuccess(false);
      }, 3000);
      
    } catch (error) {
      console.error('Email send error:', error);
      setIsSubmitting(false);
      setSubmitError(true);
      
      // 에러 메시지 5초 후 제거
      setTimeout(() => {
        setSubmitError(false);
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "wognsben1997@naver.com",
      color: "#4a5fdc",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Seoul, South Korea",
      color: "#ff6b6b",
    },
  ];

  return (
    <div className="relative bg-black text-white min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(74,95,220,0.1), transparent 50%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Hero Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-sm tracking-[0.4em] text-gray-500 mb-8">— GET IN TOUCH —</div>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl leading-none mb-8">
                <span className="text-transparent" style={{ WebkitTextStroke: '3px white' }}>
                  Let's
                </span>
                <br />
                <span className="text-white">Create</span>
                <br />
                <span className="text-transparent" style={{ WebkitTextStroke: '3px #4a5fdc' }}>
                  Together
                </span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed mb-12">
                새로운 프로젝트를 함께 시작해보세요.<br />
                대담하고 실험적인 결과물을 만들어드립니다.
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="group flex items-center gap-4 p-4 border border-white/10 hover:border-white/30 transition-all"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                  >
                    <motion.div
                      className="flex-shrink-0"
                      style={{ color: info.color }}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {info.icon}
                    </motion.div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1">{info.label}</div>
                      <div className="text-lg">{info.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                className="flex gap-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <a 
                  href="#" 
                  className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#4a5fdc] hover:to-[#ff6b6b] hover:border-transparent transition-all group"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="https://blog.naver.com/toddstudio" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#4a5fdc] hover:to-[#ff6b6b] hover:border-transparent transition-all text-sm"
                >
                  BL
                </a>
              </motion.div>
            </motion.div>

            {/* Right - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative p-8 border-2 border-white/10 backdrop-blur-sm">
                {/* Form Header */}
                <div className="mb-8">
                  <h2 className="text-3xl mb-2">Start a Project</h2>
                  <p className="text-gray-500 text-sm">모든 항목을 작성해주세요</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="relative">
                    <motion.label
                      className={`absolute left-0 transition-all pointer-events-none ${
                        focusedField === 'name' || formData.name
                          ? '-top-6 text-xs text-[#4a5fdc]'
                          : 'top-4 text-gray-500'
                      }`}
                      animate={{
                        y: focusedField === 'name' || formData.name ? 0 : 0,
                      }}
                    >
                      Name *
                    </motion.label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-transparent border-b-2 border-white/20 focus:border-[#4a5fdc] py-4 text-white placeholder:text-gray-600 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <motion.label
                      className={`absolute left-0 transition-all pointer-events-none ${
                        focusedField === 'email' || formData.email
                          ? '-top-6 text-xs text-[#4a5fdc]'
                          : 'top-4 text-gray-500'
                      }`}
                    >
                      Email *
                    </motion.label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-transparent border-b-2 border-white/20 focus:border-[#4a5fdc] py-4 text-white placeholder:text-gray-600 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  {/* Company Field */}
                  <div className="relative">
                    <motion.label
                      className={`absolute left-0 transition-all pointer-events-none ${
                        focusedField === 'company' || formData.company
                          ? '-top-6 text-xs text-[#4a5fdc]'
                          : 'top-4 text-gray-500'
                      }`}
                    >
                      Company
                    </motion.label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      onFocus={() => setFocusedField('company')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-transparent border-b-2 border-white/20 focus:border-[#4a5fdc] py-4 text-white placeholder:text-gray-600 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <motion.label
                      className={`absolute left-0 transition-all pointer-events-none ${
                        focusedField === 'message' || formData.message
                          ? '-top-6 text-xs text-[#4a5fdc]'
                          : 'top-4 text-gray-500'
                      }`}
                    >
                      Message *
                    </motion.label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-transparent border-b-2 border-white/20 focus:border-[#4a5fdc] py-4 text-white placeholder:text-gray-600 focus:outline-none transition-colors resize-none"
                      rows={4}
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || submitSuccess}
                    className={`w-full py-4 text-white text-lg flex items-center justify-center gap-3 transition-all group ${
                      submitSuccess 
                        ? 'bg-green-600' 
                        : submitError
                        ? 'bg-red-600'
                        : 'bg-gradient-to-r from-[#4a5fdc] to-[#ff6b6b] hover:shadow-2xl'
                    }`}
                    whileHover={!isSubmitting && !submitSuccess ? { scale: 1.02, y: -2 } : {}}
                    whileTap={!isSubmitting && !submitSuccess ? { scale: 0.98 } : {}}
                  >
                    {submitSuccess ? (
                      <>
                        메시지가 전송되었습니다! ✓
                      </>
                    ) : submitError ? (
                      <>
                        전송 실패. 다시 시도해주세요.
                      </>
                    ) : isSubmitting ? (
                      <>
                        전송 중...
                      </>
                    ) : (
                      <>
                        SEND MESSAGE
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <Send className="w-5 h-5" />
                        </motion.div>
                      </>
                    )}
                  </motion.button>
                  
                  {/* Info Message */}
                  <div className="text-xs text-center mt-2">
                    <p className="text-gray-600">
                      현재 이메일 클라이언트를 통해 전송됩니다
                    </p>
                    <p className="text-[10px] text-gray-700 mt-1">
                      더 나은 경험을 위해 <a 
                        href="https://www.emailjs.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="underline hover:text-[#4a5fdc]"
                      >
                        EmailJS
                      </a> 설정을 추천합니다
                    </p>
                  </div>
                </form>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#4a5fdc] opacity-20 blur-3xl" />
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#ff6b6b] opacity-20 blur-3xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-[1000px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="text-sm tracking-[0.4em] text-gray-500 mb-4">— FAQ —</div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl">
              <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>
                Common Questions
              </span>
            </h2>
          </motion.div>

          <div className="space-y-0">
            {[
              {
                question: "프로젝트는 얼마나 걸리나요?",
                answer: "프로젝트 규모에 따라 다르지만, 일반적으로 2-8주 정도 소요됩니다."
              },
              {
                question: "어떤 서비스를 제공하나요?",
                answer: "UI/UX 디자인, 프론트엔드 개발, 브랜딩 등 전반적인 디지털 경험을 제공합니다."
              },
              {
                question: "견적은 어떻게 받나요?",
                answer: "연락 주시면 프로젝트 내용을 듣고 맞춤 견적을 제공해드립니다."
              },
              {
                question: "작은 프로젝트도 가능한가요?",
                answer: "네, 프로젝트 규모와 상관없이 열정을 갖고 임합니다."
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="group border-t border-white/10 py-8 hover:bg-white/5 transition-all cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ x: 10 }}
              >
                <div className="flex justify-between items-start gap-8">
                  <div className="flex-1">
                    <h3 className="text-xl mb-3 group-hover:text-[#4a5fdc] transition-colors">
                      {faq.question}
                    </h3>
                    <p className="text-gray-500 leading-relaxed">{faq.answer}</p>
                  </div>
                  <motion.div
                    className="text-3xl text-gray-600 group-hover:text-white transition-colors"
                    whileHover={{ rotate: 90 }}
                  >
                    →
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee CTA */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-[#4a5fdc] to-[#ff6b6b]">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 text-5xl sm:text-7xl lg:text-9xl text-white px-8">
              <span>LET'S WORK TOGETHER</span>
              <span className="text-black">×</span>
            </div>
          ))}
        </motion.div>
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