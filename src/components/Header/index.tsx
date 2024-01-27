"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import FindArtist from "./FindArtist";
import FindWork from "./FindWork";
import AboutQuixy from "./AboutQuixy";
import { usePathname } from "next/navigation";

export default function Header() {
  const [hovered, setHovered] = useState(-1);
  const pathname = usePathname();
  const handleMouseEnter = (index: number) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(-1);
  };
  function isRegisterOrLogin() {
    if (pathname.includes("register")) {
      return true;
    } else if (pathname.includes("login")) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <>
      {isRegisterOrLogin() === false && (
        <div className="border-b bg-white border-gray-300 fixed left-0 top-0 w-screen flex justify-between px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-36 z-20">
          <Link className="py-5" href="/">
            <Image src="/assets/logo.png" width={80} height={80} alt="" />
          </Link>
          <div className="w-full flex items-center font-coco ml-8 justify-between">
            <div className="flex flex-row">
              <div
                onMouseEnter={() => handleMouseEnter(0)}
                onMouseLeave={handleMouseLeave}
                className="group"
              >
                <button className="group-hover:text-[#126b91] blueLink text-[14px] flex items-center py-5 px-3">
                  Znajdź artystę
                  <IoChevronDownOutline className="ml-[2px] mt-[1px] group-hover:rotate-180 duration-150" />
                </button>
                {hovered === 0 && <FindArtist />}
              </div>
              <div
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave}
                className="group"
              >
                <button className="group-hover:text-[#126b91] blueLink text-[14px] flex items-center py-5 px-3">
                  Znajdź zlecenia
                  <IoChevronDownOutline className="ml-[2px] mt-[1px] group-hover:rotate-180 duration-150" />
                </button>
                {hovered === 1 && <FindWork />}
              </div>
              <div
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={handleMouseLeave}
                className="group"
              >
                <button className="group-hover:text-[#126b91] blueLink text-[14px] flex items-center py-5 px-3">
                  Quixy?
                  <IoChevronDownOutline className="ml-[2px] mt-[1px] group-hover:rotate-180 duration-150" />
                </button>
                {hovered === 2 && <AboutQuixy />}
              </div>
              <button className="blueLink text-[14px] flex items-center group pl-3">
                Influencerzy
              </button>
            </div>
            <div className="font-coco">
              <Link href="/login" className="mr-6">
                Zaloguj się
              </Link>
              <Link href="/register" className="button">
                Załóż konto
              </Link>
            </div>
          </div>
        </div>
      )}
      {isRegisterOrLogin() === true && (
        <div className="fixed left-4 top-0 md:left-8 lg:left-12 xl:left-16 2xl:left-36 ">
          <Image
            src="/assets/logo.png"
            width={73}
            height={25}
            alt=""
            className="py-5"
          />
        </div>
      )}
    </>
  );
}
