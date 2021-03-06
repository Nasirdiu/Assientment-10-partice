import React from "react";
import { Button, Card } from "react-bootstrap";
import "./BreakFastExport.css";
const BreakFastExport = ({ breakfast }) => {
  const { name, img, describe, price } = breakfast;
  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-4">
      <div className="text-center breakfast-containner ">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{describe}</Card.Text>
          <Card.Text>{price}</Card.Text>
        </Card.Body>
      </div>
    </div>
  );
};

export default BreakFastExport;
