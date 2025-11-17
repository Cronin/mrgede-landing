"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface PhoneMockupProps {
  instagramUrl: string;
  tiktokUrl: string;
}

export const PhoneMockup = ({ instagramUrl, tiktokUrl }: PhoneMockupProps) => {
  const [currentView, setCurrentView] = useState<'instagram' | 'tiktok'>('instagram');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentView((prev) => (prev === 'instagram' ? 'tiktok' : 'instagram'));
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Phone Frame */}
      <div className="relative w-[280px] h-[570px] md:w-[340px] md:h-[690px] bg-black rounded-[3rem] p-3 shadow-2xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-20"></div>

        {/* Screen */}
        <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
          <AnimatePresence mode="wait">
            {currentView === 'instagram' ? (
              <motion.div
                key="instagram"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full"
              >
                <InstagramView url={instagramUrl} />
              </motion.div>
            ) : (
              <motion.div
                key="tiktok"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full"
              >
                <TikTokView url={tiktokUrl} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Platform Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
            <button
              onClick={() => setCurrentView('instagram')}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentView === 'instagram' ? 'bg-white w-6' : 'bg-white/40'
              }`}
            />
            <button
              onClick={() => setCurrentView('tiktok')}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentView === 'tiktok' ? 'bg-white w-6' : 'bg-white/40'
              }`}
            />
          </div>
        </div>

        {/* Side Buttons */}
        <div className="absolute right-0 top-24 w-1 h-12 bg-gray-800 rounded-l"></div>
        <div className="absolute right-0 top-44 w-1 h-16 bg-gray-800 rounded-l"></div>
        <div className="absolute left-0 top-32 w-1 h-8 bg-gray-800 rounded-r"></div>
      </div>
    </div>
  );
};

const InstagramView = ({ url }: { url: string }) => {
  return (
    <div className="w-full h-full bg-white relative">
      <Image
        src="/images/instagram-profile.png"
        alt="Instagram Profile"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
};

const TikTokView = ({ url }: { url: string }) => {
  return (
    <div className="w-full h-full bg-white relative">
      <Image
        src="/images/tiktok-profile.png"
        alt="TikTok Profile"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
};
