"use client";
import styled from "styled-components";

export const TeamsWrapper = styled.div`
  position: relative;
  padding-top: 50px;
  padding-bottom: 50px;
  ::before,
  ::after {
    transition: all 0.2s ease-in-out;
    position: absolute;
    content: "";
    height: 0px;
    background: #8f26f3;

    width: 100%;
    left: 0;
  }
  ::before {
    top: 0;
  }
  ::after {
    bottom: 0;
  }
`;

export const TeamsIntroSection = styled.div`
  display: flex;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const TeamsTitles = styled.div`
  white-space: nowrap;

  line-height: 74px;
  text-transform: capitalize;

  p {
    margin: 0;
  }
  .teams-title {
    font-size: clamp(40px, 9vw, 58px);
  }
  .teams-subtitle {
    font-size: clamp(40px, 9vw, 62px);
    color: #f4f4f4;
  }
  .stroke {
    -webkit-text-stroke: 2px #8f26f3;
  }
`;

export const TeamsDesc = styled.p`
  font-size: 16px;
  line-height: 24px;
  margin: 0;
  font-family: Gilroy-Regular;
  color: #b8b8b8;
  padding-top: 10px;
  padding-left: 42px;
  @media screen and (max-width: 1024px) {
    padding-left: 0;
  }
`;

export const MemberSection = styled.div`
  position: relative;
  display: grid;
  grid-column-gap: 30px;
  padding: 0 43px;
  grid-template-columns: 1fr 1fr 1fr;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 425px) {
    grid-template-columns: 1fr;
  }
  margin-top: 140px;
  ::before,
  ::after {
    transition: all 0.2s ease-in-out;
    position: absolute;
    content: "";
    width: 1.5px;
    height: 100%;
    background: #8f26f3;
  }
  ::before {
    top: 0;
    left: 0;
  }
  ::after {
    top: 0;
    right: 0;
  }
`;

export const MemberCardWrapper = styled.div<{ dir?: number }>`
  ${({ dir }) => (dir === 1 ? "padding-top: 100px;" : "padding-bottom: 100px;")}
  transition: 0.7s all;
  @media screen and (max-width: 425px) {
    padding: 0 !important;
    padding-bottom: 50px !important;
  }
`;

export const MemberImgWrapper = styled.div<{ align?: string }>`
  position: relative;
  padding-top: 120%;
  contain: content;
  background-color: white;
  text-align: ${({ align }) => (align ? align : "center")};
  img {
    position: absolute;
    vertical-align: bottom;
  }
`;

export const MemberInfo = styled.div`
  padding: 27px;
  text-align: center;
  text-transform: capitalize;
  color: #b8b8b8;

  p {
    margin: 0;
  }
  .mem-name {
    font-size: 26px;
    font-weight: 700;
    font-family: GraublauWeb;
    margin-bottom: 13px;
  }
  .mem-role {
    font-size: 16px;
    font-family: Gilroy-Regular;
  }
`;
