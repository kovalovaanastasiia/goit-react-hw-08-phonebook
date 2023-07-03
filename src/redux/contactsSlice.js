import {createSlice} from '@reduxjs/toolkit';
import {createContactThunk, deleteContactThunk, getContactThunk} from "./auth/thunks";


const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: "",
};

const pendingHandler = (state) => {
  state.contacts.isLoading = true;
  state.contacts.error = null;
};

const getFulfilledHandler = (state, {payload}) => {
  state.contacts.isLoading = false;
  state.contacts.items = payload;
};

const createFulfilledHandler = (state, {payload}) => {
  state.contacts.isLoading = false;
  state.contacts.items.push(payload);
};

const deleteFulfilledHandler = (state, {payload}) => {
  state.contacts.isLoading = false;

  const index = state.contacts.items.findIndex(
    (contact) => contact.id === payload
  );
  if (index !== -1) {
    state.contacts.items.splice(index, 1);
  }

};

const rejectedHandler = (state, {payload}) => {
  state.contacts.isLoading = false;
  state.contacts.error = payload;
};
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getContactThunk.pending, pendingHandler)
      .addCase(getContactThunk.fulfilled, getFulfilledHandler)
      .addCase(getContactThunk.rejected, rejectedHandler)

      .addCase(createContactThunk.pending, pendingHandler)
      .addCase(createContactThunk.fulfilled, createFulfilledHandler)
      .addCase(createContactThunk.rejected, rejectedHandler)

      .addCase(deleteContactThunk.pending, pendingHandler)
      .addCase(deleteContactThunk.fulfilled, deleteFulfilledHandler)
      .addCase(deleteContactThunk.rejected, rejectedHandler);
  },
});

export const contactsReducer = contactsSlice.reducer;
