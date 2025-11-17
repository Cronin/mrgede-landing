'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Users, Heart, TrendingUp, Eye } from 'lucide-react';

interface MetricCardProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
  delay: number;
}

function MetricCard({ icon, value, label, suffix = '', delay }: MetricCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mb-4">
          {icon}
        </div>
        <div className="text-4xl font-bold gradient-text mb-2">
          {count.toLocaleString()}{suffix}
        </div>
        <div className="text-gray-600 font-medium">{label}</div>
      </div>
    </motion.div>
  );
}

export default function SocialMetrics() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Impact in <span className="gradient-text">Numbers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Building engaged communities and creating content that resonates
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <MetricCard
            icon={<Users className="w-8 h-8 text-white" />}
            value={250000}
            label="Total Followers"
            suffix="+"
            delay={0.1}
          />
          <MetricCard
            icon={<Heart className="w-8 h-8 text-white" />}
            value={15000}
            label="Avg. Engagement"
            suffix="+"
            delay={0.2}
          />
          <MetricCard
            icon={<Eye className="w-8 h-8 text-white" />}
            value={5000000}
            label="Monthly Reach"
            suffix="+"
            delay={0.3}
          />
          <MetricCard
            icon={<TrendingUp className="w-8 h-8 text-white" />}
            value={8}
            label="Engagement Rate"
            suffix="%"
            delay={0.4}
          />
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">50+</div>
            <div className="text-gray-600">Brand Collaborations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">500+</div>
            <div className="text-gray-600">Content Pieces Created</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">3+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
