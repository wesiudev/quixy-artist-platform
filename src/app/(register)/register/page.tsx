import Register from "./Register";
import type { Metadata } from "next";
export default async function Page({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return <Register referer={searchParams?.ref} />;
}

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
