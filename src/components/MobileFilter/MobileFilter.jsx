import React, { useState } from "react";
import { BsFilter } from "react-icons/bs";
import { Button, Col, Offcanvas } from "react-bootstrap";

const MobileFilter = ({ children }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Col className="d-block d-lg-none">
        <Button variant="danger" onClick={handleShow}>
          <BsFilter />
          Filter
        </Button>
      </Col>

      <Offcanvas
        className="p-lg-5 p-3 w-100"
        placement="end"
        show={show}
        onHide={handleClose}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filter By</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="custom-scrollbar-css p-3">
          {children}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default MobileFilter;
