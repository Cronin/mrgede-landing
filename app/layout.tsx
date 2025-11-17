import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Erdem | Social Media Content Creator & Brand Collaborator",
  description: "Erdem is a creative social media content creator specializing in brand collaborations, storytelling, and engaging digital content. Partner with me for your next campaign.",
  keywords: "social media, content creator, brand collaboration, influencer, digital marketing, creative content",
  authors: [{ name: "Erdem" }],
  openGraph: {
    title: "Erdem | Social Media Content Creator",
    description: "Partner with Erdem for creative brand collaborations and engaging social media content.",
    url: "https://mrgede.com",
    siteName: "Erdem",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
