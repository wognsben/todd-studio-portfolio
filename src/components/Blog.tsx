import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, ArrowRight, Minus } from 'lucide-react';
import { Button } from './ui/button';

export function Blog() {
  const featuredPost = {
    title: "The Art of Lines in Floral Design",
    excerpt: "Exploring how every stem, every petal creates a visual language that speaks without words. In our studio, we see flowers not just as blooms, but as living lines that tell stories.",
    image: "https://images.unsplash.com/photo-1680563899402-26c3a712831f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3VxdWV0JTIwbGlmZXN0eWxlJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzYzOTc1NDIzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    date: "2025.11.20",
    category: "Design Philosophy"
  };

  const recentPosts = [
    {
      title: "Minimal Bouquets, Maximum Impact",
      excerpt: "Why less is always more when it comes to modern floral arrangements.",
      image: "https://images.unsplash.com/photo-1558627932-2eab05138cfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93ZXJzJTIwbWluaW1hbCUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NjM5NzU0MjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "2025.11.18",
      category: "Trends"
    },
    {
      title: "Holding Nature: A Photo Series",
      excerpt: "Our customers share their moments with our bouquets in everyday life.",
      image: "https://images.unsplash.com/photo-1634653871299-9907b666e913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93ZXIlMjBib3VxdWV0JTIwaGFuZHMlMjBob2xkaW5nfGVufDF8fHx8MTc2Mzk3NTQyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      date: "2025.11.15",
      category: "Stories"
    },
    {
      title: "Wildflowers: The Beauty of Imperfection",
      excerpt: "Celebrating the rough, the wild, and the naturally beautiful.",
      image: "https://images.unsplash.com/photo-1723116717128-63fc31a65650?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aWxkZmxvd2VyJTIwYm91cXVldCUyMG5hdHVyYWx8ZW58MXx8fHwxNzYzOTc1NDI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "2025.11.12",
      category: "Nature"
    },
    {
      title: "Modern Lines, Timeless Beauty",
      excerpt: "How we blend contemporary design with classic floral artistry.",
      image: "https://images.unsplash.com/photo-1763696790396-faf8ddc25725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93ZXIlMjBhcnJhbmdlbWVudCUyMG1vZGVybnxlbnwxfHx8fDE3NjM5NzU0MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "2025.11.10",
      category: "Design"
    }
  ];

  const archive = [
    { month: "November 2025", count: 8 },
    { month: "October 2025", count: 12 },
    { month: "September 2025", count: 10 },
    { month: "August 2025", count: 15 }
  ];

  return (
    <div className="relative">
      {/* Section 1: Featured Post */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 
              className="text-5xl sm:text-6xl text-[#4a5fdc] mb-4"
              style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
            >
              Line Stories
            </h1>
            <motion.div
              className="w-24 h-px bg-[#4a5fdc]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
          </motion.div>

          {/* Featured Article */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Image */}
            <div className="relative group">
              <div className="absolute -inset-4 border-2 border-[#4a5fdc] opacity-30 transform -rotate-2 group-hover:rotate-0 transition-transform duration-300" />
              <div className="relative aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Corner lines */}
                <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-white opacity-80" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-white opacity-80" />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span className="px-3 py-1 border border-[#4a5fdc] text-[#4a5fdc]">
                  {featuredPost.category}
                </span>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {featuredPost.date}
                </div>
              </div>

              <h2 
                className="text-4xl text-[#2c3a8f]"
                style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
              >
                {featuredPost.title}
              </h2>

              <motion.div
                className="w-16 h-px bg-[#4a5fdc]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              />

              <p className="text-gray-600 leading-relaxed">
                {featuredPost.excerpt}
              </p>

              <Button 
                className="bg-[#4a5fdc] hover:bg-[#2c3a8f] text-white px-8 py-6 rounded-none border border-[#4a5fdc] group"
              >
                Read Full Story
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Recent Posts Grid */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 bg-opacity-30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h2 
                  className="text-4xl sm:text-5xl text-[#2c3a8f]"
                  style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
                >
                  Recent Lines
                </h2>
                <motion.div
                  className="mt-2 h-px bg-[#4a5fdc] w-24"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                />
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Minus className="h-6 w-6 text-[#4a5fdc]" />
                <span>Latest updates</span>
              </div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative cursor-pointer"
                style={{ transform: index % 2 === 0 ? 'rotate(-1deg)' : 'rotate(1deg)' }}
              >
                {/* Deconstructed frame */}
                <div className="absolute -inset-2 border border-[#4a5fdc] opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
                
                <div className="bg-white">
                  {/* Image */}
                  <div className="aspect-square overflow-hidden">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#4a5fdc]">{post.category}</span>
                      <span className="text-gray-500">{post.date}</span>
                    </div>

                    <h3 
                      className="text-lg text-[#2c3a8f] group-hover:text-[#4a5fdc] transition-colors"
                      style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
                    >
                      {post.title}
                    </h3>

                    <p className="text-sm text-gray-600 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <motion.div
                      className="h-px bg-[#4a5fdc] mt-4"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    />
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute -top-2 -left-2 w-4 h-4 border-l border-t border-[#4a5fdc] opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Archive + Newsletter */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Archive */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 
                className="text-3xl text-[#2c3a8f] mb-8"
                style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
              >
                Archive
              </h3>

              <div className="space-y-4">
                {archive.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <div className="flex items-center justify-between py-4 border-b border-gray-200 group-hover:border-[#4a5fdc] transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-px bg-[#4a5fdc] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                        <span className="text-gray-700 group-hover:text-[#4a5fdc] transition-colors">
                          {item.month}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">
                        {item.count} posts
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="sticky top-24">
                <h3 
                  className="text-3xl text-[#2c3a8f] mb-6"
                  style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
                >
                  Stay Connected
                </h3>

                <motion.div
                  className="w-16 h-px bg-[#4a5fdc] mb-8"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                />

                <p className="text-gray-600 mb-8">
                  Subscribe to receive our latest stories, design insights, and seasonal collections.
                </p>

                <div className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-6 py-4 border-2 border-[#4a5fdc] focus:outline-none focus:border-[#2c3a8f] bg-white"
                      style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-[#4a5fdc] opacity-40" />
                  </div>

                  <Button 
                    className="w-full bg-[#4a5fdc] hover:bg-[#2c3a8f] text-white py-6 rounded-none border-2 border-[#4a5fdc]"
                  >
                    Subscribe to Line Stories
                  </Button>
                </div>

                {/* Decorative lines */}
                <div className="mt-8 flex gap-4 justify-center opacity-30">
                  <div className="w-12 h-px bg-[#4a5fdc] transform rotate-12" />
                  <div className="w-12 h-px bg-[#4a5fdc] transform -rotate-12" />
                  <div className="w-12 h-px bg-[#4a5fdc]" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
