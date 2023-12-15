import React from "react";
import "./demo.css";
class ChildComponents extends React.Component {
  state = {
    showjob: false,
  };

  handleShowHideButton = () => {
    this.setState({
      showjob: !this.state.showjob,
    });
  };

  render() {
    let { arrJobs } = this.props;
    let { showjob } = this.state;
    let check = showjob === true ? "showjob = true" : "showjob = false";
    console.log("check Conditional : ", check);
    return (
      <div className="job-list">
        {showjob === false ? (
          <div>
            <button
              className="btn-show"
              onClick={() => this.handleShowHideButton()}
            >
              show
            </button>
          </div>
        ) : (
          <>
            {arrJobs.map((item, index) => {
              if (item.salary > 400) {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary} $
                  </div>
                );
              }
            })}
            <button onClick={() => this.handleShowHideButton()}>hide</button>
          </>
        )}
        <div></div>
      </div>
    );
  }
}

export default ChildComponents;
