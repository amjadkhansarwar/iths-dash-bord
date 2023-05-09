import React, { FC } from "react";
import * as S from "./styled";
interface ClockProps {
  timeObj: Date;
}
const ClockComponent: FC<ClockProps> = ({timeObj}) => {
  
  const hours = timeObj?.getHours() % 12;
  const minutes = timeObj?.getMinutes();
  const seconds = timeObj?.getSeconds();

  const getRotation = (value: number, max: number) => {
    return (value / max) * 360;
  };

  const hourRotation = getRotation(hours, 12) + getRotation(minutes, 60) / 12;
  const minuteRotation = getRotation(minutes, 60) + getRotation(seconds, 60) / 60;
  const secondRotation = getRotation(seconds, 60);

  const hourStyle = {
    transform: `rotate(${hourRotation}deg)`,
  };

  const minuteStyle = {
    transform: `rotate(${minuteRotation}deg)`,
  };

  const secondStyle = {
    transform: `rotate(${secondRotation}deg)`,
  };

  return (
    <S.Container>
      <S.Hour style={hourStyle}></S.Hour>
      <S.Minute style={minuteStyle}></S.Minute>
      <S.Seceonds style={secondStyle}></S.Seceonds>
      <S.Center></S.Center>
      <S.Hour1>1</S.Hour1>
      <S.Hour2>2</S.Hour2>
      <S.Hour3>3</S.Hour3>
      <S.Hour4>4</S.Hour4>
      <S.Hour5>5</S.Hour5>
      <S.Hour6>6</S.Hour6>
      <S.Hour7>7</S.Hour7>
      <S.Hour8>8</S.Hour8>
      <S.Hour9>9</S.Hour9>
      <S.Hour10>10</S.Hour10>
      <S.Hour11>11</S.Hour11>
      <S.Hour12>12</S.Hour12>
    </S.Container>
  );
};

export default ClockComponent;
