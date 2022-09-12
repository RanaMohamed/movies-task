import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categories/categoriesReducer";

const store = configureStore({
  reducer: {
    categories: categoriesSlice.reducer,
  },
});

const rootReducer = combineReducers({
  categories: categoriesSlice.reducer,
});

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export default store;
