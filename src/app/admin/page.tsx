import Link from "next/link";

export default async function Admin() {
  return (
    <div className="grid grid-cols-2 text-center lg:grid-cols-3">
      <Link
        href="/admin/new-post"
        className="flex items-center justify-center aspect-square bg-blue-500 text-white text-2xl lg:text-5xl hover:bg-blue-400 duration-200"
      >
        NOWY POST
      </Link>
      <Link
        href="/admin/new-product"
        className="flex items-center justify-center aspect-square bg-green-500 text-white text-2xl lg:text-5xl hover:bg-green-400 duration-200"
      >
        NOWY PRODUKT
      </Link>
      <Link
        href="/admin/new-image"
        className="flex items-center justify-center aspect-square bg-purple-500 text-white text-2xl lg:text-5xl hover:bg-purple-400 duration-200"
      >
        NOWY OBRAZEK
      </Link>
    </div>
  );
}
