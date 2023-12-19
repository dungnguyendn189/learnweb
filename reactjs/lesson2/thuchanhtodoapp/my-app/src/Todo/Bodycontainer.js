import React from "react";
import AddTodo from "./Addtodo.js";
import { toast } from "react-toastify";

class BodyContainer extends React.Component {
  state = {
    listName: [
      {
        id: 1,
        name: "Nguyễn Đức Dũng",
      },
      {
        id: 2,
        name: "Trần Phương Nam",
      },
      {
        id: 3,
        name: "Nguyễn Ngọc Tân",
      },
    ],
    editTodo: {},
  };
  //add todo list
  addTodo = (event) => {
    let currentListName = this.state.listName;
    currentListName.push(event);
    this.setState({
      listName: currentListName,
    });
  };
  //deleted todolist
  handleDeleted = (event) => {
    console.log(event);
    let copyListName = this.state.listName;
    copyListName = copyListName.filter((item) => item.id !== event.id);
    this.setState({
      listName: copyListName,
    });
    toast.success("Bạn Đã Deleted Dữ liệu ");
  };

  handleEditTodo = (event) => {
    let { listName, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    if (!isEmptyObj && editTodo.id === event.id) {
      let listNameCopy = [...listName];

      let objIndex = listNameCopy.findIndex((obj) => obj.id == event.id);
      listNameCopy[objIndex].name = editTodo.name;
      this.setState({
        listName: listNameCopy,
        editTodo: {},
      });
      toast.success("Update Todo Successs ");
      return;
    }
    this.setState({
      editTodo: event,
    });
  };

  handleOnChangeEditTodo = (event) => {
    let copyEditTodo = { ...this.state.editTodo };
    copyEditTodo.name = event.target.value;
    this.setState({
      editTodo: copyEditTodo,
    });
    console.log(event);
  };

  render() {
    let { listName, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    console.log(isEmptyObj);
    return (
      <>
        <div className="container">
          <AddTodo addTodo={this.addTodo} />
          <div className="container-body">
            {listName &&
              listName.length !== 0 &&
              listName.map((item, index) => {
                return (
                  <>
                    <div className="add-todo-content" key={item.id}>
                      {isEmptyObj === true ? (
                        <span>
                          {index + 1} - {item.name}
                        </span>
                      ) : (
                        <>
                          {editTodo.id == item.id ? (
                            <span>
                              {index + 1} -{" "}
                              <input
                                value={editTodo.name}
                                onChange={(event) =>
                                  this.handleOnChangeEditTodo(event)
                                }
                              />
                            </span>
                          ) : (
                            <span>
                              {index + 1} - {item.name}
                            </span>
                          )}
                        </>
                      )}
                      <button onClick={() => this.handleEditTodo(item)}>
                        {isEmptyObj === true ? "Edit" : "Save"}
                      </button>
                      <button onClick={() => this.handleDeleted(item)}>
                        Delete
                      </button>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default BodyContainer;
