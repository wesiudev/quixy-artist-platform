// import { getBlogPosts } from "@/firebase";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaLongArrowAltRight, FaStar } from "react-icons/fa";
import { IoEnterOutline } from "react-icons/io5";
import { PiPushPinLight, PiShieldStar } from "react-icons/pi";
import { GiAlliedStar } from "react-icons/gi";
import { CiCircleCheck, CiDollar } from "react-icons/ci";
import { MdOutlineStars } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { categories } from "@/data/categories";
export default async function Page() {
  // const posts = await getBlogPosts();

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        <div className="py-24 lg:py-0 md:h-[80vh] flex md:justify-end items-center">
          <div className="flex flex-col md:mt-12 lg:mt-0 ml-4 sm:ml-8 lg:ml-12 2xl:ml-[15vw]">
            <h1 className="font-cardo text-6xl md:text-5xl lg:text-6xl xl:text-7xl blue font-bold">
              Twoja sztuka <br /> bez granic
            </h1>
            <p className="text-[#5e6d55] mt-4 font-coco lg:text-lg xl:text-xl font-bold pr-4 sm:pr-8 lg:pr-12 2xl:pr-[10vw]">
              Stwórz swoje portfolio, udostępnij swoje prace i połącz się z
              globalną społecznością artystyczną.
            </p>
            <Link
              href="/register"
              className="bgBlue duration-300 rounded-3xl w-max px-4 py-2 mt-8 text-white font-bold"
            >
              Dołącz teraz
            </Link>
            <div className="flex flex-col mt-20">
              <span className="text-[#9aaa97] font-bold mb-2 opacity-80">
                Powered by
              </span>
              <div className="flex flex-row items-center space-x-6">
                <Image
                  src="/assets/google.png"
                  width={100}
                  height={100}
                  alt=""
                  className=""
                />

                <Image
                  src="/assets/pinterest.png"
                  width={100}
                  height={100}
                  alt=""
                  className=""
                />
                <Image
                  src="/assets/deviant.png"
                  width={100}
                  height={100}
                  alt=""
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-full items-center hidden md:flex 2xl:pl-[10vw]">
          <Image
            src="/assets/hero1.webp"
            width={1500}
            height={1028}
            alt="Quixy Hero Image"
            className="md:rounded-l-3xl"
          />
        </div>
      </div>
      <div className="infinite-bg mx-4 sm:mx-8 lg:mx-12 2xl:mx-[15vw] px py-6 lg:py-12 rounded-2xl h-max">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <h2 className="font-cardo text-3xl md:text-4xl lg:text-5xl font-bold text-[#133c54]">
              Perfekcyjne połączenie miłośników sztuki z twórcami.
            </h2>
          </div>
          <p className="text-[#133c54] mt-3 text-lg lg:text-xl font-coco">
            Chcesz wystawić swoje prace, czy zatrudnić artystę?
          </p>
        </div>
        <div className="flex flex-row items-center mt-4 space-x-4 font-coco">
          <Link className="button" href="/register?t=artist">
            Jestem twórcą
          </Link>
          <Link className="button" href="/register?t=client">
            Jestem klientem
          </Link>
        </div>
      </div>
      <div className="mt-24 mx-4 sm:mx-8 lg:mx-12 2xl:mx-[15vw] h-max">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <h2 className="font-cardo text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-800 drop-shadow-md shadow-black">
              Odszukaj twórcę, który zrealizuje Twoją wizję
            </h2>
          </div>
          <p className="text-zinc-500 mt-3 text-lg font-coco">
            Szukasz zleceń?{" "}
            <Link
              href="/z/search/jobs?=newest"
              className="text-[#126b91] font-bold underline"
            >
              Przeglądaj oferty
            </Link>
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 mt-5 gap-4 font-coco">
          {categories.map((cat: any, i: any) => (
            <Link
              href=""
              key={i}
              className="p-3 flex flex-col rounded-lg bg-[#f7faf7] hover:bg-[#E4EBE4] duration-75"
            >
              <span className="font-bold text-base">{cat.name}</span>
              <span className="mt-2 flex flex-row items-center">
                <FaStar className="mr-1 text-[#126b91] -mt-0.5" /> {cat.rating}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div className="mx-4 sm:mx-8 lg:mx-12 2xl:mx-[15vw] mt-24 h-max">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="h-full w-full md:p-3 lg:p-0 lg:bg-white md:bg-[#f7faf7] rounded-xl rounded-tl-[80px]">
            <Image
              src="/assets/happy-woman.webp"
              width={1024}
              height={1024}
              alt=""
              className="rounded-t-2xl rounded-b-2xl rounded-tl-[80px]"
            />
          </div>
          <div className="flex flex-col px-3 md:pl-6 lg:pl-12 font-coco text-zinc-800">
            <h2 className="font-cardo text-3xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold  drop-shadow-md shadow-black mb-6 mt-6 md:mt-0">
              To proste! Realizuj projekty z najlepszymi.
            </h2>
            <div className="flex flex-row">
              <IoEnterOutline className="h-10 w-10 font-bold" />
              <div className="ml-3 flex flex-col mt-1">
                <h3 className="font-bold text-lg lg:text-xl">
                  Wstęp jest darmowy
                </h3>
                <p className="text-zinc-500 text-sm ">
                  Zanurz się w świecie sztuki! Zarejestruj się, odkrywaj
                  projekty i planuj konsultacje.
                </p>
              </div>
            </div>
            <div className="flex flex-row mt-3">
              <PiPushPinLight className="h-10 w-10 font-bold" />
              <div className="ml-3 flex flex-col mt-1">
                <h3 className="font-bold text-lg lg:text-xl">
                  Opublikuj zlecenie i zatrudnij talent
                </h3>
                <p className="text-zinc-500 text-sm ">
                  Znajdź utalentowane osoby, skontaktuj się i rozpocznijcie
                  współpracę.
                </p>
              </div>
            </div>
            <div className="flex flex-row mt-3">
              <PiShieldStar className="h-10 w-10 font-bold" />
              <div className="ml-3 flex flex-col mt-1">
                <h3 className="font-bold text-lg lg:text-xl">
                  Pracuj z najlepszymi
                </h3>
                <p className="text-zinc-500 text-sm ">
                  Twój klucz do współpracy. Znajdź najlepszych artystów, którzy
                  ci pomogą.
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <Link className="button mt-6" href="/register?t=client">
                Dołącz za darmo
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mx-4 sm:mx-8 lg:mx-12 2xl:mx-[15vw] mt-24 bg-cover bg-center lg:bg-right-bottom p-4 lg:p-8 h-max bg-woman-pc rounded-xl">
        <div className="absolute left-0 top-0 rounded-xl bg-black bg-opacity-40 w-full h-full z-0"></div>
        <div className="absolute left-4 lg:left-6 top-4 lg:top-6 font-coco text-lg lg:text-xl text-white">
          Dla klientów
        </div>
        <div className="flex flex-col justify-end relative z-10 h-full w-full mt-[30vh]">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold font-cardo">
            Znajdź i zatrudnij <br /> wybitnego artystę
          </h2>
          <p className="text-white text-base md:text-lg my-6 lg:w-1/2">
            Pracuj z największą siecią niezależnych artystów w Polsce — zamawiaj
            gotowe projekty lub zlecaj pracę najlepszym.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 font-coco gap-4">
            <Link
              href=""
              className="grid grid-cols-2 md:grid-cols-1 rounded-xl bg-[#126b91] hover:bg-white  text-white hover:text-[#126b91] p-3 duration-300"
            >
              <h3 className="md:mb-3 text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold">
                Utwórz zlecenie i zatrudnij artystę
              </h3>
              <div className="h-full flex items-end justify-end md:justify-start">
                <div className="flex flex-row items-center">
                  Szukaj Talentu&trade;
                  <FaLongArrowAltRight className="ml-2" />
                </div>
              </div>
            </Link>
            <Link
              href=""
              className="grid grid-cols-2 md:grid-cols-1 hover:text-[#126b91] rounded-xl text-white bg-[#126b91] hover:bg-white group p-3 duration-300"
            >
              <h3 className="md:mb-3 text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold">
                Przeglądaj i kupuj gotowe prace
              </h3>
              <div className="h-full flex items-end justify-end md:justify-start">
                <div className="flex flex-row items-center">
                  Katalog Projektów&trade;
                  <FaLongArrowAltRight className="ml-2" />
                </div>
              </div>
            </Link>
            <Link
              href=""
              className="grid grid-cols-2 md:grid-cols-1 rounded-xl bg-[#126b91] text-white  hover:text-[#126b91] hover:bg-white group p-3 duration-300"
            >
              <h3 className="md:mb-3 text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold">
                Zdobądź radę od eksperta
              </h3>
              <div className="h-full flex items-end justify-end md:justify-start">
                <div className="flex flex-row items-center">
                  Konsultacje
                  <FaLongArrowAltRight className="ml-2" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="md:mx-8 lg:mx-12 2xl:mx-[15vw] mt-24 flex-col flex md:flex-row md:space-x-6">
        <div className="md:w-[66%] w-full bg-[#F2F7F2] rounded-xl p-4 lg:p-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-cardo mt-6">
            Dlaczego warto <br />
            wybrać Quixy?
          </h2>
          <div className="flex flex-col space-y-3 mt-6">
            <div className="flex flex-row mt-3">
              <MdOutlineStars className="h-8 w-8 font-bold" />
              <div className="ml-3 flex flex-col">
                <h3 className="font-bold text-lg lg:text-2xl -mt-1">
                  Gwarancja jakości
                </h3>
                <p className="text-zinc-500 text-sm md:text-lg w-3/4">
                  Dostęp do prac naszych artystów przed zatrudnieniem.
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <CiDollar className="h-8 w-8 font-bold" />
              <div className="ml-3 flex flex-col">
                <h3 className="font-bold text-lg lg:text-2xl -mt-1">
                  Nie płacisz zanim nie zatrudnisz
                </h3>
                <p className="text-zinc-500 text-sm md:text-lg w-3/4">
                  Zaproś na spotkanie potencjalnych kandydatów do pracy i
                  negocjuj stawki.
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <CiCircleCheck className="h-8 w-8 font-bold" />
              <div className="ml-3 flex flex-col">
                <h3 className="font-bold text-lg lg:text-2xl -mt-1">
                  Zapewnimy bezpieczeństwo
                </h3>
                <p className="text-zinc-500 text-sm md:text-lg w-3/4">
                  Skoncentruj się na swojej pracy. Jesteśmy dostępni 24/7 by ci
                  pomóc.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[33%] w-full bg-[#126B91] relative md:rounded-xl md:flex-col grid grid-cols-2 md:flex md:justify-end p-4 md:p-6 space-y-3">
          <div className="h-full flex flex-col justify-end">
            <h2 className="text-2xl lg:text-3xl font-bold font-cardo mt-6 text-white mb-5">
              Różnorodni artyści w jednym miejscu
            </h2>
            <div className="flex flex-row">
              <FaStar className="h-8 w-8 font-bold text-white" />
              <div className="ml-3 flex flex-col">
                <h3 className="text-lg lg:text-2xl text-white font-bold -mt-1">
                  4.95/5
                </h3>
                <p className="text-gray-300 text-sm md:text-lg font-coco">
                  Według opinii naszych klientów
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <FaGoogle className="h-8 w-8 font-bold text-white" />
              <div className="ml-3 flex flex-col">
                <h3 className="text-lg lg:text-2xl text-white font-bold -mt-1">
                  5/5
                </h3>
                <p className="text-gray-300 text-sm md:text-lg font-coco">
                  Korzystamy z niezawodnej technologii
                </p>
              </div>
            </div>
          </div>
          <Image
            src="/assets/ninja.png"
            width={256}
            height={256}
            alt="Gwarancja jakości Quixy"
            className="relative md:absolute md:-left-44 md:-top-6  h-auto mx-auto md:mx-0"
          />
        </div>
      </div>
      <div className="relative md:mx-8 lg:mx-12 2xl:mx-[15vw] mt-24 h-max md:h-[70vh] rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full relative">
          <div className="bg-guitar-man bg-center md:rounded-l-xl h-[50vh] md:h-full"></div>
          <div className="p-4 lg:p-6 text-white bg-[#126B91] md:rounded-r-xl w-full md:h-full grid grid-cols-1">
            <div>
              <span className="text-lg font-coco">Dla artystów</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-cardo mt-6">
                Szukaj zleceń lub otwórz sklep
              </h2>
              <p className="text-base md:text-lg my-6 font-coco">
                Przeglądaj zlecenia klientów lub otwórz swój sklep online —
                dostosujesz go w swoim profilu na naszej stronie.
              </p>
              <Link
                className="button !bg-white hover:!bg-gray-300 duration-300 !text-[#126b91] w-max h-max"
                href="/register?t=artist"
              >
                Znajdź klientów
              </Link>
            </div>
            <div className="flex items-end font-coco text-base md:text-sm lg:text-base xl:text-lg">
              <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-3 lg:gap-5 xl:gap-6 pt-3 mt-12 border-t border-white">
                <div>Znajduj odpowiednie zlecenia dla siebie</div>
                <div>Sprzedawaj swoje gotowe prace</div>
                <div>Udzielaj konsultacji online</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
