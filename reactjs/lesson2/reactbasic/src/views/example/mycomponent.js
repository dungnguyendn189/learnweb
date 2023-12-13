import React from "react";
import AddReactComponent from "./AddReactComponent";
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

  handleSubmit = (event) => {
    event.preventDefault();
  };

  addNewJob = (job) => {
    console.log("check job", job);

    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };

  render() {
    return (
      <>
        <AddReactComponent addNewJob={this.addNewJob} />
        <ChildComponents
          title={this.state.titlejob}
          name={this.state.salary}
          arrJobs={this.state.arrJobs}
        />
      </>
    );
  }
}

export default MyComponent;
