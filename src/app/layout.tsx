import "../assets/globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Providers } from "../../redux/Provider";
import Script from "next/script";

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
  title: "Tatuaż Grudziądz i okolice | Sztuka na zamówienie | BlackbellArt.com",
  description:
    "Cześć! Wykonuję tatuaże na terenie Grudziądza i okolic. Posiadam małe studio w którym Cię ugoszczę. Szukasz sztuki na zamówienie? Mam niemałe portfolio artystyczne, które zobaczysz na mojej stronie.",
  openGraph: {
    type: "website",
    url: "https://blackbellart.com",
    title:
      "Tatuaż Grudziądz i okolice | Sztuka na zamówienie | BlackbellArt.com",
    description:
      "Cześć! Wykonuję tatuaże na terenie Grudziądza i okolic. Posiadam małe studio w którym Cię ugoszczę. Szukasz sztuki na zamówienie? Mam niemałe portfolio artystyczne, które zobaczysz na mojej stronie.",
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
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${cocosharp.variable} bg-[#1d1d1d]`}>
        <Providers>{children}</Providers>

        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=G-1CSY7FWMBY`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer', 'G-1CSY7FWMBY');
            `,
          }}
        />
      </body>
    </html>
  );
}
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
