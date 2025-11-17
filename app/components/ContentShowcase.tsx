'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Script from 'next/script';

const contentItems = [
  { id: 'DQBiqHHk5l5', url: 'https://www.instagram.com/p/DQBiqHHk5l5/', type: 'instagram' },
  { id: 'DQEFYX4EzwZ', url: 'https://www.instagram.com/p/DQEFYX4EzwZ/', type: 'instagram' },
  { id: 'DP8Wm6EklCt', url: 'https://www.instagram.com/p/DP8Wm6EklCt/', type: 'instagram' },
  { id: 'DRB7h9UkiXP', url: 'https://www.instagram.com/p/DRB7h9UkiXP/', type: 'instagram' },
  { id: 'DQ9WT4JE5UU', url: 'https://www.instagram.com/reel/DQ9WT4JE5UU/', type: 'instagram' },
  { id: 'DNmt25YRFC2', url: 'https://www.instagram.com/reel/DNmt25YRFC2/', type: 'instagram' },
  { id: '7537949332285164816', url: 'https://www.tiktok.com/@sntnli/video/7537949332285164816', type: 'tiktok' },
];

export default function ContentShowcase() {
  useEffect(() => {
    // Reload Instagram embeds when component mounts
    if (typeof window !== 'undefined' && (window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }
  }, []);

  return (
    <>
      <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
      <Script src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />
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
              Latest Content
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Check out my recent videos about life in Bali
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {contentItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {item.type === 'instagram' ? (
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink={item.url}
                    data-instgrm-version="14"
                    style={{
                      background: '#FFF',
                      border: 0,
                      borderRadius: '3px',
                      boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                      margin: '1px',
                      maxWidth: '540px',
                      minWidth: '326px',
                      padding: 0,
                      width: 'calc(100% - 2px)',
                    }}
                  />
                ) : (
                  <blockquote
                    className="tiktok-embed"
                    cite={item.url}
                    data-video-id={item.id}
                    style={{
                      maxWidth: '605px',
                      minWidth: '325px',
                    }}
                  >
                    <section>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        title="@sntnli"
                        href="https://www.tiktok.com/@sntnli"
                      >
                        @sntnli
                      </a>
                    </section>
                  </blockquote>
                )}
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
    </>
  );
}
