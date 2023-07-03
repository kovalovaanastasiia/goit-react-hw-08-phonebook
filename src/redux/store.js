import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {contactsReducer} from './contactsSlice';
import {filterReducer} from './filterSlice';
import {authReducer} from "./auth/authSlice";

export const store = configureStore({
  reducer: combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authReducer,
  }),
});
