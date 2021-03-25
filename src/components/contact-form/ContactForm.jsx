import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts-operations';
import { nanoid } from '@reduxjs/toolkit';
import styles from './ContactForm.module.css';
import contactsSelectors from '../../redux/contacts/contacts-selectors';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;

    const entryCheck = this.props.contacts.find(
      contact => contact.name === name || contact.number === number,
    );

    if (entryCheck) {
      alert(
        `Either '${entryCheck.name}' or '${entryCheck.number}' already exists`,
      );
    } else if (name.length === 0 || number.length === 0) {
      alert(`Please, fill in all the fields`);
    } else {
      const contactNew = {
        id: nanoid(),
        name,
        number,
      };
      this.props.addContact(contactNew);
    }
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit} className={styles.addContactForm}>
          <label className={styles.label}>Name:</label>
          <input
            name="name"
            type="text"
            placeholder="Name Surname"
            className={styles.input}
            onChange={this.handleInput}
            value={name}
          />
          <label className={styles.label}>Number:</label>
          <input
            name="number"
            type="text"
            // type="tel"
            placeholder="123-456"
            // pattern="[0-9]{3}-[0-9]{3}"
            className={styles.input}
            onChange={this.handleInput}
            value={number}
          />
          {/* <span className={styles.text}>
            <i>Use this format only:</i> xxx-xxx
          </span> */}
          <button type="submit" className={styles.btnAdd}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: contactsSelectors.getAllContacts(state),
});

const mapDispatchToProps = {
  addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
