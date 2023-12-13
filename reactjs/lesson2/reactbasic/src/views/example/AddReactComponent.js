import React from "react";
import ChildComponents from "./ChildComponent";

class AddReactComponent extends React.Component {
  state = {
    title: "",
    salary: "",
  };

  handleChangeTitJob = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleChangeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.title || !this.state.salary) {
      alert("In put title or salary Please");
      return;
    }
    console.log("Data : ", this.state);
    this.props.addNewJob({
      id: Math.floor(Math.random() * 11),
      title: this.state.title,
      salary: this.state.salary,
    });
    this.setState({
      title: "",
      salary: "",
    });
  };

  render() {
    return (
      <>
        <form>
          <label for="fname">Title Job:</label>
          <br />
          <input
            type="text"
            value={this.state.title}
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
