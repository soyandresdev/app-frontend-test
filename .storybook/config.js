import { configure, setAddon, addDecorator } from "@storybook/react";
import { jsxDecorator } from "storybook-addon-jsx";
import { withKnobs, select } from "@storybook/addon-knobs/react";
addDecorator(withKnobs);
addDecorator(jsxDecorator);

// automatically import all files ending in *.stories.js
configure(require.context("../src/stories", true, /\.stories\.js$/), module);
