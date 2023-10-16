import React from "react";
import { FooterWrapper } from "./footer.styled";
import Link from "next/link";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="mb-3">
        <span>Blackbell Tattoo</span>
      </div>
      dev:{" "}
      <Link target="_blank" href="https://www.quixy.pl">
        <b className="text-yellow-400"> Quixy</b> - Tworzenie stron
        internetowych Grudziądz
      </Link>
    </FooterWrapper>
  );
};

export default Footer;
