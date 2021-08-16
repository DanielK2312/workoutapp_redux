import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TableDataInputs from "./components/TableDataInputs";
import CalculateMax from "./components/CalculateMax";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <br></br>
      <Router>
        <Navbar />
        <div className="ui container">
          <Switch>
            <Route path="/" exact component={About} />
            <Route path="/trackWorkout" component={TableDataInputs} />
            <Route path="/calculateMax" component={CalculateMax} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
