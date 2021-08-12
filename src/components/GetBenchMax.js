// component keep track of bench state
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBenchMax } from "../actions";

const GetBenchMax = () => {
  // pull state from reducer to be used and updated in component
  const benchMax = useSelector((state) => state.benchMax);
  // pull in useDispatch to execute action
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(benchMax);
  };

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="field">
        <h5 className="ui dividing header">Bench Max</h5>
        <input
          type="text"
          placeholder="Enter Bench Max"
          onChange={(e) => dispatch(setBenchMax(e.target.value))}
          value={benchMax}
        />
        <button
          style={{ marginTop: "10px" }}
          className="fluid primary ui button"
          type="submit"
        >
          Calculate Working Weight
        </button>
      </div>
    </form>
  );
};

export default GetBenchMax;
