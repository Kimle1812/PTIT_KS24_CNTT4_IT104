import React, { Component } from 'react'
interface Counter{
    count:number
}
export default class ClickCounter extends Component <{},Counter>{
    constructor(props:{}){
        super(props);
        this.state = {
            count: 0
        }
    }
    onclickCount =() =>{
        this.setState(prevState => ({ count: prevState.count + 1 }))
    }
  render() {
    return (
      <div>
        <div>Số lần click {this.state.count}</div>
        <button onClick={this.onclickCount}> Click me </button>
      </div>
    )
  }
}
