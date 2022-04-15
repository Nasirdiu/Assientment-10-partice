import React from "react";
import dinner1 from "../../../images/dinner/dinner1.png";
import dinner2 from "../../../images/dinner/dinner2.png";
import dinner3 from "../../../images/dinner/dinner3.png";
import dinner4 from "../../../images/dinner/dinner4.png";
import dinner5 from "../../../images/dinner/dinner5.png";
import dinner6 from "../../../images/dinner/dinner6.png";
import Dinners from "../Dinners/Dinners";
const Dinner = () => {
  const dinners = [
    {
      id: 1,
      name: "Dinner Food",
      describe: "How are dream about out food",
      price: "$10.99",
      img: dinner1,
    },
    {
      id: 2,
      name: "Dinner Food",
      describe: "How are dream about out food",
      price: "$10.99",
      img: dinner2,
    },
    {
      id: 3,
      name: "Dinner Food",
      describe: "How are dream about out food",
      price: "$10.99",
      img: dinner3,
    },
    {
      id: 4,
      name: "Dinner Food",
      describe: "How are dream about out food",
      price: "$10.99",
      img: dinner4,
    },
    {
      id: 5,
      name: "Dinner Food",
      describe: "How are dream about out food",
      price: "$10.99",
      img: dinner5,
    },
    {
      id: 6,
      name: "Dinner Food",
      describe: "How are dream about out food",
      price: "$10.99",
      img: dinner6,
    },
  ];
  return (
    <div className="container mt-4 row">
      {dinners.map((dinner) => (
        <Dinners key={dinner.id} dinner={dinner}></Dinners>
      ))}
    </div>
  );
};

export default Dinner;
