import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { Button, Col, Input, InputNumber, Row } from "antd";

import { addMovie } from "redux/categories/categoriesActions";

import "./MoviesForm.css";

function MoviesForm() {
  const dispatch = useDispatch();

  const { categoryId } = useParams();

  const [data, setData] = useState({
    name: null,
    description: null,
    rate: null,
  });

  const createMovie = () => {
    dispatch(addMovie({ ...data, categoryId }));
  };

  return (
    <Row gutter={[16, 8]}>
      <Col xs={24} md={7}>
        <Input
          placeholder="Movie Name"
          value={data.name}
          onChange={(e) =>
            setData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      </Col>
      <Col xs={24} md={7}>
        <InputNumber
          className="rate-input"
          placeholder="Movie Rate"
          value={data.rate}
          min={0}
          max={5}
          step={0.1}
          onChange={(value) => setData((prev) => ({ ...prev, rate: value }))}
        />
      </Col>
      <Col xs={24} md={7}>
        <Input
          placeholder="Movie Description"
          value={data.description}
          onChange={(e) =>
            setData((prev) => ({ ...prev, description: e.target.value }))
          }
        />
      </Col>
      <Col xs={24} md={3}>
        <Button onClick={createMovie} type="primary" block>
          Add Movie
        </Button>
      </Col>
    </Row>
  );
}

export default MoviesForm;
