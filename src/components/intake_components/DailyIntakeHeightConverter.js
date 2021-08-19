import React, { useState } from "react";

const DailyIntakeHeightConverter = () => {
  const [foot, setFoot] = useState("");
  const [inch, setInch] = useState("");
  const [centimeter, setCentimeter] = useState(0);
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // set Centimeter value
    setCentimeter(convertInputToCentimeters(parseInt(foot), parseInt(inch)));
    // show success message with conversion
    setShow(true);
    // Clear Input after submitting form
    setFoot("");
    setInch("");
  };

  const convertInputToCentimeters = (foot, inch) => {
    return Math.floor(foot * 30.48 + inch * 2.54);
  };

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <h4 className="ui dividing header">Convert Height to Centimeters</h4>
      <div className="two fields">
        <div className="field">
          <label>Foot</label>
          <input
            type="text"
            placeholder="Enter Foot Value"
            onChange={(e) => setFoot(e.target.value)}
            value={foot}
          />
        </div>
        <div className="field">
          <label>Inch</label>
          <input
            type="text"
            placeholder="Enter Inch Value"
            onChange={(e) => setInch(e.target.value)}
            value={inch}
          />
        </div>
      </div>
      <button className="fluid ui teal button" type="submit">
        Convert to Centimeters
      </button>
      {show && (
        <div className="ui positive message">
          <i className="close icon" onClick={() => setShow(false)}></i>
          <div className="header">
            Your Height in Centimeters is: {centimeter}cm
          </div>
        </div>
      )}
    </form>
  );
};

export default DailyIntakeHeightConverter;
