import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Footer from './../components/Footer';
import Header from './../components/Header';

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter", 
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-plex-sans",
});

export const metadata: Metadata = {
  title: "Rodsone Bacela - Portfolio",
  description: "Rodsone Bacela personal portfolio",
  keywords: [
    "portfolio",
    "rodsone bacela",
    "web developer",
    "react",
    "nextjs",
    "javascript",
    "Rodsone Bacela",
    "Rodsone",
  ],
  authors: [{ name: "Rodsone Bacela" }],
  openGraph: {
    title: "Rodsone Bacela - Portfolio",
    description:
      "Desenvolvedor de software frontend com experiência em React e Next.js. Explore meu portfólio de projetos e descubra como posso ajudar a construir interfaces web incríveis.",
    url: "https://rodson-me.vercel.app",
    siteName: "Rodsone Bacela Portfolio",
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
    <html lang="en" className="h-full">
      <body
        className={`min-h-screen flex flex-col ${inter.variable} ${plexSans.variable} antialiased`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
