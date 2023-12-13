import React from "react";
import ChildComponents from "./ChildComponent";

//bọc 2 thẻ div trong một khối code
//   <React.Fragment>
//     <input
//       value={this.state.name}
//       type="text"
//       onChange={(event) => this.handleOnchange(event)}
//     />

//     <div className="fist">
//       Hello My Component {this.state.name}
//       {/* {console.log(" My Name is : ", name)} */}
//     </div>
//     <div className="second"> BBB</div>
//     <div className="third">
//       <button onClick={this.handleClickButton}>Click Me</button>
//     </div>
//   </React.Fragment>
// );
//   }

// state = {
//     name: "Dung Map",
//     channel: "Nha Ther",
//   };
//   handleOnchange = (event) => {
//     console.log(event.target.value);
//     this.setState({
//       name: event.target.value,
//     });
//   };

//   handleClickButton = () => {
//     console.log("Hit The Button");
//     alert("Click me");
//   };

//   render() {
//     let name = "Dũng";

class MyComponent extends React.Component {
  state = {
    firstName: "",
    lastname: "",
    arrJobs: [
      {
        id: "123",
        title: "Develope",
        salary: "500",
      },
      {
        id: "124",
        title: "Tesster",
        salary: "400",
      },
      {
        id: "125",
        title: "PM",
        salary: "600",
      },
    ],
  };

  handleOnchangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleOnchangeLastName = (event) => {
    this.setState({
      lastname: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Data : ", this.state);
  };

  render() {
    return (
      <form>
        <label for="fname">First name:</label>
        <br />
        <input
          type="text"
          value={this.state.firstName}
          onChange={(event) => this.handleOnchangeFirstName(event)}
        />
        <br />
        <label for="lname">Last name:</label>
        <br />
        <input
          type="text"
          value={this.state.lastname}
          onChange={(event) => this.handleOnchangeLastName(event)}
        />
        <br />
        <br />
        <input
          type="button"
          value="Submit"
          onClick={(event) => this.handleSubmit(event)}
        />
        <ChildComponents
          title={this.state.firstName}
          name={this.state.lastname}
          arrJobs={this.state.arrJobs}
        />
      </form>
    );
  }
}

export default MyComponent;
