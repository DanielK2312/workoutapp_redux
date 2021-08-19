import React, { useEffect, useState } from "react";
import { exerciseData } from "./Exercises";

const RenderChosenWorkout = ({ chosenWorkout }) => {
  const [displayNote, setDisplayNote] = useState(false);

  // useeffect to only display note when the chosenWorkout state is one of the options
  useEffect(() => {
    if (chosenWorkout !== "") {
      setDisplayNote(true);
    }
  }, [chosenWorkout]);

  // map through list of workout exercises and conditionally render
  const mapData = exerciseData.map((exercise, index) => {
    if (
      chosenWorkout === "Push Powerlifter Style" &&
      exercise.body_part === "Push Powerlifter Style"
    ) {
      return (
        <div key={index} style={{ border: "1px solid" }}>
          {exercise.exercise}
          <br />
          {exercise.sets}
        </div>
      );
    } else if (
      chosenWorkout === "Pull Powerlifter Style" &&
      exercise.body_part === "Pull Powerlifter Style"
    ) {
      return (
        <div key={index} style={{ border: "1px solid" }}>
          {exercise.exercise}
          <br />
          {exercise.sets}
        </div>
      );
    } else if (
      chosenWorkout === "Quads Powerlifter Style" &&
      exercise.body_part === "Quads Powerlifter Style"
    ) {
      return (
        <div key={index} style={{ border: "1px solid" }}>
          {exercise.exercise}
          <br />
          {exercise.sets}
        </div>
      );
    } else if (
      chosenWorkout === "Hamstrings Powerlifter Style" &&
      exercise.body_part === "Hamstrings Powerlifter Style"
    ) {
      return (
        <div key={index} style={{ border: "1px solid" }}>
          {exercise.exercise}
          <br />
          {exercise.sets}
        </div>
      );
    } else {
      return <div key={index}></div>;
    }
  });

  return (
    <div style={{ marginTop: "50px" }}>
      {displayNote && (
        <h4 className="ui dividing header">
          *Note - Failure Means unable to do another rep of the exercise with
          perfect form
        </h4>
      )}
      {mapData}
    </div>
  );
};

export default RenderChosenWorkout;
