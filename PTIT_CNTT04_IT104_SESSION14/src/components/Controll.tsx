import React, { Component } from 'react'

type InitialState = {
    user: {
        email: string,
        password: string,
    }
}

export default class Controll extends Component<object, InitialState> {
    constructor(props:object){
        super(props);
        this.state = {
            user:{
                email:"",
                password:""
            }
        }
    }
    handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log(this.state.user);
        this.state = {
            user:{
                email:"",
                password:""
            }
        }
    }
    handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        console.log("Gía trị name: ", e.target.name);
        const {name, value} = e.target;
        this.setState({
            user:{...this.state.user, [name]:value}
        })
        
    }
  render() {
    return (
      <div>
        <h2>Form dùng kỹ thuật Controll</h2>
        <form action="" onSubmit={this.handleSubmit}>
            <label htmlFor="">Email</label>
            <input type="text" onChange={this.handleChange} name="email" value={this.state.user.email}/>
            <br />
            <label htmlFor="">Password</label>
            <input type="text" onChange={this.handleChange} name="password" value={this.state.user.password}/>
            <br />
            <button>Login</button>
        </form>
      </div>
    )
  }
}