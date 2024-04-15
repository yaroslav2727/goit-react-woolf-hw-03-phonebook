import styled from "styled-components";

export const Form = styled.form`
  width: 300px;
  margin-bottom: 36px;
`;

export const InputGroup = styled.div`
  margin-bottom: 16px;
`;

export const Label = styled.label`
  display: block;
  font-weight: 600;
`;

export const Input = styled.input`
  width: 100%;
  border: 2px solid grey;
  padding: 8px;
  border-radius: 4px;
  transition: all 250ms ease-out;
  &:focus {
    border-color: black;
  }
`;

export const Button = styled.button`
  width: 124px;
  height: 30px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 4px;
  transition: all 250ms ease-out;
  &:hover {
    background-color: gray;
  }
`;
