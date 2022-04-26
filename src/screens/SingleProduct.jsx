import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ProductThumbnail from "../components/ProductThumbnail";
import Breadcrumb from "../components/Breadcrumb";

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
        <Col lg={5}>
          <div className="mb-3">
            <h1 c>Sony DualSense Wireless Controller for PlayStation 5</h1>
            <span>Sony</span>
          </div>
          <div className="mb-3">
            <h3>Caractéristiques :</h3>
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
                sapiente.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
                sapiente.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
                sapiente.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
                sapiente.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
                sapiente.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
                sapiente.
              </li>
            </ul>
          </div>
          <div className="d-grid gap-2">
            <Button size="lg"> Add to Card</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleProduct;
