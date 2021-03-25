import { connect } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/contacts-operations';
import ContactList from './ContactList';
import { handleInput } from '../../redux/contacts/contacts-actions';
import contactsSelectors from '../../redux/contacts/contacts-selectors';

// const getFilteredContacts = state => {
//   const { filter, items } = state.contacts;

//   return items.filter(item =>
//     item.name.toLowerCase().includes(filter.toLowerCase()),
//   );
// };

const mapStateToProps = state => ({
  contacts:
    state.contacts.items.length > 2
      ? contactsSelectors.getFilteredContacts(state)
      : state.contacts.items,
});

const mapDispatchToProps = {
  fetchContacts,
  handleInput,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
