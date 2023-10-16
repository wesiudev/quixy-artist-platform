import { FaScrewdriver } from "react-icons/fa";

export default function NewProduct() {
  return (
    <div className="h-max w-screen flex items-center justify-center py-12">
      <h1 className="text-2xl text-green-500 flex flex-col items-center justify-center">
        <FaScrewdriver className="h-36 w-36 mb-12 text-red-500" />
        Ta opcja jest w trakcie tworzenia
      </h1>
    </div>
  );
}
