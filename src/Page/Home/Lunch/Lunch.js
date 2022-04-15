import React from "react";
import lunch1 from "../../../images/lunch/lunch1.png";
import lunch2 from "../../../images/lunch/lunch2.png";
import lunch3 from "../../../images/lunch/lunch3.png";
import lunch4 from "../../../images/lunch/lunch4.png";
import lunch5 from "../../../images/lunch/lunch5.png";
import lunch6 from "../../../images/lunch/lunch6.png";
import Lunchs from "../Lunchs/Lunchs";
const Lunch = () => {
  const lunchs = [
    {
      id: 1,
      name: "Lunch Food",
      describe: "How are dream about out food",
      price: "$8.99",
      img: lunch1,
    },
    {
      id: 2,
      name: "Lunch Food",
      describe: "How are dream about out food",
      price: "$8.99",
      img: lunch2,
    },
    {
      id: 3,
      name: "Lunch Food",
      describe: "How are dream about out food",
      price: "$8.99",
      img: lunch3,
    },
    {
      id: 4,
      name: "Lunch Food",
      describe: "How are dream about out food",
      price: "$8.99",
      img: lunch4,
    },
    {
      id: 5,
      name: "Lunch Food",
      describe: "How are dream about out food",
      price: "$8.99",
      img: lunch5,
    },
    {
      id: 6,
      name: "Lunch Food",
      describe: "How are dream about out food",
      price: "$8.99",
      img: lunch6,
    },
  ];
  return (
    <div className="container row mt-4">
      {lunchs.map((lunch) => (
        <Lunchs key={lunch.id} lunch={lunch}></Lunchs>
      ))}
    </div>
  );
};

export default Lunch;
