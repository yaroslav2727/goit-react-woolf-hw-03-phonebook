import React, { Component } from "react";
import ContactForm from "components/ContactForm/ContactForm";
import Filter from "components/Filter/Filter";
import ContactList from "components/ContactList/ContactList";
import { Pagetitle } from "./App.styled";
import { nanoid } from "nanoid";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    const storedContacts = localStorage.getItem("contacts");

    if (storedContacts) {
      this.setState({ contacts: JSON.parse(storedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  handleSubmit = data => {
    // Checking duplicates
    const isDuplicate = this.state.contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (isDuplicate) {
      window.alert(`Contact ${data.name} already exists!`);
      return;
    }

    // Adding new contact with a unique generated id
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          ...data,
          id: nanoid(),
        },
      ],
    }));
  };

  handleDelete = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleFilterInput = e => {
    this.setState({ filter: e.target.value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

  render() {
    return (
      <>
        <Pagetitle>Phonebook</Pagetitle>

        <ContactForm onSubmit={this.handleSubmit} />
        <Filter value={this.state.filter} onChange={this.handleFilterInput} />
        <ContactList contacts={this.filterContacts()} onDelete={this.handleDelete} />
      </>
    );
  }
}

export default App;
