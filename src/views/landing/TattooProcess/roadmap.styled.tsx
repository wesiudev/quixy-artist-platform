"use client";
import styled from "styled-components";

export const RoadmapWrapper = styled.div`
  padding: 170px 0;
  transition: all 0.2s;
  @media screen and (max-width: 768px) {
    padding: 70px 0;
  }
`;

export const RoadMapTitleSection = styled.div`
  h2,
  p {
    margin: 0;
    text-align: center;
  }
  h2 {
    font-family: GraublauWeb-bold;
    color: #f4f4f4;
    font-size: clamp(40px, 9vw, 62px);
    text-align: center;
    line-height: 62px;

    margin-bottom: 32px;
  }
  p {
    max-width: 596px;
    width: 100%;
    font-family: Gilroy-Regular;
    font-size: 16px;
    line-height: 24px;
    margin: auto;
    color: #b8b8b8;
  }
`;

export const RoadMapSection = styled.div`
  position: relative;
  width: 100%;
  margin-top: 50px;
`;

export const RoadMapLine = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  padding: 200px 0;
  & > *:not(.rm-line) {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    ::before {
      position: absolute;
      left: -15%;
      top: -15%;
      content: "";
      width: 25%;
      padding-top: 25%;
      background-size: 100% 100%;
    }
    img {
      width: 80%;
    }
    ::after {
      top: 10%;
      left: 10%;
      position: absolute;
      content: "";
      width: 50%;
      height: 100px;
      filter: blur(87px);
      z-index: -1;
    }
  }
  .rm-line {
    margin: auto;
    width: 250px;
  }
  #rm1 {
    top: 5%;
    left: 47%;
    ::after {
      background: #d6d6d6;
    }
    ::before {
      background-image: url("/images/no1.png");
    }
  }
  #rm2 {
    top: 23%;
    left: 33%;
    ::after {
      background: #d6d6d6;
    }
    ::before {
      background-image: url("/images/no2.png");
    }
  }
  #rm3 {
    top: 45%;
    left: 47%;
    ::after {
      background: #912462;
    }
    ::before {
      background-image: url("/images/no3.png");
    }
  }
  #rm4 {
    top: 65%;
    left: 30%;
    ::after {
      background: #31bf90;
    }
    ::before {
      background-image: url("/images/no4.png");
    }
  }
  #rm5 {
    top: 83%;
    left: 50%;
    ::after {
      background: #ffe06f;
    }
    ::before {
      background-image: url("/images/no5.png");
      top: -10%;
      left: -20%;
    }
  }
`;

export const RoadMapCardWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 7%;
  width: 100%;
  & > *:not(:first-child) {
    margin-top: 10%;
  }
`;

export const RoadMapCardGroup = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  .mobile-rm {
    position: relative;
    width: calc(100%);
  

  }
  @media screen and (max-width: 1024px) {
    margin-top: 100px;
    flex-direction: column;
    & > *:not(:first-child) {
      margin-top: 50px;
    }

    }
  }
`;

export const RoadMapCard = styled.div`
  width: 31%;
  transition: 0.7s all;
  h2,
  p {
    margin: 0;
  }
  h2 {
    display: inline-block;
    margin-bottom: 47px;
    position: relative;
    font-family: GraublauWeb;
    font-size: clamp(30px, 9vw, 48px);
    line-height: 55px;
    text-transform: capitalize;
    color: #f4f4f4;
    white-space: nowrap;
    ::after {
      content: "";
      width: 70%;
      position: absolute;
      bottom: -17px;
      left: 0;
      height: 3px;
      background: linear-gradient(270.03deg, #bc3a08 0.05%, #941a0b 100%);
    }
  }
  p {
    color: #b8b8b8;
    font-family: Gilroy-Regular;
    font-size: 16px;
    line-height: 24px;
  }
`;
