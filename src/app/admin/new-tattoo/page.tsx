import { getTattoos } from "../../../firebase/index";

import UploadImage from "../new-tattoo/UploadImage";

export default async function Page() {
  const images = await getTattoos("blackbellart");
  return (
    <div className="relative">
      <UploadImage images={images} />
    </div>
  );
}
