import React from "react";
import PropTypes from "prop-types";
import { Input as InputStyles, InputBox, Label, Error } from "./stylesInput";

export default function Input({
  name,
  label,
  type,
  required,
  onChange,
  onBlur,
  value,
  touched,
  errors
}) {
  return (
    <InputBox>
      <Label htmlFor={name}>
        {label}
        <>{required ? "*" : ""}</>
      </Label>
      <InputStyles
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {touched && errors && (
        <>
          {touched[name] && errors[name] ? (
            <Error id={`${name}-error`}>{errors[name]}</Error>
          ) : null}
        </>
      )}
    </InputBox>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  touched: PropTypes.object,
  errors: PropTypes.object
};
