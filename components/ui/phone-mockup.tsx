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
                className="w-full h-full bg-black"
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
    <div className="w-full h-full bg-white flex flex-col">
      {/* Instagram Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
        <svg className="w-24 h-8" viewBox="0 0 120 34" fill="none">
          <text x="0" y="24" className="fill-black font-bold" style={{ fontSize: '20px', fontFamily: 'sans-serif' }}>Instagram</text>
        </svg>
        <div className="flex gap-4">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
      </div>

      {/* Profile Section */}
      <div className="px-4 py-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-20 h-20 rounded-full border-2 border-pink-500 p-1">
            <Image
              src="https://scontent.cdninstagram.com/v/t51.82787-19/557812143_17846300070575836_6535530829839109749_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=108&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=IuBvWcEngvIQ7kNvwGp0CV9&_nc_oc=AdmcD7RRG06a82TORndrZUyvuPbcf8iR3wMx1JkxmIhCxAUxQbHNId3pJIlgxf59rkk&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=oeHduDVNqM_eC5kf6lBsLg&oh=00_Afj39t5NU60_VZ_I-eIQUrplApBvvxo1TWXLFzukHU8iqw&oe=6920CCDC"
              alt="Gede"
              width={76}
              height={76}
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="font-bold text-sm">thegede</div>
            <div className="text-xs text-gray-600">Gede | Bali Content Creator</div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-around py-2 border-b border-gray-200">
          <div className="text-center">
            <div className="font-bold text-sm">96</div>
            <div className="text-xs text-gray-600">Posts</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-sm">96</div>
            <div className="text-xs text-gray-600">Followers</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-sm">96</div>
            <div className="text-xs text-gray-600">Following</div>
          </div>
        </div>
      </div>

      {/* Grid Preview */}
      <div className="flex-1 px-1 overflow-hidden">
        <div className="grid grid-cols-3 gap-1">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <div key={i} className="aspect-square bg-gray-200"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TikTokView = ({ url }: { url: string }) => {
  return (
    <div className="w-full h-full bg-black flex flex-col relative">
      {/* TikTok Video */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="mb-4">
            <Image
              src="https://scontent.cdninstagram.com/v/t51.82787-19/557812143_17846300070575836_6535530829839109749_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=108&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=IuBvWcEngvIQ7kNvwGp0CV9&_nc_oc=AdmcD7RRG06a82TORndrZUyvuPbcf8iR3wMx1JkxmIhCxAUxQbHNId3pJIlgxf59rkk&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=oeHduDVNqM_eC5kf6lBsLg&oh=00_Afj39t5NU60_VZ_I-eIQUrplApBvvxo1TWXLFzukHU8iqw&oe=6920CCDC"
              alt="Gede"
              width={120}
              height={120}
              className="rounded-full mx-auto border-2 border-white"
            />
          </div>
          <div className="text-white font-bold text-lg mb-1">@sntnli</div>
          <div className="text-white/80 text-sm mb-4">Gede Bule</div>
          <div className="flex gap-6 justify-center text-white text-xs">
            <div className="text-center">
              <div className="font-bold">1.7K</div>
              <div className="text-white/60">Followers</div>
            </div>
            <div className="text-center">
              <div className="font-bold">117.1K</div>
              <div className="text-white/60">Likes</div>
            </div>
          </div>
        </div>
      </div>

      {/* TikTok Logo */}
      <div className="absolute top-4 left-4">
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 h-16 flex justify-around items-center px-4 bg-gradient-to-t from-black to-transparent">
        <div className="text-white text-xs flex flex-col items-center gap-1">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
          <span>Home</span>
        </div>
        <div className="text-white/60 text-xs flex flex-col items-center gap-1">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/></svg>
          <span>Inbox</span>
        </div>
        <div className="text-white/60 text-xs flex flex-col items-center gap-1">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
          <span>Profile</span>
        </div>
      </div>
    </div>
  );
};
