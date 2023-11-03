"use client";
import Link from "next/link";
var randomId = require("random-id");
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addTattoo, deleteTattoo, storage } from "../../../firebase/index";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import { Tattoo } from "@/types";
import EditTattoo from "./EditTattoo";
const bodyParts = [
  "Ramię",
  "Plecy",
  "Noga",
  "Przedramię",
  "Łydka",
  "Klatka piersiowa",
  "Kark",
  "Ręka",
  "Bark",
  "Dłoń",
  "Stopa",
  "Biodro",
  "Kostka",
  "Śródstopie",
  "Brzuch",
  "Szyja",
  "Pierś",
  "Biceps",
  "Żebra",
  "Piszczel",
  "Kolano",
  "Łokieć",
];
export default function UploadImage({ tattoos }: any) {
  const [chosenImg, setChosenImg] = useState<any>("");
  const [chosenWorkImg, setChosenWorkImg] = useState<any>("");
  const [justAdded, setJustAdded] = useState<any[]>([]);
  const [startDelete, setStartDelete] = useState("");
  const [justDeleted, setJustDeleted] = useState<any[]>([]);
  const [showMessage, setShowMessage] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const initialStateTattoo: Tattoo = {
    projectSrc: "",
    workSrc: "",
    title: "",
    description: "",
    meaning: "",
    partsOfTheBody: [],
  };
  const [selectedTattoo, setSelectedTattoo] =
    useState<Tattoo>(initialStateTattoo);

  const initialState: Tattoo = {
    projectSrc: "",
    workSrc: "",
    title: "",
    description: "",
    meaning: "",
    partsOfTheBody: [],
  };

  const [artworkData, setArtworkData] = useState(initialState);
  function uploadImage() {
    setLoading(true);
    const randId = `image-${randomId(20, "aA0")}`;
    setJustAdded((oldArray) => [...oldArray, chosenImg]);
    addTattoo("blackbellart", {
      projectSrc: imageUrls[0],
      workSrc: imageUrls[1] ? imageUrls[1] : "none",
      id: randId,
      title: artworkData.title,
      description: artworkData.description,
      meaning: artworkData.meaning,
      partsOfTheBody: artworkData.partsOfTheBody,
    });
    setArtworkData(initialState);
    setImageUrls([]);
  }
  function handleImageUpload(img: File) {
    const randId = `image-${randomId(20, "aA0")}`;
    const imageRef = ref(storage, randId);
    uploadBytes(imageRef, img).then(() =>
      getDownloadURL(imageRef).then((url) => {
        setImageUrls((oldArray) => [...oldArray, url]);
      })
    );
  }
  function handleArtworkDataChange(key: keyof Tattoo, value: any) {
    setArtworkData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  }

  return (
    <div className="relative">
      <div
        className={`z-[9999] h-[90vh] overflow-y-scroll w-[90vw] scrollbar fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] bg-slate-700 rounded-xl  duration-500 ${
          selectedTattoo.projectSrc !== ""
            ? "scale-100 bg-opacity-100"
            : "scale-0 bg-opacity-0"
        }`}
      >
        <EditTattoo
          selectedTattoo={selectedTattoo}
          initial={initialStateTattoo}
          setSelectedTattoo={setSelectedTattoo}
        />
      </div>
      <div
        className={`z-[9999] h-[90vh] overflow-y-scroll w-[90vw] scrollbar fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] bg-slate-700 rounded-xl  duration-500 ${
          chosenImg ? "scale-100 bg-opacity-90" : "scale-0 bg-opacity-0"
        }`}
      >
        <div className="p-6 rounded-xl mb-6 px-12">
          <div className="bg-white p-6 rounded-xl  border-4 border-black  mb-6">
            <h1 className="text-3xl w-max mx-auto font-bold text-zinc-700 drop-shadow shadow-black">
              DODAJESZ TATUAŻ
            </h1>
            <div className="flex flex-row w-full space-x-12 items-center justify-center">
              <div className="">
                {chosenImg !== "" && (
                  <Image
                    src={chosenImg ? URL.createObjectURL(chosenImg) : ""}
                    width={512}
                    height={512}
                    alt=""
                    className={`${
                      isLoading ? "blur-sm" : "blur-none"
                    } duration-500 h-[300px] w-auto mt-12 mx-auto border-8 border-green-500 rounded-xl bg-green-300`}
                  />
                )}
              </div>
              <div className="">
                {!imageUrls[1] ? (
                  <div className="h-full w-full bg-gray-400 text-white flex flex-col items-center justify-center">
                    <input
                      className="w-full h-24 relative before:left-0 top-0 before:absolute before:h-full before:w-full before:bg-gray-500 before:text-white before:text-3xl before:text-center before:flex before:items-center before:justify-center  before:content-['DODAJ_GOTOWY']"
                      type="file"
                      accept="image/*"
                      onChange={(event: any) => {
                        setChosenWorkImg(event.target.files[0]);
                        handleImageUpload(event.target.files[0]);
                        setLoading(true);
                        setTimeout(() => {
                          setLoading(false);
                        }, 5000);
                      }}
                    />
                  </div>
                ) : (
                  <>
                    {chosenWorkImg !== "" && (
                      <Image
                        src={
                          chosenWorkImg
                            ? URL.createObjectURL(chosenWorkImg)
                            : ""
                        }
                        width={512}
                        height={512}
                        alt=""
                        className={`${
                          isLoading ? "blur-sm" : "blur-none"
                        } duration-500 h-[300px] w-auto mt-12 mx-auto border-8 border-green-500 rounded-xl bg-green-300`}
                      />
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="h-max flex flex-col items-center justify-center ">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-max items-center justify-center w-full gap-3">
              <div className="p-6 rounded-xl bg-white border-4 border-black w-full">
                <div className="flex flex-col">
                  <span className="font-bold mb-5 text-3xl">Nazwa:</span>
                  <input
                    className={`font-bold text-zinc-700 drop-shadow-md shadow-black p-3 rounded-md ${
                      artworkData.title
                        ? "border-2 border-green-500"
                        : "border-2"
                    }`}
                    type="text"
                    value={artworkData.title}
                    onChange={(e) =>
                      handleArtworkDataChange("title", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className=" w-full p-6 rounded-xl bg-white border-4 border-black">
                <div className="flex flex-col">
                  <span className="font-bold mb-5 text-3xl">Opis:</span>
                  <input
                    className={`font-bold text-zinc-700 drop-shadow-md shadow-black p-3 rounded-md ${
                      artworkData.description
                        ? "border-2 border-green-500"
                        : "border-2"
                    }`}
                    type="text"
                    value={artworkData.description}
                    onChange={(e) =>
                      handleArtworkDataChange("description", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className=" w-full p-6 rounded-xl bg-white border-4 border-black">
                <div className="flex flex-col">
                  <span className="font-bold mb-5 text-3xl">Znaczenie:</span>
                  <input
                    className={`font-bold text-zinc-700 drop-shadow-md shadow-black p-3 rounded-md ${
                      artworkData.meaning
                        ? "border-2 border-green-500"
                        : "border-2"
                    }`}
                    type="text"
                    value={artworkData.meaning}
                    onChange={(e) =>
                      handleArtworkDataChange("meaning", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full h-max mt-6 p-6 rounded-xl bg-white border-4 border-black">
              <h1 className="font-bold mb-5 text-3xl">
                Proponowane części ciała
              </h1>
              <div className="flex flex-row flex-wrap space-x-2  -ml-2">
                {bodyParts.map((item: string, i: any) => (
                  <button
                    onClick={() => {
                      const updatedParts = artworkData.partsOfTheBody.includes(
                        item as never
                      )
                        ? artworkData.partsOfTheBody.filter(
                            (part: string) => part !== item
                          )
                        : [...artworkData.partsOfTheBody, item];
                      setArtworkData({
                        ...artworkData,
                        partsOfTheBody: updatedParts as never[],
                      });
                    }}
                    key={i}
                    className={`${
                      i === 0 && "ml-2"
                    } w-max p-2  text-white font-light rounded-xl hover:bg-slate-800 duration-500 ${
                      artworkData.partsOfTheBody.includes(item as never)
                        ? "border-2 border-green-600 bg-green-500"
                        : "border-2 bg-black"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <button
                disabled={isLoading}
                onClick={() => {
                  uploadImage(), setShowMessage("dodano");
                  setTimeout(() => {
                    setShowMessage("");
                    setChosenImg("");
                  }, 3000);
                }}
                className="w-max mx-auto rounded-lg bg-green-500 hover:bg-green-400 p-3 duration-200 text-white text-2xl disabled:cursor-not-allowed disabled:bg-green-200"
              >
                {isLoading ? "ŁADOWANIE" : "DODAJ TATUAŻ"}
              </button>
              <button
                onClick={() => {
                  setChosenImg(""), setArtworkData(initialState);
                  setImageUrls([]);
                }}
                className="w-max mx-auto ml-3 rounded-lg bg-red-500 hover:bg-red-400 p-3 duration-200 text-white text-2xl mt-3"
              >
                ODRZUĆ
              </button>
            </div>
          </div>
        </div>
        {showMessage === "deleted" && (
          <div className="w-max h-max absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] bg-rose-400 text-white text-2xl p-3 ronded-md ">
            usunięto
          </div>
        )}
        {showMessage === "added" && (
          <div className="w-max h-max absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] bg-green-400 text-white text-2xl p-3 ronded-md ">
            dodano
          </div>
        )}{" "}
      </div>
      <Link
        href="/admin"
        className="w-full text-center bg-gray-500 text-white text-3xl py-6 flex items-center pl-3"
      >
        <FaArrowLeft className="mr-2" />
        Powrót
      </Link>
      <input
        className="w-full h-24 relative before:left-0 top-0 before:absolute before:h-full before:w-full before:bg-purple-500 before:text-white before:text-3xl before:text-center before:flex before:items-center before:justify-center  before:content-['DODAJ_TATUAŻ']"
        type="file"
        accept="image/*"
        onChange={(event: any) => {
          setChosenImg(event.target.files[0]);
          handleImageUpload(event.target.files[0]);
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
          }, 5000);
        }}
      />
      <h1 className="py-3 bg-blue-300 text-3xl text-white px-3">
        Wszystkie tatuaże
      </h1>
      <div className="flex flex-row flex-wrap h-max bg-rose-200">
        {tattoos?.tattoos.length > 0 &&
          tattoos.tattoos.map((tattoo: Tattoo, i: any) => (
            <div
              onClick={() => setSelectedTattoo(tattoo)}
              className={`flex flex-col relative h-max ${
                justDeleted.includes(tattoo.id) ? "hidden" : "block"
              }`}
              key={i}
            >
              {startDelete === tattoo.id && (
                <div className="bg-white w-full h-full z-[60] absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] text-center text-xl flex flex-col justify-center">
                  usunąć?
                  <div className="flex flex-row w-full">
                    <button
                      onClick={() => {
                        deleteTattoo("blackbellart", tattoo),
                          setStartDelete(""),
                          setJustDeleted((oldArray) => [
                            ...oldArray!,
                            tattoo.id,
                          ]);
                        setShowMessage("deleted");
                        setTimeout(() => {
                          setShowMessage("");
                        }, 3000);
                      }}
                      className="bg-red-500 p-3 w-full"
                    >
                      usuń
                    </button>
                    <button
                      onClick={() => setStartDelete("")}
                      className="bg-green-500 p-3 w-full"
                    >
                      nie
                    </button>
                  </div>
                </div>
              )}
              {tattoo.projectSrc && (
                <Image
                  className={`max-h-[300px] w-auto space-x-3 bg-gray-300 `}
                  width={1024}
                  height={1024}
                  src={tattoo.projectSrc}
                  alt=""
                  key={i}
                />
              )}
              <button
                onClick={() => setStartDelete(tattoo.id!)}
                className="w-3/4 bg-opacity-75 hover:bg-opacity-100 duration-200 absolute bottom-3 left-[50%] -translate-x-[50%] z-50 py-3 text-white font-bold text-xl bg-red-500 hover:bg-red-400 rounded-md"
              >
                usuń
              </button>
            </div>
          ))}
        {justAdded.length > 0 &&
          justAdded.map((image: any, i: any) => (
            <Image
              key={i}
              className={`max-h-[300px] w-auto space-x-3 bg-gray-300 `}
              width={1024}
              height={1024}
              src={URL.createObjectURL(image)}
              alt=""
            />
          ))}
      </div>
    </div>
  );
}
