import React, { Component } from "react";
import Container from "components/Container/Container.jsx";
import { Form, Label, Input, Button, InputGroup } from "./ContactForm.styled.js";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <InputGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              name="name"
              type="text"
              required
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              id="name"
              placeholder="Enter contact's name"
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="number">Number</Label>
            <Input
              name="number"
              type="tel"
              required
              value={this.state.number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              id="number"
              placeholder="Enter contact's number"
            />
          </InputGroup>

          <Button type="submit">Add contact</Button>
        </Form>
      </Container>
    );
  }
}

export default ContactForm;
