import { Component } from 'react';
import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';
import { ContactForm } from 'components/ContactForm';
import { Contacts } from 'components/Contacts';
import { Filter } from 'components/Filter';

export class App extends Component {
  static propTypes = {
    // Statistics: {
    //   good: PropTypes.number.isRequired,
    //   neutral: PropTypes.number.isRequired,
    //   bad: PropTypes.number.isRequired,
    //   total: PropTypes.number.isRequired,
    //   positivePercentage: PropTypes.number.isRequired,
    // },
    // Section: {
    //   title: PropTypes.string.isRequired,
    //   children: PropTypes.node.isRequired,
    // },
    // Notification: { message: PropTypes.string.isRequired },
    // FeedbackOptions: {
    //   options: PropTypes.objectOf(PropTypes.string).isRequired,
    //   onLeaveFeedback: PropTypes.object.isRequired,
    // },
  };

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHendler = data => {
    console.log(data);
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    this.checkSameName(data.name)
      ? alert(`${data.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [contact, ...prevState.contacts],
        }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  checkSameName = name => {
    const { contacts } = this.state;
    const normalizedName = name.toLowerCase();
    return contacts.find(
      contact => contact.name.toLowerCase() === normalizedName
    );
  };

  render() {
    // const { contacts, filter } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <div
        style={{
          padding: '20px',
          // height: '100vh',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          // fontSize: 40,
          // color: '#010101'
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHendler} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <Contacts
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />

        {/* <h1>Phonebook</h1>
      
  <ContactForm ... /> */}
        {/* 
  <h2>Contacts</h2>
  <Filter ... />
  <ContactList ... /> */}
      </div>
    );
  }
}
