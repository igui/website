import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { bgColor, secondaryBgColor } from "./styleConstants";
import NavRow from "./NavRow";
import Hero from "./Hero";
import FullVideo from "./FullVideo";

const HeaderContainer = styled.section`
  background-color: ${secondaryBgColor};
  color: ${bgColor};
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const Header = () => {
  const fullVideoRef = useRef<HTMLVideoElement>(null);
  const navRowRef = useRef<HTMLElement>(null);

  useEffect(() => {
    fullVideoRef.current && fullVideoRef.current.classList.remove("invisible");
    navRowRef.current && navRowRef.current.classList.remove("invisible");
  });

  return (
    <HeaderContainer>
      <FullVideo ref={fullVideoRef} className="invisible" />
      <NavRow ref={navRowRef} className="invisible" />
      <Hero />
    </HeaderContainer>
  );
};

export default Header;
