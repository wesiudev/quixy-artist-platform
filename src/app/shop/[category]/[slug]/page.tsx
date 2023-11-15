/* eslint-disable @next/next/no-img-element */

import { getShopProduct } from "@/lib/getShopProduct";
import { ArtworkData } from "@/types";
import { Layout } from "../../components/Canvas3D/components/dom/Layout";
import Canvas3D from "../../components/Canvas3D/components/Canvas3D";
import ShopFooter from "../../components/ShopFooter";
import Orders from "../../components/Orders";
import Image from "next/image";
import AddToCartBtn from "./AddToCartBtn";
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

  return (
    <div className="relative font-coco grid grid-cols-1 lg:grid-cols-2 lg:pb-0 mt-[66px] min-h-screen">
      <Layout>
        <Canvas3D image={product.images[0]} shape={product.alignment} />
      </Layout>

      <div className="bg-white w-[100%] relative z-[55] select-none mt-[50vh] lg:mt-[0vh] lg:absolute lg:right-0 lg:top-0 lg:w-[50vw] min-h-screen">
        <div className="p-3 lg:p-6 xl:p-8 ">
          <h2 className="text-zinc-800 drop-shadow-lg shadow-black text-xl sm:text-3xl xl:text-4xl text-center lg:text-left font-bold flex flex-row items-center">
            {product.title}
            <span className="text-black bg-purple-300 p-2 rounded-xl drop-shadow-lg shadow-black text-lg ml-3">
              {product.price}zł
            </span>
          </h2>
          <span className="text-zinc-600 drop-shadow-lg shadow-black text-lg font-bold">
            ({product.dimensions})
          </span>
          <p className="text-zinc-700 text-lg sm:text-base xl:text-lg text-left my-3">
            {product.description}
          </p>
          <div className="grid grid-cols-3 lg:grid-cols-5 gap-2 mb-3">
            {product.images.map((image: any, i: any) => (
              <div key={i} className="aspect-square">
                <Image
                  src={image}
                  width={1024}
                  height={1024}
                  alt=""
                  className="w-full h-full object-cover drop-shadow-lg shadow-black"
                />
              </div>
            ))}
          </div>
          <span className="text-zinc-600 drop-shadow-lg shadow-black text-lg">
            Artysta: <strong>{product.artist}</strong>
          </span>
          <br />
          <span className="text-zinc-600 drop-shadow-lg shadow-black text-lg">
            Technika: <strong>{product.medium}</strong>
          </span>
          <br />
          <span className="text-zinc-600 drop-shadow-lg shadow-black text-lg">
            Rok produkcji: <strong>{product.year}</strong>
          </span>

          <div className="flex justify-center lg:justify-start mt-5">
            <AddToCartBtn product={product} />
          </div>
        </div>
        <Orders />
        <ShopFooter isProductSlug={true} />
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
          return "Obrazy na płótnie";
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
      keywords: product.keywords,
      title: `Sklep z Obrazami | ${returnMetadata(
        "title",
        product.category
      )} | ${product.title}`,
      description: returnMetadata("description", product.category),
      openGraph: {
        keywords: product.keywords,
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
