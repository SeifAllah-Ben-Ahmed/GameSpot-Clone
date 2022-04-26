import { Card, Col, Row } from "react-bootstrap";
import ProductSlider from "../components/ProductSlider/ProductSlider";

import Banner from "../data/Banner";
import Brands from "../data/Brands";
import Category from "../data/Categories";
import Products from "../data/Products";

const Home = () => {
  const brandFilter = (brand) =>
    Products.filter((item) => item.brand === brand);
  return (
    <>
      <Row className="g-3  mb-5 mt-1">
        {Banner.slice(0, 3).map((item, i) => (
          <Col className="flex-fill" lg={6} md={12} key={i}>
            <img src={item.image} alt={item.name} width="100%" />
          </Col>
        ))}
      </Row>
      <Row className="g-3 my-5">
        <h2 className="text-center ">
          <strong>Top Brands</strong>
        </h2>
        {Brands.map((item, i) => (
          <Col lg={3} md={4} xs={6} key={i}>
            <img src={item.image} alt={item.name} width={"100%"} />
          </Col>
        ))}
      </Row>
      <Row className=" g-3 my-5">
        <Col xs={12}>
          <h2 className="text-center font-weight-bold">
            <strong> Pre-Order Collectibles </strong>
          </h2>
        </Col>
        <ProductSlider products={Products} />
      </Row>
      <Row className="g-3 my-5">
        {Banner.slice(3).map((item, i) => (
          <Col className="flex-fill" lg={6} md={12} key={i}>
            <img src={item.image} alt={item.name} width="100%" />
          </Col>
        ))}
      </Row>
      <Row className=" g-3 my-5">
        <Col xs={12}>
          <h2 className="text-center font-weight-bold">
            <strong> Certified Refurbished </strong>
          </h2>
        </Col>
        <ProductSlider products={brandFilter("Iphone")} />
      </Row>
      <Row className=" g-3 my-5">
        <Col xs={12}>
          <h2 className="text-center font-weight-bold">
            <strong> Take Your PC Gaming To The Max</strong>
          </h2>
        </Col>
        <ProductSlider products={brandFilter("Pc")} />
      </Row>
      <Row className=" g-3 my-5">
        <Col xs={12}>
          <h2 className="text-center font-weight-bold">
            <strong> Featured Categories</strong>
          </h2>
        </Col>
        {Category.map(
          (item, i) =>
            item.image && (
              <Col key={i} lg={3} md={4} xs={6}>
                <Card>
                  <Card.Img variant="top" src={item.image} alt={item.name} />
                  <Card.Body>
                    <Card.Title> {item.name}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            )
        )}
      </Row>
      <Row className=" g-3 my-5">
        <Col xs={12}>
          <h2>
            <strong>Recommended Products</strong>
          </h2>
        </Col>
        <ProductSlider products={Products} />
      </Row>
    </>
  );
};

export default Home;
