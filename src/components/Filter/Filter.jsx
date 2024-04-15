import { Input, Label, InputGroup, Title } from "./Filter.styled";
import Container from "components/Container/Container";

const Filter = ({ value, onChange }) => {
  return (
    <Container>
      <Title>Contacts</Title>
      <InputGroup>
        <Label htmlFor="filter">Find contacts by name</Label>
        <Input
          type="text"
          id="filter"
          value={value}
          onChange={onChange}
          placeholder="Filter by name"
        />
      </InputGroup>
    </Container>
  );
};
export default Filter;
