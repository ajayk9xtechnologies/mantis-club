import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/nav/Footer";
import Header from "./components/nav/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Best Nightclub in Dubai DIFC | Bollywood Late Night Dance Club - Mantis Dubai",
  description:
    "Experience the best nightclub in Dubai DIFC featuring Bollywood vibes, late night parties, top DJs and dance floors. One of the top clubs in Dubai for nightlife lovers.",

  /* ✅ FAVICONS (CORRECT PLACE) */
  icons: {
    icon: [
      { url: "/favicon-16x16.webp", sizes: "16x16", type: "image/webp" },
      { url: "/favicon-32x32.webp", sizes: "32x32", type: "image/webp" },
    ],
    apple: "/apple-touch-icon.webp",
    shortcut: "/favicon.ico",
  },

  /* ✅ OPEN GRAPH */
  openGraph: {
    title:
      "Best Nightclub in Dubai DIFC | Bollywood Late Night Dance Club - Mantis Dubai",
    description:
      "Experience the best nightclub in Dubai DIFC featuring Bollywood vibes, late night parties, top DJs and dance floors.",
    url: "https://www.mantisdubai.com/",
    siteName: "Mantis Dubai",
    images: [
      {
        url: "https://www.mantisdubai.com/og-mantis.jpg", // ✅ 1200x630 banner
        width: 1200,
        height: 630,
        alt: "Mantis Dubai – Best Nightclub in DIFC",
      },
    ],
    locale: "en_AE",
    type: "website",
  },

  /* ✅ TWITTER */
  twitter: {
    card: "summary_large_image",
    title:
      "Best Nightclub in Dubai DIFC | Bollywood Late Night Dance Club - Mantis Dubai",
    description:
      "Experience the best nightclub in Dubai DIFC featuring Bollywood vibes, late night parties, top DJs and dance floors.",
    images: ["https://www.mantisdubai.com/og-mantis.jpg"],
  },

  /* ✅ CANONICAL */
  alternates: {
    canonical: "https://www.mantisdubai.com/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
          <Header />
          {children}
          <Footer />
    
      </body>
    </html>
  );
}
