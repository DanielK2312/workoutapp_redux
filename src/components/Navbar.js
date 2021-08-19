import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{ marginTop: "-19px" }}
      className="ui massive teal fluid five item inverted menu"
    >
      <Link style={{ color: "black" }} to="/" className="item">
        About
      </Link>
      <Link style={{ color: "black" }} to="/trackWorkout" className="item">
        Track Workout
      </Link>
      <Link style={{ color: "black" }} to="/calculateMax" className="item">
        Calculate Max
      </Link>
      <Link style={{ color: "black" }} to="/calculateIntake" className="item">
        Calculate Daily Intake
      </Link>
      <Link style={{ color: "black" }} to="/generateWorkout" className="item">
        Generate Workout
      </Link>
    </div>
  );
};

export default Navbar;
