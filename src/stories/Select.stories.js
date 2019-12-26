import React from "react";

import { storiesOf } from "@storybook/react";
import { text, boolean } from "@storybook/addon-knobs/react";
import Select from "../Components/Atoms/Select";

const stories = storiesOf("Components/Atoms/Select", module);

stories.add("Basic Select", () => (
  <Select
    name={text("name", "fieldname")}
    label={text("label", "Text Example")}
    type="text"
    required={boolean("required", false)}
  >
    <option disabled defaultValue value="">
      Seleccionar
    </option>
    <option value="Armenia">Armenia</option>
    <option value="Barranquilla">Barranquilla</option>
    <option value="Bello">Bello</option>
    <option value="Bogotá">Bogotá</option>
  </Select>
));
