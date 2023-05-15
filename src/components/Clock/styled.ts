import styled from "styled-components";
import theme from '../../theme'


export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Time = styled.p`
font-family: ${theme.fonts.headline.bold};
  font-size: 18px;
  font-weight: 800;
  align-text: center;
  @media screen and (max-width: 1000px) {
    font-family: ${theme.fonts.headline.medium};
    font-size: 18px;
    font-weight: 600;
    padding: 8px;
  }
`
