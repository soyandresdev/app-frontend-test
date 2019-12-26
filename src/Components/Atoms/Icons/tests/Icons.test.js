import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Icons from "../index";
import Home from "../IconComponets/Home";

describe("Test component [Icons]", () => {
  const Props = {
    type: "home"
  };
  const wrapper = shallow(<Icons {...Props} />);

  it("Renders correctly defaultProps [Icons]", () => {
    const rendered = renderer.create(<Icons {...Props} />);
    expect(rendered.toJSON()).toMatchSnapshot();
  });

  it("Renders correctly [Icons]", () => {
    const rendered = renderer.create(<Icons {...Props} />);
    expect(rendered.toJSON()).toMatchSnapshot();
  });

  it("Test init props required [Icons]", () => {
    expect(wrapper.find(Home).length).toBe(1);
  });
});
