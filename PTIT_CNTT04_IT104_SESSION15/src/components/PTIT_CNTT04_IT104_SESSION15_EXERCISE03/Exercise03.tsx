import React, { Component } from "react";
interface Date{
    birthday:string,
    submittedBirthday:string
}
export default class Exercise03 extends Component<{},Date> {
  constructor(props:{}) {
    super(props);
    this.state = {
      birthday: "",      
      submittedBirthday: ""
    };
  }

  handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({ submittedBirthday: this.state.birthday });
    console.log(this.state.birthday);
    
  };

  handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ birthday: e.target.value });
  };

  render() {
    return (
      <div >
        <h3>Ngày sinh:{" "}{this.state.submittedBirthday ? this.state.submittedBirthday : ""}</h3>
        <form onSubmit={this.handleSubmit}>
            <label>Ngày sinh: <br />
            <input type="date" value={this.state.birthday} onChange={this.handleChange}/>
            </label>
            <br />
            <button type="submit" style={{ marginTop: "10px" }}>Submit</button>
        </form>
      </div>
    );
  }
}
