"use client";
import Link from "next/link";
import { useState } from "react";
import { FaArtstation, FaHome } from "react-icons/fa";

export default function Navigation() {
  const [isMenuShow, setMenuShow] = useState(false);
  return (
    <div className="fixed top-0 left-0 z-[51]  border-b-2 border-[#606060] w-screen flex flex-row items-center justify-between px-3 bg-[#303030]">
      <h1 className="text-white text-4xl   relative drop-shadow-md shadow-black font-anton p-3">
        Tatuaże blackbell
      </h1>
      <button
        className={`lg:hidden relative !z-[2000] menu ${
          isMenuShow ? "opened" : ""
        }`}
        onClick={() => setMenuShow(!isMenuShow)}
        aria-expanded={isMenuShow}
        aria-label="Main Menu"
      >
        <svg width="65" height="65" viewBox="0 0 100 100">
          <path
            className="lineWhite line1"
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path className="lineWhite line2" d="M 20,50 H 80" />
          <path
            className="lineWhite line3"
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg>
      </button>
      <div
        className={`font-coco fixed right-0 top-0 h-screen lg:flex lg:h-max justify-center items-center flex flex-col space-y-6 lg:space-y-0 lg:flex-row   w-[100vw] lg:w-[60vw]  lg:justify-end lg:items-end p-3 lg:pr-12 lg:pl-0 text-5xl lg:text-3xl lg:space-x-6 text-white
            ${isMenuShow ? "z-[55] bg-[#303030]" : "-z-[25] lg:z-[55]"}
            `}
      >
        <Link
          href="/"
          className={`${
            isMenuShow
              ? "scale-100 duration-500 delay-300"
              : "scale-0 lg:scale-100"
          } flex flex-row items-center hover:text-purple-300 lg:duration-150 lg:delay-0`}
        >
          <FaHome className="mr-2 !text-purple-300" />
          Strona główna
        </Link>
        <Link
          href="/blog"
          className={`${
            isMenuShow
              ? "scale-100 duration-300 delay-500"
              : "scale-0 lg:scale-100"
          } flex flex-row items-center hover:text-yellow-300 lg:duration-150 lg:delay-0`}
        >
          <FaArtstation className="mr-2 !text-yellow-300" />
          Blog
        </Link>
      </div>
    </div>
  );
}
