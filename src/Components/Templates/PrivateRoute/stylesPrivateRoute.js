import styled from "styled-components";
import { device } from ".././../../styles/mediaQuery";

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.main`
  margin-left: 0px;
  width: 100%;
  @media ${device.tablet} {
    margin-left: 220px;
  }
  @media ${device.laptop} {
    margin-left: 270px;
  }
`;

export const Main = styled.main`
  padding: 30px 20px;
  margin-top: 70px;
`;
