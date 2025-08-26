import React, { Component } from "react";

interface State {
  name: string;
  email: string;
  age: string;
  error: string;
  submitted: boolean;
}

export default class UserForm extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: "",
      email: "",
      age: "",
      error: "",
      submitted: false,
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "name") this.setState({ name: value });
    else if (name === "email") this.setState({ email: value });
    else if (name === "age") this.setState({ age: value });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, age } = this.state;

    if (!email.includes("@")) {
      this.setState({ error: "Email không hợp lệ", submitted: false });
      return;
    }

    if (Number(age) < 0) {
      this.setState({ error: "Tuổi không được âm", submitted: false });
      return;
    }

    this.setState({ error: "", submitted: true });
  };

  handleReset = () => {
    this.setState({
      name: "",
      email: "",
      age: "",
      error: "",
      submitted: false,
    });
  };

  render() {
    const { name, email, age, error, submitted } = this.state;

    return (
      <div style={{ maxWidth: "400px", margin: "0 auto" }}>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name: </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Email: </label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Age: </label>
            <input
              type="number"
              name="age"
              value={age}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Gửi</button>
          <button type="button" onClick={this.handleReset}>
            Xóa tất cả
          </button>
        </form>

        {error && <p style={{ color: "red" }}>{error}</p>}

        {submitted && (
          <div style={{ marginTop: "20px" }}>
            <h3>Thông tin người dùng</h3>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Age: {age}</p>
          </div>
        )}
      </div>
    );
  }
}
