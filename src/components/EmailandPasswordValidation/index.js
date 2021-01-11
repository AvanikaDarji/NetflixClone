import React from "react";
export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleClick = (e) => {
      console.log(this.state.email);
      console.log(this.state.password);
    };

    this.handleChange = (e) => {
      this.setState({ [e.target.id]: [e.target.value] });
    };
  }
  render() {
    return (
      <div>
        <LabelComponent text="Email" />

        <InputComponent
          type="text"
          id="email"
          handleChange={this.handleChange}
          value={this.state.n1}
        />

        <LabelComponent text="Password" />
        <InputComponent
          type="password"
          id="password"
          handleChange={this.handleChange}
          value={this.state.n2}
        />

        <ButtonComponent handleClick={this.state.handleClick} title="Login" />
      </div>
    );
  }
}

class LabelComponent extends React.Component {
  render() {
    return <span>{this.props.text}</span>;
  }
}
class ButtonComponent extends React.Component {
  render() {
    return <button onClick={this.props.handleClick}>{this.props.title}</button>;
  }
}
class InputComponent extends React.Component {
  render() {
    return (
      <input
        type={this.props.type}
        onChange={this.props.handleChange}
        value={this.props.value}
        id={this.props.id}
      />
    );
  }
}
