"use client";
import { auth } from "@/firebase";
import Header from "./Header";
import { useAuthState } from "react-firebase-hooks/auth";
import LoginPage from "./LoginPage";
import { useState, useEffect } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, loading] = useAuthState(auth);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (user && !loading) {
      setLoggedIn(true);
    }
  }, [user, loading]);

  return (
    <div className="w-full font-coco">
      {loggedIn && (
        <>
          <Header /> {children}
        </>
      )}
      {!loggedIn && <LoginPage />}
    </div>
  );
}
