import { getShopProduct } from "@/lib/getShopProduct";

import React from "react";
import ShopHeader from "./components/ShopHeader";
import Products from "./components/Products";
import Orders from "./components/Orders";

export default async function Shop() {
  const { products } = await getShopProduct();

  return (
    <div className="bg-white flex flex-col justify-center w-full">
      <ShopHeader />
      <Products products={products} />
      <Orders />
    </div>
  );
}
