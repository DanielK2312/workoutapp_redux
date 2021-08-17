// component keeps track of deadlift state
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ErrorMessage from "./ErrorMessage";
import { setDeadMax } from "../actions";

const GetDeadMax = () => {
  // local state
  const [topSet, setTopSet] = useState("");
  const [backoffSet, setBackoffSet] = useState("");
  const [showError, setShowError] = useState(false);
  const [showSets, setShowSets] = useState(false);

  // pull in deadlift max from redux
  const deadMax = useSelector((state) => state.deadMax);

  // pull in disatch
  const dispatch = useDispatch();

  // Change error state and show error message for 2 seconds
  useEffect(() => {
    if (showError === true) {
      setTimeout(() => setShowError(false), 2000);
    }
  }, [showError]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // user input validation
    if (deadMax === "") {
      setShowError(true);
    } else {
      let topSet = Math.floor(deadMax * 0.75);
      let backoffSet = Math.floor(topSet * 0.7);

      setShowSets(true);
      setTopSet(topSet);
      setBackoffSet(backoffSet);
    }
  };

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="field">
        <h5 className="ui dividing header">Deadlift Max</h5>
        <input
          type="number"
          placeholder="Enter Deadlift Max in Pounds"
          onChange={(e) => dispatch(setDeadMax(e.target.value))}
          value={deadMax}
        />
        {showError === true ? <ErrorMessage /> : ""}
        <button
          style={{ marginTop: "10px" }}
          className="fluid teal ui button"
          type="submit"
        >
          Calculate Working Weight
        </button>
        {showSets ? (
          <div>
            <ul style={{ padding: "0", margin: "0" }}>
              <li style={{ listStyleType: "none", fontSize: "16px" }}>
                Top Set : {topSet} for 8-12 reps
              </li>
              <li style={{ listStyleType: "none", fontSize: "16px" }}>
                Backoff Set : {backoffSet} for 8-12 reps
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </form>
  );
};

export default GetDeadMax;
