// component keeps track of squat state
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSquatMax } from "../actions";

const GetSquatMax = () => {
  // pull state from redux to be used and updated in component
  const squatMax = useSelector((state) => state.squatMax);
  // pull in useDispatch to execute
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(squatMax);
  };

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="field">
        <h5 className="ui dividing header">Squat Max</h5>
        <input
          type="text"
          placeholder="Enter Squat Max"
          onChange={(e) => dispatch(setSquatMax(e.target.value))}
          value={squatMax}
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

export default GetSquatMax;
