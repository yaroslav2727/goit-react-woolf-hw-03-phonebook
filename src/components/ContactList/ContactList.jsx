import { List, Item, Button, Contactbox } from "./ContactList.styled";
import Container from "components/Container/Container";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <Container>
      <List>
        {contacts.map(contact => (
          <Item key={contact.id}>
            <Contactbox>
              {contact.name} - {contact.number}
            </Contactbox>
            <Button onClick={() => onDelete(contact.id)}>Delete</Button>
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default ContactList;
