import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard/ProductCard";
import ShopNav from "../components/Breadcrumb";
import Sidebar from "../components/Sidebar";
import Products from "../data/Products";

const Shop = () => {
  const search = "iphone";

  const res = Products.filter((obj) =>
    Object.values(obj).some((val) => String(val).includes(search))
  );
  console.log(res);
  return (
    <div className="shop">
      <Container>
        <Row className="g-3 mb-2">
          <ShopNav />
        </Row>
        <Row className="g-3  mb-5 mt-1 ">
          <Sidebar />
          <Col lg={9}>
            <Row>
              {Products.map((product, i) => (
                <Col xl={3} md={4} sm={6} key={i}>
                  <ProductCard product={product} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Shop;
