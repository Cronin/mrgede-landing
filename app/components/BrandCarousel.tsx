'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const brands = [
  { name: 'Nike', logo: '👟' },
  { name: 'Apple', logo: '🍎' },
  { name: 'Samsung', logo: '📱' },
  { name: 'Adidas', logo: '⚽' },
  { name: 'Sony', logo: '🎮' },
  { name: 'Netflix', logo: '🎬' },
  { name: 'Spotify', logo: '🎵' },
  { name: 'Tesla', logo: '🚗' },
  { name: 'Amazon', logo: '📦' },
  { name: 'Google', logo: '🔍' },
];

export default function BrandCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % brands.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Leading <span className="gradient-text">Brands</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Proud to have collaborated with these amazing companies
          </p>
        </motion.div>

        {/* Infinite scroll carousel */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{
                x: [0, -100 * brands.length],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate brands for seamless loop */}
              {[...brands, ...brands, ...brands].map((brand, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-40 h-40 bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center gap-4 hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-6xl">{brand.logo}</div>
                  <div className="font-semibold text-gray-700">{brand.name}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
        </div>

        {/* Client testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <div className="text-5xl mb-6">&ldquo;</div>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Working with Erdem was an absolute game-changer for our brand. His creativity,
              professionalism, and ability to understand our vision resulted in content that
              exceeded all expectations. The engagement rates speak for themselves!
            </p>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl">
                👤
              </div>
              <div>
                <div className="font-bold text-lg">Sarah Johnson</div>
                <div className="text-purple-200">Marketing Director, TechBrand Inc.</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
