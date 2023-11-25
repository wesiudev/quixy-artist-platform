import { ArtworkData } from "@/types";
import { polishToEnglish } from "../../../../../utils/polishToEnglish";
import Image from "next/image";
import Link from "next/link";

export default function Product({ product }: { product: ArtworkData }) {
  return (
    <Link
      href={`${process.env.NEXT_PUBLIC_SITE_URL}/shop/${product.category}/${product.slug}`}
      className="rounded-lg drop-shadow-md shadow-gray-500 aspect-square bg-gray-100 flex items-center justify-center flex-col"
    >
      <Image
        width={300}
        height={300}
        src={product.images[0]}
        alt={product.title}
        className="h-4/5 w-auto mx-auto object-cover"
      />
      <div className="mt-4 text-center">
        <h2 className="text-lg font-medium text-gray-900 truncate">
          {product.title}
        </h2>
        <p className="mt-1 text-gray-500 text-sm">{product.price}</p>
      </div>
    </Link>
  );
}
