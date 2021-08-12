import React from "react";
import GetBenchMax from "./GetBenchMax";
import GetDeadMax from "./GetDeadMax";
import GetSquatMax from "./GetSquatMax";

const CalculateMax = () => {
  return (
    <div className="ui container">
      <GetSquatMax />
      <br></br>
      <GetBenchMax />
      <br></br>
      <GetDeadMax />
    </div>
  );
};

export default CalculateMax;
