"use client";
import { Tattoo } from "@/types";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useSelector } from "react-redux";

const TattooMap = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Function;
}) => {
  const [animate, setAnimate] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setAnimate(true);
      }, 1000);
    } else {
      setTimeout(() => {
        setAnimate(false);
      }, 1000);
    }
  }, [isOpen]);
  const [hovered, setHovered] = useState(-1);
  const tattooList = useSelector((state: any) => state.tattoos);
  return (
    <>
      {isOpen && (
        <div
          className={`w-full overflow-x-hidden select-none lg:rounded-xl fixed duration-500 h-screen z-[99999] delay-500 -translate-x-[50%]  left-[50%] bg-zinc-800 py-12 md:py-6 md:p-6 lg:p-12  scrollbar overflow-y-scroll font-coco ${
            animate
              ? "-translate-y-[50%] scale-100 top-[50%]"
              : "-translate-y-[20%] scale-50 top-[100%]"
          }`}
        >
          {" "}
          <div className="w-[90vw] lg:w-[80vw] bg-zinc-800 2xl:w-[70vw] mx-auto relative">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-3xl flex flex-row items-center mb-6"
            >
              <FaArrowLeft className="mr-3" /> Wyjście
            </button>
            <h1 className="text-purple-500 font-coco text-3xl md:text-4xl lg:text-5xl font-bold relative drop-shadow-md shadow-black">
              Tatuaże blackbell
            </h1>

            <h2 className="text-white italic font-coco  text-base font-light  text-left mt-2 w-[90%]  drop-shadow-md shadow-black">
              Każdy z tych tatuaży jest dostępny{" "}
              <span className="font-bold">tylko raz</span>. Po wybraniu przez
              Ciebie konkretnego projektu, zostaje on{" "}
              <span className="font-bold">
                niezwłocznie usunięty z tej listy
              </span>
              , gwarantując, że będziesz jedyną osobą noszącą ten wyjątkowy
              wzór. Wybierając jeden z tych tatuaży, otrzymujesz coś więcej niż
              tylko obraz na skórze. Zdecyduj się już teraz, zanim ktoś inny
              zdąży zrobić ten wybór przed Tobą!
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3  mt-5 min-h-screen gap-3 ">
              {tattooList?.tattoos?.map((item: Tattoo, i: any) => (
                <div
                  onMouseEnter={() => item.workSrc !== "none" && setHovered(i)}
                  onMouseLeave={() => setHovered(-1)}
                  key={i}
                  className="aspect-square relative z-[5000] flex items-center justify-center bg-white py-6 border-2 border-purple-500"
                >
                  <div className="z-[99999] absolute top-6 left-6 w-max h-max opacity-50 text-2xl">
                    {i + 1}
                  </div>
                  <div
                    className={`${
                      item.workSrc === "none"
                        ? "text-green-500"
                        : "text-red-500"
                    } z-[99999] absolute bottom-6 left-6 w-max h-max opacity-50 `}
                  >
                    {item.workSrc === "none" ? "Dostępny" : "Niedostępny"}
                  </div>
                  <div
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(-1)}
                    className={`absolute z-[99999] bottom-6 right-6 w-max h-max opacity-50`}
                  >
                    {item.workSrc !== "none" && "Zobacz wykonanie"}
                  </div>
                  <div
                    className={`absolute left-0 top-0 w-full h-full bg-white flex items-center justify-center p-6 duration-[2000ms] ${
                      hovered === i
                        ? "opacity-100 -z-[0]"
                        : "opacity-10 -z-[2000]"
                    }`}
                  >
                    {item.workSrc !== "none" && (
                      <Image
                        style={{
                          borderRadius: "50%",
                          boxShadow: "0 0 2px 5px #000000",
                        }}
                        src={item.workSrc}
                        width={512}
                        height={512}
                        alt=""
                        className={`group-hover:!rounded-none w-auto h-full object-fit duration-1000 ${
                          hovered === i ? "!rounded-none" : ""
                        }`}
                      />
                    )}
                  </div>
                  <Image
                    style={{
                      borderRadius: "50%",
                      boxShadow: "0 0 2px 6px #000000",
                    }}
                    src={item.projectSrc}
                    width={512}
                    height={512}
                    alt=""
                    className={`group-hover:!rounded-none w-auto h-full object-fit delay-500 duration-1000  ${
                      hovered === i
                        ? "opacity-0 !rounded-none !p-12"
                        : "opacity-100 !p-0"
                    }`}
                  />
                </div>
              ))}
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-3xl flex flex-row items-center mt-12"
            >
              <FaArrowLeft className="mr-3" /> Wyjście
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TattooMap;
