import TattooContent from "./TattooContent";

export default async function Page() {
  const tattoos = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/tattoo`
  ).then((res) => res.json());

  return (
    <>
      <div
        className={`w-full overflow-x-hidden duration-500 h-screen bg-white   overflow-y-scroll font-coco`}
      >
        <TattooContent tattoos={tattoos.tattoos} />
      </div>
    </>
  );
}
