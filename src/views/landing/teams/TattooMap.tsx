"use client";
import { Tattoo } from "@/types";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";

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
  const [tattooList, setTattooList] = useState<any>([]);
  const [hovered, setHovered] = useState(-1);
  useEffect(() => {
    if (tattooList.length === 0) {
      fetch(`/api/tattoo`)
        .then((res) => res.json())
        .then((data) => {
          setTattooList(data);
        });
    }
  }, []);
  return (
    <>
      {isOpen && (
        <div
          className={`w-full overflow-x-hidden select-none lg:rounded-xl fixed duration-500 h-screen z-[99999] delay-500 -translate-x-[50%]  left-[50%] bg-zinc-800 py-24 md:py-6 md:p-6 lg:p-12  scrollbar overflow-y-scroll font-coco ${
            animate
              ? "-translate-y-[50%] scale-100 top-[50%]"
              : "-translate-y-[20%] scale-50 top-[100%]"
          }`}
        >
          {" "}
          <div className="w-[90vw] lg:w-[80vw] bg-zinc-800 2xl:w-[70vw] mx-auto relative">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-3xl flex flex-row items-center mb-12 px-3"
            >
              <FaArrowLeft className="mr-3" /> Wyjście
            </button>
            <h1 className="text-purple-500 font-coco text-4xl lg:text-5xl font-bold relative px-3 drop-shadow-md shadow-black">
              Tatuaże blackbell
            </h1>

            <h2 className="text-white italic font-coco  text-sm font-light px-3 text-left mt-6 w-[90%]  drop-shadow-md shadow-black">
              Każdy z tych tatuaży jest dostępny tylko raz. Po wybraniu przez
              Ciebie konkretnego projektu, zostaje on niezwłocznie usunięty z
              naszej listy, gwarantując, że będziesz jedyną osobą noszącą ten
              wyjątkowy wzór. To jest szansa, którą warto wykorzystać –
              wybierając jeden z tych tatuaży, otrzymujesz coś więcej niż tylko
              obraz na skórze. Otrzymujesz unikalne dzieło sztuki, które wyraża
              Twoją indywidualność i styl, a jednocześnie zostanie z Tobą na
              zawsze. Zdecyduj się już teraz, zanim ktoś inny zdąży zrobić ten
              wybór przed Tobą!
            </h2>
            <div className="flex flex-col lg:grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 mt-24 min-h-screen gap-3 md:px-3">
              {tattooList?.tattoos?.map((item: Tattoo, i: any) => (
                <div
                  onMouseEnter={() => item.workSrc !== "none" && setHovered(i)}
                  onMouseLeave={() => setHovered(-1)}
                  key={i}
                  className="h-[450px] relative z-[5000] flex items-center justify-center bg-white py-6  border-2 border-purple-500"
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
                        : "opacity-0 -z-[2000]"
                    }`}
                  >
                    {item.workSrc !== "none" && (
                      <Image
                        src={item.workSrc}
                        width={512}
                        height={512}
                        alt=""
                        className={`h-full w-auto object-fit duration-1000`}
                      />
                    )}
                  </div>
                  <Image
                    src={item.projectSrc}
                    width={512}
                    height={512}
                    alt=""
                    className={`h-full w-auto object-fit delay-1000 duration-1000 ${
                      hovered === i ? "opacity-0" : "opacity-100"
                    }`}
                  />
                </div>
              ))}
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-3xl flex flex-row items-center mt-12 px-3"
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
