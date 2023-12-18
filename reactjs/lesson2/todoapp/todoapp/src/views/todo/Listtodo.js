import React from "react";
import "./listtodo.scss";
import Addtodo from "./addtodo";
import { toast } from "react-toastify";

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
    editTodo: {},
  };

  addNewTodo = (todo) => {
    // let currentListToDo = this.state.listTodo;
    // currentListToDo.push(todo);
    this.setState({
      listTodo: [...this.state.listTodo, todo],
      // listTodo: currentListToDo,
    });
    toast.success("Cảm ơn bạn đã nhập vào");
  };

  handleDeletedTodo = (todo) => {
    console.log("check todo", todo);
    let currentTodo = this.state.listTodo;
    currentTodo = currentTodo.filter((item) => item.id !== todo.id);
    this.setState({
      listTodo: currentTodo,
    });
    toast.error("Delted thành công");
  };
  handleEditTodo = (todo) => {
    this.setState({
      editTodo: todo,
    });
  };
  handleOnChangeEditTodo = (event) => {
    let copyEditToDo = { ...this.state.editTodo };
    copyEditToDo.title = event.target.value;
    this.setState({
      editTodo: copyEditToDo,
    });
  };
  render() {
    // let listTodo = this.state.listTodo;
    let { listTodo, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    console.log("Check Emptyobj", isEmptyObj);
    return (
      <>
        <div className="list-to-do-container">
          <Addtodo addNewTodo={this.addNewTodo} />
          <div className="list-to-do-content">
            {listTodo &&
              listTodo.length > 0 &&
              listTodo.map((item, index) => {
                return (
                  <div className="todo-child" key={item.id}>
                    {isEmptyObj === true ? (
                      <span>
                        {index + 1} - {item.title}
                      </span>
                    ) : (
                      <>
                        {editTodo.id === item.id ? (
                          <span>
                            {index + 1} -{" "}
                            <input
                              value={editTodo.title}
                              onChange={(event) =>
                                this.handleOnChangeEditTodo(event)
                              }
                            />
                          </span>
                        ) : (
                          <span>
                            {index + 1} - {item.title}
                          </span>
                        )}
                      </>
                    )}
                    <button
                      type="button"
                      onClick={() => this.handleEditTodo(item)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => this.handleDeletedTodo(item)}
                    >
                      Deleted
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default ListToDo;

// https://www.youtube.com/watch?v=_Lu80q8EUpY&list=PLncHg6Kn2JT4C0enPGQPK7ZIlEoZ1ZvRy&index=29
