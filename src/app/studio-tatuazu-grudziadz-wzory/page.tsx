import { Metadata } from "next";
import TattooContent from "./TattooContent";
import didYouKnowArray from "./[title]/didyouknow.json";

export default async function Page() {
  const tattoos = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/tattoo`,
    { next: { revalidate: 180 } }
  ).then((res) => res.json());

  return (
    <>
      <div
        className={`w-full overflow-x-hidden duration-500 h-screen bg-white   overflow-y-scroll font-coco`}
      >
        <TattooContent
          tattoos={tattoos.tattoos}
          array={didYouKnowArray.didYouKnowArray}
        />
      </div>
    </>
  );
}
export const metadata: Metadata = {
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#1d1d1d",
  publisher: "Black Bell Tattoo & Art",
  manifest: "/manifest.json",
  keywords: [
    "Najlepsi artyści tatuażu w Grudziądzu",
    "Projekt tatuażu Grudziądz",
    "Profesjonalne studio tatuażu Grudziądz",
    "Unikalne tatuaże Grudziądz",
    "Salon tatuażu Grudziądz",
    "Tatuaż na zamówienie Grudziądz",
    "Sztuka tatuażu Grudziądz",
    "Ceny tatuażu Grudziądz",
    "Porady dotyczące pielęgnacji tatuażu",
    "Umówienie się na tatuaż Grudziądz",
    "Bezpieczny tatuaż Grudziądz",
    "Tatuaż na nadgarstku Grudziądz",
    "Kolorowe tatuaże Grudziądz",
    "Tatuaż dla kobiet Grudziądz",
    "Tatuaż dla mężczyzn Grudziądz",
    "Tatuaż z cytatem Grudziądz",
    "Mały tatuaż Grudziądz",
    "Tatuaż na przedramieniu Grudziądz",
    "Tatuaż dla par Grudziądz",
    "Tatuaż religijny Grudziądz",
  ],
  verification: {
    google: "google85185d3abec28326.html",
  },
  icons: [
    {
      url: "/favicons/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png",
    },
    {
      url: "/favicons/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
    },
    {
      url: "/favicons/favicon.ico",
      sizes: "48x48",
      type: "image/x-icon",
    },
  ],
  title: "Studio Tatuażu Blackbell - Przeglądaj Wzory - BlackbellArt.com",
  description:
    "Przeglądaj inspirujące wzory tatuaży autostwa Studia Tatuażu BlackbellArt w Grudziądzu. Umów się na tatuaż na stronie BlackbellArt.com",
  openGraph: {
    type: "website",
    url: "https://blackbellart.com",
    title: "Studio Tatuażu Blackbell - Umów się na tatuaż - BlackbellArt.com",
    description:
      "Przeglądaj inspirujące wzory tatuaży autostwa Studia Tatuażu BlackbellArt w Grudziądzu. Umów się na tatuaż na stronie BlackbellArt.com",
    siteName: "Black Bell Tattoo & Art",
    images: [
      {
        type: "image/x-icon",
        url: "/favicons/favicon.ico",
      },
    ],
  },
};
