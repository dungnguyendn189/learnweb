import React from "react";
import ChildComponents from "./ChildComponent";

class AddReactComponent extends React.Component {
  state = {
    titlejob: "",
    salary: "",
  };

  handleChangeTitJob = (event) => {
    this.setState({
      titlejob: event.target.value,
    });
  };

  handleChangeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Data : ", this.state);
  };

  render() {
    return (
      <>
        <form>
          <label for="fname">Title Job:</label>
          <br />
          <input
            type="text"
            value={this.state.titlejob}
            onChange={(event) => this.handleChangeTitJob(event)}
          />
          <br />
          <label for="lname"> Salary:</label>
          <br />
          <input
            type="text"
            value={this.state.salary}
            onChange={(event) => this.handleChangeSalary(event)}
          />
          <br />
          <br />
          <input
            type="button"
            value="Submit"
            onClick={(event) => this.handleSubmit(event)}
          />
        </form>
      </>
    );
  }
}

export default AddReactComponent;
