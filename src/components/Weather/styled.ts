import styled from "styled-components";
import theme from "../../theme";

export const WeatherData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Image = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
`;
export const Element = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Text = styled.p`
  font-family: ${theme.fonts.headline.bold};
  font-size: 20px;
  font-weight: 600;
  padding: 16px;
  @media screen and (max-width: 1000px) {
    font-family: ${theme.fonts.headline.medium};
    font-size: 16px;
    font-weight: 600;
    padding: 8px;
  }
`;
