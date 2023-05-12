import styled from "styled-components";
import fonts from "./fonts";

const Height = window.innerHeight;

 export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${Height - 180}px;
  width: 100%;
  padding: 16px 0px;
  border: solid 1px black;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 16px 0px;
    height: auto;
  }
`;
 export const Heading = styled.p`
  font-family: ${fonts.headline.bold};
  font-size: 22px;
  font-weight: 800;
  padding: 16px;
  @media screen and (max-width: 1000px) {
    font-family: ${fonts.headline.medium};
    font-size: 18px;
    font-weight: 600;
    padding: 8px;
  }
`;

