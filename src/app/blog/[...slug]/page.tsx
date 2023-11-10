import { getPost } from "@/lib/getPost";
import { Post } from "@/types";
import { polishToEnglish } from "@/utils/polishToEnglish";
import { renderMarkdown } from "@/lib/parseMarkdown";
import Link from "next/link";
import ScrollTo from "@/components/ScrollTo";
import TopBar from "@/app/shop/components/ShopHeader/TopBar";

export async function generateStaticParams() {
  const { posts } = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/blog?secret=${process.env.API_SECRET_KEY}`
  ).then((res) => res.json());

  return posts.posts.map((post: Post) => ({
    slug: [`${post.blogType}`, `${post.url}`],
  }));
}

export default async function Page({ params }: { params: any }) {
  const { post }: { post: Post } = await getPost(
    params.slug[1],
    params.slug[0]
  );

  if (post)
    return (
      <>
        <div className="mt-[66px]">
          <div
            className={`w-full px-5 lg:px-[8vw] xl:px-[12vw] bg-white pt-12`}
          >
            <span className="font-sans font-bold py-3 ">
              /{" "}
              <Link
                href="/"
                className="hover:underline hover:underline-offset-2"
              >
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
                href={`/blog/${polishToEnglish(post.blogType)}`}
                className="hover:underline hover:underline-offset-2"
              >
                {post.blogType}
              </Link>{" "}
              /{" "}
              <Link
                href={`/blog/${polishToEnglish(
                  post.blogType
                )}/${polishToEnglish(post.title)}`}
                className="hover:underline hover:underline-offset-2"
              >
                {polishToEnglish(post.title)}
              </Link>
            </span>
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full font-coco mt-12">
              {/* 1 */}
              <div className="flex flex-col prose lg:prose-xl ">
                <h1 className="leading-relaxed font-bold text-purple-500">
                  {post.title}
                </h1>

                <div dangerouslySetInnerHTML={renderMarkdown(post.intro)} />

                {post.sections.length > 0 && (
                  <p className="">W tym poście przeczytasz o:</p>
                )}
                <div className="flex flex-col">
                  {post.sections.length > 0 &&
                    post.sections.map((section: any, idx) => (
                      <span key={idx} className="relative h-12">
                        <ScrollTo section={section} />
                      </span>
                    ))}
                </div>

                {post.sections.map((section: any, idx) => (
                  <div id={`${polishToEnglish(section.title)}`} key={idx}>
                    <h2 className="leading-relaxed font-bold">
                      {section.title}
                    </h2>
                    <div
                      className=""
                      dangerouslySetInnerHTML={{
                        __html: section.content,
                      }}
                    />
                  </div>
                ))}

                <p className="leading-relaxed">{post.outro}</p>
                <div className="flex flex-row space-x-6 flex-wrap">
                  {post.tags.map((tag: any, i) => (
                    <Link href={`/blog/?tag=${tag.name}`} key={i}>
                      {tag.name}
                    </Link>
                  ))}
                </div>
              </div>
              {/* 2 */}
              <div className="flex flex-col h-full w-full items-end">
                <div className="lg:w-3/4 h-full"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
export async function generateMetadata({ params }: { params: any }) {
  // fetch data
  const { post } = await getPost(params.slug[1], params.slug[0]);
  const faqQuestions =
    post?.faq?.map((item: { question: string; answer: string }) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })) || [];
  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqQuestions,
  };
  const title = `${post.metaTitle} - BlackbellArt`;
  const description = `${post.metaDescription}`;
  if (post)
    return {
      title: title,
      description: description,
      openGraph: {
        type: "website",
        url: "https://blackbellart.com/",
        title,
        description,
        siteName: "Quixy",
        images: [
          {
            url: "/favicons/favicon-16x16.png",
            sizes: "16x16",
            type: "image/png",
          },
          {
            url: "/favicons/favicon-32x32.png",
            sizes: "32x32",
            type: "image/png",
          },
          {
            url: "/favicons/favicon.ico",
            sizes: "48x48",
            type: "image/x-icon",
          },
        ],
      },
      twitter: {
        cardType: "summary_large_image",
        site: "@blackbellart",
        title,
        description,
        image: {
          url: "/favicons/android-chrome-512x512.png",
          alt: "blackbellart logo",
        },
      },
      schema: [faqPage],
      meta: [
        {
          name: "theme-color",
          content: "white", // replace with your desired theme color
        },
      ],
    };
}
