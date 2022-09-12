import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
  },
  reducers: {
    loadCategories: (state, payload) => {
      state.categories = payload.payload.categories;
    },
    addCategory: (state, payload) => {
      const category = payload.payload;
      state.categories.push({
        id: Date.now(),
        name: category.name,
        description: category.description,
        movies: [],
      });
    },
    addMovie: (state, payload) => {
      const movie = payload.payload;
      const categoryId = movie.categoryId;
      const category = state.categories.find(
        (category) => category.id === +categoryId
      );

      category.movies.push({
        id: Date.now(),
        name: movie.name,
        description: movie.description,
        rate: movie.rate,
      });
    },
    deleteMovie: (state, payload) => {
      const categoryId = payload.payload.categoryId;
      const movieId = payload.payload.movieId;
      const category = state.categories.find(
        (category) => category.id === +categoryId
      );

      category.movies = category.movies.filter(
        (movie) => movie.id !== +movieId
      );
    },
    updateMovie: (state, payload) => {
      const categoryId = payload.payload.categoryId;
      const movieId = payload.payload.movieId;
      const updatedData = payload.payload.updatedMovie;
      const category = state.categories.find(
        (category) => category.id === +categoryId
      );

      const movie = category.movies.find((movie) => movie.id === +movieId);

      movie.name = updatedData.name;
      movie.description = updatedData.description;
      movie.rate = updatedData.rate;
    },
  },
});

export default categoriesSlice;
