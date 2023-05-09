import React, { FC, useState } from "react";
import * as S from "./styled";
import Navbar from "../Navbar";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Header: FC = () => {
  const [showNavBar, setShowNavBar] = useState(false);
  const handleNavebar = () => {
    setShowNavBar(!showNavBar);
  };
  return (
    <S.Container showNavBar={showNavBar}>
      <Logo />
      <Navbar showNavBar={showNavBar} />
      <S.HideManue>
        <S.HamburgerManue onClick={handleNavebar}>
          <S.SpanBar></S.SpanBar>
          <S.SpanBar></S.SpanBar>
          <S.SpanBar></S.SpanBar>
        </S.HamburgerManue>
      </S.HideManue>
    </S.Container>
  );
};

export default Header;
