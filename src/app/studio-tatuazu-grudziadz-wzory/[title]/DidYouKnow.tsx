"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

export default function DidYouKnow({ array }: { array: string[] }) {
  const [didYouKnow, setDidYouKnow] = useState("");

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * array.length);
    setDidYouKnow(array[randomIndex]);
  };

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * array.length);
    setDidYouKnow(array[randomIndex]);
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center w-full bg-form-img py-12"
      style={{ backgroundColor: "#6B46C1", color: "white" }}
    >
      <motion.button
        style={{
          backgroundColor: "white",
          color: "#6B46C1",
          padding: "10px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
      >
        Losuj ciekawostkę
      </motion.button>

      <motion.p
        key={didYouKnow}
        className="text-center flex flex-row items-center justify-center px-6 lg:px-0"
        style={{
          marginTop: "30px",
          fontSize: "20px",

          overflow: "hidden",
          lineHeight: "1.2",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <FaLongArrowAltRight className="mr-3 h-6 w-6 lg:block hidden" />{" "}
        {didYouKnow}
        <FaLongArrowAltLeft className="ml-3 h-6 w-6 lg:block hidden" />
      </motion.p>
    </div>
  );
}
