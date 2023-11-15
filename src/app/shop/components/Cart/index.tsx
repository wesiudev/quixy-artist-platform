"use client";

import { removeFromCart, setCart } from "@/redux/slices/shopSlice";
import { ArtworkData } from "@/types";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

/* eslint-disable @next/next/no-img-element */

export default function Cart({
  isCartOpen,
  setCartOpen,
}: {
  isCartOpen: boolean;
  setCartOpen: (isCartOpen: boolean) => void;
}) {
  const dispatch = useDispatch();

  const cart = useSelector((state: any) => state.shop.cart);
  // useEffect(() => {
  //   const cart = localStorage.getItem("cart");
  //   if (cart) {
  //     dispatch(setCart(JSON.parse(cart)));
  //   }
  // }, [cart]);
  return (
    <>
      <button
        onClick={() => setCartOpen(!isCartOpen)}
        className={`hover:scale-125 duration-200  flex flex-row items-center group  p-6 pt-12 pl-12  bg-purple-400 rounded-tl-full  fixed bottom-0 right-0  z-[150]`}
      >
        <div className="absolute rounded-full p-1 h-max w-auto bg-white text-black text-xl  right-3 bottom-3  aspect-square">
          {cart?.length}
        </div>
        <FaShoppingCart className="mr-2 text-5xl  text-white " />
      </button>

      {isCartOpen && (
        <div
          className="max-h-[76vh] overflow-y-scroll borderBar border border-gray-600 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8 h-max w-[95vw] lg:w-max fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]"
          aria-modal="true"
          role="dialog"
        >
          <div className="flex flex-col items-center justify-center w-full">
            {!cart.length && (
              <>
                <FaShoppingCart className="text-7xl text-gray-400 mt-12" />
                <p className="text-gray-400 mt-5 text-center">
                  Twój koszyk jest pusty...
                </p>
              </>
            )}
            {cart?.length && (
              <div className="grid grid-cols-1 mt-16 text-black w-max">
                {cart?.map((item: ArtworkData, i: any) => (
                  <div key={i}>
                    <div className="flex flex-row items-start justify-between bg-gray-200 w-max ">
                      <div className="flex flex-row  w-max px-2">
                        <div className="aspect-square w-16 h-16 my-auto">
                          <img
                            src={item?.images[0]}
                            alt=""
                            className="w-full h-full object-cover my-auto"
                          />
                        </div>
                        <div className="pl-2">
                          <h3 className="text-lg font-bold">{item.title} </h3>
                          <p className="text-gray-500 text-sm">
                            {item.dimensions}
                          </p>
                          <button
                            onClick={() => {
                              dispatch(removeFromCart(item));
                            }}
                            className="text-sm text-gray-500 underline hover:text-gray-600"
                          >
                            usuń
                          </button>
                        </div>
                      </div>
                      <p className="font-bold text-lg px-2">{item.price}zł</p>
                    </div>
                    <hr className="border-gray-300 my-4" />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="mt-8 space-y-6 relative">
            <div className="space-y-4 text-center">
              <button
                onClick={() => {
                  setCartOpen(false), redirect("/checkout");
                }}
                disabled={!cart.length}
                className="disabled:cursor-not-allowed hover:disabled:blur-sm duration-200 block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-900 w-full"
              >
                Do płatności
              </button>
              <button
                onClick={() => setCartOpen(false)}
                className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
              >
                Kontynuuj zakupy
              </button>
            </div>
          </div>
          <CartNavigation setCartOpen={setCartOpen} />
        </div>
      )}
    </>
  );
}

const CartNavigation = ({ setCartOpen }: { setCartOpen: Function }) => {
  return (
    <>
      <span className="text-black absolute left-4 top-4 text-lg">
        Twój koszyk
      </span>
      <button
        onClick={() => setCartOpen(false)}
        className="absolute end-4 top-4 text-gray-600 transition hover:scale-110"
      >
        <span className="sr-only">Close cart</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </>
  );
};
