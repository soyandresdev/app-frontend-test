import React from "react";
import {
  Select as SelectStyles,
  SelectBox,
  Label,
  Error
} from "./stylesSelect";

export default function Select({
  name,
  label,
  required,
  onChange,
  onBlur,
  value,
  touched,
  errors,
  children
}) {
  return (
    <SelectBox>
      {label && (
        <Label htmlFor={name}>
          {label}
          <>{required ? "*" : ""}</>
        </Label>
      )}
      <SelectStyles
        id={name}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      >
        {children}
      </SelectStyles>
      {touched && errors && (
        <>
          {touched[name] && errors[name] ? (
            <Error id={`${name}-error`}>{errors[name]}</Error>
          ) : null}
        </>
      )}
    </SelectBox>
  );
}
