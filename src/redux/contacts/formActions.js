import Type from "../types";
// import { createAction } from "@reduxjs/toolkit";

export const addContact = contact => ({
  type: Type.ADD_CONTACT,
  payload: { contact }
});

export const deleteContact = id => ({
  type: Type.DELETE_CONTACT,
  payload: { id }
});

export const filterContacts = query => ({
  type: Type.FILTER_CONTACT,
  payload: { query }
});

// ================ with toolkit ==================

// export const addContact = createAction(Type.ADD_CONTACT);
// export const deleteContact = createAction(Type.DELETE_CONTACT);
// export const filterContacts = createAction(Type.FILTER_CONTACT);
