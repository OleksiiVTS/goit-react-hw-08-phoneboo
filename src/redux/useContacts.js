import { useDispatch, useSelector } from 'react-redux';
import {
  selectUser,
  selectContacts,
  selectFilters,
  selectIsLoading,
  selectError,
  selectVisibleContacts,
} from './selectors';
import {
  addContact,
  deleteContact,
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
  const isLoading = useSelector(selectIsLoading);
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
  const addContacts = newContact => {
    dispatch(addContact(newContact));
  };

  const deleteContacts = id => {
    dispatch(deleteContact(id));
  };

  const filterContact = updatedTodo => {
    dispatch(setStatusFilter(updatedTodo));
  };

  return {
    isUser,
    isLoading,
    error,
    valueContacts,
    valueFilters,
    visibleContacts,
    addContacts,
    deleteContacts,
    filterContact,
    getNewUser,
    createNewUser,
    loginNewUser,
    logoutNewUser,
  };
};
