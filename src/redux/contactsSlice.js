import {
  createSlice,
  isAnyOf,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import { getUser, createUser, loginUser, logoutUser } from './operations';
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    dataUser: null,
    token: null,
    dataContacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(createUser.fulfilled, (state, action) => {
        state.dataUser = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.dataUser = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(logoutUser.fulfilled, state => {
        state.dataUser = null;
        state.token = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.dataUser = action.payload;
      })
      .addMatcher(
        isAnyOf(isPending(createUser, loginUser, logoutUser, getUser)),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(isRejected(createUser, loginUser, logoutUser, getUser)),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(isFulfilled(createUser, loginUser, logoutUser, getUser)),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
