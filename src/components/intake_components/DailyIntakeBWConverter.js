// DailyIntake child component
import React from "react";

class DailyIntakeBWConverter extends React.Component {
  state = {
    pound: "",
    showKg: false,
    kilo: "",
  };

  handleConversionContainer = (e) => {
    e.preventDefault();
    // convert pound state into kilo equivalent
    this.setState({ pound: "" });
  };

  render() {
    return (
      <div>
        <form className="ui form" onSubmit={this.handleConversionContainer}>
          <h4 className="ui dividing header">Convert Pounds to Kilograms</h4>
          <div className="field">
            <label>Pounds</label>
            <input
              type="text"
              value={this.state.pound}
              onChange={(e) => this.setState({ pound: e.target.value })}
              placeholder="Enter your Bodyweight in Pounds"
            />
            <button
              className="fluid ui teal button"
              style={{ marginTop: "10px" }}
              type="submit"
              onClick={() =>
                this.setState({
                  showKG: true,
                  kilo: Math.floor(parseInt(this.state.pound) / 2.205),
                })
              }
            >
              Convert to Kilograms
            </button>
          </div>
        </form>
        {this.state.showKG && (
          <div className="ui positive message">
            <i
              className="close icon"
              onClick={() => this.setState({ showKG: false })}
            ></i>
            <div className="header">
              Your Bodyweight in Kilograms is: {this.state.kilo}kg
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default DailyIntakeBWConverter;
