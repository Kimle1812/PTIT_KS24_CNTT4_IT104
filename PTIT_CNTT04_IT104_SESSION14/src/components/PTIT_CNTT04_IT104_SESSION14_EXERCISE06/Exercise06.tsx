import React, { Component } from "react";

interface State {
  genre: string;  
  submitted?: string
}

export default class Exercise06 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      genre: "",
      submitted: undefined,
    };
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({ submitted: this.state.genre });
    console.log(this.state.genre);
    
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ genre: e.target.value });
  };

  render() {
    const { genre, submitted } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label><b>Giới tính:</b></label><br />

          <input type="radio" name="gender" value="Nam" checked={genre === "Nam"} onChange={this.handleChange}/>Nam <br />

          <input type="radio"name="gender" value="Nữ" checked={genre === "Nữ"} onChange={this.handleChange}/>Nữ <br />

          <input type="radio"name="gender" value="Khác" checked={genre === "Khác"} onChange={this.handleChange}/>Khác <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
