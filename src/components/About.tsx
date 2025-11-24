import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Minus, Heart, Leaf, Sparkles } from 'lucide-react';
import scribbleBouquet from 'figma:asset/e642f3a26144e8fc59144d43a92d2a476ca151ff.png';

export function About() {
  const team = [
    {
      name: "Soo-young Kim",
      role: "Lead Florist & Founder",
      image: "https://images.unsplash.com/photo-1609929986740-76c149cd76cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBob2xkaW5nJTIwZmxvd2Vyc3xlbnwxfHx8fDE3NjM5NzU0MjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Min-ji Park",
      role: "Design Director",
      image: "https://images.unsplash.com/photo-1634653871299-9907b666e913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93ZXIlMjBib3VxdWV0JTIwaGFuZHMlMjBob2xkaW5nfGVufDF8fHx8MTc2Mzk3NTQyM3ww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Ji-hoon Lee",
      role: "Creative Consultant",
      image: "https://images.unsplash.com/photo-1680563899402-26c3a712831f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3VxdWV0JTIwbGlmZXN0eWxlJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzYzOTc1NDIzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Crafted with Care",
      description: "Every bouquet is a testament to the dedication we pour into our work, treating each stem as part of a larger story."
    },
    {
      icon: Leaf,
      title: "Sustainably Sourced",
      description: "We partner with local growers who share our commitment to environmental responsibility and ethical practices."
    },
    {
      icon: Sparkles,
      title: "Uniquely Designed",
      description: "No two arrangements are alike. We celebrate the individual character of each bloom and create one-of-a-kind pieces."
    }
  ];

  return (
    <div className="relative">
      {/* Section 1: Story */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h1 
                  className="text-5xl sm:text-6xl text-[#4a5fdc] mb-4"
                  style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
                >
                  Our Story
                </h1>
                <motion.div
                  className="w-24 h-px bg-[#4a5fdc]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                />
              </div>

              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Line Blooms began with a simple observation: in nature, beauty emerges from lines. 
                  The curve of a stem, the edge of a petal, the path traced by a vine climbing toward the sun.
                </p>

                <p>
                  We founded our studio in 2025 with a vision to celebrate this linear beauty through 
                  minimalist, deconstructivist floral design. Each arrangement we create honors the 
                  natural geometry of flowers while embracing the imperfect, the rough, the real.
                </p>

                <p>
                  Our approach is intentionally raw and unpolished, reflecting the authentic character 
                  of the blooms we work with. We believe that flowers don't need to be perfect to be 
                  beautiful—they just need to be themselves.
                </p>
              </div>

              {/* Line decoration */}
              <div className="flex items-center gap-4 pt-4">
                <Minus className="h-8 w-8 text-[#4a5fdc]" />
                <motion.div
                  className="flex-1 h-px bg-[#4a5fdc] opacity-40"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </motion.div>

            {/* Image with Scribble */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                {/* Scribble decoration */}
                <img 
                  src={scribbleBouquet} 
                  alt="scribble art" 
                  className="absolute -top-12 -left-12 w-64 h-80 opacity-20 -rotate-12 pointer-events-none"
                />
                
                {/* Main image */}
                <div className="relative aspect-[3/4]">
                  <div className="absolute -inset-4 border-2 border-[#4a5fdc] opacity-30 transform rotate-2" />
                  <div className="relative overflow-hidden transform -rotate-1">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1558627932-2eab05138cfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93ZXJzJTIwbWluaW1hbCUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NjM5NzU0MjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Our flowers"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Corner lines */}
                  <motion.div
                    className="absolute -top-6 -left-6 w-16 h-16 border-l-2 border-t-2 border-[#4a5fdc]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  />
                  <motion.div
                    className="absolute -bottom-6 -right-6 w-20 h-20 border-r-2 border-b-2 border-[#4a5fdc]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Team */}
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
              The Hands Behind the Lines
            </h2>
            <div className="flex justify-center items-center gap-4 mt-6">
              <div className="w-16 h-px bg-[#4a5fdc]" />
              <Minus className="h-6 w-6 text-[#4a5fdc]" />
              <div className="w-16 h-px bg-[#4a5fdc]" />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative"
                style={{ transform: index % 2 === 0 ? 'rotate(-1deg)' : 'rotate(1deg)' }}
              >
                {/* Deconstructed frame */}
                <div className="absolute -inset-3 border border-[#4a5fdc] opacity-30 group-hover:opacity-50 transition-opacity" />
                
                <div className="relative bg-white p-6">
                  {/* Image */}
                  <div className="aspect-[3/4] overflow-hidden mb-6">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-white opacity-0 group-hover:opacity-80 transition-opacity" />
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-white opacity-0 group-hover:opacity-80 transition-opacity" />
                  </div>

                  {/* Info */}
                  <div className="text-center space-y-2">
                    <h3 
                      className="text-2xl text-[#2c3a8f]"
                      style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
                    >
                      {member.name}
                    </h3>
                    <div className="flex justify-center">
                      <div className="w-12 h-px bg-[#4a5fdc] opacity-50" />
                    </div>
                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
                </div>

                {/* Line accent */}
                <motion.div
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-px bg-[#4a5fdc]"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Philosophy & Values */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl sm:text-5xl text-[#2c3a8f] mb-6"
              style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
            >
              Our Philosophy
            </h2>
            <motion.div
              className="w-24 h-px bg-[#4a5fdc] mx-auto mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe that the beauty of flowers lies not in their perfection, but in their unique character. 
              Every line, every curve tells a story of growth, resilience, and natural artistry.
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-12 mt-16">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative text-center space-y-6"
              >
                {/* Icon with line decoration */}
                <div className="relative inline-block">
                  <div className="absolute inset-0 border-2 border-[#4a5fdc] opacity-20 transform rotate-6" />
                  <div className="relative bg-white p-6 border border-[#4a5fdc] border-opacity-40">
                    <value.icon className="h-12 w-12 text-[#4a5fdc] mx-auto" />
                  </div>
                </div>

                <h3 
                  className="text-2xl text-[#2c3a8f]"
                  style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
                >
                  {value.title}
                </h3>

                <motion.div
                  className="w-12 h-px bg-[#4a5fdc] mx-auto"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.2 }}
                />

                <p className="text-gray-600">
                  {value.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute -top-4 -right-4 w-8 h-8 border-r-2 border-t-2 border-[#4a5fdc] opacity-20" />
              </motion.div>
            ))}
          </div>

          {/* Closing Statement */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-24 text-center"
          >
            <div className="max-w-3xl mx-auto relative">
              <div className="absolute -top-6 left-1/4 w-16 h-px bg-[#4a5fdc] opacity-30 transform -rotate-12" />
              <div className="absolute -bottom-6 right-1/4 w-20 h-px bg-[#4a5fdc] opacity-30 transform rotate-12" />
              
              <p 
                className="text-2xl text-[#2c3a8f] leading-relaxed"
                style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
              >
                "In every line we draw,<br />
                in every bloom we arrange,<br />
                we celebrate the raw beauty of nature"
              </p>
              
              <motion.div
                className="w-32 h-px bg-[#4a5fdc] mx-auto mt-8"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
