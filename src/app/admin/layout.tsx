"use client";
import { auth } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import LoginPage from "./LoginPage";
import Nav from "./Nav";
import Loading from "./loading";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useState } from "react";
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, loading] = useAuthState(auth);
  const [isNavOpen, setNavOpen] = useState(true);
  if (loading) {
    return <Loading />;
  } else
    return (
      <div className="w-full font-coco relative z-[9999] bg-white">
        {user ? (
          <>
            <Nav isNavOpen={isNavOpen} setNavOpen={setNavOpen} />
            <div
              className={`${
                isNavOpen ? "pl-[300px]" : "pl-[0px]"
              } duration-500 min-w-full min-h-screen bg-[#222430]`}
            >
              {children}
            </div>
          </>
        ) : (
          <LoginPage />
        )}
      </div>
    );
}
