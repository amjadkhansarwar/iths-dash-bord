import React, { FC, useState, useEffect } from "react";
import * as S from "./styled";
import * as T from "../../theme/typography";
import ClockComponent from "../ClockComponent";

const Clock: FC = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const europeTime = new Date(time.toLocaleString("en-US", { timeZone: "Europe/Stockholm" }));
  const USATime = new Date(time.toLocaleString("en-US", { timeZone: "America/New_York" }));
  const japanTime = new Date(time.toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' }));

  return (
    <T.Container>
      <T.Heading>Time in different Regions</T.Heading>
      <S.Body>
        <S.Time> Europe</S.Time>
        <ClockComponent timeObj={europeTime}/>
         <S.Time>United State of America</S.Time>
        <ClockComponent timeObj={USATime}/>
        <S.Time>Japan</S.Time>
        <ClockComponent timeObj={japanTime} /> 
      </S.Body>
    </T.Container>
  );
};

export default Clock;
