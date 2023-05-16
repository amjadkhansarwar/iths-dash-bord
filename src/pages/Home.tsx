import React, { FC, useState, useEffect } from "react";
import Clock from "../components/Clock";
import Weather from "../components/Weather";
import CountryInfo from "../components/CountryInfo";
import * as S from "../styled";

const Home: FC = () => {
  const [offlineMode, setOfflineMode] = useState(false);
  useEffect(() => {
    const handleOnlineStatus = () => setOfflineMode(!navigator.onLine);
    setOfflineMode(!navigator.onLine);

    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOnlineStatus);
    return () => {
      window.removeEventListener("online", handleOnlineStatus);
      window.removeEventListener("offline", handleOnlineStatus);
    };
  }, []);

  return (
    <S.Container>
      {offlineMode && (
        <S.Mode>
          <S.ModeText>You are currently offline.</S.ModeText>
        </S.Mode>
      )}
      <S.Body>
        <Clock />
        <Weather city="Stockholm,SE" />
        <CountryInfo />
      </S.Body>
    </S.Container>
  );
};

export default Home;
