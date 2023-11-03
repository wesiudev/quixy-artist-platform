import "../styles/globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Anton } from "next/font/google";
import { Providers } from "../../redux/Provider";
import Script from "next/script";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={`${cocosharp.variable} ${anton.variable} bg-[#1d1d1d]`}>
        <Providers>{children}</Providers>
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

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-anton",
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
  themeColor: "#1d1d1d",
  publisher: "Black Bell Tattoo & Art",
  manifest: "/manifest.json",
  keywords: [
    "Tatuaż Grudziadz",
    "Tatuaże Grudziadz",
    "Studio Tatuażu Grudziądz",
    "Tatuaż Grudziądz i okolice",
    "Tatuaż Grudziądz cennik",
    "Tatuaż Grudziądz opinie",
    "Tatuaż Grudziądz galeria",
    "Tatuaż Grudziądz instagram",
  ],
  verification: {
    google: "google85185d3abec28326.html",
  },
  icons: [
    {
      url: "/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png",
    },
    {
      url: "/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
    },
    {
      url: "/favicon.ico",
      sizes: "48x48",
      type: "image/x-icon",
    },
    {
      url: "/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      url: "/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
  title: "Studio Tatuażu Blackbell - Umów się na tatuaż - BlackbellArt.com",
  description:
    "Salon Tatuażu w Grudziądzu. Wejdź na stronę, aby przeglądać wzory, umówić się na tatuaż lub dowiedzieć się więcej.",
  openGraph: {
    type: "website",
    url: "https://blackbellart.com",
    title: "Studio Tatuażu Blackbell - Umów się na tatuaż - BlackbellArt.com",
    description:
      "Salon Tatuażu w Grudziądzu. Wejdź na stronę, aby przeglądać wzory, umówić się na tatuaż lub dowiedzieć się więcej.",
    siteName: "Black Bell Tattoo & Art",
    images: [
      {
        type: "image/x-icon",
        url: "/favicon.ico",
      },
      {
        url: "/favicon-16x16.png",

        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",

        type: "image/png",
      },
      {
        url: "/favicon.ico",

        type: "image/x-icon",
      },
      {
        url: "/android-chrome-192x192.png",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        type: "image/png",
      },
    ],
  },
};
