import { ArtworkData } from "@/types";
import AboutShop from "../AboutShop";
import Product from "./Product";
import { FaImages } from "react-icons/fa";

export default function Products({ products }: { products: ArtworkData[] }) {
  return (
    <div className="pt-12 mx-5 lg:mx-[8vw] xl:mx-[12vw] font-coco">
      <AboutShop
        title="Jaką sztukę tutaj znajdziesz?"
        description={
          <p>
            Zacznijmy od oryginalnych obrazów na płótnie mojego autorstwa.
            Maluję różnymi materiałami, od akwareli po farby olejne. Najczęściej
            używam gwaszu, akwareli oraz farb olejnych. Moje obrazy są jedyne w
            swoim rodzaju i nie powielam ich. Każdy z nich jest wyjątkowy i
            niepowtarzalny.
          </p>
        }
        imageAlt="Oryginalne obrazy na płótnie"
        imageUrl="/images/shop/Blank_Canvas.png"
      />
      <div className="border-l-4 border-purple-300 bg-gray-100 py-3 pl-3 lg:pl-6 mt-12">
        <h2 className="text-4xl  font-bold text-zinc-700 drop-shadow-lg shadow-black flex flex-row items-center">
          <FaImages className="mr-2 text-purple-300" />
          Oryginalne obrazy
        </h2>
        <p className=" mt-3 text-gray-400 w-3/4 lg:w-1/2">
          Oryginalna sztuka malowana na płótnie oraz innego rodzaju
          powierzchniach. Obrazy są dostępne również w formie druku na wysokiej
          jakości papierze.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
        {products.map((product: ArtworkData, i) => (
          <>
            {product.category === "artwork" && (
              <Product product={product} key={i} />
            )}
          </>
        ))}{" "}
      </div>
      <div className="pt-12 font-coco">
        <AboutShop
          title="Doskonałej jakości druki"
          description="Oferuję sprzedaż moich prac w formie druków. Jest to idealny wybór dla osób, które chcą mieć moje dzieło sztuki na ścianie w niewielkiej cenie. Druk jest wykonywany na wysokiej jakości papierze, który jest odporny na blaknięcie. Dzięki temu możesz cieszyć się moimi dziełami przez długie lata."
          imageAlt="Oryginalne druki obrazów na płótnie"
          imageUrl="/images/shop/Blank_Canvas_2.png"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
          {products.map((product: ArtworkData, i) => (
            <Product product={product} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
