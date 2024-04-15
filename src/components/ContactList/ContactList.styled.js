import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  margin-bottom: 12px;
`;

export const Contactbox = styled.span`
  margin-right: 24px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 4px;
  transition: all 250ms ease-out;
  &:hover {
    background-color: purple;
  }
`;
