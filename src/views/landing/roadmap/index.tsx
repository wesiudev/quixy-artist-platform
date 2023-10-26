"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import {
  RoadMapCard,
  RoadMapCardGroup,
  RoadMapCardWrapper,
  RoadMapLine,
  RoadMapSection,
  RoadMapTitleSection,
  RoadmapWrapper,
} from "./roadmap.styled";

import Image from "next/image";

const RoadMapPart = () => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () =>
      setMobile(window.innerWidth >= 1024 ? false : true)
    );
    setMobile(window.innerWidth >= 1024 ? false : true);
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <RoadmapWrapper id="about">
      <RoadMapTitleSection>
        <h3 className="text-[#8f26f3] font-bold text-3xl sm:text-5xl sm:!text-center md:text-6xl mb-6 px-3">
          PROCES TWORZENIA
        </h3>
        <h4 className="text-white font-coco px-3 text-left sm:text-center ">
          Witajcie w moim prywatnym studiu tatuażu, gdzie sztuka spotyka się ze
          skórą! Jako pasjonatka sztuki, jestem podekscytowana, że mogę
          podzielić się moją miłością do tatuażu jako formy wyrazu
          artystycznego. Pragnę Was zaprosić do świata, gdzie wyobraźnia staje
          się rzeczywistością na powierzchni skóry.
        </h4>
      </RoadMapTitleSection>
      {!mobile && (
        <RoadMapSection>
          <RoadMapLine>
            <Image
              src="/images/image/roadmap/roadmap-line.png"
              width={310}
              height={2172}
              className="rm-line"
              alt="roadmapLine"
            />

            <div id="rm1">
              <div>
                <Image
                  src="/images/image/roadmap/roadmap1.png"
                  width={300}
                  height={242}
                  alt="roadmap1"
                  className=""
                />
              </div>
            </div>
            <div id="rm2">
              <div>
                <Image
                  src="/images/image/roadmap/roadmap2.png"
                  width={251}
                  height={364}
                  alt=""
                  className=""
                />
              </div>
            </div>
            <div id="rm3">
              <div>
                <Image
                  src="/images/image/roadmap/roadmap3.png"
                  width={315}
                  height={272}
                  alt=""
                  className=""
                />
              </div>
            </div>
            <div id="rm4">
              <div>
                <Image
                  src="/images/image/roadmap/roadmap4.png"
                  width={285}
                  height={280}
                  alt=""
                  className=""
                />
              </div>
            </div>
            <div id="rm5">
              <div>
                <Image
                  src="/images/image/roadmap/roadmap5.png"
                  width={252}
                  height={320}
                  alt=""
                  className=""
                />
              </div>
            </div>
          </RoadMapLine>
          <RoadMapCardWrapper>
            <RoadMapCardGroup>
              <RoadMapCard id="rmd1">
                <h3 className="text-white text-4xl 2xl:text-5xl font-graublau font-bold mb-3">
                  Konsultacja
                </h3>
                <div className="w-full h-1 bg-[#8f26f3] my-3"></div>
                <h4 className="font-coco text-gray-100">
                  Nasza podróż zaczyna się od rozmowy. Podczas pierwszej
                  konsultacji wysłuchuję Twoich pomysłów, historii oraz gustów.
                  Razem omawiamy inspiracje i wymagania dotyczące tatuażu. Na
                  podstawie naszej rozmowy tworzę wstępny projekt, który będzie
                  punktem wyjścia do dalszych prac.
                </h4>
              </RoadMapCard>
              <div />
            </RoadMapCardGroup>
            <RoadMapCardGroup>
              <div />
              <RoadMapCard id="rmd2">
                <h3 className="text-white text-4xl 2xl:text-5xl font-graublau font-bold mb-3">
                  Poprawki
                </h3>
                <div className="w-full h-1 bg-[#8f26f3] my-3"></div>
                <h4 className="font-coco text-gray-100">
                  Twój feedback jest kluczowy. Po zaprezentowaniu Ci wstępnego
                  projektu, masz możliwość zgłaszania poprawek i sugestii. Twoje
                  uwagi są dla mnie bardzo ważne, ponieważ chcę, aby tatuaż był
                  dokładnie taki, jakiego sobie wymarzyłeś. Dokonujemy wszelkich
                  niezbędnych poprawek, dopóki nie będziesz w pełni zadowolony z
                  projektu.
                </h4>
              </RoadMapCard>
            </RoadMapCardGroup>
            <RoadMapCardGroup>
              <RoadMapCard id="rmd3">
                <h3 className="text-white text-4xl 2xl:text-5xl font-graublau font-bold mb-3">
                  Ostateczny Projekt
                </h3>
                <div className="w-full h-1 bg-[#8f26f3] my-3"></div>
                <h4 className="font-coco text-gray-100">
                  Kiedy osiągniemy pełną zgodę na projekt, przystępujemy do jego
                  ostatecznej wersji. Dbam o każdy detal, dopracowując linie,
                  cienie i kolory, aby zapewnić perfekcyjną jakość. Ostateczny
                  projekt to odzwierciedlenie naszych wspólnych wysiłków i
                  Twojej wyjątkowej wizji.
                </h4>
              </RoadMapCard>
              <div />
            </RoadMapCardGroup>
            <RoadMapCardGroup>
              <div />
              <RoadMapCard id="rmd4">
                {" "}
                <h3 className="text-white text-4xl 2xl:text-5xl font-graublau font-bold mb-3">
                  Wykonywanie Tatuażu
                </h3>
                <div className="w-full h-1 bg-[#8f26f3] my-3"></div>
                <h4 className="font-coco text-gray-100">
                  Przechodzimy do etapu, który sprawia, że projekt staje się
                  rzeczywistością. W moim studio zapewniam komfortową atmosferę,
                  gdzie możesz zrelaksować się i cieszyć procesem. Dbam o
                  higienę i bezpieczeństwo podczas wykonywania tatuażu, dzięki
                  czemu możesz być pewien, że jesteś w dobrych rękach.
                </h4>{" "}
              </RoadMapCard>
            </RoadMapCardGroup>
            <RoadMapCardGroup>
              <RoadMapCard id="rmd5">
                <h3 className="text-white text-4xl 2xl:text-5xl font-graublau font-bold mb-3">
                  Gotowe!
                </h3>
                <div className="w-full h-1 bg-[#8f26f3] my-3"></div>
                <h4 className="font-coco text-gray-100">
                  Po zakończeniu procesu tatuażu prezentuję Ci gotowe dzieło
                  sztuki. To moment, w którym Twój pomysł staje się trwałą
                  częścią Twojego ciała. Podziwiaj swoje nowe tatuaże, które nie
                  tylko ozdabiają Twoją skórę, ale także opowiadają Twoją
                  historię. Twoje nowe tatuaże są nie tylko pięknym obrazem, ale
                  także wyrazem Twojej osobowości i indywidualności.
                </h4>{" "}
              </RoadMapCard>
              <div />
            </RoadMapCardGroup>
          </RoadMapCardWrapper>
        </RoadMapSection>
      )}
      {mobile && (
        <RoadMapCardGroup className="!px-3">
          <RoadMapCard id="rmd-m1" className="mobile-rm">
            <h3 className="text-white text-4xl 2xl:text-5xl font-graublau font-bold mb-3">
              Konsultacja
            </h3>
            <div className="w-full h-1 bg-[#8f26f3] my-3"></div>
            <h4 className="font-coco text-gray-100">
              Nasza podróż zaczyna się od rozmowy. Podczas pierwszej konsultacji
              wysłuchuję Twoich pomysłów, historii oraz gustów. Razem omawiamy
              inspiracje i wymagania dotyczące tatuażu. Na podstawie naszej
              rozmowy tworzę wstępny projekt, który będzie punktem wyjścia do
              dalszych prac.
            </h4>
          </RoadMapCard>
          <RoadMapCard id="rmd-m2" className="mobile-rm">
            <h3 className="text-white text-4xl 2xl:text-5xl font-graublau font-bold mb-3">
              Poprawki
            </h3>
            <div className="w-full h-1 bg-[#8f26f3] my-3"></div>
            <h4 className="font-coco text-gray-100">
              Twój feedback jest kluczowy. Po zaprezentowaniu Ci wstępnego
              projektu, masz możliwość zgłaszania poprawek i sugestii. Twoje
              uwagi są dla mnie bardzo ważne, ponieważ chcę, aby tatuaż był
              dokładnie taki, jakiego sobie wymarzyłeś. Dokonujemy wszelkich
              niezbędnych poprawek, dopóki nie będziesz w pełni zadowolony z
              projektu.
            </h4>
          </RoadMapCard>
          <RoadMapCard id="rmd-m3" className="mobile-rm">
            <h3 className="text-white text-4xl 2xl:text-5xl font-graublau font-bold mb-3">
              Ostateczny Projekt
            </h3>
            <div className="w-full h-1 bg-[#8f26f3] my-3"></div>
            <h4 className="font-coco text-gray-100">
              Kiedy osiągniemy pełną zgodę na projekt, przystępujemy do jego
              ostatecznej wersji. Dbam o każdy detal, dopracowując linie, cienie
              i kolory, aby zapewnić perfekcyjną jakość. Ostateczny projekt to
              odzwierciedlenie naszych wspólnych wysiłków i Twojej wyjątkowej
              wizji.
            </h4>
          </RoadMapCard>
          <RoadMapCard id="rmd-m4" className="mobile-rm">
            {" "}
            <h3 className="text-white text-4xl 2xl:text-5xl font-graublau font-bold mb-3">
              Wykonywanie Tatuażu
            </h3>
            <div className="w-full h-1 bg-[#8f26f3] my-3"></div>
            <h4 className="font-coco text-gray-100">
              Przechodzimy do etapu, który sprawia, że projekt staje się
              rzeczywistością. W moim studio zapewniam komfortową atmosferę,
              gdzie możesz zrelaksować się i cieszyć procesem. Dbam o higienę i
              bezpieczeństwo podczas wykonywania tatuażu, dzięki czemu możesz
              być pewien, że jesteś w dobrych rękach.
            </h4>{" "}
          </RoadMapCard>
          <RoadMapCard id="rmd-m5" className="mobile-rm">
            <h3 className="text-white text-4xl 2xl:text-5xl font-graublau font-bold mb-3">
              Gotowe!
            </h3>
            <div className="w-full h-1 bg-[#8f26f3] my-3"></div>
            <h4 className="font-coco text-gray-100">
              Po zakończeniu procesu tatuażu prezentuję Ci gotowe dzieło sztuki.
              To moment, w którym Twój pomysł staje się trwałą częścią Twojego
              ciała. Podziwiaj swoje nowe tatuaże, które nie tylko ozdabiają
              Twoją skórę, ale także opowiadają Twoją historię. Twoje nowe
              tatuaże są nie tylko pięknym obrazem, ale także wyrazem Twojej
              osobowości i indywidualności.
            </h4>{" "}
          </RoadMapCard>
          <div className="w-full">
            <Image
              src="/images/image/common/blackbellLogo.png"
              width={300}
              height={200}
              alt=""
              className="max-h-[70px] my-6"
            />
            <h4 className="font-coco text-gray-100 ">
              Blackbell to dla mnie nie tylko nazwa, to także historia, która
              zaczyna się malować na waszych ciałach. Z dumą ogłaszam
              rozpoczęcie oficjalnej działalności związanej z tatuowaniem, gdzie
              każda kreska ma swoje znaczenie, a każdy detal przekazuje
              niepowtarzalną historię. Blackbell Art - twój tatuaż w Grudziądzu!
            </h4>{" "}
          </div>
        </RoadMapCardGroup>
      )}
    </RoadmapWrapper>
  );
};

export default RoadMapPart;
