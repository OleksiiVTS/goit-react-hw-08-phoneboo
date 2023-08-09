import { createSelector } from '@reduxjs/toolkit';

export const selectUser = state => state.contacts.dataUser;
export const selectToken = state => state.contacts.token;
export const selectContacts = state => state.contacts.dataContacts;
export const selectLoggedIn = state => state.contacts.isLoggedIn;
export const selectUpdateContact = state => state.contacts.updateContact;
export const selectFilters = state => state.filters;

export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilters],
  (contacts, filters) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filters.toLowerCase())
    );
  }
);
