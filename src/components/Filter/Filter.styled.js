import styled from "styled-components";

export const Title = styled.h2`
  margin-bottom: 12px;
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
  margin-bottom: 32px;
`;

export const Label = styled.label`
  font-weight: 600;
`;

export const Input = styled.input`
  border: 2px solid gray;
  padding: 10px;
  border-radius: 4px;
  outline: none;
  transition: all 250ms ease-out;
  &:focus {
    border-color: black;
  }
`;
