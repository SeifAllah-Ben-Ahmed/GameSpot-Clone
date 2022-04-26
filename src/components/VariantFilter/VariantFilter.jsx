import React from "react";
import { Accordion, Form } from "react-bootstrap";

const VariantFilter = ({ filters }) => {
  const active = Array.from(Array(filters.length).keys());

  return (
    <Accordion defaultActiveKey={active} alwaysOpen className="my-1">
      {filters.map((el, i) => (
        <Accordion.Item eventKey={i} key={i} className="my-2">
          <Accordion.Header>{el.filter}</Accordion.Header>
          <Accordion.Body>
            <Form>
              {el.values.map((val, i) => (
                <Form.Check
                  key={i}
                  type="checkbox"
                  label={val}
                  value={val}
                  id={val}
                  feedbackTooltip={true}
                />
              ))}
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default VariantFilter;
