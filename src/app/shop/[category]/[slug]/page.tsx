/* eslint-disable @next/next/no-img-element */

import { getShopProduct } from "@/lib/getShopProduct";
import { ArtworkData } from "@/types";
import { Layout } from "../../components/Canvas3D/components/dom/Layout";
import Canvas3D from "../../components/Canvas3D/components/Canvas3D";

export async function generateStaticParams() {
  const products = await getShopProduct();
  return products.products.map((product: ArtworkData) => ({
    category: product.category,
    slug: product.slug,
  }));
}

export const dynamicParams = false;

export default async function Page({ params }: { params: ArtworkData }) {
  const product: ArtworkData = await getShopProduct(
    params.category,
    params.slug
  );

  console.log(product);
  return (
    <div className="relative font-coco grid grid-cols-1 lg:grid-cols-2 lg:pb-0 mt-[66px] lg:px-[8vw] xl:px-[12vw] min-h-screen">
      <Layout>
        <Canvas3D image={product.images[0]} shape="square" />
      </Layout>

      <div className="w-[100%] relative z-[55] select-none mt-[50vh] lg:mt-[0vh] lg:absolute lg:right-0 lg:top-0 lg:w-[50vw] p-3 lg:p-6 xl:p-8 min-h-screen">
        <h2 className="text-zinc-800 drop-shadow-lg shadow-black text-4xl sm:text-3xl xl:text-4xl text-center lg:text-left font-bold">
          {product.title} <br />{" "}
          <span className="text-zinc-600 drop-shadow-lg shadow-black text-lg">
            ({product.dimensions})
          </span>
        </h2>
        <p></p>
      </div>
    </div>
  );
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
      title: `Sklep z Obrazami | ${returnMetadata(
        "title",
        product.category
      )} | BlackbellArt.com`,
      description: returnMetadata("description", product.category),
      openGraph: {
        type: "website",
        url: "https://blackbellart.com",
        title: `BlackbellArt.com | ${returnMetadata(
          "title",
          product.category
        )}`,
        description: returnMetadata("description", product.category),
        siteName: "BlackbellArt",
        images: [
          {
            url: "/favicons/favicon.ico",
          },
        ],
      },
    };
}
