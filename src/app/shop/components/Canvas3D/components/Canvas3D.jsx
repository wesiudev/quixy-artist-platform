"use client";
import dynamic from "next/dynamic";
import React from "react";
const Blob = dynamic(() => import("./canvas/Shapes").then((mod) => mod.Blob), {
  ssr: false,
});
const View = dynamic(
  () => import("../components/canvas/View").then((mod) => mod.View),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-96 w-full flex-col items-center justify-center">
        <svg
          className="-ml-1 mr-3 h-5 w-5 animate-spin text-black"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>
    ),
  }
);
const Common = dynamic(
  () => import("../components/canvas/View").then((mod) => mod.Common),
  { ssr: false }
);

export default function Canvas3D({ image, shape }) {
  return (
    <div className="w-full lg:w-1/2 z-50 bg-white overflow-x-hidden ">
      <View
        orbit
        className="!h-[50vh] lg:!h-[100vh] block lg:fixed  left-0 top-[91px] lg:top-[66px] w-full lg:w-1/2 bg-gradient-to-br from-purple-300 via-gray-400 to-zinc-400
        rounded-b-xl lg:rounded-none"
      >
        <React.Suspense fallback={null}>
          <Blob image={image} shape={shape} />
        </React.Suspense>
        <Common />
      </View>
    </div>
  );
}
