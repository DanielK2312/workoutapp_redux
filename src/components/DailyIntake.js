import React, { useState } from "react";
import { Dropdown } from "semantic-ui-react";
import DailyIntakeBWConverter from "./intake_components/DailyIntakeBWConverter";
import DailyIntakeHeightConverter from "./intake_components/DailyIntakeHeightConverter";
// Mifflin-St Jeor variant
//Sedentary (little to no exercise + work a desk job) = 1.2
// Lightly Active (light exercise 1-3 days / week) = 1.375
// Moderately Active (moderate exercise 3-5 days / week) = 1.55
// Very Active (heavy exercise 6-7 days / week) = 1.725
// Extremely Active (very heavy exercise, hard labor job, training 2x / day) = 1.9

const activityLevel = [
  {
    key: "Sedentary",
    text: "Sedentary",
    value: "Sedentary",
  },
  {
    key: "Lightly Active",
    text: "Lightly Active",
    value: "Lightly Active",
  },
  {
    key: "Moderately Active",
    text: "Moderately Active",
    value: "Moderately Active",
  },
  {
    key: "Very Active",
    text: "Very Active",
    value: "Very Active",
  },
  {
    key: "Extremely Active",
    text: "Extremely Active",
    value: "Extremely Active",
  },
];

const DailyIntake = () => {
  const [validBW, setValidBW] = useState(false);
  const [validHeight, setValidHeight] = useState(false);
  const [validAge, setValidAge] = useState(false);
  const [validActivity, setValidActivity] = useState(false);
  const [userWeight, setUserWeight] = useState("");
  const [userHeight, setUserHeight] = useState("");
  const [userAge, setUserAge] = useState("");
  const [TDEE, setTDEE] = useState(0);
  const [showTDEE, setShowTDEE] = useState(false);
  const [userActivityLevel, setUserActivityLevel] = useState("");

  /**
   * calculates TDEE assuming user has entered all of the necessary information
   * @param {event} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // Set state containing calculated TDEE on form submission
    setTDEE(
      calcTotalDailyEnergyExpenditure(
        parseInt(userWeight),
        parseInt(userHeight),
        parseInt(userAge),
        userActivityLevel
      )
    );
    setShowTDEE(true);
    // Clear inputs after submitting form
    setUserWeight("");
    setUserHeight("");
    setUserAge("");
    setUserActivityLevel("");
  };

  /**
   * Function to calculate TDEE
   * @param {number} weight users bodyweight in kilograms
   * @param {number} height users height in cm
   * @param {number} age user age
   * @param {string} activityLevel user activity level
   * @returns users total daily energy expenditure with accounting for activity level
   */
  const calcTotalDailyEnergyExpenditure = (
    weight,
    height,
    age,
    activityLevel
  ) => {
    let multiplier = 0;

    if (activityLevel === "Sedentary") {
      multiplier = 1.2;
    } else if (activityLevel === "Lightly Active") {
      multiplier = 1.375;
    } else if (activityLevel === "Moderately Active") {
      multiplier = 1.55;
    } else if (activityLevel === "Very Active") {
      multiplier = 1.725;
    } else if (activityLevel === "Extremely Active") {
      multiplier = 1.9;
    }

    console.log(userActivityLevel);

    return Math.floor((10 * weight + 6.25 * height - 5 * age + 5) * multiplier);
  };

  return (
    <div className="ui container">
      <DailyIntakeBWConverter />
      <br />
      <DailyIntakeHeightConverter />
      <br />

      <form className="ui form" onSubmit={handleSubmit}>
        <h4 className="ui dividing header">Daily Intake Calculator</h4>
        <div className="two fields">
          <div
            className={
              validBW === false ? "required field error" : "required field"
            }
          >
            <label>Kilo BW</label>
            <input
              type="text"
              value={userWeight}
              onChange={(e) => {
                setUserWeight(e.target.value);
                setValidBW(true);
              }}
              placeholder="Enter Your Bodyweight in Kilograms"
            ></input>
          </div>
          <div
            className={
              validHeight === false ? "required field error" : "required field"
            }
          >
            <label>Height</label>
            <input
              type="text"
              value={userHeight}
              onChange={(e) => {
                setUserHeight(e.target.value);
                setValidHeight(true);
              }}
              placeholder="Enter Your Height in Centimeters"
            ></input>
          </div>
        </div>
        <div
          className={
            validAge === false ? "required field error" : "required field"
          }
        >
          <label>Age</label>
          <input
            type="text"
            value={userAge}
            onChange={(e) => {
              setUserAge(e.target.value);
              setValidAge(true);
            }}
            placeholder="Enter Your Age"
          ></input>
        </div>
        <div
          className={
            validActivity === false ? "required field error" : "required field"
          }
        >
          <label>Set Activity Level</label>
          <Dropdown
            className="field"
            placeholder="Select Activity Level"
            fluid
            selection
            options={activityLevel}
            value={userActivityLevel}
            onChange={(e) => {
              setUserActivityLevel(e.target.innerText);
              setValidActivity(true);
            }}
          />
        </div>
        <button className="fluid ui teal button" type="submit">
          Calculate Total Daily Energy Expenditure
        </button>
        {showTDEE && (
          <div className="ui positive message">
            <i className="close icon" onClick={() => setShowTDEE(false)}></i>
            <div className="header">
              Your Total Daily Energy Expenditure is: {TDEE} Calories
            </div>
            <p>Weight Loss Intake: {TDEE - 300}</p>
            <p>Weight Maintenance Intake: {TDEE}</p>
            <p>Weight Gain Intake: {TDEE + 300}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default DailyIntake;
