import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Pricing - Direct Influencer Rates Bali | GEDE",
  description: "Transparent pricing for influencer marketing in Bali. Save 20-60% vs agencies. Package deals starting from $130/post. No hidden fees, direct collaboration.",
  keywords: "influencer bali pricing, selebgram bali rates, social media marketing bali cost, influencer marketing prices",
  openGraph: {
    title: "Direct Influencer Pricing - Save Up to 60% vs Agencies",
    description: "Work directly with Bali's top influencer. Transparent rates, proven results, no agency markup.",
    type: "website",
  }
};

const packages = [
  {
    name: "Single Post",
    price: "$130-195",
    idr: "Rp 2-3 juta",
    period: "one-time",
    best: false,
    features: [
      "1 Instagram Post OR 1 TikTok",
      "Professional content creation",
      "Your brand story authentically told",
      "1 round of revisions",
      "Posted to 50K+ followers",
      "Performance insights screenshot"
    ],
    deliverables: "1 post",
    timeline: "3-5 days"
  },
  {
    name: "Premium Reel",
    price: "$195-325",
    idr: "Rp 3-5 juta",
    period: "one-time",
    best: false,
    features: [
      "1 Instagram Reel (high engagement)",
      "Professional video editing",
      "Trending audio & effects",
      "Instagram + TikTok cross-post option (+$65)",
      "2 rounds of revisions",
      "Viral potential optimization"
    ],
    deliverables: "1 Reel",
    timeline: "5-7 days"
  },
  {
    name: "Starter Campaign",
    price: "$390-520",
    idr: "Rp 6-8 juta",
    period: "one-time",
    best: false,
    features: [
      "2 Instagram Reels",
      "1 TikTok Video",
      "5 Instagram Stories (48hr highlights)",
      "Caption copywriting",
      "Hashtag strategy",
      "Content planning session",
      "30-day usage rights"
    ],
    deliverables: "3 videos + 5 stories",
    timeline: "7-10 days"
  },
  {
    name: "Growth Campaign",
    price: "$650-780",
    idr: "Rp 10-12 juta",
    period: "one-time",
    best: true,
    popular: "Most Popular",
    features: [
      "3 Instagram Reels",
      "2 TikTok Videos",
      "10 Instagram Stories",
      "Direct messaging for Q&A",
      "Brand mention in bio (7 days)",
      "Giveaway/contest collaboration",
      "Full content calendar",
      "60-day usage rights",
      "Priority support"
    ],
    deliverables: "5 videos + 10 stories",
    timeline: "10-14 days"
  },
  {
    name: "Premium Partnership",
    price: "$975-1,300",
    idr: "Rp 15-20 juta",
    period: "one-time",
    best: false,
    features: [
      "5 Instagram Reels",
      "3 TikTok Videos",
      "20 Instagram Stories",
      "1 IGTV/YouTube Short",
      "Permanent brand mention in bio",
      "Exclusive collaboration (no competitors)",
      "Monthly performance report",
      "90-day usage rights",
      "Unlimited revisions",
      "Brand ambassador consideration"
    ],
    deliverables: "9 videos + 20 stories + 1 long-form",
    timeline: "14-21 days"
  }
];

const agencyComparison = [
  {
    agency: "Goldify Solutions (Bali)",
    package: "Starter",
    price: "$227/month",
    output: "12 posts/month (managed)",
    markup: "40-50%",
    direct: false
  },
  {
    agency: "Goldify Solutions (Bali)",
    package: "Growth",
    price: "$487/month",
    output: "20 posts/month + ads",
    markup: "40-50%",
    direct: false
  },
  {
    agency: "Goldify Solutions (Bali)",
    package: "Premium",
    price: "$975/month",
    output: "Unlimited posts",
    markup: "40-50%",
    direct: false
  },
  {
    agency: "KreasiKU (Bali)",
    package: "UMKM",
    price: "$195/month",
    output: "Basic management + KOL",
    markup: "30-40%",
    direct: false
  },
  {
    agency: "GEDE (Direct)",
    package: "Growth Campaign",
    price: "$650-780",
    output: "5 videos + 10 stories",
    markup: "0% - Direct",
    direct: true
  }
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
            GEDE
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-orange-50 to-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transparent Pricing, Real Results
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6">
            Work directly with a proven Bali influencer. No agency markup, no hidden fees.
          </p>
          <div className="inline-block bg-black text-white px-6 py-3 rounded-full font-bold">
            Save 20-60% vs Agencies
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-600">+10M</div>
              <div className="text-gray-600">Total Views</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">+117K</div>
              <div className="text-gray-600">Total Engagement</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">7</div>
              <div className="text-gray-600">Brand Collaborations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">15.7%</div>
              <div className="text-gray-600">Avg Engagement Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Choose Your Package
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 border-2 transition-all hover:shadow-2xl hover:-translate-y-2 ${
                  pkg.best ? 'border-orange-500' : 'border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                      {pkg.popular}
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-orange-600 mb-1">{pkg.price}</div>
                  <div className="text-sm text-gray-500">{pkg.idr}</div>
                  <div className="text-sm text-gray-600 mt-2">{pkg.period}</div>
                </div>

                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Deliverables:</span>
                    <span className="font-semibold text-gray-900">{pkg.deliverables}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Timeline:</span>
                    <span className="font-semibold text-gray-900">{pkg.timeline}</span>
                  </div>
                </div>

                <Link
                  href="/"
                  className={`block text-center py-3 px-6 rounded-full font-bold transition-all ${
                    pkg.best
                      ? 'bg-orange-500 hover:bg-orange-600 text-white'
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agency Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Why Direct Beats Agencies
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Compare real Bali agency pricing vs working directly with me
          </p>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Provider</th>
                    <th className="px-6 py-4 text-left">Package</th>
                    <th className="px-6 py-4 text-left">Price</th>
                    <th className="px-6 py-4 text-left">What You Get</th>
                    <th className="px-6 py-4 text-left">Agency Markup</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {agencyComparison.map((item, index) => (
                    <tr
                      key={index}
                      className={item.direct ? 'bg-orange-50' : ''}
                    >
                      <td className="px-6 py-4 font-semibold text-gray-900">
                        {item.agency}
                        {item.direct && (
                          <span className="ml-2 text-xs bg-orange-500 text-white px-2 py-1 rounded-full">
                            BEST VALUE
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-gray-700">{item.package}</td>
                      <td className="px-6 py-4 font-bold text-gray-900">{item.price}</td>
                      <td className="px-6 py-4 text-gray-700">{item.output}</td>
                      <td className="px-6 py-4">
                        {item.direct ? (
                          <span className="text-green-600 font-bold">0% - Direct</span>
                        ) : (
                          <span className="text-red-600 font-semibold">{item.markup}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 bg-orange-100 border-l-4 border-orange-500 p-6 rounded-r-lg">
            <h4 className="font-bold text-gray-900 mb-2">Real Example: Restaurant Campaign</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-sm text-gray-700 mb-2"><strong>Through Agency (Goldify Growth):</strong></div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Monthly fee: $487 (Rp 7.5 juta)</li>
                  <li>• 20 posts managed by agency</li>
                  <li>• 40-50% goes to overhead</li>
                  <li>• Generic content templates</li>
                  <li>• 4-6 weeks approval process</li>
                </ul>
              </div>
              <div>
                <div className="text-sm text-gray-700 mb-2"><strong>Direct with GEDE (Growth Campaign):</strong></div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• One-time: $650-780 (Rp 10-12 juta)</li>
                  <li>• 5 videos + 10 stories</li>
                  <li>• 100% to content creation</li>
                  <li>• Authentic, viral-ready content</li>
                  <li>• 10-14 days turnaround</li>
                  <li><strong className="text-orange-600">• Save 15-30% + better results</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Real Results from Past Campaigns
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="text-orange-600 font-bold mb-2">Life Kitchen Dumplings</div>
              <div className="text-2xl font-bold text-gray-900 mb-4">52K+ Views</div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Investment: $260 (Rp 4 juta - Premium Reel)</li>
                <li>• Engagement: 15.7%</li>
                <li>• Result: Weekend sold out</li>
                <li>• ROI: 400%+</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="text-orange-600 font-bold mb-2">SaMesa Restaurant</div>
              <div className="text-2xl font-bold text-gray-900 mb-4">18K Views</div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Investment: $195 (Rp 3 juta - Single Reel)</li>
                <li>• Engagement: 12.3%</li>
                <li>• Result: 200+ reservations</li>
                <li>• ROI: 600%+</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="text-orange-600 font-bold mb-2">Klay Bar</div>
              <div className="text-2xl font-bold text-gray-900 mb-4">35K Views</div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Investment: $390 (Rp 6 juta - Starter Campaign)</li>
                <li>• Engagement: 18.5%</li>
                <li>• Result: 3x weekend footfall</li>
                <li>• ROI: 500%+</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Pricing FAQs
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Do you offer monthly retainer packages?</h3>
              <p className="text-gray-700">
                Yes! For ongoing partnerships, I offer monthly retainer starting at $520/month (Rp 8 juta) for 2 posts + 5 stories. Custom packages available based on your needs.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-700">
                Bank transfer (IDR), PayPal (USD), or Wise (USD/EUR). 50% deposit upfront, 50% upon content delivery.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Can I get a custom package?</h3>
              <p className="text-gray-700">
                Absolutely! These are standard packages. I'm happy to create a custom proposal based on your specific goals, budget, and timeline.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">What's included in "usage rights"?</h3>
              <p className="text-gray-700">
                You can repost the content on your own channels (website, social media, ads) for the specified duration. Commercial use and modification require extended licensing (+20%).
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">How does this compare to hiring an agency?</h3>
              <p className="text-gray-700">
                You save 20-60% by working directly with me. No overhead, no middleman fees. Plus, you get authentic content that performs better because it's genuinely created by the influencer, not scripted by an agency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-amber-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Start Your Campaign?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create content that drives real results for your brand
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://www.instagram.com/thegede"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-orange-600 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              DM on Instagram
            </Link>
            <a
              href="mailto:hello@mrgede.com"
              className="inline-block bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-orange-600 transition-all transform hover:scale-105"
            >
              Email: hello@mrgede.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>© 2025 GEDE - Bali Content Creator. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
