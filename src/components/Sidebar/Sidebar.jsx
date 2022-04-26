import React from "react";
import { Col } from "react-bootstrap";
import Filters from "../../data/Filters";
import MobileFilter from "../MobileFilter";
import PriceFilter from "../PriceFilter";
import VariantFilter from "../VariantFilter";

const Sidebar = () => {
  return (
    <>
      <Col lg={3} className="card d-none d-lg-block py-2 px-3">
        <PriceFilter />

        <VariantFilter filters={Filters} />
      </Col>
      <MobileFilter>
        <PriceFilter />

        <VariantFilter filters={Filters} />
      </MobileFilter>
    </>
  );
};

export default Sidebar;
