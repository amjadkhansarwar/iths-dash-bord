import styled from "styled-components";

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
