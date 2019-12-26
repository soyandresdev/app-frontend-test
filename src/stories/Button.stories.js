import React from "react";

import { storiesOf } from "@storybook/react";
import { text, boolean, select } from "@storybook/addon-knobs/react";
import Button from "../Components/Atoms/Button";
import { action } from "@storybook/addon-actions";

const stories = storiesOf("Components/Atoms/Button", module);

stories.add("Basic Button", () => (
  <Button
    theme={select("Theme", ["Primary", "Second"], "Primary")}
    size={select("Size", ["Small", "Medium", "Big"], "Big")}
    onClick={action("clicked")}
    disabled={boolean("disabled", false)}
  >
    {text("children", "Text Example")}
  </Button>
));
