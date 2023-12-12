import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Dung Map",
    channel: "Nha Ther",
  };
  handleOnchange = (event) => {
    console.log(event);
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    let name = "Dũng";

    return (
      //bọc 2 thẻ div trong một khối code
      <React.Fragment>
        <input
          value={this.state.name}
          type="text"
          onChange={(event) => this.handleOnchange(event)}
        />

        <div className="fist">
          Hello My Component {this.state.name}
          {/* {console.log(" My Name is : ", name)} */}
        </div>
        <div className="second"> BBB</div>
      </React.Fragment>
    );
  }
}

export default MyComponent;
