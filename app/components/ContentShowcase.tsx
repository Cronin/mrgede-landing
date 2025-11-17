'use client';

import { motion } from 'framer-motion';
import { Play, Image as ImageIcon, Film } from 'lucide-react';

const contentItems = [
  {
    type: 'video',
    title: 'Brand Story Campaign',
    category: 'Video Content',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    color: 'from-purple-500 to-indigo-600',
  },
  {
    type: 'image',
    title: 'Product Showcase',
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop',
    color: 'from-indigo-500 to-blue-600',
  },
  {
    type: 'video',
    title: 'Behind The Scenes',
    category: 'Video Content',
    image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=800&h=600&fit=crop',
    color: 'from-violet-500 to-purple-600',
  },
  {
    type: 'image',
    title: 'Lifestyle Photography',
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&h=600&fit=crop',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    type: 'video',
    title: 'Influencer Collaboration',
    category: 'Video Content',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=600&fit=crop',
    color: 'from-cyan-500 to-teal-600',
  },
  {
    type: 'image',
    title: 'Social Media Campaign',
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    color: 'from-teal-500 to-green-600',
  },
];

export default function ContentShowcase() {
  return (
    <section className="py-20 bg-white" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A glimpse into the creative content I produce for brands
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              whileHover={{ y: -10 }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <motion.div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    {item.type === 'video' ? (
                      <Film className="w-5 h-5 text-white" />
                    ) : (
                      <ImageIcon className="w-5 h-5 text-white" />
                    )}
                    <span className="text-sm text-white/80">{item.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Play className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white/90 text-sm">View Project</span>
                  </div>
                </div>
              </div>

              {/* Type badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                {item.type === 'video' ? '🎥 Video' : '📸 Photo'}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
            View Full Portfolio
          </button>
        </motion.div>
      </div>
    </section>
  );
}
