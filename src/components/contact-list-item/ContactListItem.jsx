import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-operations';
import styles from './ContactListItem.module.css';

const ContactListItem = ({ id, name, number, deleteContact }) => {
  return (
    <>
      <p className={styles.contact}>
        <b>{name}</b>: {number}
      </p>

      <button
        data-id={id}
        onClick={event => deleteContact(id)}
        type="button"
        className={styles.btnDelete}
      >
        Delete
      </button>
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  deleteContact,
};

export default connect(null, mapDispatchToProps)(ContactListItem);
