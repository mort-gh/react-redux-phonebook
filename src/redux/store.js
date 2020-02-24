import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { devToolsEnhancer } from "redux-devtools-extension";
// import { configureStore } from "@reduxjs/toolkit";
import { phonebook } from "./contacts/formReducer";

const rootReducer = combineReducers({
  phonebook
});

const persistConfig = {
  key: "contacts",
  storage,
  whitelist: ["phonebook"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
// export const store = configureStore({ reducer: persistedReducer });
export const store = createStore(persistedReducer, devToolsEnhancer());
export const persistor = persistStore(store);
