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
        <h3 className="text-[#8f26f3] font-bold text-3xl sm:text-5xl md:text-6xl mb-6 px-3">
          PASJA SZTUKI
        </h3>
        <h4 className="text-white font-coco px-3 text-left sm:text-center ">
          Odkąd pamiętam, moja pasja do sztuki, rysowania i malowania była
          źródłem niekończącej się inspiracji. To dla mnie nie tylko sposób
          wyrażania uczuć, ale także podróż w głąb samej siebie, gdzie każdy
          pociągnięty pędzlem lub ołówkiem kształtował moją tożsamość
          artystyczną. Dziś, jako młoda artystka, kontynuuję tę nieustanną
          podróż, gotowa zdobywać świat sztuki swoimi wyjątkowymi dziełami.
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
              <Image
                src="/images/image/roadmap/roadmap1.png"
                width={300}
                height={242}
                alt="roadmap1"
                className="min-w-[250px] h-auto"
              />
            </div>
            <div id="rm2">
              <Image
                src="/images/image/roadmap/roadmap2.png"
                width={251}
                height={364}
                alt=""
                className=""
              />
            </div>
            <div id="rm3">
              <Image
                src="/images/image/roadmap/roadmap3.png"
                width={315}
                height={272}
                alt=""
                className=""
              />
            </div>
            <div id="rm4">
              <Image
                src="/images/image/roadmap/roadmap4.png"
                width={285}
                height={280}
                alt=""
                className=""
              />
            </div>
            <div id="rm5">
              <Image
                src="/images/image/roadmap/roadmap5.png"
                width={252}
                height={320}
                alt=""
                className=""
              />
            </div>
          </RoadMapLine>
          <RoadMapCardWrapper>
            <RoadMapCardGroup>
              <RoadMapCard id="rmd1">
                <div className="-mt-12">
                  <h3 className="text-purple-500 text-6xl font-graublau font-bold mb-3">
                    Kredka
                  </h3>
                  <h4 className="font-coco text-gray-100">
                    <span className="font-bold">
                      Wszystko zaczęło się od kredki
                    </span>
                    ... Swoje pierwsze prace wykonywałam w zeszycie szkolnym,
                    gdzie każda strona stawała się płótnem dla moich marzeń i
                    pomysłów. Od tamtej chwili sztuka stała się moim
                    nieodłącznym towarzyszem, a każde pociągnięcie ołówka było
                    jak rozwijająca się opowieść, odkrywająca świat kolorów i
                    form. To właśnie tam, w tych skromnych zeszytach, narodziła
                    się moja pasja, która teraz popycha mnie do eksploracji
                    sztuki na większą skalę i dzielenia się nią z innymi.
                  </h4>
                </div>
              </RoadMapCard>
              <div />
            </RoadMapCardGroup>
            <RoadMapCardGroup>
              <div />
              <RoadMapCard id="rmd2">
                <div className="-mt-12">
                  <h3 className="text-purple-500 text-6xl font-graublau font-bold mb-3">
                    Groteskowy start
                  </h3>
                  <h4 className="font-coco text-gray-100">
                    Na samym początku, moje twórcze próby były pełne entuzjazmu,
                    i czułam się dumna z tego, co potrafiłam stworzyć. Jednak z
                    biegiem czasu zdałam sobie sprawę, że prawdziwy rozwój
                    wymaga praktyki i cierpliwości. Zrozumiałam, że każdy
                    artysta zaczyna od prostych prób, a prawdziwa sztuka tkwi w
                    procesie doskonalenia się. Dziś patrzę na swoje początki z
                    uśmiechem, widząc w nich jedynie kroki w mojej artystycznej
                    podróży, która ciągle się rozwija dzięki codziennej pracy i
                    pozytywnemu podejściu.
                  </h4>
                </div>
              </RoadMapCard>
            </RoadMapCardGroup>
            <RoadMapCardGroup>
              <RoadMapCard id="rmd3">
                <div className="-mt-12">
                  <h3 className="text-purple-500 text-6xl font-graublau font-bold mb-3">
                    Unikalny styl
                  </h3>
                  <h4 className="font-coco text-gray-100">
                    Podczas mojej kreatywnej podróży udało mi się odnaleźć
                    własny, niepowtarzalny sposób wyrażania siebie, z którego
                    jestem dumna. To nie tylko zbiór technik czy kolorów, ale
                    wyraz mojej osobowości i pasji, które stopniowo układały się
                    w spójny język artystyczny. Teraz, gdy patrzę na swoje
                    prace, widzę nie tylko obrazy, ale też fragmenty mojej duszy
                    i snów, co sprawia, że każda kreska pociągnięta pędzlem czy
                    ołówkiem jest dla mnie jak oddech wolności i autentyczności.
                  </h4>
                </div>
              </RoadMapCard>
              <div />
            </RoadMapCardGroup>
            <RoadMapCardGroup>
              <div />
              <RoadMapCard id="rmd4">
                {" "}
                <div className="-mt-12">
                  <h3 className="text-purple-500 text-6xl font-graublau font-bold mb-3">
                    Pierwsze wystawy
                  </h3>
                  <h4 className="font-coco text-gray-100">
                    Były dla mnie niezapomnianym doświadczeniem pełnym emocji i
                    dreszczy ekscytacji. Prezentując moje prace publiczności po
                    raz pierwszy, poczułam mieszankę niepewności i dumy. Widok
                    ludzi, którzy z zainteresowaniem przyglądali się moim
                    dziełom, był dla mnie potwierdzeniem, że moja pasja może
                    dotknąć serca innych ludzi. Te pierwsze wystawy były dla
                    mnie jak otwarcie drzwi do szerszego świata sztuki, gdzie
                    każda praca stanowiła kawałek mnie i mojego niepowtarzalnego
                    świata.
                  </h4>{" "}
                </div>
              </RoadMapCard>
            </RoadMapCardGroup>
            <RoadMapCardGroup>
              <RoadMapCard id="rmd5">
                {" "}
                <div className="-mt-12">
                  <Image
                    src="/images/image/common/blackbellLogo.png"
                    width={300}
                    height={200}
                    alt=""
                    className="max-h-[100px] mb-3"
                  />
                  <h4 className="font-coco text-gray-100">
                    Blackbell to dla mnie nie tylko nazwa, to także historia,
                    która zaczyna się malować na waszych ciałach. Z dumą
                    ogłaszam rozpoczęcie oficjalnej działalności związanej z
                    tatuowaniem, gdzie każda kreska ma swoje znaczenie, a każdy
                    detal przekazuje niepowtarzalną historię. Moja pasja do
                    sztuki przekroczyła granice płótna, tworząc trwałe dzieła
                    sztuki, które będą towarzyszyć wam przez całe życie.
                    Dziękuję za zaufanie i możliwość dzielenia się moją unikalną
                    kreatywnością z wami.
                  </h4>{" "}
                </div>
              </RoadMapCard>
              <div />
            </RoadMapCardGroup>
          </RoadMapCardWrapper>
        </RoadMapSection>
      )}
      {mobile && (
        <RoadMapCardGroup>
          <RoadMapCard id="rmd-m1" className="mobile-rm">
            <h3 className="text-purple-500 text-6xl font-graublau font-bold mb-3">
              Kredka
            </h3>
            <h4 className="font-coco text-gray-100">
              <span className="font-bold">Wszystko zaczęło się od kredki</span>
              ... Swoje pierwsze prace wykonywałam w zeszycie szkolnym, gdzie
              każda strona stawała się płótnem dla moich marzeń i pomysłów. Od
              tamtej chwili sztuka stała się moim nieodłącznym towarzyszem, a
              każde pociągnięcie ołówka było jak rozwijająca się opowieść,
              odkrywająca świat kolorów i form. To właśnie tam, w tych skromnych
              zeszytach, narodziła się moja pasja, która teraz popycha mnie do
              eksploracji sztuki na większą skalę i dzielenia się nią z innymi.
            </h4>
          </RoadMapCard>
          <RoadMapCard id="rmd-m2" className="mobile-rm">
            <h3 className="text-purple-500 text-6xl font-graublau font-bold mb-3">
              Groteskowy start
            </h3>
            <h4 className="font-coco text-gray-100">
              Na samym początku, moje twórcze próby były pełne entuzjazmu, i
              czułam się dumna z tego, co potrafiłam stworzyć. Jednak z biegiem
              czasu zdałam sobie sprawę, że prawdziwy rozwój wymaga praktyki i
              cierpliwości. Zrozumiałam, że każdy artysta zaczyna od prostych
              prób, a prawdziwa sztuka tkwi w procesie doskonalenia się. Dziś
              patrzę na swoje początki z uśmiechem, widząc w nich jedynie kroki
              w mojej artystycznej podróży, która ciągle się rozwija dzięki
              codziennej pracy i pozytywnemu podejściu.
            </h4>
          </RoadMapCard>
          <RoadMapCard id="rmd-m3" className="mobile-rm">
            <h3 className="text-purple-500 text-6xl font-graublau font-bold mb-3">
              Unikalny styl
            </h3>
            <h4 className="font-coco text-gray-100">
              Podczas mojej kreatywnej podróży udało mi się odnaleźć własny,
              niepowtarzalny sposób wyrażania siebie, z którego jestem dumna. To
              nie tylko zbiór technik czy kolorów, ale wyraz mojej osobowości i
              pasji, które stopniowo układały się w spójny język artystyczny.
              Teraz, gdy patrzę na swoje prace, widzę nie tylko obrazy, ale też
              fragmenty mojej duszy i snów, co sprawia, że każda kreska
              pociągnięta pędzlem czy ołówkiem jest dla mnie jak oddech wolności
              i autentyczności.
            </h4>
          </RoadMapCard>
          <RoadMapCard id="rmd-m4" className="mobile-rm">
            <h3 className="text-purple-500 text-6xl font-graublau font-bold mb-3">
              Pierwsze wystawy
            </h3>
            <h4 className="font-coco text-gray-100">
              Były dla mnie niezapomnianym doświadczeniem pełnym emocji i
              dreszczy ekscytacji. Prezentując moje prace publiczności po raz
              pierwszy, poczułam mieszankę niepewności i dumy. Widok ludzi,
              którzy z zainteresowaniem przyglądali się moim dziełom, był dla
              mnie potwierdzeniem, że moja pasja może dotknąć serca innych
              ludzi. Te pierwsze wystawy były dla mnie jak otwarcie drzwi do
              szerszego świata sztuki, gdzie każda praca stanowiła kawałek mnie
              i mojego niepowtarzalnego świata.
            </h4>{" "}
          </RoadMapCard>
          <RoadMapCard id="rmd-m5" className="mobile-rm">
            <Image
              src="/images/image/common/logo.png"
              width={300}
              height={200}
              alt=""
              className="max-h-[70px] mb-3"
            />
            <h4 className="font-coco text-gray-100">
              Blackbell to dla mnie nie tylko nazwa, to także historia, która
              zaczyna się malować na waszych ciałach. Z dumą ogłaszam
              rozpoczęcie oficjalnej działalności związanej z tatuowaniem, gdzie
              każda kreska ma swoje znaczenie, a każdy detal przekazuje
              niepowtarzalną historię. Moja pasja do sztuki przekroczyła granice
              płótna, tworząc trwałe dzieła sztuki, które będą towarzyszyć wam
              przez całe życie. Dziękuję za zaufanie i możliwość dzielenia się
              moją unikalną kreatywnością z wami.
            </h4>{" "}
          </RoadMapCard>
        </RoadMapCardGroup>
      )}
    </RoadmapWrapper>
  );
};

export default RoadMapPart;
