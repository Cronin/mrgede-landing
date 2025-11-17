"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { PhoneMockup } from "@/components/ui/phone-mockup";

export default function HeroScroll() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-4 tracking-tight">
              GEDE
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-4">
              Bali Content Creator
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm sm:text-base">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-black">1.7K+</div>
                <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wider">TikTok Followers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-black">117K+</div>
                <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wider">Total Likes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-black">96</div>
                <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wider">Posts</div>
              </div>
            </div>
          </>
        }
      >
        <PhoneMockup
          instagramUrl="https://www.instagram.com/thegede"
          tiktokUrl="https://www.tiktok.com/@sntnli"
        />
      </ContainerScroll>
    </div>
  );
}
