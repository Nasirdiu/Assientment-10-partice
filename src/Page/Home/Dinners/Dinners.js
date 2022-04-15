import React from "react";
import { Card } from "react-bootstrap";

const Dinners = ({ dinner }) => {
  const { name, img, describe, price } = dinner;
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

export default Dinners;
