import React from "react";
import { Link } from "react-router-dom";
import Slider from "../Slider/Slider";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Slider></Slider>

      <div className="text-center middle mt-3">
        <Link to="/breakfast">BreakFast</Link>
        <Link to="/lunch">Lunch</Link>
        <Link to="/dinner">Dinner</Link>
      </div>
    </div>
  );
};

export default Home;
