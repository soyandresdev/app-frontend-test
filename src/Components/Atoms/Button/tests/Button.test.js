import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Button from "../index";
import { Button as ButtonStyles } from "../stylesButton";

describe("Test component [Button]", () => {
  const Props = {
    theme: "Primary",
    children: "Text Button",
    className: "",
    disabled: false,
    type: ""
  };
  const mockFn = jest.fn();
  const wrapper = shallow(<Button {...Props} onClick={mockFn} />);

  it("Renders correctly defaultProps [Button]", () => {
    const rendered = renderer.create(<Button theme={Props.theme}>Hola</Button>);
    expect(rendered.toJSON()).toMatchSnapshot();
  });

  it("Renders correctly [Button]", () => {
    const rendered = renderer.create(<Button {...Props} />);
    expect(rendered.toJSON()).toMatchSnapshot();
  });

  it("Test init props required [Button]", () => {
    expect(wrapper.find(ButtonStyles).length).toBe(1);
    expect(
      wrapper
        .find(ButtonStyles)
        .at(0)
        .text()
    ).toBe(Props.children);
  });

  it("Test OnClick event [Button] default Props", () => {
    const tree = shallow(<Button theme={Props.theme}>Hola</Button>);
    expect(tree.find(ButtonStyles).prop("onClick")).toEqual(null);
  });

  it("Test onClick event [Button]", () => {
    const buttonElm = wrapper.find(ButtonStyles);
    buttonElm.simulate("click");
    expect(mockFn.mock.calls.length).toEqual(1);
  });

  it("should call mock function when button is clicked", () => {
    const mockFn = jest.fn();
    const tree = shallow(
      <Button theme={Props.theme} onClick={mockFn}>
        Hola
      </Button>
    );
    tree.simulate("click");
    expect(mockFn).toHaveBeenCalled();
  });
});
