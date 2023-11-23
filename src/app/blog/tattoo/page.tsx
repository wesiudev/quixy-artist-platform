import { Post } from "@/types";
import Link from "next/link";
import Image from "next/image";
async function getBlogData() {
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/blog?secret=${process.env.API_SECRET_KEY}`,
    { next: { revalidate: 30 } }
  );
  const posts = req.json();
  return posts;
}
export default async function Page() {
  const { posts } = await getBlogData();
  return (
    <div className="mt-[66px]">
      <div
        className={`w-full px-5 lg:px-[8vw] xl:px-[12vw] bg-white pt-12 min-h-[60vh]`}
      >
        <span className="font-sans font-bold py-3">
          /{" "}
          <Link href="/" className="hover:underline hover:underline-offset-2">
            blackbellart
          </Link>{" "}
          /{" "}
          <Link
            href={`/blog`}
            className="hover:underline hover:underline-offset-2"
          >
            blog
          </Link>{" "}
          /{" "}
          <Link
            href={`/blog/tattoo`}
            className="hover:underline hover:underline-offset-2"
          >
            tattoo
          </Link>{" "}
          /{" "}
        </span>
        <div className="bg-gray-200 p-3 lg:p-6 mt-12 prose lg:prose-xl min-w-[100%]">
          <h1 className="text-3xl text-zinc-800 drop-shadow-lg shadow-black font-bold">
            Blog o tatuażach
          </h1>
          <p className="text-gray-500 w-full">
            W moim blogu o tatuażach stawiam na różnorodność tematyczną, aby
            zaspokoić ciekawość każdego czytelnika. Znajdziesz tu praktyczne
            porady dla klientów, pomagające w wyborze idealnego wzoru i
            odpowiedniego miejsca na tatuaż. Omawiam również najnowsze trendy i
            style w świecie tatuażu, od tradycyjnych po nowoczesne, abyś mógł
            znaleźć inspirację dostosowaną do swojego gustu.
          </p>
          <p className="text-gray-500 w-full">
            Historia tatuażu to fascynujący aspekt mojego bloga, gdzie odkrywasz
            ciekawostki z minionych epok i różnorodne znaczenia tatuaży w
            różnych kulturach. Przeprowadzam także wywiady z doświadczonymi
            tatuażystami, dostarczając wglądu w proces tworzenia tatuaży oraz
            udostępniając praktyczne wskazówki dotyczące pielęgnacji świeżego
            dzieła sztuki na skórze.
          </p>
          <p className="text-gray-500 w-full">
            Nie zapominam także o aspektach bezpieczeństwa i etyki, oferując
            praktyczne porady dotyczące bezpiecznego wyboru studia tatuażu.
          </p>
          <p className="text-gray-500 w-full">
            Zachęcam do zgłębiania świata tatuaży poprzez mojego bloga, gdzie
            każdy artykuł ma na celu dostarczenie wiedzy, inspiracji i głębszego
            zrozumienia tej unikalnej formy sztuki na skórze.
          </p>
        </div>
        <div className="text-3xl text-zinc-800 drop-shadow-lg shadow-black font-bold mt-12">
          Najnowsze wpisy
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6 mt-8">
          {posts.posts.map((post: Post, i: number) => (
            <Link
              href={`/blog/tattoo/${post.url}`}
              key={i}
              className="group relative aspect-square h-max flex flex-col hover:bg-purple-300 hover:p-1 duration-300 ease-in-out rounded-lg shadow-md  shadow-zinc-700"
            >
              <div className="w-full overflow-hidden flex items-start">
                <Image
                  src={post.mainImage}
                  width={1024}
                  height={1024}
                  alt={post.title + post.blogType}
                  className="w-full object-contain rounded-lg shadow-md shadow-zinc-700"
                />
              </div>
              <span className="group-hover:bg-gray-200 duration-300 group-hover:p-4 absolute bottom-3 left-3 right-3 text-base lg:text-xl  drop-shadow-xl shadow-black mt-3 bg-white text-zinc-700 font-bold  text-left p-3 rounded-lg">
                {post.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
