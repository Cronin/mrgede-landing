'use client';

import { Instagram, Youtube, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">
              GEDE
            </h3>
            <p className="text-gray-400 mb-4">
              Bali Content Creator | +10M Views | Authentic influencer marketing that drives real results for restaurants, hotels, and lifestyle brands.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/pricing" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://www.instagram.com/thegede"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.dataLayer) {
                    window.dataLayer.push({
                      event: 'instagram_click',
                      button_location: 'footer',
                      conversion_method: 'instagram',
                      link_url: 'https://www.instagram.com/thegede'
                    });
                  }
                }}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="Follow on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@sntnli"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.dataLayer) {
                    window.dataLayer.push({
                      event: 'tiktok_click',
                      button_location: 'footer',
                      conversion_method: 'tiktok',
                      link_url: 'https://www.tiktok.com/@sntnli'
                    });
                  }
                }}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="Follow on TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
            <a
              href="mailto:hello@mrgede.com"
              onClick={() => {
                if (typeof window !== 'undefined' && window.dataLayer) {
                  window.dataLayer.push({
                    event: 'email_click',
                    button_location: 'footer',
                    conversion_method: 'email',
                    email_address: 'hello@mrgede.com'
                  });
                }
              }}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
              hello@mrgede.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} GEDE - Bali Content Creator. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Instagram: @thegede | TikTok: @sntnli | Influencer Bali | Social Media Marketing Bali
          </p>
        </div>
      </div>
    </footer>
  );
}
