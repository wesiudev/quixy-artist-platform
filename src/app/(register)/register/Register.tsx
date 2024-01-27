"use client";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { addDocument, auth } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";
import { toastUpdate } from "@/components/Toast/ToastUpdate";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { errorCatcher } from "../../../../utils/errorCatcher";
export default function Register({
  referer,
}: {
  referer: string | string[] | undefined;
}) {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);
  const [isThinking, setThinking] = useState(false);
  const [view, setView] = useState("register");
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
            referer: referer ? referer : "",
            isCollected: referer ? false : true,
            isCollectable: false,
            coupons: [],
          });
          toastUpdate("Sukces!", id, "success");
          setThinking(false);
        });
      } catch (err: any) {
        const errorMsg = errorCatcher(err);
        toastUpdate(errorMsg, id, "error");
        setThinking(false);
        router.push("/dashboard");
      }
    })();
  }
  const [accountType, setAccountType] = useState("");
  return (
    <div className="font-sans w-full  bg-center mx-auto relative flex flex-col items-center justify-center">
      <div className="mt-24 w-[90vw] sm:w-[70vw] lg:w-[60vw] xl:w-[40vw] p-4 lg:p-6 xl:p-8 2xl:p-10 rounded-2xl border border-gray-300">
        <h2
          className={`text-black text-center font-bold text-2xl lg:text-3xl xl:text-4xl drop-shadow-xl shadow-black font-cardo`}
        >
          Dołącz jako klient lub artysta
        </h2>
        <div className="mx-12 grid grid-cols-1 sm:grid-cols-2 gap-7 mt-12">
          <button
            onClick={() => setAccountType("client")}
            className={`hover:bg-[#46829c27] hover:shadow-sm hover:shadow-[#46829cc5] duration-300 rounded-lg p-3 flex flex-col py-5 border-gray-300 border hover:border-[#126b91] ${
              accountType === "client" &&
              "bg-[#46829c27] shadow-[#46829cc5] shadow-sm border-[#126b91]"
            }`}
          >
            <div className="flex flex-row justify-between items-start w-full">
              <Image
                src="/assets/client.png"
                width={100}
                height={100}
                alt=""
                className="w-12 h-12"
              />
              <div
                className={`relative flex items-center justify-center border-gray-300 rounded-full h-5 w-5 border-[2px]`}
              >
                <div
                  className={`${
                    accountType === "client" &&
                    "border-[10px] duration-75 border-[#126b91]"
                  } w-0 h-0 bg-[#126b91] rounded-full`}
                ></div>
                <div
                  className={`${
                    accountType === "client" &&
                    "border duration-75 border-white"
                  } w-2.5 h-2.5 rounded-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2`}
                ></div>
              </div>
            </div>
            <span className="text-left font-coco font-bold mt-4">
              Jestem klientem, szukam artysty do współpracy.
            </span>
          </button>
          <button
            onClick={() => setAccountType("artist")}
            className={`hover:bg-[#46829c27] hover:shadow-sm hover:shadow-[#46829cc5] duration-300 rounded-lg p-3 flex flex-col py-5 border-gray-300 border hover:border-[#126b91] ${
              accountType === "artist" &&
              "bg-[#46829c27] shadow-[#46829cc5] shadow-sm border-[#126b91]"
            }`}
          >
            <div className="flex flex-row justify-between items-start w-full">
              <Image
                src="/assets/artist.png"
                width={100}
                height={100}
                alt=""
                className="w-12 h-12"
              />
              <div
                className={`relative flex items-center justify-center border-gray-300 rounded-full h-5 w-5 border-[2px]`}
              >
                <div
                  className={`${
                    accountType === "artist" &&
                    "border-[10px] duration-75 border-[#126b91]"
                  } w-0 h-0 bg-[#126b91] rounded-full`}
                ></div>
                <div
                  className={`${
                    accountType === "artist" &&
                    "border duration-75 border-white"
                  } w-2.5 h-2.5 rounded-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2`}
                ></div>
              </div>
            </div>

            <span className="text-left font-coco font-bold mt-4">
              Jestem artystą, szukam pracy do wykonania.
            </span>
          </button>
        </div>
        <div className="w-full flex flex-col justify-center items-center mt-12">
          {accountType === "" && (
            <button
              disabled
              className="cursor-not-allowed button !bg-[#E3ECF0] !text-zinc-400 !font-normal !px-12"
            >
              Zarejestruj się
            </button>
          )}
          {accountType === "artist" && (
            <button className="button !font-normal !px-12">
              Dołącz jako artysta
            </button>
          )}
          {accountType === "client" && (
            <button className="button !font-normal !px-12">
              Zarejestruj konto klienta
            </button>
          )}
          <div className="flex flex-row items-center flex-wrap mt-8">
            Posiadasz już konto?{" "}
            <Link className="ml-2 text-[#126b91]" href="/login">
              Zaloguj się
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
