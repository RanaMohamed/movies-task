import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Categories from "pages/categories/Categories";
import Details from "pages/details/Details";

import { loadCategories } from "redux/categories/categoriesActions";

import "antd/dist/antd.min.css";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("/movies-data.json")
      .then((res) => res.json())
      .then((data) => {
        dispatch(loadCategories(data));
      });
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Categories />}></Route>
          <Route path="/categories/:categoryId" element={<Details />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
