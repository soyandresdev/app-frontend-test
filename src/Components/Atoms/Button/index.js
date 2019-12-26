import React from "react";
import PropTypes from "prop-types";
// Styles
import { Button as ButtonStyles } from "./stylesButton.js";

/**
A component that is responsible for displaying a button, depending on the attributes, a button with a different design will be displayed.
 *
  Button Component
  @param {string} theme
  @param {string} className
  @param {string} type
  @param {bool} disabled
  @param {string} id
  @param {string} size
  @param {func} onClick
  @return {react~Component} makeup Html for the Button.
 */

const Button = ({ children, disabled, id, onClick, theme, type, size }) => {
  // Render Button with Props
  return (
    <ButtonStyles
      onClick={onClick}
      disabled={disabled}
      type={type}
      id={id}
      theme={theme}
      size={size}
    >
      {children}
    </ButtonStyles>
  );
};

Button.defaultProps = {
  onClick: null,
  size: "Big",
  theme: "Primary",
  className: "",
  disabled: false,
  active: false,
  type: "",
  id: ""
};

Button.propTypes = {
  /** String - Value of the type theme Button */
  theme: PropTypes.oneOf(["Primary", "Second"]),
  /** String - Value of the type size Button */
  size: PropTypes.oneOf(["Small", "Medium", "Big"]),
  /** Function - OnClick Button */
  onClick: PropTypes.func,
  /** Boolean  - disabled Button */
  disabled: PropTypes.bool,
  /** String - Text Button  */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]).isRequired,
  /** String - Extra ClassName Button  */
  className: PropTypes.string,
  /** String - Extra Type Button  */
  type: PropTypes.string,
  /** String  - id Button  */
  id: PropTypes.string,
  /** String  - active button  */
  active: PropTypes.bool
};

export default Button;
