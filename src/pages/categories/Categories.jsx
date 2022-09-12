import React from "react";
import { useSelector } from "react-redux";

import { Row, Col, Divider } from "antd";

import CategoriesForm from "components/categoriesForm/CategoriesForm";
import CategoryCard from "components/categoryCard/CategoryCard";

import { allCategoriesSelector } from "redux/categories/categoriesSelectors";

import "./Categories.css";

function Categories() {
  const categories = useSelector(allCategoriesSelector);

  return (
    <>
      <CategoriesForm />
      <Divider></Divider>
      <Row gutter={[16, 16]}>
        {categories.map((category) => (
          <Col
            className="gutter-row"
            key={category.id}
            xs={24}
            sm={12}
            md={8}
            lg={6}
          >
            <CategoryCard category={category} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Categories;
