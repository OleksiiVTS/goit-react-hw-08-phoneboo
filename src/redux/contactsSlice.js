import {
  createSlice,
  isAnyOf,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import {
  getUser,
  createUser,
  loginUser,
  logoutUser,
  getContact,
  addContact,
  deleteContact,
  updateContact,
} from './operations';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    dataUser: null,
    token: null,
    dataContacts: [],
    isLoggedIn: false,
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(createUser.fulfilled, (state, action) => {
        state.dataUser = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.dataUser = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logoutUser.fulfilled, state => {
        state.dataUser = null;
        state.token = null;
        state.dataContacts = [];
        state.isLoggedIn = false;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.dataUser = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(getContact.fulfilled, (state, action) => {
        state.dataContacts = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.dataContacts.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.dataContacts.findIndex(
          contact => contact.id === action.payload.id
        );
        state.dataContacts.splice(index, 1);
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        console.log('update:', action);
      })
      .addMatcher(
        isAnyOf(
          isPending(
            createUser,
            loginUser,
            logoutUser,
            getUser,
            getContact,
            addContact,
            deleteContact,
            updateContact
          )
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          isRejected(
            createUser,
            loginUser,
            logoutUser,
            getUser,
            getContact,
            addContact,
            deleteContact,
            updateContact
          )
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(
          isFulfilled(
            createUser,
            loginUser,
            logoutUser,
            getUser,
            getContact,
            addContact,
            deleteContact,
            updateContact
          )
        ),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      );
  },
});

export const contactsReducer = persistReducer(
  {
    key: 'ist_contacts',
    storage,
    whitelist: ['token'],
  },
  contactsSlice.reducer
);
