import "../assets/globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

export const metadata: Metadata = {
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#1d1d1d",
  publisher: "Black Bell Tattoo & Art",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.png",
  },
  title:
    "Black Bell Tattoo & Art | Tatuaż Grudziądz i okolice | Sztuka na zamówienie",
  description:
    "Cześć! Wykonuję tatuaże na terenie Grudziądza i okolic. Posiadam małe studio w którym Cię ugoszczę. Szukasz sztuki na zamówienie? Mam niemałe portfolio artystyczne, które zobaczysz na mojej stronie.",
  openGraph: {
    type: "website",
    url: "https://blackbellart.com",
    title:
      "Black Bell Tattoo & Art | Tatuaż Grudziądz i okolice | Sztuka na zamówienie",
    description:
      "Cześć! Wykonuję tatuaże na terenie Grudziądza i okolic. Posiadam małe studio w którym Cię ugoszczę. Szukasz sztuki na zamówienie? Mam niemałe portfolio artystyczne, które zobaczysz na mojej stronie.",
    siteName: "Black Bell Tattoo & Art",
    images: [
      {
        url: "/favicon.png",
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
      <body className={`${cocosharp.variable} bg-[#1d1d1d] `}>{children}</body>
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
