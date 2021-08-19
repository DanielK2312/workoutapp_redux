import React from "react";

const About = () => {
  return (
    <div className="ui container" style={{ marginTop: "50px" }}>
      <div
        style={{
          marginTop: "50px",
          fontSize: "18px",
          border: "3px solid",
          textAlign: "center",
        }}
      >
        <p>Welcome to my custom React application!</p>
        <div>
          <p>With this application, you are able to do one of four things:</p>
          <ol>
            <li>Track your workouts to see progresss over time</li>
            <li>Calculate your inital weights to be used during your sets</li>
            <li>
              Calculate the ideal number of calories you should be eating per
              day to either lose, gain, or maintain weight for optimal
              performance using the "Calculate Daily Intake" button
            </li>
            <li>
              Generate a Workout of your Choice targeting a specific body part
              (Chest, Back, Legs) using the "Get Workout" Button
            </li>
          </ol>
        </div>

        <p>
          The application is still in development and will have more workouts
          able to be generated in the future
        </p>
        <p>Click any of the buttons above to get started!</p>
      </div>
    </div>
  );
};
export default About;
