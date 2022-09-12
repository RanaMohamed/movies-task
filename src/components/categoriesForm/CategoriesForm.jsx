import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Button, Col, Input, Row } from "antd";

import { addCategory } from "redux/categories/categoriesActions";

import "./CategoriesForm.css";

function CategoriesForm() {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    name: null,
    description: null,
  });

  const createCategory = () => {
    dispatch(addCategory(data));
  };

  return (
    <Row gutter={[16, 8]}>
      <Col xs={24} md={10}>
        <Input
          placeholder="Category Name"
          value={data.name}
          onChange={(e) =>
            setData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      </Col>
      <Col xs={24} md={10}>
        <Input
          placeholder="Category Description"
          value={data.description}
          onChange={(e) =>
            setData((prev) => ({ ...prev, description: e.target.value }))
          }
        />
      </Col>
      <Col xs={24} md={4}>
        <Button onClick={createCategory} type="primary" block>
          Create
        </Button>
      </Col>
    </Row>
  );
}

export default CategoriesForm;
