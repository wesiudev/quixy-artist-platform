"use client";
import { useState, useEffect } from "react";
import { FaCookie, FaCookieBite } from "react-icons/fa";

const TattooMap = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <>
      <div
        className={`rounded-xl fixed duration-500 h-[70vh] delay-500 -translate-x-[50%]  left-[50%]  bg-white text-black p-6 lg:p-12 z-[5000] prose lg:prose-xl w-screen scrollbar overflow-y-scroll font-coco ${
          isOpen
            ? "-translate-y-[50%] scale-100 top-[50%]"
            : "-translate-y-[20%] scale-50 top-[100%]"
        }`}
      >
        <h1>Tatuaże blackbell</h1>
      </div>
    </>
  );
};

export default TattooMap;
