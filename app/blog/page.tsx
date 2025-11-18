'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: 'influencer-bali-marketing-guide',
    title: 'Influencer Bali: Complete Guide to Social Media Marketing in 2025',
    excerpt: 'Why hire an expensive agency when you can work directly with Bali influencers? Discover how local content creators deliver 300% better ROI.',
    date: '2025-01-15',
    readTime: '8 min read',
    category: 'Influencer Marketing',
    image: '/images/blog/bali-influencer-marketing.jpg'
  },
  {
    slug: 'selebgram-bali-vs-agency',
    title: 'Selebgram Bali vs Marketing Agency: Why Direct Collaboration Wins',
    excerpt: 'Indonesian brands are saving 70% on marketing costs by working directly with selebgram Bali. Learn the strategy that doubled engagement rates.',
    date: '2025-01-12',
    readTime: '6 min read',
    category: 'Brand Strategy',
    image: '/images/blog/selebgram-collaboration.jpg'
  },
  {
    slug: 'social-media-marketing-bali-2025',
    title: 'Social Media Marketing Bali: Local Influencer vs Jasa Marketing',
    excerpt: 'The truth about jasa social media marketing di Bali: why paying premium agency fees often delivers worse results than direct influencer partnerships.',
    date: '2025-01-10',
    readTime: '7 min read',
    category: 'Marketing Strategy',
    image: '/images/blog/social-media-bali.jpg'
  },
  {
    slug: 'bali-content-creator-roi',
    title: 'ROI Calculator: Bali Content Creator vs Marketing Agency Cost',
    excerpt: 'Real data from 50+ brand collaborations: Bali influencers deliver 45% higher engagement at 60% lower cost than traditional agencies.',
    date: '2025-01-08',
    readTime: '5 min read',
    category: 'Case Studies',
    image: '/images/blog/content-creator-roi.jpg'
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-black mb-6 tracking-tight">
              Bali Influencer Marketing Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real insights from a working content creator. Learn why smart brands skip expensive agencies and work directly with <strong>Bali influencers</strong> to maximize ROI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  {/* Image */}
                  <div className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl">📸</span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <time>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h2 className="text-2xl font-bold text-black mb-4 group-hover:text-gray-700 transition-colors leading-tight">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-black font-semibold group-hover:gap-3 transition-all">
                      Read Full Article
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Skip the Agency Fees?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Work directly with a proven Bali content creator. <strong>+10 Million views</strong>, <strong>7 successful brand collaborations</strong>, and authentic engagement that agencies can't replicate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.instagram.com/thegede"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-105"
              >
                View Instagram Portfolio
              </a>
              <a
                href="https://www.tiktok.com/@sntnli"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
              >
                See TikTok Content
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
