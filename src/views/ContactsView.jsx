import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from '../components/contact-form/ContactForm';
import ContactList from '../components/contact-list/ContactList.container';
import Filter from '../components/filter/Filter';
import { handleInput } from '../redux/contacts/contacts-actions';
import contactsSelectors from '../redux/contacts/contacts-selectors';
import Loader from 'react-loader-spinner';
import styles from './ContactsView.module.css';

class ContactsView extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  render() {
    return (
      <div className={styles.container}>
        <h2>Phonebook</h2>
        <ContactForm />

        {this.props.isLoadingContacts && (
          <Loader type="ThreeDots" color="green" height={80} width={80} />
        )}

        <div className={styles.contacts}>
          <h3 className={styles.contactsTitle}>Contacts</h3>
          <Filter />
          <ContactList handleInput={this.props.handleInput} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = {
  handleInput,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
