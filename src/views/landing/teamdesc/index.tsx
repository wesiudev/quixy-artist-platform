"use client";
import React from "react";
import {
  DescContent,
  DescList,
  DescListItem,
  DescListTitle,
  MorganSection,
  TeamDescWrapper,
  TitleSection,
} from "./teamdesc.styled";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const TeamsDescPart = () => {
  return (
    <TeamDescWrapper className="relative">
      <div className="absolute -top-36  left-0 " id="contact"></div>
      <TitleSection>
        <p className="teamdesc-title !text-left px-3 lg:px-0">
          Dane kontaktowe
        </p>
        <p className="font-coco text-xl  text-white font-light px-3 lg:px-0 text-left">
          Jesteś zainteresowany projektem lub masz pytania dotyczące tatuażu?
          Poniżej udostępniam swoje dane kontaktowe. Możesz również skontaktować
          się ze mną za pośrednictwem mediów społecznościowych typu Instagram,
          czy Facebook. Wszystkie linki znajdziesz w sekcji Social Media.
        </p>
      </TitleSection>
      <DescContent>
        <DescList className="!text-center lg:!text-left">
          <Link href="https://www.instagram.com/blackbell.ce/">
            {" "}
            <b className="text-white opacity-20">blackbell.c.e</b>
          </Link>
          <DescListTitle className="font-coco font-bold text-3xl">
            {"Eliza Czerwińska"}
          </DescListTitle>
          <DescListItem className="w-max mx-auto lg:mx-0 text-xl">
            ART & TATTOO
          </DescListItem>
          <Link
            className="w-max mx-auto lg:mx-0 text-left  text-white font-coco text-[16px] flex flex-row items-center text-xl"
            href="tel:570974740"
          >
            <FaPhone className="mr-3 text-purple-500" />
            +48 570 974 740
          </Link>
          <Link
            className="w-max mx-auto lg:mx-0 text-left  text-white font-coco text-[16px] pt-[10px] flex flex-row items-center text-xl"
            href="mailto:eliza.czer09@gmail.com"
          >
            <FaEnvelope className="mr-3 text-purple-500" />{" "}
            eliza.czer09@gmail.com
          </Link>
          {/* <LinkedInItem>
            Linkedin <FiArrowDownRight />
          </LinkedInItem> */}
        </DescList>
        <Image
          src="/images/image/common/blackbell.jpg"
          width={1024}
          height={1024}
          alt="blackbell shop artist picture"
          className="mt-12 rounded-xl"
        />
      </DescContent>
      <MorganSection className="w-[90vw] mx-auto lg:w-full !flex !flex-col !justify-center border-l-2 border-r-2 border-[#8f26f3] my-12 pb-12">
        <h3 className="!text-3xl sm:!text-4xl ">obrazy na zamówienie</h3>
        <h4 className="font-coco text-white lg:px-36 text-center !px-3">
          Przekształcę Twoje pomysły w piękne dzieła sztuki. Jeśli jesteś
          zainteresowany spersonalizowanym obrazem, który idealnie odzwierciedli
          Twoje myśli i uczucia, zapraszam do kontaktu. Twoja wizja jest moją
          misją, a każdy szczegół ma znaczenie.
        </h4>
        <Link
          href="/shop"
          className="bg-purple-500 text-white drop-shadow-md shadow-black text-3xl p-2 px-4 font-coco font-light hover:bg-purple-400 w-max mx-auto mt-6"
        >
          Sprawdź sklep
        </Link>
      </MorganSection>
    </TeamDescWrapper>
  );
};

export default TeamsDescPart;
