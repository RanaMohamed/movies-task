import categoriesSlice from "./categoriesReducer";

export const {
  loadCategories,
  addCategory,
  addMovie,
  deleteMovie,
  updateMovie,
} = categoriesSlice.actions;
