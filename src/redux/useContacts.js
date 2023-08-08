import { useDispatch, useSelector } from 'react-redux';
import {
  selectUser,
  selectContacts,
  selectFilters,
  selectIsLoading,
  selectError,
  selectVisibleContacts,
  selectToken,
  selectLoggedIn,
} from './selectors';
import {
  getContact,
  addContact,
  deleteContact,
  updateContact,
  getUser,
  createUser,
  loginUser,
  logoutUser,
} from './operations';
import { setStatusFilter } from './filtersSlice';
import { useCallback } from 'react';

export const useContacts = () => {
  const dispatch = useDispatch();
  const isUser = useSelector(selectUser);
  const isToken = useSelector(selectToken);
  const isLoading = useSelector(selectIsLoading);
  const isLoggedIn = useSelector(selectLoggedIn);
  const error = useSelector(selectError);
  const valueContacts = useSelector(selectContacts);
  const valueFilters = useSelector(selectFilters);
  const visibleContacts = useSelector(selectVisibleContacts);

  const getNewUser = useCallback(() => dispatch(getUser()), [dispatch]);

  const createNewUser = newUser => {
    dispatch(createUser(newUser));
  };
  const loginNewUser = dataUser => {
    dispatch(loginUser(dataUser));
  };
  const logoutNewUser = () => {
    dispatch(logoutUser());
  };

  //! ##################################################################
  const getContacts = useCallback(() => dispatch(getContact()), [dispatch]);

  const addContacts = newContact => {
    dispatch(addContact(newContact));
  };

  const deleteContacts = id => {
    dispatch(deleteContact(id));
  };

  const updateContacts = contact => {
    dispatch(updateContact(contact));
  };

  const filterContact = updatedTodo => {
    dispatch(setStatusFilter(updatedTodo));
  };

  return {
    isUser,
    isToken,
    isLoading,
    isLoggedIn,
    error,
    valueContacts,
    valueFilters,
    visibleContacts,
    getContacts,
    addContacts,
    deleteContacts,
    filterContact,
    updateContacts,
    getNewUser,
    createNewUser,
    loginNewUser,
    logoutNewUser,
  };
};
