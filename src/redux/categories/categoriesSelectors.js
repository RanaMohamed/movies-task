import { createSelector } from "@reduxjs/toolkit";

export const allCategoriesSelector = (state) => state.categories.categories;
export const categoryByIdSelector = (id) =>
  createSelector(allCategoriesSelector, (categories) => {
    const category = categories.find((category) => category.id === +id);

    return category || {};
  });
