import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GEDE | Influencer Bali - Social Media Marketing & Content Creator +10M Views",
  description: "Top influencer Bali & selebgram with +10 million views. Skip expensive agencies - work directly with proven Bali content creator for authentic social media marketing. Instagram @thegede | TikTok @sntnli",
  keywords: "influencer bali, selebgram bali, social media marketing bali, jasa social media marketing bali, bali influencers, instagram influencer bali, tiktok bali, content creator bali, bali content creator, selebgram bali viral, food influencer bali, influencer marketing bali, social media marketing agency bali",
  authors: [{ name: "GEDE" }],
  openGraph: {
    title: "GEDE | Influencer Bali +10M Views - Social Media Marketing",
    description: "Proven Bali influencer with 10+ million views. Direct collaboration, no agency fees. Authentic content that drives real results for restaurants, hotels & lifestyle brands.",
    url: "https://mrgede.com",
    siteName: "GEDE - Influencer Bali",
    locale: "en_US",
    type: "website",
  },
};

// GTM Container ID
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-G22GX754';
// GA4 Measurement ID
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || 'G-45VZ93SKB7';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />

        {/* GA4 - Direct Implementation (fallback if GTM not configured) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="ga4-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA4_ID}', {
  page_path: window.location.pathname,
});
            `,
          }}
        />

        {/* Microsoft Clarity - Behavior Analytics */}
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
(function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "u1ur4kb2kq");
            `,
          }}
        />

        {/* Structured Data - Person/Creator Schema */}
        <Script
          id="schema-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "GEDE",
              "alternateName": "Erdem",
              "url": "https://mrgede.com",
              "image": "https://mrgede.com/images/instagram-profile.png",
              "sameAs": [
                "https://www.instagram.com/thegede",
                "https://www.tiktok.com/@sntnli"
              ],
              "jobTitle": "Content Creator",
              "description": "Bali-based social media content creator specializing in brand collaborations, storytelling, and engaging digital content.",
              "knowsAbout": ["Content Creation", "Video Production", "Social Media", "Brand Partnerships"],
              "worksFor": {
                "@type": "Organization",
                "name": "Independent Creator"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
