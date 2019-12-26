import React from "react";

import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs/react";
import Icons from "../Components/Atoms/Icons";

const stories = storiesOf("Components/Atoms/Icons", module);

stories.add("Basic Icons", () => (
  <Icons
    fill="#000"
    type={select(
      "Type",
      ["home", "user", "addUser", "graph", "logout", "setting", "notification"],
      "home"
    )}
  />
));
