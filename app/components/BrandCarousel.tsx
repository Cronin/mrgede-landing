'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const brands = [
  { name: 'SaMesa', logo: '/images/brands/samesa.webp' },
  { name: 'Natah Ubud', logo: '/images/brands/natah-ubud.webp' },
  { name: 'Life Kitchen Dumpglins', logo: '/images/brands/life-kitchen-dumpglins.webp' },
  { name: 'Klay Bar', logo: '/images/brands/klay-bar.webp' },
  { name: 'Kebab Culture', logo: '/images/brands/kebab-culture.webp' },
  { name: 'Eyerizz', logo: '/images/brands/eyerizz.webp' },
  { name: 'Buongiorno', logo: '/images/brands/buongiorno.webp' },
  { name: 'Bright Cafe', logo: '/images/brands/bright-cafe.webp' },
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
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4 tracking-tight">
            Trusted Brands
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proud collaborations with leading companies
          </p>
        </motion.div>

        {/* Infinite scroll carousel */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-12"
              animate={{
                x: [0, -1400],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate brands for seamless loop */}
              {[...brands, ...brands, ...brands].map((brand, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-48 h-32 bg-white rounded-xl border border-gray-200 flex items-center justify-center p-6 hover:border-black transition-all duration-300 hover:shadow-lg"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
}
