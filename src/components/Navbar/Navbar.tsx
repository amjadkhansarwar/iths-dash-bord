import React, {FC} from "react";
import * as S from "./styled";
type Props ={
  showNavBar: boolean
} 

const Navbar:FC<Props> = ({showNavBar}) => {
  return (
    <S.Container>
      <S.ManueLinks ShowManue={showNavBar}>
        <S.TabLink to="/">Dash-Bord</S.TabLink>
        <S.TabLink to="/clock">Clock</S.TabLink>
        <S.TabLink to="/weather">Weather</S.TabLink>
        <S.TabLink to="/traffic">Traffic</S.TabLink>
      </S.ManueLinks>
    </S.Container>
  );
};

export default Navbar;
