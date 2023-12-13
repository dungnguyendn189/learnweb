import React from "react";

class ChildComponents extends React.Component {
  render() {
    let { title, name, arrJobs } = this.props;
    let a = "";
    return (
      <div className="job-list">
        {arrJobs.map((item, index) => {
          return (
            <div>
              {
                (a = arrJobs.map((item, index) => {
                  return (
                    <div key={item.id}>
                      {item.title} - {item.salary}
                    </div>
                  );
                }))
              }
            </div>
          );
        })}
        {console.log("check Map array", a)}
      </div>
    );
  }
}

export default ChildComponents;
