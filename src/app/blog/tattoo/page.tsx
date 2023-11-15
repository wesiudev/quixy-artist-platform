import { Post } from "@/types";
import Link from "next/link";
import Image from "next/image";
async function getBlogData() {
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/blog?secret=${process.env.API_SECRET_KEY}`,
    { next: { revalidate: 300 } }
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
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6 mt-24">
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
              <h1 className="group-hover:bg-gray-200 duration-300 group-hover:p-4 absolute bottom-3 left-3 right-3 text-base lg:text-xl  drop-shadow-xl shadow-black mt-3 bg-white text-zinc-700 font-bold  text-left p-3 rounded-lg">
                {post.title}
              </h1>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
