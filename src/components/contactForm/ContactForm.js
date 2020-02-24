import React from "react";
import shortId from "shortid";
import { CSSTransition } from "react-transition-group";
import ContactFilter from "./contactFilter/ContactFilter";
import ContactList from "./contactList/ContactList";
import ErrorName from "./errorName/ErrorName";
import logoTransition from "../../transitions/logo.module.css";
import errorTransition from "../../transitions/error.module.css";

class ContactForm extends React.Component {
  state = {
    name: "",
    phone: "",
    contacts: [],
    filtered: [],
    isLoading: false
  };

  componentDidMount() {
    this.setState({
      contacts: [...this.props.phonebook.contacts]
    });

    if (!this.state.isLoading) {
      this.setState({
        isLoading: true
      });
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!this.getTheSameName(this.state.name)) {
      this.getFormValueContact({
        name: this.state.name,
        phone: this.state.phone,
        id: shortId()
      });

      this.setState({
        name: "",
        phone: ""
      });
    }
  };

  getFormValueContact = value => {
    this.setState(prev => {
      return {
        contacts: [...prev.contacts, value],
        filtered: [...prev.contacts, value]
      };
    });

    this.props.addContact(value);
  };

  getTheSameName = name => {
    return this.state.contacts.some(contact => contact.name === name);
  };

  getArrayFilteredContacts = value => {
    this.props.filterContacts(value);

    this.setState({
      filtered: this.props.phonebook.contacts.filter(contact =>
        contact.name
          .toLowerCase()
          .includes(this.props.phonebook.filter.toLowerCase())
      )
    });
  };

  toDeleteContact = id => {
    this.props.deleteContact(id);

    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id)
    });
  };

  render() {
    const { contacts, filtered } = this.state;
    return (
      <>
        <div>
          <form onSubmit={this.handleSubmit}>
            <CSSTransition
              timeout={500}
              in={this.state.isLoading}
              classNames={logoTransition}
            >
              <h5>Phonebook</h5>
            </CSSTransition>

            <input
              name="name"
              type="text"
              placeholder="Name"
              autoComplete="off"
              onChange={this.handleChange}
              value={this.state.name}
            />

            <input
              name="phone"
              type="text"
              placeholder="Phone (only integers!)"
              autoComplete="off"
              onChange={this.handleChange}
              value={this.state.phone}
            />

            <button
              className="waves-effect waves-light btn right"
              type="submit"
            >
              <i className="material-icons left">add</i> Add Contact
            </button>
          </form>
        </div>
        {this.props.phonebook.contacts.length > 0 && (
          <ContactFilter
            contacts={this.props.phonebook.contacts}
            onFilterContacts={this.getArrayFilteredContacts}
          />
        )}

        {this.props.phonebook.contacts.length > 0 && (
          <ContactList
            contacts={this.props.phonebook.filter ? filtered : contacts}
            deleteContact={this.toDeleteContact}
          />
        )}

        <CSSTransition
          classNames={errorTransition}
          in={this.getTheSameName(this.state.name)}
          timeout={500}
          unmountOnExit
        >
          <ErrorName name={this.state.name} />
        </CSSTransition>
      </>
    );
  }
}

export default ContactForm;
