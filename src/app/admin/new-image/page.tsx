import { getImages } from "../../../firebase/index";

import UploadImage from "./UploadImage";

export default async function Page() {
  const images = await getImages("blackbellart");

  return (
    <div className="relative">
      <UploadImage images={images} />
    </div>
  );
}
