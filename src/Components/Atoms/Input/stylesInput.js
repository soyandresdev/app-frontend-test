import styled from "styled-components";

export const InputBox = styled.div`
  padding: 10px 0px;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 16px;
  display: block;
  height: inherit;
  padding: 20px 17px;
  border-radius: 0px;
  background: transparent;
  border: 1px solid #d8d8d8;
  box-shadow: none;
  border-radius: 5px;
  margin: 2px 0;
  font-weight: lighter;
  color: #4c4c4c;
  outline: none;
`;

export const Label = styled.label`
  font-weight: lighter;
  position: relative;
  background: #fff;
  padding: 7px 7px 0px;
  top: 15px;
  left: 10px;
  color: #a4a4a4;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
`;

export const Error = styled.p`
  color: #c75555;
  top: 0px;
  padding-top: 0px;
  font-size: 14px;
  margin: 0;
`;
