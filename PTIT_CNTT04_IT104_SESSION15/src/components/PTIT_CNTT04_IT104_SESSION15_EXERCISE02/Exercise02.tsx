import React, { Component } from 'react'
interface Color{
    color:string
}
export default class Exercise02 extends Component<{},Color>{
    constructor(props:{}){
        super(props);
        this.state = { color:""}
    }
    handleSubmit =(e:React.FormEvent<HTMLFormElement>)=>{

    }
  render() {
    return (
      <div>
        <form action="">
            <div>Color: <span> </span></div>
            <label htmlFor="">Mau sac</label><br />
            <input type="color" /><br />
            <button>Submit</button>
        </form>
      </div>
    )
  }
}
