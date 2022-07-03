import { ContactsList, ContactsItem, ContactsText } from './Contacts.styled';

export const Contacts = ({ contacts, onDeleteContact }) => (
  <ContactsList>
    {contacts.map(({ id, name, number }) => (
      <ContactsItem key={id}>
        <ContactsText>{name}</ContactsText>
        <ContactsText>{number}</ContactsText>
        <button onClick={() => onDeleteContact(id)}>Delete</button>
      </ContactsItem>
    ))}
  </ContactsList>
);
