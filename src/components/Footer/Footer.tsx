import React,{FC} from "react";
import * as S from './styled'

const Footer:FC = () => {
    const currentYear: number = new Date().getFullYear();
    return(
        <S.Container>
            <S.FooterText>IT-Högskolan © 2011-{currentYear} All rights reserved.</S.FooterText>
        </S.Container>
    )
}
export default Footer