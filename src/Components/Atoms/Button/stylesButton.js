import styled from "styled-components";
const themeButton = {
  Primary: `
  background-color: #4f6aff;
  border: 1px solid #4f6aff;
  color: #FFF;
  &:hover {
    background-color : #4f6aff;
    border: 1px solid #4f6aff;
  }
  `,
  Second: `
  background-color: #4ffff7;
  border: 1px solid #4ffff7;
  color: #FFF;
  &:hover {
    background-color : #4ffff7;
    border: 1px solid #4ffff7;
  }
  `
};

const sizeButton = {
  Big: `
  border-radius: 48px;
  height: 48px;
  padding: 0px 25px;
  `,
  Medium: `
  border-radius: 48px;
  height: 40px;
  padding: 0px 24px;`,
  Small: `
  border-radius: 32px;
  height: 32px;
  font-size: 14px;
  padding: 0px 16px;`
};

export const Button = styled.button`
  align-items: center;
  border-radius: 48px;
  border: 1px solid transparent;
  box-shadow: none;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  font-family: "Raleway", sans-serif;
  justify-content: center;
  margin: 8px 0px;
  transition: all 300ms ease-in-out;
  padding: 5px 20px;
  outline: none;
  ${({ theme }) => themeButton[theme]}
  ${({ size }) => sizeButton[size]}
  ${({ disabled }) =>
    disabled
      ? `
    color: #000;
    cursor: not-allowed;
    background-color : #FFF;
    border: 1px solid #c1c1c1;
    &:hover {
      color: #000;
      cursor: not-allowed;
      background-color : #c1c1c1;
      border: 1px solid #c1c1c1;
    }
  `
      : ""}
`;
