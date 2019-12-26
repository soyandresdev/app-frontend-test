import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Input from "../index";
import { Input as InputStyles, Label, Error } from "../stylesInput";

const mockFn = jest.fn();
describe("Test component [Input]", () => {
  const Props = {
    name: "field",
    label: "Name",
    type: "text",
    required: false,
    value: "",
    errors: {},
    touched: {},
    onChange: mockFn
    // onBlur,
  };
  const wrapper = shallow(<Input {...Props} />);

  it("Renders correctly defaultProps [Input]", () => {
    const rendered = renderer.create(<Input {...Props} />);
    expect(rendered.toJSON()).toMatchSnapshot();
  });

  it("Test init props required [Input]", () => {
    expect(wrapper.find(InputStyles).length).toBe(1);
    expect(wrapper.find(Label).length).toBe(1);
    expect(
      wrapper
        .find(InputStyles)
        .at(0)
        .prop("name")
    ).toBe(Props.name);
    expect(
      wrapper
        .find(InputStyles)
        .at(0)
        .prop("type")
    ).toBe(Props.type);
    expect(
      wrapper
        .find(Label)
        .at(0)
        .text()
    ).toBe(Props.label);
    wrapper.setProps({ required: true });
    expect(
      wrapper
        .find(Label)
        .at(0)
        .text()
    ).toBe(`${Props.label}*`);
  });

  it("Test props [Input] ERROR", () => {
    const wrapper = shallow(
      <Input
        {...{ ...Props, errors: { field: "error" }, touched: { field: true } }}
      />
    );
    expect(wrapper.find(Error).length).toBe(1);
  });

  it("Test props onChange [Input]", () => {
    wrapper
      .find(InputStyles)
      .simulate("change", { target: { value: "matched" } });
    expect(mockFn.mock.calls[0][0].target.value).toBe("matched");
  });
});
