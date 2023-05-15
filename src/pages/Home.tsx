import React, { FC } from "react";
import Clock from "../components/Clock";
import Weather from "../components/Weather";
import CountryInfo from "../components/CountryInfo";
import * as S from "../styled";
import Mode from "../components/Mode";

const Home: FC = () => {
  return (
    <S.Container>
      <S.Mode>
        <Mode />
      </S.Mode>
      <S.Body>
      <Clock />
      <Weather city="Stockholm,SE" />
      <CountryInfo />
      </S.Body>
    </S.Container>
  );
};

export default Home;
