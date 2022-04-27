import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductThumbnail from "../components/ProductThumbnail";
import Breadcrumb from "../components/Breadcrumb";
import ProductDetails from "../components/ProductDetails";
import ProductMoreInfo from "../components/ProductMoreInfo";
import ProductSlider from "../components/ProductSlider/ProductSlider";
import Products from "../data/Products";

const SingleProduct = () => {
  return (
    <Container>
      <Row className="g-3 mb-2">
        <Breadcrumb />
      </Row>
      <Row className="g-5">
        <Col lg={7}>
          <ProductThumbnail />
        </Col>
        <Col lg={5} className="">
          <ProductDetails />
        </Col>
      </Row>
      <Row className="g-3 mb-2">
        <ProductMoreInfo />
      </Row>
      <Row className="g-3 mb-2">
        <h4>
          <strong>our recommendation</strong>
        </h4>
        <ProductSlider auto products={Products} />
      </Row>
    </Container>
  );
};

export default SingleProduct;
