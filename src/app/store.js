import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import contactReducer from "../features/forms/contactSlice";
import searchReducer from "../features/search/searchSlice";
export default configureStore({
  reducer: {
    counter: counterReducer,
    contact: contactReducer,
    search: searchReducer,
  },
});
