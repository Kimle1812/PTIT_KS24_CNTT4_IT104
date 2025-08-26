import React, { Component } from 'react'
interface Login{
    isLoggedIn:boolean;
}
export default class LoginStatus extends Component <{}, Login>{
    constructor(props:{}){
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }
    handleChange = () => {
        this.setState(prevState => ({ isLoggedIn: !prevState.isLoggedIn }));
    }
  render() {
    return (
      <div>
        <h2>{this.state.isLoggedIn? "Xin chào User" : "Vui lòng đăng nhập để tiếp tục"}</h2>
        <button onClick={this.handleChange}>{this.state.isLoggedIn ? "Đăng xuất" : "Đăng nhập"}</button>
      </div>
    )
  }
}
