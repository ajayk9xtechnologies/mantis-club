import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/nav/Footer";
import Header from "./components/nav/Header"
import LenisProvider from "./components/Lenis";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Best Nightclub in Dubai DIFC | Bollywood Late Night Dance Club - Mantis Dubai",
  description:
    "Experience the best nightclub in Dubai DIFC featuring Bollywood vibes, late night parties, top DJs and dance floors. One of the top clubs in Dubai for nightlife lovers.",
  openGraph: {
    title: "Best Nightclub in Dubai DIFC | Bollywood Late Night Dance Club - Mantis Dubai",
    description:
      "Experience the best nightclub in Dubai DIFC featuring Bollywood vibes, late night parties, top DJs and dance floors. One of the top clubs in Dubai for nightlife lovers.",
    url: "https://www.mantisdubai.com/", // Replace with your actual domain
    siteName: "Mantis Dubai",
    images: [
      {
        url: "https://www.mantisdubai.com/og-image.jpg", // Recommended: create a 1200x630 OG image
        width: 1200,
        height: 630,
        alt: "Mantis Dubai - Best Nightclub in DIFC",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Nightclub in Dubai DIFC | Bollywood Late Night Dance Club - Mantis Dubai",
    description:
      "Experience the best nightclub in Dubai DIFC featuring Bollywood vibes, late night parties, top DJs and dance floors.",
    images: ["https://www.mantisdubai.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.mantisdubai.com/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        <LenisProvider>
          <Header />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
