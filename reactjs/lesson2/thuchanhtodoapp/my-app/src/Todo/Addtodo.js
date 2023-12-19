import React from "react";
import { toast } from "react-toastify";

class AddTodo extends React.Component {
  state = {
    title: "",
  };

  handleTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleAddName = () => {
    if (!this.state.title) {
      toast.error("Bạn Nên Nhập Dữ liệu vào");
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 1001),
      name: this.state.title,
    };
    this.props.addTodo(todo);
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
          onChange={(event) => this.handleTitle(event)}
        />
        <button onClick={() => this.handleAddName()}>Add</button>
      </div>
    );
  }
}

export default AddTodo;
