'use client';

import { motion } from 'framer-motion';
import { Mail, MessageCircle } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6 tracking-tight">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Interested in collaborations? Get in touch and let&apos;s create something amazing.
          </p>

          {/* Contact options */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <motion.a
              href="https://www.instagram.com/thegede"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Message on Instagram
            </motion.a>

            <motion.a
              href="https://www.tiktok.com/@sntnli"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-3 border-2 border-black text-black px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              Follow on TikTok
            </motion.a>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 pt-12">
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-6">
              What I Offer
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700">
              <div>Content Creation</div>
              <div>Video Production</div>
              <div>Social Media</div>
              <div>Brand Partnerships</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
