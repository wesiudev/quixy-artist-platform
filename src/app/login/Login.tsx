"use client";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { addDocument, auth } from "@/firebase";
import { toast } from "react-toastify";
import { toastUpdate } from "@/components/Toast/ToastUpdate";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { errorCatcher } from "../../../utils/errorCatcher";

export default function Login() {
  const router = useRouter();
  const [isThinking, setThinking] = useState(false);
  const [view, setView] = useState("login");
  const [userData, setUserData] = useState({
    phoneNumber: "",
    password: "",
    passwordRepeat: "",
    email: "",
  });
  function signIn() {
    setThinking(true);
    const id = toast.loading(<span>Loguję...</span>);
    (async () => {
      try {
        await signInWithEmailAndPassword(
          auth,
          userData.email,
          userData.password
        ).then((userCredential) => {
          toastUpdate("Sukces!", id, "success");
          setThinking(false);
          router.push("/dashboard");
        });
      } catch (err: any) {
        const errorMsg = errorCatcher(err);
        toastUpdate(errorMsg, id, "error");
        setThinking(false);
      }
    })();
  }
  function createAccount() {
    setThinking(true);
    const id = toast.loading(<span>Tworzę konto...</span>);
    if (userData.password !== userData.passwordRepeat) {
      setThinking(false);
      toastUpdate("Hasła nie są takie same", id, "error");
      return;
    }
    if (userData.password?.length < 6) {
      setThinking(false);
      toastUpdate("Hasło jest za krótkie (minimum 6 znaków)", id, "error");
      return;
    }
    if (!userData.email) {
      setThinking(false);
      toastUpdate("Proszę wpisać email", id, "error");
      return;
    }
    if (userData.phoneNumber.length < 9) {
      setThinking(false);
      toastUpdate("Proszę wpisać poprawny numer", id, "error");
      return;
    }
    (async () => {
      try {
        await createUserWithEmailAndPassword(
          auth,
          userData.email,
          userData.password
        ).then((userCredential) => {
          addDocument("users", userCredential.user.uid, {
            email: userData.email,
            phoneNumber: userData.phoneNumber,
            uid: userCredential.user.uid,
            isCollected: true,
            isCollectable: false,
            joined: Date.now(),
            coupons: [],
          });
          toastUpdate("Sukces!", id, "success");
          setThinking(false);
          router.push("/dashboard");
        });
      } catch (err: any) {
        const errorMsg = errorCatcher(err);
        toastUpdate(errorMsg, id, "error");
        setThinking(false);
      }
    })();
  }
  return (
    <div className="font-sans w-full min-h-screen mt-[75px]  bg-slug bg-cover bg-center mx-auto relative flex flex-col items-center justify-center">
      {/* <div className="flex sm:hidden flex-col items-center justify-center text-center rounded-b-xl py-8 w-[90vw] sm:w-[70vw] lg:w-[60vw] xl:w-[40vw]">
        <FaCheckCircle className="text-green-600 mb-3 h-16 w-16" />
        <span className="font-bold text-4xl ">Sukces!</span>
        <h2 className="font-bold text-xl ">
          Twoja rezerwacja czeka na zatwierdzenie. <br />
          <span className="font-light">Rezerwacja: {bookingData.id}</span>
        </h2>
      </div> */}
      <div className="w-[90vw] sm:w-[70vw] lg:w-[60vw] xl:w-[40vw] p-4 lg:p-6 rounded-xl bg-gray-200 mt-4">
        <h2
          className={`text-zinc-800 text-center py-3 font-bold text-2xl lg:text-3xl xl:text-4xl drop-shadow-xl shadow-black`}
        >
          {view === "register"
            ? "Zarejestruj się i rezerwuj sesje manicure"
            : "Zaloguj się na swoje konto"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-12">
          {view === "register" && (
            <div className="flex flex-col">
              <label htmlFor="phone" className="font-bold">
                Numer telefonu
              </label>
              <input
                type="text"
                id="phone"
                value={userData.phoneNumber}
                placeholder="Wpisz numer telefonu"
                required
                onChange={(e) =>
                  setUserData({ ...userData, phoneNumber: e.target.value })
                }
                className="mt-1 bg-white text-black shadow-sm shadow-black rounded-xl p-3 text-xl mb-3"
              />
            </div>
          )}
          <div className="flex flex-col">
            {" "}
            <label htmlFor="email" className="font-bold">
              Email
            </label>
            <input
              required
              type="email"
              id="email"
              placeholder="Wpisz email"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              className="mt-1 bg-white text-black shadow-sm shadow-black rounded-xl  p-3 text-xl mb-3"
            />
          </div>
          <div className="flex flex-col">
            {" "}
            <label htmlFor="password" className="font-bold">
              Hasło
            </label>
            <input
              required
              type="password"
              placeholder="Wpisz hasło"
              id="password"
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
              className="mt-1 bg-white text-black shadow-sm shadow-black rounded-xl  p-3 text-xl mb-3"
            />
          </div>
          {view === "register" && (
            <div className="flex flex-col">
              {" "}
              <label htmlFor="passwordRepeat" className="font-bold">
                Powtórz Hasło
              </label>
              <input
                required
                placeholder="Powtórz hasło"
                type="password"
                id="passwordRepeat"
                value={userData.passwordRepeat}
                onChange={(e) =>
                  setUserData({ ...userData, passwordRepeat: e.target.value })
                }
                className="mt-1 bg-white text-black shadow-sm shadow-black rounded-xl  p-3 text-xl mb-3"
              />
            </div>
          )}
        </div>{" "}
        <div className="grid grid-cols-1 gap-3 w-full">
          {view === "register" && (
            <button
              disabled={isThinking}
              onClick={createAccount}
              className="mt-2 py-2 rounded-xl disabled:bg-gray-600 bg-green-600 hover:bg-green-800 duration-150 text-white font-bold"
            >
              {!isThinking && "Dołącz"}
              {isThinking && "Poczekaj..."}
            </button>
          )}
          {view === "login" && (
            <button
              disabled={isThinking}
              onClick={signIn}
              className="mt-2 py-2 rounded-xl disabled:bg-gray-600 bg-green-600 hover:bg-green-800 duration-150 text-white font-bold"
            >
              {!isThinking && "Zaloguj"}
              {isThinking && "Poczekaj..."}
            </button>
          )}
          {view === "register" && (
            <button
              onClick={() => setView("login")}
              className="mt-2 py-2 rounded-xl hover:underline duration-200 text-black font-bold"
            >
              Posiadam już konto
            </button>
          )}
          {view === "login" && (
            <button
              onClick={() => setView("register")}
              className="mt-2 py-2 rounded-xl hover:underline duration-200 text-black font-bold"
            >
              Utwórz konto
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
