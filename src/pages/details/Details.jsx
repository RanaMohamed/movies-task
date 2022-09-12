import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { Row, Col, Divider, PageHeader } from "antd";

import MoviesForm from "components/moviesForm/MoviesForm";
import MovieCard from "components/movieCard/MovieCard";

import { categoryByIdSelector } from "redux/categories/categoriesSelectors";

import "./Details.css";

function Details() {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const { name, movies } = useSelector(categoryByIdSelector(categoryId));

  return (
    <>
      <PageHeader
        onBack={() => navigate("/")}
        title={name}
        style={{ padding: 0 }}
      />
      <MoviesForm></MoviesForm>
      <Divider />
      <Row gutter={[16, 16]}>
        {movies?.map((movie) => (
          <Col className="gutter-row" key={movie.id} xs={24} sm={12}>
            <MovieCard movie={movie}></MovieCard>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Details;
