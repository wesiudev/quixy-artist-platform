"use client";

import { useDispatch, useSelector } from "react-redux";
import { prepareCart, setCart } from "@/redux/slices/shopSlice";
import { ArtworkData } from "@/types";
import { useEffect } from "react";

export default function AddToCartBtn({ product }: { product: ArtworkData }) {
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.shop.cart);
  useEffect(() => {
    dispatch(prepareCart());
  }, []);
  const handleAddToCart = () => {
    localStorage.setItem("cart", JSON.stringify(product));
    dispatch(setCart(product));
  };

  const itemIndex = cart?.findIndex(
    (item: ArtworkData) => item.title === product.title
  );
  const itemInCart = itemIndex !== -1;

  return (
    <button
      onClick={handleAddToCart}
      className={`bg-zinc-500 hover:bg-zinc-600 text-white py-3 px-8 text-lg sm:text-base xl:text-lg font-bold uppercase tracking-wider ${
        itemInCart ? "duration-300 opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={itemInCart}
    >
      {itemInCart ? "Dodano do koszyka" : "Dodaj do koszyka"}
    </button>
  );
}
