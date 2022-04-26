import React from "react";
import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";

const Footer = ({ data }) => {
  return (
    <Container>
      <Row className="mt-5 px-3 footer">
        {data.map((item, i) => (
          <Col xs={6} md={3} key={i}>
            <h5>
              <strong>{item.menuTitle}</strong>
            </h5>
            <ul className="p-0">
              {item.menu.map((menu, x) => (
                <li key={i + x}>{menu}</li>
              ))}
            </ul>
          </Col>
        ))}
        <Col xs={6} md={3}>
          <h5>
            <strong>SIGN UP</strong>
          </h5>
          <p>Get Exclusive Promotions, Coupons, and the Latest Events</p>
          <InputGroup className="mb-3">
            <FormControl placeholder="Enter Your E-mail" variant="danger" />
            <InputGroup.Text id="basic-addon2">
              <Button variant="danger">Join</Button>
            </InputGroup.Text>
          </InputGroup>
          <h5>
            <strong>GET THE APP</strong>
          </h5>
          <img
            src="https://www.gamestop.com/on/demandware.static/Sites-gamestop-us-Site/-/default/v1650746898724/images/apple-store.png"
            alt="apple-store"
            width="120px"
          />
          <img
            src="https://www.gamestop.com/on/demandware.static/Sites-gamestop-us-Site/-/default/v1650746898724/images/play-store.png"
            alt="play-store"
            width="120px"
          />
          <h5>
            <strong>CONNECT WITH US</strong>
          </h5>

          <BsFacebook fontSize={24} />

          <BsTwitter fontSize={24} />

          <BsInstagram fontSize={24} />

          <BsYoutube fontSize={24} />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
