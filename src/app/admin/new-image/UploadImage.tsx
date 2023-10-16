"use client";
import Link from "next/link";
var randomId = require("random-id");
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addImage, storage } from "../../../firebase/index";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import { polishToEnglish } from "@/utils/polishToEnglish";
import { ArtworkData, Section } from "@/types";

export default function UploadImage({ images }: any) {
  const [chosenImg, setChosenImg] = useState<any>();
  const [imgAlt, setImgAlt] = useState("");
  const [justAdded, setJustAdded] = useState<any[]>([]);
  const [startDelete, setStartDelete] = useState("");
  const [justDeleted, setJustDeleted] = useState<any[]>([]);
  const [showMessage, setShowMessage] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [sectionInput, setSectionInput] = useState<Section>({
    title: "",
    content: "",
  });
  const categories = ["sticker", "artwork", "inspiration", "print"];

  const [selectedCategory, setSelectedCategory] = useState("");
  const initialState: ArtworkData = {
    src: "",
    title: "",
    artist: "",
    year: 0,
    medium: "",
    dimensions: "",
    price: 0,
    isPrint: false,
    sections: [],
  };
  const [artworkData, setArtworkData] = useState(initialState);
  function uploadImage() {
    setLoading(true);
    const randId = `image-${randomId(20, "aA0")}`;
    const imageRef = ref(storage, randId);
    setJustAdded((oldArray) => [...oldArray, chosenImg]);
    uploadBytes(imageRef, chosenImg).then(() =>
      getDownloadURL(imageRef)
        .then((url) => {
          const req = {
            src: url,
            id: randId,
            title: artworkData.title,
            slug: polishToEnglish(artworkData.title),
            artist: artworkData.artist,
            year: artworkData.year,
            medium: artworkData.medium,
            dimensions: artworkData.dimensions,
            price: artworkData.price,
            isPrint: artworkData.isPrint,
            sections: artworkData.sections,
            category: selectedCategory,
          };
          addImage("blackbellart", req);
        })
        .then(() => setLoading(false))
    );
  }
  function handleArtworkDataChange(key: keyof ArtworkData, value: any) {
    setArtworkData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  }

  return (
    <div className="relative">
      <div
        className={`flex flex-col items-center justify-center overflow-y-scroll w-full h-full fixed left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] bg-slate-200 rounded-xl border-black border-4 duration-500 ${
          chosenImg ? "scale-100 bg-opacity-50" : "scale-0 bg-opacity-0"
        }`}
      >
        <Image
          src={chosenImg ? URL.createObjectURL(chosenImg) : ""}
          width={1024}
          height={1024}
          alt=""
          className={`${
            isLoading ? "blur-sm" : "blur-none"
          } duration-500 h-3/4 w-auto max-w-screen lg:max-w-[80vw]`}
        />
        <label>
          Tytuł:
          <input
            type="text"
            value={artworkData.title}
            onChange={(e) => handleArtworkDataChange("title", e.target.value)}
          />
        </label>
        <label>
          Artysta:
          <input
            type="text"
            value={artworkData.artist}
            onChange={(e) => handleArtworkDataChange("artist", e.target.value)}
          />
        </label>
        <label>
          Rok:
          <input
            type="number"
            value={artworkData.year}
            onChange={(e) =>
              handleArtworkDataChange("year", parseInt(e.target.value))
            }
          />
        </label>
        <label>
          Technika:
          <input
            type="text"
            value={artworkData.medium}
            onChange={(e) => handleArtworkDataChange("medium", e.target.value)}
          />
        </label>
        <label>
          Wymiary:
          <input
            type="text"
            value={artworkData.dimensions}
            onChange={(e) =>
              handleArtworkDataChange("dimensions", e.target.value)
            }
          />
        </label>
        <label>
          Cena:
          <input
            type="number"
            value={artworkData.price}
            onChange={(e) =>
              handleArtworkDataChange("price", parseInt(e.target.value))
            }
          />
        </label>
        <label>
          Print też?
          <input
            type="checkbox"
            checked={artworkData.isPrint}
            onChange={(e) =>
              handleArtworkDataChange("isPrint", e.target.checked)
            }
          />
        </label>
        <div>
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <h1>TO BEDZIE POD PRODUKTEM.</h1>
        Sekcje:
        <input
          type="text"
          value={sectionInput.title}
          onChange={(e) =>
            setSectionInput({ ...sectionInput, title: e.target.value })
          }
        />
        <input
          type="text"
          value={sectionInput.content}
          onChange={(e) =>
            setSectionInput({ ...sectionInput, content: e.target.value })
          }
        />
        <button
          onClick={() => {
            setArtworkData((prevData: ArtworkData) => ({
              ...prevData,
              sections: [...prevData.sections, sectionInput],
            }));
            setSectionInput({
              title: "",
              content: "",
            });
          }}
        >
          dodaj
        </button>
        DODAJ JAK GOTOWE
        <div className="mt-24">
          <button
            disabled={isLoading}
            onClick={() => {
              uploadImage(), setShowMessage("dodano");
              setTimeout(() => {
                setShowMessage("");
                setChosenImg(""),
                  setArtworkData(initialState),
                  setSectionInput({ title: "", content: "" });
              }, 3000);
            }}
            className="w-full lg:[w-300px] bg-green-500 hover:bg-green-400 p-3 duration-200 text-white text-2xl disabled:cursor-not-allowed disabled:bg-green-200"
          >
            {isLoading ? "ŁADOWANIE" : "DODAJ"}
          </button>
          <button
            onClick={() => {
              setChosenImg(""),
                setArtworkData(initialState),
                setSectionInput({ title: "", content: "" });
            }}
            className="w-full lg:[w-300px] bg-red-500 hover:bg-red-400 p-3 duration-200 text-white text-2xl mt-3"
          >
            ODRZUĆ
          </button>
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
      <Link
        href="/admin"
        className="w-full text-center bg-gray-500 text-white text-3xl py-6 flex items-center pl-3"
      >
        <FaArrowLeft className="mr-2" />
        Powrót
      </Link>
      <input
        className="w-full h-24 relative before:left-0 top-0 before:absolute before:h-full before:w-full before:bg-purple-500 before:text-white before:text-3xl before:text-center before:flex before:items-center before:justify-center  before:content-['DODAJ_ZDJĘCIE']"
        type="file"
        accept="image/*"
        onChange={(event: any) => {
          setChosenImg(event.target.files[0]);
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
          }, 5000);
        }}
      />
      <h1 className="py-3 bg-blue-300 text-3xl text-white px-3">
        Wszystkie zdjęcia
      </h1>
      {/* <div className="flex flex-row flex-wrap h-max bg-rose-200">
        {images.images.length > 0 &&
          images.images.map((image: any, i: any) => (
            <div
              className={`flex flex-col relative h-max ${
                justDeleted.includes(image.id) ? "hidden" : "block"
              }`}
              key={i}
            >
              {startDelete === image.id && (
                <div className="bg-white w-full h-full z-[60] absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] text-center text-xl flex flex-col justify-center">
                  usunąć?
                  <div className="flex flex-row w-full">
                    <button
                      onClick={() => {
                        deleteImage("blackbellart", image),
                          setStartDelete(""),
                          setJustDeleted((oldArray) => [
                            ...oldArray!,
                            image.id,
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
              <Image
                className={`max-h-[300px] w-auto space-x-3 bg-gray-300 `}
                width={1024}
                height={1024}
                src={image.src}
                alt=""
                key={i}
              />
              <button
                onClick={() => setStartDelete(image.id)}
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
      </div> */}
    </div>
  );
}
