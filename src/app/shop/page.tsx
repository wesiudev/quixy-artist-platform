import { getShopProduct } from "@/lib/getShopProduct";
import Link from "next/link";

import React from "react";
import { FaEtsy, FaGithub, FaInstagram } from "react-icons/fa";

export default async function Shop() {
  const products = await getShopProduct();

  return (
    <div className="min-h-screen bg-green-300 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="sm:flex sm:items-start sm:justify-between">
            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <svg
                className="h-6 w-6 text-purple-600"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </div>

            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Właśnie pracujemy nad sklepem!
              </h3>
              <div className="mt-2">
                <p className="text-sm leading-5 text-gray-500">
                  Wkrótce będzie można kupić tutaj obrazy, kamienie, naklejki,
                  druki i inne dzieła sztuki.
                </p>
              </div>
              <div className="mt-2">
                <p className="text-sm leading-5 text-gray-500">
                  <span className="font-light">Zobacz:</span>
                  <Link
                    target="_blank"
                    href="https://www.etsy.com/pl/shop/BlackbellArtStudio"
                    className="flex flex-row items-center hover:text-[#8f26f3] mt-3"
                  >
                    <FaEtsy className="w-8 h-8 mr-3" />
                    <span className="group-hover:text-[#8f26f3]">
                      Sklep Etsy
                    </span>
                  </Link>
                  <Link
                    target="_blank"
                    href="https://www.instagram.com/blackbell.ce/"
                    className="flex flex-row items-center hover:text-[#8f26f3] mt-3"
                  >
                    <FaInstagram className="w-8 h-8 mr-3" />
                    <span className="group-hover:text-[#8f26f3]">
                      Sztuka na Instagramie
                    </span>
                  </Link>
                  <Link
                    target="_blank"
                    href="https://www.quixy.pl"
                    className="flex flex-row items-center hover:text-[#8f26f3] mt-3 text-[#8f26f3]"
                  >
                    <FaGithub className="w-8 h-8 mr-3" />
                    <span className="group-hover:text-[#8f26f3]">
                      Developer: Quixy
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
