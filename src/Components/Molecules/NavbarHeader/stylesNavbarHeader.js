import styled from "styled-components";
import { device } from ".././../../styles/mediaQuery";

export const Header = styled.header`
  position: fixed;
  z-index: 2;
  height: 70px;
  width: 100vw;
  background: #fff;
  display: flex;
  align-items: center;
  padding: 5px 25px;
  box-shadow: 0 5px 7.5px 0 rgba(0, 0, 0, 0.05);
  justify-content: space-between;
  @media ${device.tablet} {
    width: calc(100vw - 220px);
    justify-content: flex-end;
  }
  @media ${device.laptop} {
    width: calc(100vw - 270px);
    justify-content: flex-end;
  }
`;

export const Logo = styled.figure`
  width: 80px;
  margin: 0;
  & img {
    width: 100%;
  }
  @media ${device.tablet} {
    display: none;
  }
`;

export const ListNavIcon = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ItemNavIcon = styled.li`
  margin-left: 10px;
  color: #0081ff;
  cursor: pointer;
  position: relative;
  &:hover {
    color: #01488e;
  }
`;
export const Badge = styled.div`
  width: 15px;
  height: 15px;
  position: absolute;
  border-radius: 50%;
  background-color: red;
  right: 0;
  top: 0;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;
