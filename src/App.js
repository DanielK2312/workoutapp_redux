import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TableDataInputs from "./components/TableDataInputs";
import CalculateMax from "./components/CalculateMax";
import DailyIntake from "./components/DailyIntake";
import WorkoutGen from "./components/WorkoutGen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <br></br>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/trackWorkout" component={TableDataInputs} />
          <Route path="/calculateMax" component={CalculateMax} />
          <Route path="/calculateIntake" component={DailyIntake} />
          <Route path="/generateWorkout" component={WorkoutGen} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
