import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import BoxWhiteRound from "../index";
import { BoxWhiteRound as BoxWhiteRoundStyles } from "../stylesBoxWhiteRound";

describe("Test component [BoxWhiteRound]", () => {
  const Props = {
    children: "<h1>hola</h1>"
  };
  const wrapper = shallow(<BoxWhiteRound {...Props} />);

  it("Renders correctly defaultProps [BoxWhiteRound]", () => {
    const rendered = renderer.create(<BoxWhiteRound {...Props} />);
    expect(rendered.toJSON()).toMatchSnapshot();
  });

  it("Renders correctly [BoxWhiteRound]", () => {
    const rendered = renderer.create(<BoxWhiteRound {...Props} />);
    expect(rendered.toJSON()).toMatchSnapshot();
  });

  it("Test init props required [BoxWhiteRound]", () => {
    expect(wrapper.find(BoxWhiteRoundStyles).length).toBe(1);
    expect(
      wrapper
        .find(BoxWhiteRoundStyles)
        .at(0)
        .text()
    ).toBe(Props.children);
  });
});
