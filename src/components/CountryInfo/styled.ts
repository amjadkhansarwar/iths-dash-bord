import styled from "styled-components";
import theme from "../../theme";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 8px;
`;
export const Element = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const Text = styled.p`
font-family: ${theme.fonts.headline.bold};
font-size: 16px;
font-weight: 500;

@media screen and (max-width: 1000px) {
  font-family: ${theme.fonts.headline.medium};
  font-size: 12px;
  font-weight: 500;
}
`;
export const DottedLine = styled.div`
  border-top: 1px dotted #000;
  align-self: center;
  width: 95%;
`;


