import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Select from "../index";
import { Select as SelectStyles, Label, Error } from "../stylesSelect";

const mockFn = jest.fn();
describe("Test component [Select]", () => {
  const Props = {
    name: "field",
    label: "Name",
    required: false,
    value: "",
    errors: {},
    touched: {},
    onChange: mockFn
    // onBlur,
  };
  const wrapper = shallow(
    <Select {...Props}>
      <option disabled defaultValue value="">
        Seleccionar
      </option>
      <option value="CC">Cédula de ciudadanía</option>
      <option value="CE">Cédula de extranjería</option>
      <option value="PA">Pasaporte</option>
    </Select>
  );

  it("Renders correctly defaultProps [Select]", () => {
    const rendered = renderer.create(
      <Select {...Props}>
        <option disabled defaultValue value="">
          Seleccionar
        </option>
        <option value="CC">Cédula de ciudadanía</option>
        <option value="CE">Cédula de extranjería</option>
        <option value="PA">Pasaporte</option>
      </Select>
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });

  it("Test init props required [Select]", () => {
    expect(wrapper.find(SelectStyles).length).toBe(1);
    expect(wrapper.find(Label).length).toBe(1);
    expect(
      wrapper
        .find(SelectStyles)
        .at(0)
        .prop("name")
    ).toBe(Props.name);
    expect(
      wrapper
        .find(SelectStyles)
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

  it("Test props [Select] ERROR", () => {
    const wrapper = shallow(
      <Select
        {...{ ...Props, errors: { field: "error" }, touched: { field: true } }}
      />
    );
    expect(wrapper.find(Error).length).toBe(1);
  });

  it("Test props onChange [Select]", () => {
    wrapper.find(SelectStyles).simulate("change", { target: { value: "CC" } });
    expect(mockFn.mock.calls[0][0].target.value).toBe("CC");
  });
});
