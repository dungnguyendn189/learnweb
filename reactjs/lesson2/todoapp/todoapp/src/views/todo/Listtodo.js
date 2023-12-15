import React from "react";
import "./listtodo.scss";

class ListToDo extends React.Component {
  state = {
    listTodo: [
      {
        id: "todo1",
        title: "Doing Home Work",
      },
      {
        id: "todo2",
        title: "Makeingvideo",
      },
      {
        id: "todo3",
        title: "Fucking Bug",
      },
    ],
  };

  render() {
    // let listTodo = this.state.listTodo;
    let { listTodo } = this.state;

    return (
      <>
        <div className="list-to-do-container">
          <div className="add-todo">
            <input type="text" />
            <button type="button">Add</button>
          </div>
          <div className="list-to-do-content">
            <div className="todo-child">
              <span>To Do 1</span>
              <button type="button">Edit</button>
              <button type="button">Deleted</button>
            </div>
            <div className="todo-child">
              <span>To Do 1</span>
              <button type="button">Edit</button>
              <button type="button">Deleted</button>
            </div>
            <div className="todo-child">
              <span>To Do 1</span>
              <button type="button">Edit</button>
              <button type="button">Deleted</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ListToDo;
