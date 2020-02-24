import Type from "../types";

const initialState = {
  contacts: [
    // { name: "Adolf Hitler", phone: "111-11-11", id: "1" },
    // { name: "Osama bin Laden", phone: "222-22-22", id: "2" },
    // { name: "Joseph Stalin", phone: "333-33-33", id: "3" },
    // { name: "Dschinghis Khan", phone: "444-44-44", id: "4" },
    // { name: "Mao Zedong", phone: "555-55-55", id: "5" }
  ],
  filter: ""
};

const handlers = {
  [Type.ADD_CONTACT]: (state, { payload: { contact } }) => {
    return { ...state, contacts: [...state.contacts, contact] };
  },

  [Type.DELETE_CONTACT]: (state, { payload: { id } }) => {
    return {
      ...state,
      contacts: [...state.contacts.filter(contact => contact.id !== id)]
    };
  },

  [Type.FILTER_CONTACT]: (state, { payload: { query } }) => {
    return { ...state, filter: query };
  },

  DEFAULT: state => state
};

export const phonebook = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;

  return handler(state, action);
};

// ================ with toolkit ==================

// import { createReducer } from "@reduxjs/toolkit";
// import { addContact, deleteContact, filterContacts } from "./formActions";

// const initialState = {
//   contacts: [],
//   filter: ""
// };

// export const phonebook = createReducer(initialState, {
//   [addContact]: (state, { payload: { contact } }) => ({
//     ...state,
//     contacts: [...state.contacts, contact]
//   }),
//   [deleteContact]: (state, { payload: { id } }) => ({
//     ...state,
//     contacts: [...state.contacts.filter(contact => contact.id !== id)]
//   }),
//   [filterContacts]: (state, { payload: { query } }) => ({
//     ...state,
//     filter: query
//   })
// });
