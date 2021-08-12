// component keeps track of deadlift state
import React from "react";

const GetDeadMax = () => {
  return (
    <form className="ui form">
      <div className="field">
        <h5 className="ui dividing header">Deadlift Max</h5>
        <input type="text" placeholder="Enter Deadlift Max" />
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

export default GetDeadMax;
