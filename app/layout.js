import "./globals.css";
import { localBusinessSchema } from "./seo/schema";

export const metadata = {
  title: "Myanmar Top Swiftlet — Premium Swiftlet Farming Solutions",
  description:
    "Myanmar Top Swiftlet offers professional swiftlet farming, bird nest processing, and consultancy services across Myanmar. Premium setups, ethical harvesting, and proven ROI.",
  keywords: [
    "Myanmar Top Swiftlet",
    "swiftlet farming Myanmar",
    "bird nest business Myanmar",
    "edible bird nest Myanmar",
    "ငှက်သိုက်လုပ်ငန်း",
    "ဇီဝဇိုးငှက်မွေးမြူရေး",
  ],
  openGraph: {
    title: "Myanmar Top Swiftlet — Premium Swiftlet Farming Solutions",
    description:
      "Premium swiftlet house design, harvesting & processing, and training in Myanmar.",
    images: [
      "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFn6KiKmWp1YpUUWcqiYMTstDgamuw13kw25FbzNicH2hiCWnOxRtBqBxE4w5h76q_YCHLOhCjVY2CbYcQbJ7d-RnJgX0AoBLFfRtKsAi3EDMRqVr0zLRJBJi23jOYHdJwB9Mn9Tg=s1360-w1360-h1020-rw",
    ],
    siteName: "Myanmar Top Swiftlet",
  },
  twitter: {
    card: "summary_large_image",
    title: "Myanmar Top Swiftlet",
    description: "Premium swiftlet farming & bird nest solutions in Myanmar.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FAF9F6] text-[#2E2E2E]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
