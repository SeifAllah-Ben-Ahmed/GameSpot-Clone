import React, { useContext, useState } from "react";
import { Offcanvas, Button } from "react-bootstrap";

import { BsChevronLeft, BsList } from "react-icons/bs";
import { menuContext } from "../../context/MenuContext";
import Category from "../../data/Categories";
import SubMenu from "./SubMenu";

const BurgerMenu = () => {
  const [show, setShow] = useState(false);
  const { state, dispatch } = useContext(menuContext);

  const handleClick = () => {
    dispatch({ type: "CLOSE_SUB" });
  };

  const handleClose = () => {
    setShow(false);
    setTimeout(() => dispatch({ type: "CLOSE_SUB" }), 500);
  };

  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="light" onClick={handleShow} className="me-1 ">
        <BsList fontSize="25px" />
      </Button>
      <Offcanvas
        className="overflow-hidden"
        show={show}
        onHide={handleClose}
        placement="start"
      >
        <Offcanvas.Header closeButton>
          {state.subMenu ? (
            <Offcanvas.Title className="back-button" onClick={handleClick}>
              <BsChevronLeft />
              Back
            </Offcanvas.Title>
          ) : (
            <Offcanvas.Title>Category</Offcanvas.Title>
          )}
        </Offcanvas.Header>
        <Offcanvas.Body className="custom-scrollbar-css">
          <h2
            style={{
              display: "block",
              fontWeight: 800,
              color: "#000",
              padding: "15px",
              fontSize: " 1.25rem",
              margin: 0,
            }}
          >
            Shop By Category
          </h2>
          <div className="custom-scrollbar-css">
            {Category.map((item, i) => (
              <SubMenu
                key={i}
                title={item.name}
                subTitle={item.subCategories}
                handleClose={handleClose}
              />
            ))}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default BurgerMenu;
