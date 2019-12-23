import React from "react";
import Tippy from "@tippy.js/react";
import Icons from "../../Atoms/Icons";
import {
  Header,
  ListNavIcon,
  ItemNavIcon,
  Badge,
  Logo
} from "./stylesNavbarHeader";
import LogoBlack from "../../../Images/logo_addi_black.png";

const MenuHeader = [
  { text: "Configuración", icon: "setting" },
  { text: "Notificaciones", icon: "notification", badge: true, number: 5 },
  { text: "Cerrar Sesión", icon: "logout" }
];
export default function NavbarHeader() {
  return (
    <Header>
      <Logo>
        <img src={LogoBlack} alt="" />
      </Logo>
      <ListNavIcon>
        {MenuHeader &&
          MenuHeader.map(item => {
            return (
              <ItemNavIcon key={item.text}>
                {/* ! This line is for error in JEST With Tippy  */}
                {process.env.JEST_WORKER_ID === undefined && (
                  <Tippy content={item.text}>
                    <span>
                      {item.badge && <Badge>{item.number}</Badge>}
                      <Icons
                        type={item.icon}
                        width="30"
                        height="30"
                        fill="currentColor"
                      />
                    </span>
                  </Tippy>
                )}
              </ItemNavIcon>
            );
          })}
      </ListNavIcon>
    </Header>
  );
}
