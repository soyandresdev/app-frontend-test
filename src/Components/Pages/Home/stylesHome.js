import styled from "styled-components";
import { device } from ".././../../styles/mediaQuery";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: #c1c1c1;
`;

export const Columns = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  @media ${device.tablet} {
    grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  }
`;
