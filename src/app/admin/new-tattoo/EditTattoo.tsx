import { Tattoo } from "@/types";
import Link from "next/link";

import { useState } from "react";
var randomId = require("random-id");
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage, updateTattoo } from "../../../firebase/index";
import Image from "next/image";
export default function EditTattoo({
  selectedTattoo,
  initial,
  setSelectedTattoo,
}: {
  selectedTattoo: Tattoo;
  initial: Tattoo;
  setSelectedTattoo: Function;
}) {
  const [chosenImg, setChosenImg] = useState<any>();
  const [isLoading, setLoading] = useState(false);
  function updateImage(img: File) {
    const randId = `image-${randomId(20, "aA0")}`;
    const imageRef = ref(storage, randId);
    uploadBytes(imageRef, img).then(() =>
      getDownloadURL(imageRef).then((url) => {
        updateTattoo("blackbellart", selectedTattoo.id, {
          ...selectedTattoo,
          workSrc: url,
        });
        setSelectedTattoo(initial);
      })
    );
  }
  if (selectedTattoo)
    return (
      <div>
        <div className="flex flex-row items-center relative">
          <button
            onClick={() => setSelectedTattoo(initial)}
            className="absolute right-6 top-6 text-red-500 font-bold"
          >
            WYŁONCZ
          </button>
          <div className="flex flex-col items-center justify-center w-full p-12">
            <h1 className="text-3xl text-white">Aktualizujesz tatuaż</h1>

            <div
              className={`flex flex-row items-center ${
                !chosenImg && "flex-col"
              }`}
            >
              {selectedTattoo.projectSrc && (
                <Image
                  src={selectedTattoo.projectSrc}
                  width={512}
                  height={512}
                  alt=""
                  className={`${
                    isLoading ? "blur-sm" : "blur-none"
                  } duration-500 h-[300px] w-auto mt-12 mx-auto border-8 border-orange-500 rounded-xl bg-orange-300 mb-12`}
                />
              )}
              {chosenImg !== "" ? (
                <div className="h-full w-full bg-gray-400 text-white flex flex-row items-center justify-center">
                  <input
                    className="w-full h-24 relative before:left-0 top-0 before:absolute before:h-full before:w-full before:bg-gray-500 before:text-white before:text-3xl before:text-center before:flex before:items-center before:justify-center  before:content-['DODAJ_GOTOWY']"
                    type="file"
                    accept="image/*"
                    onChange={(event: any) => {
                      setChosenImg(event.target.files[0]);
                      updateImage(event.target.files[0]);
                      setLoading(true);
                      setTimeout(() => {
                        setLoading(false);
                      }, 5000);
                    }}
                  />
                </div>
              ) : (
                <>
                  {chosenImg && (
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
                </>
              )}
            </div>
            <div className="mt-12">
              <div className="flex flex-col  items-center space-y-3">
                <label
                  htmlFor="description"
                  className="text-lg text-white font-medium mb-2 w-full"
                >
                  Description
                </label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  value={selectedTattoo.description}
                  onChange={(e) =>
                    setSelectedTattoo({
                      ...selectedTattoo,
                      description: e.target.value,
                    })
                  }
                  className="border border-gray-400 p-2 rounded-lg mb-4 min-w-[500px]"
                />

                <label
                  htmlFor="meaning"
                  className="text-lg text-white font-medium mb-2 w-full"
                >
                  Meaning
                </label>
                <input
                  type="text"
                  id="meaning"
                  name="meaning"
                  value={selectedTattoo.meaning}
                  onChange={(e) =>
                    setSelectedTattoo({
                      ...selectedTattoo,
                      meaning: e.target.value,
                    })
                  }
                  className="border border-gray-400 p-2 rounded-lg mb-4 min-w-[500px]"
                />

                <label
                  htmlFor="title"
                  className="text-lg text-white font-medium mb-2 w-full"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={selectedTattoo.title}
                  onChange={(e) =>
                    setSelectedTattoo({
                      ...selectedTattoo,
                      title: e.target.value,
                    })
                  }
                  className="border border-gray-400 p-2 rounded-lg mb-4 min-w-[500px]"
                />
              </div>
              <button
                onClick={() => {
                  updateTattoo(
                    "blackbellart",
                    selectedTattoo.id,
                    selectedTattoo
                  ),
                    setSelectedTattoo(initial);
                }}
                className="bg-blue-500 hover:bg-blue-700 p-3 text-white font-anton w-full mt-4 text-3xl"
              >
                UPDATE
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}
