import styled from "styled-components";

export const Button = styled.button`
  align-items: center;
  border-radius: 48px;
  border: 1px solid transparent;
  box-shadow: none;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-family: $raleway;
  font-weight: 500;
  justify-content: center;
  margin: 8px 0px;
  transition: all 300ms ease-in-out;
  &:hover,
  &:focus {
    color: red; // <Thing> when hovered
  }
`;
