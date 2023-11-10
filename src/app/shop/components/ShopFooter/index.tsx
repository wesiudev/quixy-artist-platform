import Link from "next/link";
import {
  FaArtstation,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMap,
  FaPencilAlt,
  FaPhone,
  FaShoppingCart,
} from "react-icons/fa";
import PrivacyButton from "./PrivacyButton";

export default function ShopFooter({
  isProductSlug,
}: {
  isProductSlug?: boolean;
}) {
  return (
    <footer
      className={`bg-[#303030] w-full py-24 px-5 ${
        isProductSlug
          ? "px-6 md:px-[8vw] lg:px-3 lg:pl-12 xl:px-12"
          : "lg:px-[8vw] xl:px-[12vw]"
      } font-coco`}
    >
      <div
        className={`grid grid-cols-1 ${
          isProductSlug
            ? "grid-cols-1 md:grid-cols-2"
            : "sm:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        <section
          className={`xl:block flex flex-col  xl:text-left ${
            isProductSlug ? "" : "items-center justify-center text-center"
          }`}
        >
          <h2 className="text-2xl font-bold text-green-300 w-full">Kontakt</h2>
          <address className="text-gray-200 mt-3">
            <p>ul. Janusza Korczaka 15</p>
            <p>86-300 Grudziądz</p>
            <p>NIP: 8762502388</p>
          </address>
          <Link
            className="text-left text-white font-coco flex flex-row items-center text-lg lg:text-base  xl:text-lg mt-1 w-max"
            href="tel:570974740"
            title="Zadzwoń"
          >
            <FaPhone className="mr-3 text-green-300" />
            +48 570 974 740
          </Link>
          <Link
            className="text-left text-white font-coco flex flex-row items-center text-lg lg:text-base  xl:text-lg mt-1 w-max"
            href="mailto:eliza.czer09@gmail.com"
            title="Wyślij email"
          >
            <FaEnvelope className="mr-3 text-green-300" />{" "}
            eliza.czer09@gmail.com
          </Link>
        </section>
        <section
          className={`xl:block flex flex-col ${
            isProductSlug ? "mt-12 md:mt-0" : "items-center justify-center"
          }`}
        >
          <h2 className="text-2xl font-bold text-green-300">Social Media</h2>
          <div className="text-white font-coco">
            <Link
              target="_blank"
              href="https://www.instagram.com/blackbell.ce/"
              className="flex flex-row items-center hover:text-green-300 mt-3 w-max"
              title="Obserwuj na instagramie"
            >
              <FaInstagram className="w-8 h-8 mr-3 text-white" />
              @blackbell.ce
            </Link>
            <Link
              target="_blank"
              href="https://www.facebook.com/blackbell.c.e"
              className="flex flex-row items-center hover:text-green-300 mt-3 w-max"
              title="Obserwuj na facebooku"
            >
              <FaFacebook className="w-8 h-8 mr-3 text-white" />
              @blackbell.c.e
            </Link>

            <Link
              target="_blank"
              href="https://www.instagram.com/blackbellarttattoo/"
              className="flex flex-row items-center hover:text-green-300 mt-3 w-max"
              title="Obserwuj na instagramie"
            >
              <FaInstagram className="w-8 h-8 mr-3 text-white" />
              @blackbellarttattoo
            </Link>
          </div>
        </section>
        <section
          className={`flex flex-col   ${isProductSlug ? "mt-12" : "lg:mt-0"}`}
        >
          <div
            className={`grid grid-cols-1 ${
              isProductSlug ? "xl:grid-cols-1" : "xl:grid-cols-2"
            } text-white`}
          >
            <div
              className={`xl:pr-2 py-3 xl:block flex flex-col ${
                isProductSlug ? "" : "items-center justify-center text-center"
              }`}
            >
              <Link
                href="/sitemap-0.xml"
                className="flex flex-row items-center hover:text-green-300 w-max"
                title="Zobacz sitemap.xml"
              >
                <FaMap className="w-5 h-5 mr-2 text-white" />
                Mapa Strony
              </Link>
              <Link
                href="/blog"
                className="mt-2 flex flex-row items-center hover:text-green-300 w-max"
                title="Sprawdź bloga"
              >
                <FaArtstation className="w-5 h-5 mr-2 text-white" />
                Blog
              </Link>
              <Link
                href="/shop"
                className="mt-2 flex flex-row items-center hover:text-green-300 w-max"
                title="Kup coś na sklepie"
              >
                <FaShoppingCart className="w-5 h-5 mr-2 text-white" />
                Sklep z obrazami
              </Link>
              <Link
                href="/studio-tatuazu-grudziadz-wzory"
                className="mt-2 flex flex-row items-center hover:text-green-300 w-max"
                title="Zobacz designy tatuaży"
              >
                <FaPencilAlt className="w-5 h-5 mr-2 text-white" />
                Design tatuaży
              </Link>
            </div>
            <div
              className={`xl:pl-2 mt-3 xl:mt-0 w-full flex flex-col py-3 ${
                isProductSlug
                  ? "items-start"
                  : "xl:items-end justify-center items-center"
              }`}
            >
              <Link
                href="/regulations"
                className="hover:text-green-300"
                title="Regulamin sklepu i polityka prywatności"
              >
                Regulamin sklepu
              </Link>
              <PrivacyButton isProductSlug={isProductSlug} />
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
