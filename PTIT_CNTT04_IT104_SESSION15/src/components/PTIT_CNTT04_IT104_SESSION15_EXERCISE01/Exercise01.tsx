import React, { Component } from 'react'
interface User{
  email:string
}
export default class Exercise01 extends Component <{}, User>{
  constructor(props:{}){
    super(props);
    this.state = {
      email:""
    }
  }
  handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    console.log(this.state.email);
  }
  handleChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({
            email:e.target.value
        })
  }
  render() {
    return (
      <div>
        <h1>Form</h1>
        <form action="" onSubmit={this.handleSubmit}>
            <label htmlFor="">Email</label><br />
            <input type="text" onChange={this.handleChange}  value={this.state.email}/>
            <button>Submit</button>
        </form>
      </div>
    )
  }
}
