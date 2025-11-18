import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blog - Influencer Bali Insights | GEDE",
  description: "Expert insights on influencer marketing in Bali, social media strategies, and content creation tips from a top Bali influencer with 10M+ views.",
  keywords: "influencer bali, selebgram bali, social media marketing bali, content creator tips, influencer marketing guide",
};

const blogPosts = [
  {
    slug: 'influencer-bali-marketing-guide',
    title: 'The Ultimate Guide to Influencer Marketing in Bali 2025',
    excerpt: 'Discover why Bali is the hottest destination for influencer marketing and how to work with local influencers to amplify your brand.',
    date: '2025-01-15',
    readTime: '8 min read',
    image: '/images/bali-influencer-marketing.jpg',
    category: 'Marketing Strategy'
  },
  {
    slug: 'selebgram-bali-vs-agency',
    title: 'Direct Collaboration vs Social Media Agency: What Works in Bali?',
    excerpt: 'Compare the pros and cons of working directly with selebgram Bali influencers versus hiring expensive social media marketing agencies.',
    date: '2025-01-12',
    readTime: '6 min read',
    image: '/images/selebgram-vs-agency.jpg',
    category: 'Business Insights'
  }
];

export default function BlogPage() {
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

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-50 to-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Influencer Marketing Insights
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Expert perspectives on social media marketing, content creation, and influencer strategies in Bali
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image Placeholder */}
              <div className="h-64 bg-gradient-to-br from-orange-200 to-amber-200 flex items-center justify-center">
                <span className="text-6xl">📱</span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {post.title}
                </h2>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="text-orange-600 font-semibold group-hover:underline">
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Collaborate?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's create authentic content that drives real results for your brand
          </p>
          <Link
            href="/"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get in Touch
          </Link>
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
