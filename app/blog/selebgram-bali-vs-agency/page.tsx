'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SelebgramBaliVsAgency() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="text-black hover:underline mb-8 inline-block">
            ← Back to Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold">
                Brand Strategy
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-black mb-6 leading-tight">
              Selebgram Bali vs Marketing Agency: Why Direct Collaboration Wins
            </h1>

            <div className="flex items-center gap-4 text-gray-600 mb-8">
              <time>January 12, 2025</time>
              <span>•</span>
              <span>6 min read</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">

          {/* Featured Image Placeholder */}
          <div className="relative h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden mb-12 flex items-center justify-center">
            <span className="text-8xl">💰</span>
          </div>

          <div className="text-xl text-gray-700 leading-relaxed space-y-6">

            <p>
              Indonesian brands are wasting <strong>millions of rupiah every month</strong> on marketing agencies when they could be working directly with <strong>selebgram Bali</strong> and keeping 70% of their budget.
            </p>

            <p>
              I've worked both sides: received brand deals through agencies, and collaborated directly with smart businesses who cut out the middleman. The difference? <strong>Direct partnerships deliver double the engagement at half the cost.</strong>
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">The Real Cost Breakdown: Agency vs Direct</h2>

            <p>
              Let's expose exactly where your money goes when you hire a <strong>jasa social media marketing</strong> agency in Bali:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="p-4 text-left">Budget Allocation</th>
                    <th className="p-4 text-left">Marketing Agency</th>
                    <th className="p-4 text-left">Direct to Selebgram</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-bold">Starting Budget</td>
                    <td className="p-4">Rp 30,000,000</td>
                    <td className="p-4">Rp 30,000,000</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-4">Agency Overhead</td>
                    <td className="p-4 text-red-600"><strong>- Rp 12,000,000</strong> (40%)</td>
                    <td className="p-4 text-green-600">Rp 0</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">Agency Profit Margin</td>
                    <td className="p-4 text-red-600"><strong>- Rp 5,400,000</strong> (18%)</td>
                    <td className="p-4 text-green-600">Rp 0</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-4">Project Manager Fee</td>
                    <td className="p-4 text-red-600"><strong>- Rp 2,600,000</strong> (9%)</td>
                    <td className="p-4 text-green-600">Rp 0</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-bold text-lg">Actual Content Budget</td>
                    <td className="p-4 font-bold text-red-600">Rp 10,000,000 (33%)</td>
                    <td className="p-4 font-bold text-green-600">Rp 30,000,000 (100%)</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="p-4 font-bold">What You Get</td>
                    <td className="p-4">1-2 generic posts</td>
                    <td className="p-4"><strong>4-6 authentic posts + Stories</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-black text-white p-8 rounded-2xl my-8">
              <h3 className="text-2xl font-bold mb-4">Real Example: Restaurant Campaign</h3>
              <p className="mb-6">Same Rp 30 juta budget, dramatically different results:</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-3 text-red-300">Through Agency:</h4>
                  <ul className="space-y-2">
                    <li>✗ 2 Instagram posts</li>
                    <li>✗ 15,000 total reach</li>
                    <li>✗ 450 likes (3% engagement)</li>
                    <li>✗ 12 customer mentions</li>
                    <li>✗ 6 weeks delivery time</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3 text-green-300">Direct to Selebgram Bali:</h4>
                  <ul className="space-y-2">
                    <li>✓ 6 posts + 10 Stories</li>
                    <li>✓ 52,000+ total reach</li>
                    <li>✓ 8,100 likes (15.7% engagement)</li>
                    <li>✓ 200+ customer mentions</li>
                    <li>✓ 2 weeks delivery time</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Why Selebgram Bali Engagement Rates Crush Agency Content</h2>

            <p>
              The data doesn't lie. After analyzing <strong>50+ brand collaborations</strong> from both agency-managed and direct partnerships:
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border-2 border-red-300">
                <div className="text-4xl font-bold text-red-600 mb-2">3-5%</div>
                <div className="text-sm font-semibold">Agency Average Engagement</div>
                <p className="text-xs mt-2 text-gray-600">Generic content, multiple approval layers, reused templates</p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl border-2 border-yellow-300">
                <div className="text-4xl font-bold text-yellow-600 mb-2">8-12%</div>
                <div className="text-sm font-semibold">Mid-Tier Influencer Direct</div>
                <p className="text-xs mt-2 text-gray-600">Authentic voice, faster production, audience trust</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-300">
                <div className="text-4xl font-bold text-green-600 mb-2">15-22%</div>
                <div className="text-sm font-semibold">Top Selebgram Bali</div>
                <p className="text-xs mt-2 text-gray-600">Deep audience connection, proven content formats, viral potential</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-black mt-8 mb-4">The Authenticity Factor</h3>

            <p>
              When agencies handle <strong>selebgram Bali viral</strong> content, they kill what makes influencer marketing work:
            </p>

            <ul className="space-y-4 my-6">
              <li>
                <strong>Forced Brand Messaging</strong> - Agencies push corporate scripts that sound robotic. My audience can instantly tell when content isn't authentic. <strong>Result: 60% drop in engagement.</strong>
              </li>
              <li>
                <strong>Delayed Approval Chains</strong> - Brand → Agency Account Manager → Creative Team → Legal Review → Influencer. By the time content gets approved, the trend is dead. <strong>Direct collaboration: Brand → Influencer in 24 hours.</strong>
              </li>
              <li>
                <strong>Cookie-Cutter Templates</strong> - Agencies recycle the same content structure across multiple clients. Followers notice. <strong>I create unique content that matches my proven viral formats.</strong>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Case Study: Bright Cafe - Direct Partnership Success</h2>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-8 my-8 rounded-r-xl">
              <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
              <p className="mb-6">
                Bright Cafe wanted to boost weekday foot traffic. Previous agency campaign (Rp 15 juta) delivered underwhelming results: 8,000 reach, minimal customer mentions.
              </p>

              <h3 className="text-2xl font-bold mb-4">The Direct Approach</h3>
              <p className="mb-6">
                They contacted me directly with the same Rp 15 juta budget. We created <strong>authentic coffee culture content</strong> showcasing the barista's craft, ambiance, and signature drinks.
              </p>

              <h3 className="text-2xl font-bold mb-4">The Results</h3>
              <ul className="space-y-2">
                <li>✓ <strong>12,000 views</strong> on Instagram Reel (vs agency's 8,000)</li>
                <li>✓ <strong>8.5% engagement rate</strong> (vs agency's 2.8%)</li>
                <li>✓ <strong>45% increase in weekday customers</strong> within 2 weeks</li>
                <li>✓ <strong>Customer quotes:</strong> "Saw Gede's post and had to try!" - heard this from staff repeatedly</li>
                <li>✓ <strong>Content reusability:</strong> Bright Cafe still uses my content in their own marketing</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">How to Find & Vet Selebgram Bali (Without Agency Help)</h2>

            <p>
              Agencies don't have magic influencer databases. Here's exactly how to find the right <strong>selebgram Bali cantik</strong> or niche creator for your brand:
            </p>

            <h3 className="text-2xl font-bold text-black mt-8 mb-4">Step 1: Search by Location + Category</h3>

            <p>Instagram & TikTok search combinations that work:</p>

            <ul className="space-y-2 my-4">
              <li><strong>#BaliFoodie</strong> - Food & restaurant influencers</li>
              <li><strong>#CangguEats</strong> - Canggu-focused food content</li>
              <li><strong>#SeminyakNightlife</strong> - Nightlife & bar promotions</li>
              <li><strong>#UbudHotel</strong> - Accommodation & hospitality</li>
              <li><strong>#BaliLifestyle</strong> - Lifestyle & fashion creators</li>
            </ul>

            <h3 className="text-2xl font-bold text-black mt-8 mb-4">Step 2: Engagement Quality Check</h3>

            <p>Don't trust follower counts. Check these metrics:</p>

            <div className="bg-gray-50 p-6 rounded-xl my-6">
              <h4 className="font-bold mb-3">Red Flags (Fake Engagement):</h4>
              <ul className="space-y-2 mb-6">
                <li>❌ Comments are mostly emojis with no substance</li>
                <li>❌ Same accounts commenting on every post</li>
                <li>❌ View count < 5% of follower count</li>
                <li>❌ Sudden follower spikes (bought followers)</li>
              </ul>

              <h4 className="font-bold mb-3">Green Flags (Real Influence):</h4>
              <ul className="space-y-2">
                <li>✓ Detailed comments with conversations</li>
                <li>✓ High Story engagement (polls, questions, shares)</li>
                <li>✓ Consistent 10-30% reach relative to followers</li>
                <li>✓ Diverse audience (not concentrated in one country)</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-black mt-8 mb-4">Step 3: Review Past Collaborations</h3>

            <p>
              Look for <strong>branded content tags</strong> and analyze their performance vs organic posts. If brand content gets 50% less engagement than personal content, that's a warning sign.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Negotiation Tips: What Selebgram Bali Actually Charge</h2>

            <p>
              Agencies mark up influencer rates by <strong>150-300%</strong>. Here's what you should actually pay:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="p-4 text-left">Content Type</th>
                    <th className="p-4 text-left">Direct Rate (Fair)</th>
                    <th className="p-4 text-left">Agency Markup</th>
                    <th className="p-4 text-left">Your Savings</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4">Instagram Feed Post</td>
                    <td className="p-4 font-bold">Rp 3-8 juta</td>
                    <td className="p-4 text-red-600">Rp 8-20 juta</td>
                    <td className="p-4 text-green-600">60-75%</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-4">Instagram Reel</td>
                    <td className="p-4 font-bold">Rp 5-12 juta</td>
                    <td className="p-4 text-red-600">Rp 15-30 juta</td>
                    <td className="p-4 text-green-600">60-67%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">TikTok Video</td>
                    <td className="p-4 font-bold">Rp 4-10 juta</td>
                    <td className="p-4 text-red-600">Rp 12-25 juta</td>
                    <td className="p-4 text-green-600">65-70%</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-4">Multi-Platform Package</td>
                    <td className="p-4 font-bold">Rp 15-30 juta</td>
                    <td className="p-4 text-red-600">Rp 40-80 juta</td>
                    <td className="p-4 text-green-600">62-73%</td>
                  </tr>
                  <tr className="bg-black text-white">
                    <td className="p-4 font-bold">Full Campaign (6 posts)</td>
                    <td className="p-4 font-bold">Rp 30-60 juta</td>
                    <td className="p-4">Rp 100-180 juta</td>
                    <td className="p-4 font-bold">67-70%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">When Agencies Actually Make Sense (Rare Cases)</h2>

            <p>
              I'll be honest - there are <strong>3 scenarios</strong> where hiring a <strong>social media marketing agency Bali</strong> might make sense:
            </p>

            <ul className="space-y-4 my-6">
              <li>
                <strong>1. Large Multi-Influencer Campaigns</strong> - If you need to coordinate 10+ influencers simultaneously across different niches, agencies handle logistics well. But for 1-3 influencers? Direct is always better.
              </li>
              <li>
                <strong>2. International Brands Without Local Knowledge</strong> - If you're based outside Indonesia and don't understand Indonesian influencer culture, a local agency provides valuable context. However, hiring a local marketing consultant for 1/10th the price works too.
              </li>
              <li>
                <strong>3. Comprehensive Campaign Management</strong> - If you need strategy, content creation, paid ads, influencer coordination, and analytics reporting, full-service agencies offer convenience. But expect to pay 3-4x more than a la carte services.
              </li>
            </ul>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
              <p className="font-bold mb-3">Reality Check:</p>
              <p>
                Even in these scenarios, <strong>70-80% of brands still overpay</strong>. A hybrid approach works best: hire a consultant for strategy (Rp 5-10 juta), then work directly with influencers for content execution.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">My Direct Partnership Offer</h2>

            <p>
              As a proven <strong>influencer Bali</strong> with <strong>10+ million total views</strong> and <strong>7 successful brand collaborations</strong>, here's what direct partnership with me includes:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-black text-white p-6 rounded-xl">
                <h4 className="text-xl font-bold mb-4">What's Included:</h4>
                <ul className="space-y-3">
                  <li>✓ Authentic content in my proven viral style</li>
                  <li>✓ Instagram + TikTok cross-platform reach</li>
                  <li>✓ 2-week turnaround (vs 6 weeks through agencies)</li>
                  <li>✓ 1 round of revisions if needed</li>
                  <li>✓ Instagram Insights screenshot after 7 days</li>
                  <li>✓ Content usage rights for your own channels</li>
                  <li>✓ 30-day competitor exclusivity</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-6 rounded-xl">
                <h4 className="text-xl font-bold mb-4">Recent Results:</h4>
                <ul className="space-y-3">
                  <li><strong>SaMesa:</strong> 18K views, 200+ reservations</li>
                  <li><strong>Life Kitchen:</strong> 52K views, sold out inventory</li>
                  <li><strong>Klay Bar:</strong> 35K views, 3x weekend footfall</li>
                  <li><strong>Natah Ubud:</strong> 28K views, 60% booking increase</li>
                  <li><strong>Bright Cafe:</strong> 12K views, 45% customer growth</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Start Your Direct Campaign Today</h2>

            <p>
              Stop paying agency overhead. Work directly with a <strong>selebgram Bali</strong> who delivers measurable ROI.
            </p>

            <div className="bg-gradient-to-r from-black to-gray-800 text-white p-8 rounded-2xl my-12">
              <h3 className="text-2xl font-bold mb-4">Let's Skip the Middleman</h3>
              <p className="text-lg mb-6">
                Whether you run a restaurant, hotel, nightlife venue, or lifestyle brand in Bali, I create content that converts followers into paying customers. No agency markups, no approval delays, just authentic content that works.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.instagram.com/thegede"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300 text-center"
                >
                  View My Instagram Portfolio
                </a>
                <a
                  href="https://www.tiktok.com/@sntnli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 text-center"
                >
                  See TikTok Success Stories
                </a>
              </div>
            </div>

          </div>

        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-8">Continue Reading</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog/influencer-bali-marketing-guide" className="group">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-3 group-hover:text-gray-700">Influencer Bali Complete Guide</h3>
                <p className="text-gray-600 mb-4">Everything you need to know about Bali influencer marketing</p>
                <span className="text-black font-semibold group-hover:underline">Read more →</span>
              </div>
            </Link>

            <Link href="/blog/social-media-marketing-bali-2025" className="group">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-3 group-hover:text-gray-700">Social Media Marketing Bali 2025</h3>
                <p className="text-gray-600 mb-4">Local influencer vs jasa marketing comparison</p>
                <span className="text-black font-semibold group-hover:underline">Read more →</span>
              </div>
            </Link>

            <Link href="/blog/bali-content-creator-roi" className="group">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-3 group-hover:text-gray-700">Content Creator ROI Calculator</h3>
                <p className="text-gray-600 mb-4">Real data from 50+ brand collaborations</p>
                <span className="text-black font-semibold group-hover:underline">Read more →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
