'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Collaboration {
  id: string;
  brand: string;
  logo: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  platform: 'instagram' | 'tiktok';
  stats?: {
    views?: string;
    engagement?: string;
  };
}

const collaborations: Collaboration[] = [
  {
    id: 'DQBiqHHk5l5',
    brand: 'Bright Cafe',
    logo: '/images/brands/bright-cafe.webp',
    title: 'Local Coffee Culture',
    description: 'Showcased authentic Bali coffee experience, driving 45% increase in local customer visits',
    videoUrl: 'https://www.instagram.com/p/DQBiqHHk5l5/',
    thumbnail: 'https://scontent.cdninstagram.com/v/t51.29350-15/470959841_18482717076038032_7875049819642881682_n.jpg',
    platform: 'instagram',
    stats: { views: '12K', engagement: '8.5%' }
  },
  {
    id: 'DQEFYX4EzwZ',
    brand: 'SaMesa',
    logo: '/images/brands/samesa.webp',
    title: 'Authentic Dining Experience',
    description: 'Created viral content highlighting traditional cuisine, resulting in 200+ new reservations',
    videoUrl: 'https://www.instagram.com/p/DQEFYX4EzwZ/',
    thumbnail: 'https://scontent.cdninstagram.com/v/t51.29350-15/470959841_18482717076038032_7875049819642881682_n.jpg',
    platform: 'instagram',
    stats: { views: '18K', engagement: '12.3%' }
  },
  {
    id: 'DP8Wm6EklCt',
    brand: 'Life Kitchen Dumpglins',
    logo: '/images/brands/life-kitchen-dumpglins.webp',
    title: 'Food Discovery Campaign',
    description: 'Viral dumpling review reaching 50K+ viewers, sold out weekend inventory',
    videoUrl: 'https://www.instagram.com/p/DP8Wm6EklCt/',
    thumbnail: 'https://scontent.cdninstagram.com/v/t51.29350-15/470959841_18482717076038032_7875049819642881682_n.jpg',
    platform: 'instagram',
    stats: { views: '52K', engagement: '15.7%' }
  },
  {
    id: 'DRB7h9UkiXP',
    brand: 'Natah Ubud',
    logo: '/images/brands/natah-ubud.webp',
    title: 'Cultural Stay Experience',
    description: 'Showcased unique accommodation features, boosting direct bookings by 60%',
    videoUrl: 'https://www.instagram.com/p/DRB7h9UkiXP/',
    thumbnail: 'https://scontent.cdninstagram.com/v/t51.29350-15/470959841_18482717076038032_7875049819642881682_n.jpg',
    platform: 'instagram',
    stats: { views: '28K', engagement: '11.2%' }
  },
  {
    id: 'DQ9WT4JE5UU',
    brand: 'Klay Bar',
    logo: '/images/brands/klay-bar.webp',
    title: 'Nightlife Hotspot Feature',
    description: 'High-energy content showcasing venue atmosphere, 3x increase in weekend footfall',
    videoUrl: 'https://www.instagram.com/reel/DQ9WT4JE5UU/',
    thumbnail: 'https://scontent.cdninstagram.com/v/t51.29350-15/470959841_18482717076038032_7875049819642881682_n.jpg',
    platform: 'instagram',
    stats: { views: '35K', engagement: '18.5%' }
  },
  {
    id: 'DNmt25YRFC2',
    brand: 'Eyerizz',
    logo: '/images/brands/eyerizz.webp',
    title: 'Style & Lifestyle Brand',
    description: 'Trendsetting content driving brand awareness among target demographic',
    videoUrl: 'https://www.instagram.com/reel/DNmt25YRFC2/',
    thumbnail: 'https://scontent.cdninstagram.com/v/t51.29350-15/470959841_18482717076038032_7875049819642881682_n.jpg',
    platform: 'instagram',
    stats: { views: '22K', engagement: '9.8%' }
  },
  {
    id: '7537949332285164816',
    brand: 'Kebab Culture',
    logo: '/images/brands/kebab-culture.webp',
    title: 'Street Food Viral Hit',
    description: 'TikTok viral moment featuring late-night kebabs, generated 100K+ views',
    videoUrl: 'https://www.tiktok.com/@sntnli/video/7537949332285164816',
    thumbnail: 'https://scontent.cdninstagram.com/v/t51.29350-15/470959841_18482717076038032_7875049819642881682_n.jpg',
    platform: 'tiktok',
    stats: { views: '105K', engagement: '22.1%' }
  },
];

export default function ContentShowcase() {
  return (
    <section className="py-20 bg-gray-50" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4 tracking-tight">
            Brand Collaborations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Successful partnerships creating engaging content that drives results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collaborations.map((collab, index) => (
            <motion.div
              key={collab.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <a
                href={collab.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Video/Image Section */}
                <div className="relative aspect-[9/16] bg-gray-100 overflow-hidden">
                  {/* Thumbnail - using placeholder, you can replace with actual video thumbnail */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <p className="text-white font-medium text-sm">View on {collab.platform === 'instagram' ? 'Instagram' : 'TikTok'}</p>
                    </div>
                  </div>

                  {/* Brand Logo Overlay */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-white rounded-xl p-2 shadow-lg">
                      <Image
                        src={collab.logo}
                        alt={collab.brand}
                        width={60}
                        height={60}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Stats Overlay */}
                  {collab.stats && (
                    <div className="absolute bottom-4 right-4 z-10 flex gap-2">
                      {collab.stats.views && (
                        <div className="bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-semibold">
                          👁 {collab.stats.views}
                        </div>
                      )}
                      {collab.stats.engagement && (
                        <div className="bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-semibold">
                          💚 {collab.stats.engagement}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Info Section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2 group-hover:text-gray-700 transition-colors">
                    {collab.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {collab.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-black">{collab.brand}</span>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="https://www.instagram.com/thegede"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105"
          >
            View More on Instagram →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
