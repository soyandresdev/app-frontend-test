import React from "react";

import { storiesOf } from "@storybook/react";
import { text, boolean } from "@storybook/addon-knobs/react";
import Input from "../Components/Atoms/Input";

const stories = storiesOf("Components/Atoms/Input", module);

stories.add("Basic Input", () => (
  <Input
    name={text("name", "fieldname")}
    label={text("label", "Text Example")}
    type="text"
    required={boolean("required", false)}
  />
));
