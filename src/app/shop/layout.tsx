import Link from "next/link";
import ShopHeader from "./components/ShopHeader";
import TopBar from "./components/ShopHeader/TopBar";
import ShopFooter from "./components/ShopFooter";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white">
      {" "}
      <TopBar />
      {children}
      <ShopFooter />
    </div>
  );
}
