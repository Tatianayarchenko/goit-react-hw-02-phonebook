import { Component } from 'react';
// import { nanoid } from 'nanoid';
export class ContactForm extends Component {
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
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // const { name, number } = this.state;
    console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    // const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            value={this.state.name}
            onChange={this.handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor="">
          Number
          <input
            value={this.state.number}
            onChange={this.handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

// export const ContactForm = ({ onSubmit, value, onChange }) => (

// );
