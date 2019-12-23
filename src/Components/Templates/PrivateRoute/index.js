import React from "react";
import SideMenu from "../../Molecules/SideMenu";
import NavbarHeader from "../../Molecules/NavbarHeader";
import { Container, Main, Content } from "./stylesPrivateRoute";

function PrivateRoute({ children }) {
  return (
    <Container>
      <SideMenu />
      <Content>
        <NavbarHeader />
        <Main>{children}</Main>
      </Content>
    </Container>
  );
}

export default PrivateRoute;
