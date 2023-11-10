import { getImages } from "../../../firebase/index";

import UploadImage from "./UploadImage";

export default async function Page() {
  const images = await getImages();

  return (
    <div className="relative">
      <UploadImage images={images} />
    </div>
  );
}
