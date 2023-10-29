"use client";
import { Navigation, Pagination, EffectCoverflow } from "swiper";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Slider = () => {
  const imgSrc = "/images/slider";

  return (
    <div className="mt-12">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="py-24 lg:py-48"
      >
        <SwiperSlide>
          {({ isActive }) => (
            <Image
              src={`${imgSrc}/1.png`}
              alt="slide_image"
              width={470}
              height={790}
              className={`${
                isActive ? "scale-105" : "blur-sm"
              } scale-105 duration-1000  max-w-[80vw] `}
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <Image
              src={`${imgSrc}/2.png`}
              alt="slide_image"
              width={470}
              height={790}
              className={`${
                isActive ? "scale-105" : "blur-sm"
              } duration-1000  max-w-[80vw]`}
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <Image
              src={`${imgSrc}/3.png`}
              alt="slide_image"
              width={470}
              height={790}
              className={`${
                isActive ? "scale-105" : "blur-sm"
              } duration-1000  max-w-[80vw]  `}
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <Image
              src={`${imgSrc}/4.png`}
              alt="slide_image"
              width={470}
              height={790}
              className={`${
                isActive ? "scale-105" : "blur-sm"
              } duration-1000  max-w-[80vw]  `}
            />
          )}
        </SwiperSlide>
        {/* <SwiperSlide>
          {({ isActive }) => (
            <Image
              src={`${imgSrc}/5.png`}
              alt="slide_image"
              width={470}
              height={790}
              className={`${isActive ? "scale-105" : "blur-sm"} duration-1000 `}
            />
          )}
        </SwiperSlide> */}
        {/* <SwiperSlide>
          {({ isActive }) => (
            <Image
              src={`${imgSrc}/6.png`}
              alt="slide_image"
              width={470}
              height={790}
              className={`${
                isActive ? "scale-105" : "blur-sm"
              } duration-1000 max-h-[50vh]`}
            />
          )}
        </SwiperSlide> */}
        <SwiperSlide>
          {({ isActive }) => (
            <Image
              src={`${imgSrc}/7.png`}
              alt="slide_image"
              width={470}
              height={790}
              className={`${
                isActive ? "scale-105" : "blur-sm"
              } duration-1000 max-w-[80vw]  `}
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <Image
              src={`${imgSrc}/8.png`}
              alt="slide_image"
              width={470}
              height={790}
              className={`${
                isActive ? "scale-105" : "blur-sm"
              } duration-1000 max-w-[80vw] `}
            />
          )}
        </SwiperSlide>
        {/* <SwiperSlide>
          {({ isActive }) => (
            <Image
              src={`${imgSrc}/9.png`}
              alt="slide_image"
              width={470}
              height={790}
              className={`${
                isActive ? "scale-105" : "blur-sm"
              } duration-1000 max-h-[50vh]`}
            />
          )}
        </SwiperSlide> */}
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow text-white text-2xl font-bold">
            <BsChevronLeft />
          </div>
          <div className="swiper-button-next slider-arrow text-white text-2xl font-bold">
            <BsChevronRight />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};
export default Slider;
