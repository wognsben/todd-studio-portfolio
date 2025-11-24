import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Minus, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Design Street", "Gangnam-gu, Seoul 06000", "South Korea"]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+82 2 1234 5678", "+82 10 9876 5432"]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@lineblooms.com", "orders@lineblooms.com"]
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 10:00 - 19:00", "Sat: 11:00 - 18:00", "Sun: Closed"]
    }
  ];

  return (
    <div className="relative">
      {/* Section 1: Contact Form */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Left: Heading & Info */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 
                  className="text-5xl sm:text-6xl text-[#4a5fdc] mb-4"
                  style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
                >
                  Get in Touch
                </h1>
                <motion.div
                  className="w-24 h-px bg-[#4a5fdc]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-gray-600 leading-relaxed"
              >
                Have a question about our bouquets? Want to discuss a custom arrangement? 
                Or simply wish to say hello? We'd love to hear from you.
              </motion.p>

              {/* Decorative Lines */}
              <div className="flex gap-4 pt-4">
                <Minus className="h-6 w-6 text-[#4a5fdc]" />
                <motion.div
                  className="flex-1 h-px bg-[#4a5fdc] opacity-40 self-center"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
              </div>

              {/* Quick note */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="relative bg-gray-50 p-6 border-l-2 border-[#4a5fdc]"
              >
                <p className="text-sm text-gray-600">
                  <span className="text-[#4a5fdc]" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                    Note:
                  </span>
                  {" "}We typically respond within 24 hours. For urgent orders, please call us directly.
                </p>
              </motion.div>
            </div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              <div className="relative">
                {/* Deconstructed frame */}
                <div className="absolute -inset-4 border-2 border-[#4a5fdc] opacity-20 transform rotate-1" />
                
                <form className="relative bg-white p-8 space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm text-gray-600">Your Name</label>
                      <div className="relative">
                        <Input 
                          type="text"
                          placeholder="Kim Soo-jin"
                          className="border-2 border-[#4a5fdc] focus:border-[#2c3a8f] rounded-none"
                        />
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-[#4a5fdc] opacity-40" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm text-gray-600">Your Email</label>
                      <div className="relative">
                        <Input 
                          type="email"
                          placeholder="you@email.com"
                          className="border-2 border-[#4a5fdc] focus:border-[#2c3a8f] rounded-none"
                        />
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-[#4a5fdc] opacity-40" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-gray-600">Phone (Optional)</label>
                    <div className="relative">
                      <Input 
                        type="tel"
                        placeholder="+82 10 1234 5678"
                        className="border-2 border-[#4a5fdc] focus:border-[#2c3a8f] rounded-none"
                      />
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-[#4a5fdc] opacity-40" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-gray-600">Subject</label>
                    <div className="relative">
                      <Input 
                        type="text"
                        placeholder="Custom bouquet inquiry"
                        className="border-2 border-[#4a5fdc] focus:border-[#2c3a8f] rounded-none"
                      />
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-[#4a5fdc] opacity-40" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-gray-600">Message</label>
                    <div className="relative">
                      <Textarea 
                        placeholder="Tell us about your vision..."
                        rows={6}
                        className="border-2 border-[#4a5fdc] focus:border-[#2c3a8f] rounded-none resize-none"
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-[#4a5fdc] opacity-40" />
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                  >
                    <Button 
                      className="w-full sm:w-auto bg-[#4a5fdc] hover:bg-[#2c3a8f] text-white px-12 py-6 rounded-none border-2 border-[#4a5fdc] group"
                    >
                      Send Message
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Contact Info Cards */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 bg-opacity-30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl sm:text-5xl text-[#2c3a8f] mb-4"
              style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
            >
              Find Us
            </h2>
            <div className="flex justify-center items-center gap-4 mt-6">
              <div className="w-16 h-px bg-[#4a5fdc]" />
              <Minus className="h-6 w-6 text-[#4a5fdc]" />
              <div className="w-16 h-px bg-[#4a5fdc]" />
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
                style={{ transform: index % 2 === 0 ? 'rotate(-1deg)' : 'rotate(1deg)' }}
              >
                {/* Deconstructed border */}
                <div className="absolute -inset-3 border border-[#4a5fdc] opacity-30 group-hover:opacity-50 transition-opacity" />
                
                <div className="relative bg-white p-8 text-center space-y-4">
                  {/* Icon */}
                  <div className="relative inline-block">
                    <div className="absolute inset-0 border border-[#4a5fdc] opacity-20 transform rotate-6" />
                    <div className="relative bg-white p-4 border border-[#4a5fdc] border-opacity-40">
                      <info.icon className="h-8 w-8 text-[#4a5fdc] mx-auto" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 
                    className="text-xl text-[#2c3a8f]"
                    style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
                  >
                    {info.title}
                  </h3>

                  {/* Line */}
                  <motion.div
                    className="w-12 h-px bg-[#4a5fdc] mx-auto"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  />

                  {/* Details */}
                  <div className="space-y-1 text-sm text-gray-600">
                    {info.details.map((detail, i) => (
                      <p key={i}>{detail}</p>
                    ))}
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-[#4a5fdc] opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Map Placeholder */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Deconstructed frame */}
            <div className="absolute -inset-4 border-2 border-[#4a5fdc] opacity-20 transform -rotate-1" />
            <div className="absolute -inset-4 border-2 border-[#4a5fdc] opacity-10 transform rotate-1" />
            
            {/* Map placeholder */}
            <div className="relative aspect-[16/9] bg-gray-100 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <MapPin className="h-16 w-16 text-[#4a5fdc] mx-auto" />
                  <div>
                    <h3 
                      className="text-2xl text-[#2c3a8f] mb-2"
                      style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
                    >
                      Line Blooms Studio
                    </h3>
                    <p className="text-gray-600">123 Design Street, Gangnam-gu, Seoul</p>
                  </div>
                  
                  {/* Decorative grid lines */}
                  <div 
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                      backgroundImage: `
                        linear-gradient(to right, #4a5fdc 1px, transparent 1px),
                        linear-gradient(to bottom, #4a5fdc 1px, transparent 1px)
                      `,
                      backgroundSize: '64px 64px'
                    }}
                  />
                </div>
              </div>

              {/* Corner lines */}
              <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-[#4a5fdc] opacity-40" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-[#4a5fdc] opacity-40" />
            </div>
          </motion.div>

          {/* Directions */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 mb-6">
              We're located in the heart of Gangnam, just a 5-minute walk from Gangnam Station (Line 2)
            </p>
            <Button 
              variant="outline"
              className="border-2 border-[#4a5fdc] text-[#4a5fdc] hover:bg-[#4a5fdc] hover:text-white rounded-none px-8 py-6"
            >
              Get Directions
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
