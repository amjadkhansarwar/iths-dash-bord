import styled from "styled-components";
import theme from "./theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    flex-direction: column;
  }
`;
export const Body = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    flex-direction: column;
  }
`;
export const ModeText = styled.p`
  font-family: ${theme.fonts.title};
  font-weight: 500;
  font-size: 14px;
  text-align: center;
`;
export const Mode = styled.div`
`;
