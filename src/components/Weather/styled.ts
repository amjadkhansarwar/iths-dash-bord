import styled from "styled-components";

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
