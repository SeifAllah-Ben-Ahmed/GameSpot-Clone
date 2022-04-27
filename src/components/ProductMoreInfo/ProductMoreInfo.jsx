import React from "react";
import { Accordion } from "react-bootstrap";

const ProductMoreInfo = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <strong>Specifications</strong>
        </Accordion.Header>
        <Accordion.Body>
          <h4>XBOX All Access Attributes</h4>
          xbox All Access Monthly Price Value 34.99
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <strong>IMPORTANT INFO</strong>
        </Accordion.Header>
        <Accordion.Body className="text-justify">
          4K at 120 FPS: Requires supported content and display. Use on Xbox
          Series X as content becomes available.
          <br />
          Xbox Game Pass: Game catalog varies over time (xbox.com/gamepass).
          <br />
          Halo Infinite: Expected 2021.
          <br />
          Smart Delivery: supported games only.
          <br />
          120 FPS: Requires supported content and display; use on Xbox Series X
          & S as content becomes available. 4K streaming: with select apps, see
          Xbox.com. Some apps require app provider-specific subscriptions and/or
          other requirements. Dolby: Dolby Vision HDR on Xbox requires a
          compatible display. Dolby Atmos for Headphones requires an additional
          purchase from Microsoft Store.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default ProductMoreInfo;
