'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

interface Collaboration {
  id: string;
  brand: string;
  logo: string;
  title: string;
  description: string;
  videoUrl: string;
  videoFile: string;
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
    description: 'Showcased authentic Bali coffee experience, driving <strong>45% increase</strong> in local customer visits',
    videoUrl: 'https://www.instagram.com/p/DQBiqHHk5l5/',
    videoFile: '/videos/bright-cafe.mp4',
    thumbnail: 'https://scontent.cdninstagram.com/v/t51.29350-15/470959841_18482717076038032_7875049819642881682_n.jpg',
    platform: 'instagram',
    stats: { views: '12K', engagement: '8.5%' }
  },
  {
    id: 'DQEFYX4EzwZ',
    brand: 'SaMesa',
    logo: '/images/brands/samesa.webp',
    title: 'Authentic Dining Experience',
    description: 'Created viral content highlighting traditional cuisine, resulting in <strong>200+ new reservations</strong>',
    videoUrl: 'https://www.instagram.com/p/DQEFYX4EzwZ/',
    videoFile: '/videos/samesa.mp4',
    thumbnail: 'https://scontent.cdninstagram.com/v/t51.29350-15/470959841_18482717076038032_7875049819642881682_n.jpg',
    platform: 'instagram',
    stats: { views: '18K', engagement: '12.3%' }
  },
  {
    id: 'DP8Wm6EklCt',
    brand: 'Life Kitchen Dumpglins',
    logo: '/images/brands/life-kitchen-dumpglins.webp',
    title: 'Food Discovery Campaign',
    description: 'Viral dumpling review reaching <strong>50K+ viewers</strong>, sold out weekend inventory',
    videoUrl: 'https://www.instagram.com/p/DP8Wm6EklCt/',
    videoFile: '/videos/life-kitchen.mp4',
    thumbnail: 'https://scontent.cdninstagram.com/v/t51.29350-15/470959841_18482717076038032_7875049819642881682_n.jpg',
    platform: 'instagram',
    stats: { views: '52K', engagement: '15.7%' }
  },
  {
    id: 'DRB7h9UkiXP',
    brand: 'Natah Ubud',
    logo: '/images/brands/natah-ubud.webp',
    title: 'Cultural Stay Experience',
    description: 'Showcased unique accommodation features, boosting direct bookings by <strong>60%</strong>',
    videoUrl: 'https://www.instagram.com/p/DRB7h9UkiXP/',
    videoFile: '/videos/natah-ubud.mp4',
    thumbnail: 'https://scontent.cdninstagram.com/v/t51.29350-15/470959841_18482717076038032_7875049819642881682_n.jpg',
    platform: 'instagram',
    stats: { views: '28K', engagement: '11.2%' }
  },
  {
    id: 'DQ9WT4JE5UU',
    brand: 'Klay Bar',
    logo: '/images/brands/klay-bar.webp',
    title: 'Nightlife Hotspot Feature',
    description: 'High-energy content showcasing venue atmosphere, <strong>3x increase</strong> in weekend footfall',
    videoUrl: 'https://www.instagram.com/reel/DQ9WT4JE5UU/',
    videoFile: '/videos/klay-bar.mp4',
    thumbnail: 'https://scontent.cdninstagram.com/v/t51.29350-15/470959841_18482717076038032_7875049819642881682_n.jpg',
    platform: 'instagram',
    stats: { views: '35K', engagement: '18.5%' }
  },
  {
    id: 'DNmt25YRFC2',
    brand: 'Eyerizz',
    logo: '/images/brands/eyerizz.webp',
    title: 'Style & Lifestyle Brand',
    description: 'Trendsetting content driving <strong>brand awareness</strong> among target demographic',
    videoUrl: 'https://www.instagram.com/reel/DNmt25YRFC2/',
    videoFile: '/videos/eyerizz.mp4',
    thumbnail: 'https://scontent.cdninstagram.com/v/t51.29350-15/470959841_18482717076038032_7875049819642881682_n.jpg',
    platform: 'instagram',
    stats: { views: '22K', engagement: '9.8%' }
  },
  {
    id: '7537949332285164816',
    brand: 'Kebab Culture',
    logo: '/images/brands/kebab-culture.webp',
    title: 'Street Food Viral Hit',
    description: 'TikTok viral moment featuring late-night kebabs, generated <strong>100K+ views</strong>',
    videoUrl: 'https://www.tiktok.com/@sntnli/video/7537949332285164816',
    videoFile: '/videos/kebab-culture.mp4',
    thumbnail: 'https://scontent.cdninstagram.com/v/t51.29350-15/470959841_18482717076038032_7875049819642881682_n.jpg',
    platform: 'tiktok',
    stats: { views: '105K', engagement: '22.1%' }
  },
];

// Video Player Component with autoplay on scroll
function VideoPlayer({ videoFile }: { videoFile: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {
              // Autoplay blocked, user interaction needed
            });
            setIsPlaying(true);
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative w-full h-full bg-black rounded-2xl overflow-hidden">
      <video
        ref={videoRef}
        src={videoFile}
        className="w-full h-full object-cover"
        playsInline
        loop
        muted
        preload="metadata"
      />

      {/* Unmute Button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-6 right-6 z-20 bg-black/80 hover:bg-black text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
      >
        {isMuted ? (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </svg>
            Unmute
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
            Mute
          </>
        )}
      </button>
    </div>
  );
}

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

        {/* 2 Column Layout for ALL screen sizes - Alternating */}
        <div className="space-y-8 md:space-y-24">
          {collaborations.map((collab, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={collab.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="grid grid-cols-2 gap-4 md:gap-12 items-center"
              >
                {/* Description Column */}
                <div className={`flex flex-col gap-2 md:gap-6 ${isEven ? 'order-1' : 'order-2'}`}>
                  {/* Brand Logo with dark overlay */}
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-3 md:p-8 shadow-lg w-full">
                    <Image
                      src={collab.logo}
                      alt={collab.brand}
                      width={200}
                      height={200}
                      className="object-contain w-full h-auto"
                    />
                  </div>

                  {/* Description */}
                  <div className="space-y-2 md:space-y-4">
                    <h3 className="text-sm md:text-3xl font-bold text-black leading-tight">
                      {collab.title}
                    </h3>
                    <div className="text-gray-700 text-[10px] md:text-lg leading-relaxed hidden md:block">
                      <p dangerouslySetInnerHTML={{ __html: collab.description }} />
                    </div>

                    {/* Stats */}
                    {collab.stats && (
                      <div className="hidden md:flex flex-wrap gap-3 pt-2">
                        {collab.stats.views && (
                          <div className="bg-black text-white px-4 py-2 rounded-lg font-semibold text-xs md:text-sm">
                            {collab.stats.views} views
                          </div>
                        )}
                        {collab.stats.engagement && (
                          <div className="bg-black text-white px-4 py-2 rounded-lg font-semibold text-xs md:text-sm">
                            {collab.stats.engagement} engagement
                          </div>
                        )}
                      </div>
                    )}

                    <a
                      href={collab.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden md:inline-flex items-center gap-2 text-black font-semibold hover:gap-3 transition-all text-sm md:text-base"
                    >
                      View on {collab.platform === 'instagram' ? 'Instagram' : 'TikTok'}
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Video Column */}
                <div className={`aspect-[9/16] max-h-[400px] md:max-h-[600px] w-full ${isEven ? 'order-2' : 'order-1'}`}>
                  <VideoPlayer videoFile={collab.videoFile} />
                </div>
              </motion.div>
            );
          })}
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
