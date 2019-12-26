import React from "react";
import Icons from "../../Atoms/Icons";
import { Alert as AlertStyles, IconBox, Text } from "./stylesAlert";

export default function Alert({ type, iconType, id, text }) {
  return (
    <AlertStyles id={id} type={type}>
      <IconBox>
        <Icons fill="#020f53" type={iconType} />
      </IconBox>
      <Text>{text}</Text>
    </AlertStyles>
  );
}
