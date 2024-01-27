import "../styles/globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Cardo } from "next/font/google";
import { Providers } from "@/redux/Provider";
import Script from "next/script";
import Header from "@/components/Header";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={`${cocosharp.variable} ${cardo.variable} pb-24`}>
        <Providers>
          <Header />
          {children}
        </Providers>
        <Script src="https://www.googletagmanager.com/gtag/js?id=GT-WRDF58Q" />
        <Script id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GT-WRDF58Q');
          `}
        </Script>
      </body>
    </html>
  );
}

const cardo = Cardo({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cardo",
});
const cocosharp = localFont({
  src: [
    {
      path: "../../public/fonts/Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/Bold.ttf",
      weight: "700",
    },
    {
      path: "../../public/fonts/ExtraLight.ttf",
      weight: "200",
    },
    {
      path: "../../public/fonts/Light.ttf",
      weight: "300",
    },
    {
      path: "../../public/fonts/LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/Regular.ttf",
      weight: "500",
    },
  ],
  variable: "--font-cocosharp",
});
export const metadata: Metadata = {
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ffffff",
  publisher: "wesiu.dev",
  manifest: "/manifest.json",
  keywords: [
    "sztuka online",
    "wystawa artystyczna",
    "platforma artystyczna",
    "galeria internetowa",
    "sztuka współczesna",
    "wystawianie prac",
    "twórczość artystyczna",
    "portfolio artysty",
    "prace artystyczne",
    "ekspozycja online",
    "sztuka cyfrowa",
    "galeria sztuki online",
    "kolekcja artystyczna",
    "artystyczna społeczność",
    "wirtualna wystawa",
  ],
  verification: {
    google: "google85185d3abec28326.html",
  },
  icons: [
    {
      url: "/favicons/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
    },
    {
      url: "/favicon.ico",
      sizes: "48x48",
      type: "image/x-icon",
    },
    {
      url: "/favicons/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      url: "/favicons/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
  title: "Quixy | Platforma Dla Artystów",
  description:
    "Artyści wystawiaja tutaj swoje prace. Zamów indywidualny projekt, lub zamów istniejące dzieło sztuki.",
  openGraph: {
    type: "website",
    url: "https://quixy.pl",
    title: "Quixy | Platforma Dla Artystów",
    description:
      "Artyści wystawiaja tutaj swoje prace. Zamów indywidualny projekt, lub zamów istniejące dzieło sztuki.",
    siteName: "Quixy",
  },
};
