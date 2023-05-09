import styled from "styled-components";
import theme from "../../theme";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  felx-direction: row;
  justify-content: space-around;
`;
interface ShowManueProps {
  ShowManue: boolean;
}

export const ManueLinks = styled.div<ShowManueProps>`
  display: flex;
  felx-direction: row;
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    display: ${({ShowManue})=> ShowManue === true ? 'flex': 'none'};
    flex-direction: column;
    justify-content: center;
    margin-top: 16px;
  }
`;
export const TabLink = styled(Link)`
  font-family: ${theme.fonts.headline.bold};
  font-size: 16px;
  font-weight: 600;
  padding-right: 32px;
  color: ${theme.LinksColor.color};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-top: 8px;
  }
`;
