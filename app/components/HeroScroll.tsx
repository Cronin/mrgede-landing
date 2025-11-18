"use client";
import React, { useState, useEffect, useRef } from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { PhoneMockup } from "@/components/ui/phone-mockup";
import confetti from 'canvas-confetti';

// Counter Component with animation
function Counter({ end, suffix = '', label, onComplete }: { end: number; suffix?: string; label: string; onComplete?: () => void }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const duration = 2000; // Exactly 2 seconds
    const startTime = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      if (progress >= 1) {
        setCount(end);
        clearInterval(timer);
        if (onComplete) {
          setTimeout(() => onComplete(), 50); // Small delay to ensure all finish
        }
      } else {
        setCount(Math.floor(end * progress));
      }
    }, 16); // ~60fps

    return () => clearInterval(timer);
  }, [end, onComplete]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `+${(num / 1000000).toFixed(1)}M`;
    } else if (num >= 1000) {
      return `+${(num / 1000).toFixed(1)}K`;
    } else {
      return `+${num}`;
    }
  };

  return (
    <div className="text-center" ref={ref}>
      <div className="text-2xl sm:text-3xl font-bold text-black">
        {formatNumber(count)}
      </div>
      <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wider">{label}</div>
    </div>
  );
}

export default function HeroScroll() {
  const [completedCounters, setCompletedCounters] = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);

  const handleCounterComplete = () => {
    setCompletedCounters(prev => {
      const newCount = prev + 1;
      if (newCount === 3 && statsRef.current) {
        // All counters complete, trigger confetti
        const rect = statsRef.current.getBoundingClientRect();
        const x = (rect.left + rect.width / 2) / window.innerWidth;
        const y = (rect.top + rect.height / 2) / window.innerHeight;

        confetti({
          particleCount: 100,
          spread: 70,
          origin: { x, y },
          colors: ['#000000', '#333333', '#666666', '#999999'],
          ticks: 200,
        });
      }
      return newCount;
    });
  };
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
            <div ref={statsRef} className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm sm:text-base">
              <Counter end={10000000} label="Total Views" onComplete={handleCounterComplete} />
              <Counter end={117000} label="Total Likes" onComplete={handleCounterComplete} />
              <Counter end={7} label="Brand Collaborations" onComplete={handleCounterComplete} />
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
