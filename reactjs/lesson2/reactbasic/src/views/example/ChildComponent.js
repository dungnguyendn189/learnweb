import React from "react";

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

    return (
      <div className="job-list">
        {showjob === false && (
          <div>
            <button>show</button>
          </div>
        )}
        {showjob && (
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
            <button>hide</button>
          </>
        )}
        <div></div>
      </div>
    );
  }
}

export default ChildComponents;
