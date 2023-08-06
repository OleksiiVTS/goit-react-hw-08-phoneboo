import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const getUser = createAsyncThunk(
  'contacts/getUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.contacts.token;
    console.log(token);
    if (!persistToken) {
      return;
    }
    try {
      token.set(persistToken);
      const { data } = await axios.get('/users/current');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const createUser = createAsyncThunk(
  'contacts/createUser',
  async (usersData, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', usersData);
      token.set(data.token);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'contacts/login',
  async (loginData, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', loginData);
      token.set(data.token);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'contacts/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      token.unset();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

//! ######################################################################

export const getContact = createAsyncThunk(
  'contacts/getContact',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contacts, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', contacts);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async (contacts, thunkAPI) => {
    try {
      const { data } = await axios.patch(`/contacts/${contacts.id}`, contacts);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
