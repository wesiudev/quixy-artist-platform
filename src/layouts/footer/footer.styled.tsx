"use client";
import styled from "styled-components";

export const FooterWrapper = styled.div`
  padding: 50px 0;
  position: relative;
  text-align: center;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  font-family: GraublauWeb;
  font-size: 16px;
  line-height: 16px;
  color: #b8b8b8;
  font-weight: 700;
  span {
    position: relative;
    color: rgb(168 85 247);
    ::after {
      transition: all 0.2s ease-in-out;
      position: absolute;
      content: "";
      height: 1.5px;
      background-color: #bc3a08;
      width: 100%;
      left: 0;
      bottom: -5px;
      transform: scaleX(1);
    }
  }
`;
