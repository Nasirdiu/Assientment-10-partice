import React from "react";
import breakfast1 from "../../../images/breakfast/breakfast1.png";
import breakfast2 from "../../../images/breakfast/breakfast2.png";
import breakfast3 from "../../../images/breakfast/breakfast3.png";
import breakfast4 from "../../../images/breakfast/breakfast4.png";
import breakfast5 from "../../../images/breakfast/breakfast5.png";
import breakfast6 from "../../../images/breakfast/breakfast6.png";
import BreakFastExport from "../BreakFastExport/BreakFastExport";
import "./BreakFast.css";
const BreakFast = () => {
  const breakFast = [
    {
      id: 1,
      name: "BreakFast Food",
      describe: "How are dream about out food",
      price: "$6.99",
      img: breakfast1,
    },
    {
      id: 2,
      name: "BreakFast Food",
      describe: "How are dream about out food",
      price: "$6.99",
      img: breakfast2,
    },
    {
      id: 3,
      name: "BreakFast Food",
      describe: "How are dream about out food",
      price: "$6.99",
      img: breakfast3,
    },
    {
      id: 4,
      name: "BreakFast Food",
      describe: "How are dream about out food",
      price: "$6.99",
      img: breakfast4,
    },
    {
      id: 5,
      name: "BreakFast Food",
      describe: "How are dream about out food",
      price: "$6.99",
      img: breakfast5,
    },
    {
      id: 6,
      name: "BreakFast Food",
      describe: "How are dream about out food",
      price: "$6.99",
      img: breakfast6,
    },
  ];
  return (
    <div className="mt-4 row container">
      {breakFast.map((breakfast) => (
        <BreakFastExport
          key={breakfast.id}
          breakfast={breakfast}
        ></BreakFastExport>
      ))}
    </div>
  );
};

export default BreakFast;
