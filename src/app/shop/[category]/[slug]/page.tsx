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
          return "Kup oryginalne obrazy na płótnie: obrazy olejne, portrety i abstrakcje. Kup unikalny obraz już dziś.";
        }
        if (category === "sticker") {
          return "Kup naklejki na ścianę od prawdziwego artysty – wyraz twórczej pasji. Te naklejki to starannie zaprojektowane dzieła.";
        }
        if (category === "print") {
          return "Kup unikalne obrazy na zamówienie od artystki. Oryginalne obrazy olejne, portrety i abstrakcje";
        }
        if (category === "inspiration") {
          return "Kup malowany obraz na płótnie na zamówienie. Indywidualne projekty, które oddają Twoją wyjątkową wizję. Zamów swoje dzieło już dziś!";
        }
        break;
      default:
        break;
    }
  }
  if (product)
    return {
      title: `BlackbellArt.com | Sklep Z Obrazami | ${returnMetadata(
        "title",
        product.category
      )} ${product?.title}`,
      description: ` ${returnMetadata("description", product.category)} ${
        product?.title
      }`,
      openGraph: {
        type: "website",
        url: "https://blackbellart.com",
        title: `BlackbellArt.com | ${returnMetadata(
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

export default async function Page({ params }: { params: ArtworkData }) {
  const product = await getShopProduct(params.category, params.slug);

  if (product) return <></>;
}
