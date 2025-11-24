import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ShoppingCart, Star, Minus } from 'lucide-react';
import { Button } from './ui/button';

export function Shop() {
  const products = [
    {
      id: 1,
      name: "Minimal Lines",
      price: "45,000원",
      category: "Signature",
      image: "https://images.unsplash.com/photo-1558627932-2eab05138cfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93ZXJzJTIwbWluaW1hbCUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NjM5NzU0MjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 2,
      name: "Hand Held",
      price: "52,000원",
      category: "Lifestyle",
      image: "https://images.unsplash.com/photo-1634653871299-9907b666e913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93ZXIlMjBib3VxdWV0JTIwaGFuZHMlMjBob2xkaW5nfGVufDF8fHx8MTc2Mzk3NTQyM3ww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 3,
      name: "Wild Strokes",
      price: "48,000원",
      category: "Natural",
      image: "https://images.unsplash.com/photo-1723116717128-63fc31a65650?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aWxkZmxvd2VyJTIwYm91cXVldCUyMG5hdHVyYWx8ZW58MXx8fHwxNzYzOTc1NDI0fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 4,
      name: "Modern Trace",
      price: "58,000원",
      category: "Modern",
      image: "https://images.unsplash.com/photo-1763696790396-faf8ddc25725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93ZXIlMjBhcnJhbmdlbWVudCUyMG1vZGVybnxlbnwxfHx8fDE3NjM5NzU0MjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 5,
      name: "Lifestyle Bloom",
      price: "55,000원",
      category: "Lifestyle",
      image: "https://images.unsplash.com/photo-1680563899402-26c3a712831f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3VxdWV0JTIwbGlmZXN0eWxlJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzYzOTc1NDIzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 6,
      name: "Holding Moments",
      price: "50,000원",
      category: "Signature",
      image: "https://images.unsplash.com/photo-1609929986740-76c149cd76cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBob2xkaW5nJTIwZmxvd2Vyc3xlbnwxfHx8fDE3NjM5NzU0MjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const categories = ["All", "Signature", "Lifestyle", "Natural", "Modern"];

  const testimonials = [
    {
      text: "Every petal traced with care. These blooms are art.",
      author: "Soo-jin K.",
      rating: 5
    },
    {
      text: "The most beautiful lines I've ever held in my hands.",
      author: "Min-ho L.",
      rating: 5
    },
    {
      text: "More than flowers - they're stories drawn in nature.",
      author: "Hae-won P.",
      rating: 5
    }
  ];

  return (
    <div className="relative">
      {/* Section 1: Hero + Categories */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 
              className="text-5xl sm:text-6xl text-[#4a5fdc] mb-4"
              style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
            >
              Shop Lines
            </h1>
            <motion.div
              className="w-24 h-px bg-[#4a5fdc] mx-auto mb-6"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each bouquet is a collection of lines, carefully arranged to tell your story
            </p>
          </motion.div>

          {/* Categories - Deconstructed Tabs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="relative px-6 py-2 border border-[#4a5fdc] text-[#4a5fdc] hover:bg-[#4a5fdc] hover:text-white transition-colors group"
              >
                {category}
                {/* Line decoration */}
                <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-[#4a5fdc] opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 2: Products Grid */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Deconstructed frame */}
                <div className="absolute -inset-3 border border-[#4a5fdc] opacity-30 transform rotate-1 group-hover:rotate-0 transition-transform duration-300" />
                <div className="absolute -inset-3 border border-[#4a5fdc] opacity-20 transform -rotate-1 group-hover:rotate-1 transition-transform duration-300" />
                
                <div className="relative bg-white p-4">
                  {/* Image */}
                  <div className="aspect-[3/4] overflow-hidden mb-6 relative">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Corner lines */}
                    <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-white opacity-80" />
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-white opacity-80" />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-gray-500 tracking-wider uppercase">
                        {product.category}
                      </span>
                      <Minus className="h-4 w-4 text-[#4a5fdc]" />
                    </div>

                    <h3 
                      className="text-2xl text-[#2c3a8f]"
                      style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
                    >
                      {product.name}
                    </h3>

                    <div className="flex items-center justify-between pt-2">
                      <p className="text-lg text-gray-800">{product.price}</p>
                      <Button 
                        size="sm"
                        className="bg-[#4a5fdc] hover:bg-[#2c3a8f] text-white px-6 rounded-none border border-[#4a5fdc]"
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add
                      </Button>
                    </div>

                    {/* Bottom line */}
                    <motion.div
                      className="h-px bg-[#4a5fdc] mt-4"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    />
                  </div>
                </div>

                {/* Scattered line accent */}
                {index % 3 === 0 && (
                  <div 
                    className="absolute -top-6 -right-6 w-12 h-12 border-2 border-[#4a5fdc] opacity-20"
                    style={{ transform: `rotate(${index * 10}deg)` }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Testimonials - Line Reviews */}
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
              In Their Words
            </h2>
            <div className="flex justify-center items-center gap-4">
              <div className="w-16 h-px bg-[#4a5fdc]" />
              <Minus className="h-6 w-6 text-[#4a5fdc]" />
              <div className="w-16 h-px bg-[#4a5fdc]" />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative bg-white p-8 border border-[#4a5fdc] border-opacity-30"
                style={{ transform: index % 2 === 0 ? 'rotate(-1deg)' : 'rotate(1deg)' }}
              >
                {/* Quote line */}
                <div className="absolute top-4 left-4 w-8 h-px bg-[#4a5fdc]" />
                
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#4a5fdc] text-[#4a5fdc]" />
                  ))}
                </div>

                <p 
                  className="text-gray-700 mb-6 italic"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-2">
                  <div className="w-8 h-px bg-[#4a5fdc]" />
                  <p className="text-sm text-gray-600">{testimonial.author}</p>
                </div>

                {/* Corner accent */}
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-[#4a5fdc] opacity-40" />
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-center mt-16"
          >
            <Button 
              className="bg-[#4a5fdc] hover:bg-[#2c3a8f] text-white px-12 py-6 rounded-none border-2 border-[#4a5fdc]"
              style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
            >
              View All Collections
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
