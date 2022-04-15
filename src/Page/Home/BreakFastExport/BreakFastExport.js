import React from "react";
import { Button, Card } from "react-bootstrap";
import "./BreakFastExport.css";
const BreakFastExport = ({ breakfast }) => {
  const { name, img, describe, price } = breakfast;
  return (
    <div className="text-center breakfast-containner ">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>   
          <Card.Text>{describe}</Card.Text>
          <Card.Text>{price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BreakFastExport;
