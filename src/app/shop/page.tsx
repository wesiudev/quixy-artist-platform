import { getShopProduct } from "@/lib/getShopProduct";

export default async function Shop() {
  const products = await getShopProduct();
  console.log(products);

  return <div></div>;
}
