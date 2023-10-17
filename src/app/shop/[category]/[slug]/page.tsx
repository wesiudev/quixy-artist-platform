/* eslint-disable @next/next/no-img-element */

import { getShopProduct } from "@/lib/getShopProduct";
import { ArtworkData } from "@/types";

export async function generateStaticParams() {
  const products = await getShopProduct();
  return products.products.map((product: ArtworkData) => ({
    category: product.category,
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: { params: any }) {
  // fetch data
  const product = await getShopProduct(params.category, params.slug);
  function returnMetadata(property: string, category: string) {
    switch (property) {
      case "title":
        if (category === "artwork") {
          return "Obraz na płótnie";
        }
        if (category === "sticker") {
          return "Naklejka na ściane";
        }
        if (category === "print") {
          return "Obraz na zamówienie";
        }
        if (category === "inspiration") {
          return "Malowanie obrazów na zamówienie";
        }
        break;
      case "description":
        if (category === "artwork") {
          return "Oryginalne obrazy na płótnie: obrazy olejne, portrety i abstrakcje. Ręcznie malowane ze zdjęć, dostępne także kopie i obrazy na płótnie. Kup unikalny obraz już dziś.";
        }
        if (category === "sticker") {
          return "Naklejki na ścianę od prawdziwego artysty – wyraz twórczej pasji. Te naklejki to starannie zaprojektowane dzieła. Wyraź swoją kreatywność z naszymi wyjątkowymi naklejkami. Sprawdź kolekcję już dziś!";
        }
        if (category === "print") {
          return "Unikalne obrazy na zamówienie od artystki. Oryginalne obrazy olejne, portrety i abstrakcje. Ręcznie malowane ze zdjęć, dostępne także kopie i obrazy na płótnie.";
        }
        if (category === "inspiration") {
          return "Malowany obraz na płótnie na zamówienie, który jest źródłem inspiracji. Twój własny obraz na płótnie. Indywidualne projekty, które oddają Twoją wyjątkową wizję. Odkryj proces tworzenia i zamów swoje dzieło już dziś!";
        }
        break;
      default:
        break;
    }
  }
  if (product)
    return {
      title: `Blackbell | Sklep Z Obrazami | ${returnMetadata(
        "title",
        product.category
      )} ${product?.title}`,
      description: ` ${returnMetadata("description", product.category)} ${
        product?.title
      }`,
      openGraph: {
        type: "website",
        url: "https://blackbellart.com",
        title: `Blackbell Sklep Z Obrazami | ${returnMetadata(
          "title",
          product.category
        )} ${product?.title}`,
        description: ` ${returnMetadata("description", product.category)} ${
          product?.title
        }`,
        siteName: "BlackbellArt",
        images: [
          {
            url: "/favicon.ico",
          },
        ],
      },
    };
}

export const dynamicParams = false;

export default async function Page({ params }: { params: any }) {
  const product = await getShopProduct(params.category, params.slug);

  if (product) return <></>;
}
