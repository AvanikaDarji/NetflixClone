import React, { Component } from "react";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      taskInfo: [],
      balance: 0,
      total: 0
    };
  }
  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = () => {
    let totalTask = [...this.state.taskInfo];
    totalTask.push({
      id: totalTask.length,
      task: this.state.text,
      status: false
    });
    this.setState({ taskInfo: totalTask });
  };
  strikeTask = (event) => {
    const element = event.target;
    element.classList.toggle("is-done");
  };
  render() {
    return (
      <>
        <TaskInput handleChange={this.handleChange} />
        <Button handleSubmit={this.handleSubmit} />
        <h3 style={{ color: "white" }}>
          {this.state.balance} task is remaining from {this.state.total}
        </h3>
        <ul style={{ color: "white" }}>
          {this.state.taskInfo.map((item) => (
            <li onClick={this.strikeTask} key={item.id}>
              {" "}
              {item.task}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

class TaskInput extends Component {
  render() {
    return (
      <input
        id="text"
        type="text"
        value={this.props.text}
        onChange={this.props.handleChange}
      />
    );
  }
}
class Button extends Component {
  render() {
    return <button onClick={this.props.handleSubmit}>Submit</button>;
  }
}
