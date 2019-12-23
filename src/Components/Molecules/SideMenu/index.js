import React from "react";
import Icons from "../../Atoms/Icons";
import LogoImagen from "../../../Images/logo_addi.png";
import {
  Nav,
  Logo,
  ListLink,
  ItemLink,
  ALink,
  TextLink,
  UserBox,
  Avatar
} from "./StylesSideMenu";

const List = [
  { text: "Inicio", icon: "home", href: "#" },
  { text: "Clientes", icon: "user", href: "#" },
  { text: "Aliados", icon: "addUser", href: "#" },
  { text: "Reportes", icon: "graph", href: "#" }
];
export default function SideMenu() {
  return (
    <Nav>
      <div>
        <Logo>
          <img src={LogoImagen} alt="Logo Addi" />
        </Logo>
        <ListLink>
          {List.map(link => {
            return (
              <ItemLink key={link.text}>
                <ALink href={link.href}>
                  <Icons type={link.icon}></Icons>
                  <TextLink>{link.text}</TextLink>
                </ALink>
              </ItemLink>
            );
          })}
        </ListLink>
      </div>
      <div>
        <UserBox href="#">
          <Avatar>
            <span>A</span>
          </Avatar>
          <p>Andres Hernandez</p>
        </UserBox>
      </div>
    </Nav>
  );
}
