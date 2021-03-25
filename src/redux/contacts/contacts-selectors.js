import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;

const getAllContacts = state => state.contacts.items;

const getFilter = state => state.contacts.filter;

// const getFilteredContacts = state => {
//   const items = getAllContacts(state);
//   const filter = getFilter(state);

//   return items.filter(item =>
//     item.name.toLowerCase().includes(filter.toLowerCase()),
//   );
// };

const getFilteredContacts = createSelector(
  [getAllContacts, getFilter],
  (items, filter) => {
    return items.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);



export default {
  getLoading,
  getAllContacts,
  getFilter,
  getFilteredContacts,
};
