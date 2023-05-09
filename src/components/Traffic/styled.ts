import styled from "styled-components";
import theme from "../../theme";

const Height = window.innerHeight;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: center;
  height: ${Height - 150}px;
  width: 33%;
  border: solid 2px black;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;
export const Heading = styled.text`
  font-family: ${theme.fonts.headline.bold};
  font-size: 22px;
  font-weight: 800;
  padding: 16px;
  @media screen and (max-width: 1000px) {
    font-family: ${theme.fonts.headline.medium};
    font-size: 18px;
    font-weight: 600;
    padding: 8px;
  }
`;
