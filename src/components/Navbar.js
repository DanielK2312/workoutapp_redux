import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{ marginTop: "-19px" }}
      className="ui massive teal fluid three item inverted menu"
    >
      <Link style={{ color: "black" }} to="/" className="item">
        About
      </Link>
      <Link style={{ color: "black" }} to="/trackWorkout" className="item">
        Track Workout
      </Link>
      <Link style={{ color: "black" }} to="calculateMax" className="item">
        Calculate Max
      </Link>
    </div>
  );
};

export default Navbar;
