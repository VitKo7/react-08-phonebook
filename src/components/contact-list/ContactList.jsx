import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import ContactListItem from '../contact-list-item/ContactListItem';
// import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import popTransition from './transitions/pop.module.css';
// import slideTransition from './transitions/slide.module.css';
import styles from './ContactList.module.css';

class ContactList extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div className="contactsList">
        {this.props.contacts.length === 0 ? (
          <p>There are no contacts here yet ...</p>
        ) : (
          <TransitionGroup component="ul" className={styles.list}>
            {/* <ul className={styles.list}> */}
            {this.props.contacts.map(contact => (
              <CSSTransition
                key={contact.id}
                timeout={200}
                classNames={popTransition}
              >
                <li className={styles.contactListItem} key={contact.id}>
                  <ContactListItem {...contact} />
                </li>
              </CSSTransition>
            ))}
            {/* </ul> */}
          </TransitionGroup>
        )}
      </div>
    );
  }
}

// const ContactList = ({ contacts }) => {
// componentDidMount() {
//   this.props.fetchContacts();
// }
// return (
//   <div className="contactsList">
//     {contacts.length === 0 ? (
//       <p>There are no contacts here yet ...</p>
//     ) : (
//       <TransitionGroup component="ul" className={styles.list}>
//         {/* <ul className={styles.list}> */}
//         {contacts.map(contact => (
//           <CSSTransition
//             key={contact.id}
//             timeout={200}
//             classNames={popTransition}
//           >
//             <li className={styles.contactListItem} key={contact.id}>
//               <ContactListItem {...contact} />
//             </li>
//           </CSSTransition>
//         ))}
//         {/* </ul> */}
//       </TransitionGroup>
//     )}
//   </div>
// );
// };

// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   // onRemove: PropTypes.func.isRequired,
// };

// const getFilteredContacts = state => {
//   const { filter, items } = state.contacts;
//   // const { contacts } = this.state;
//   return items.filter(item =>
//     item.name.toLowerCase().includes(filter.toLowerCase()),
//   );
// };

// const mapStateToProps = state => ({
//   contacts: getFilteredContacts(state),
// });

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

export default ContactList;
