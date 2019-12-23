import React from "react";
import renderer from "react-test-renderer";
import App from "../App";

describe("Test component [App]", () => {
  it("Renders correctly defaultProps [App]", () => {
    const rendered = renderer.create(<App />);
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
