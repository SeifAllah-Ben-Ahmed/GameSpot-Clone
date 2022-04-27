import BurgerMenu from "../BurgerMenu";
import {
  Col,
  Container,
  Navbar,
  Row,
  FormControl,
  InputGroup,
  Button,
  Form,
} from "react-bootstrap";
import { BsSearch, BsPerson, BsHeart, BsArrowClockwise } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import CartIcon from "../CartIcon";

const Navigation = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  console.log(search);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`shop?product=${search}`);
    setSearch("");
  };
  return (
    <Container fluid className="header shadow sticky-top">
      <Row>
        <Navbar bg="light" expand={false}>
          <Col sm={6} lg={3}>
            <BurgerMenu />
            <Link to="/">
              <Navbar.Brand>
                <img
                  className="nav-logo"
                  src="https://www.gamestop.com/on/demandware.static/Sites-gamestop-us-Site/-/default/dw246d832e/images/svg-icons/logo-gs-2.svg"
                  alt="Game Stop"
                />
              </Navbar.Brand>
            </Link>
          </Col>
          <Col lg={6} md={12}>
            <Form onSubmit={handleSearch}>
              <InputGroup>
                <InputGroup.Text className="p-0">
                  <Button type="submit" variant="danger">
                    <BsSearch />
                  </Button>
                </InputGroup.Text>
                <FormControl
                  placeholder="Search games, consoles and more"
                  type="search"
                  onChange={handleChange}
                  value={search}
                />
              </InputGroup>
            </Form>
          </Col>

          <Col
            sm={6}
            lg={3}
            className="d-flex justify-content-around align-items-center flex-fill"
          >
            <BsArrowClockwise fontSize={24} />

            <BsHeart fontSize={24} />
            <BsPerson fontSize={24} />
            {/* <BsBasket3Fill fontSize={24} /> */}
            <CartIcon fontSize={24} />
          </Col>
        </Navbar>
      </Row>
    </Container>
  );
};

export default Navigation;
