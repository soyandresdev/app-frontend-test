import styled from "styled-components";

export const Nav = styled.nav`
  height: 100vh;
  width: 270px;
  padding: 20px 0px 20px 20px;
  background: #0081ff;
  background: linear-gradient(180deg, #0081ff 50%, #18a5f9 100%);
  display: grid;
  grid-template-rows: 1fr 100px;
`;

export const Logo = styled.figure`
  width: 100px;
  margin: 0;
  & img {
    width: 100%;
  }
`;

export const ListLink = styled.ul`
  list-style: none;
  padding: 0;
  margin: 40px 0px 0px 0px;
`;

export const ItemLink = styled.li`
  list-style: none;
`;

export const ALink = styled.a`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  padding: 20px 0px 20px 10px;
  width: 100%;
  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 20px 0px 0px 20px;
  }
`;
export const TextLink = styled.span`
  margin-left: 10px;
`;

export const UserBox = styled.a`
  background-color: rgba(255, 255, 255, 0.25);
  padding: 15px;
  margin: auto 20px 0px 0px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  text-decoration: none;
  & p {
    color: white;
    font-weight: Bold;
  }
`;
export const Avatar = styled.a`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: rgba(255, 255, 255, 0.25);
  margin-right: 10px;
  & span {
    color: white;
    font-weight: Bold;
  }
`;
