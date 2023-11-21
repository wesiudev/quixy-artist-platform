import { getProducts } from "@/firebase";
import { ArtworkData } from "@/types";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const products = await getProducts();
  const secret = req.nextUrl.searchParams.get("secret");
  const category = req.nextUrl.searchParams.get("category");
  const slug = req.nextUrl.searchParams.get("slug");

  if (secret !== process.env.API_SECRET_KEY) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }
  const printProducts = products?.products.filter(
    (product: ArtworkData) => product.isPrint === true
  );
  const allProductsCombined = products?.products.concat(
    printProducts.map((product: ArtworkData) => ({
      ...product,
      category: "print",
      price: 150,
      title: `${product.title} - Druk`,
    }))
  );
  if (!category && !slug) {
    return NextResponse.json(allProductsCombined);
  } else {
    const product = allProductsCombined?.find(
      (product: ArtworkData) =>
        category === product.category && slug === product.slug
    );

    if (!product) {
      return new NextResponse("not found", { status: 404 });
    }
    if (product) {
      return NextResponse.json(product);
    }
  }
}
