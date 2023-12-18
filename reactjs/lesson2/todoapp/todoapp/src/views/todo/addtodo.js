import React from "react";
import { toast } from "react-toastify";

class Addtodo extends React.Component {
  state = {
    title: "",
  };

  handleOnchangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleClickTodo = () => {
    if (!this.state.title) {
      toast.error("Mời bạn nhập vào ạ");

      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 1001),
      title: this.state.title,
    };
    this.props.addNewTodo(todo);
    this.setState({
      title: "",
    });
  };
  render() {
    let { title } = this.state;

    return (
      <div className="add-todo">
        <input
          type="text"
          value={title}
          onChange={(event) => this.handleOnchangeTitle(event)}
        />
        <button type="button" onClick={() => this.handleClickTodo()}>
          Add
        </button>
      </div>
    );
  }
}

export default Addtodo;
