import React, { Component } from 'react'
interface Progress{
    progress:string,
    submitProgress:string
}
export default class Exercise04 extends Component <{},Progress>{
    constructor(props:{}) {
        super(props);
        this.state = {
          progress: "",      
          submitProgress: ""
        };
      }
    
      handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.setState({ submitProgress: this.state.progress });
        console.log(this.state.progress);
        
      };
    
      handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ progress: e.target.value });
      };
  render() {
    return (
      <div>
        <div>Tiến độ hoàn thành: {""}{this.state.submitProgress ? this.state.submitProgress:""}%</div>
        <form action="" onSubmit={this.handleSubmit}>
            <input type="range" onChange={this.handleChange}/>
            <button type='submit' >Submit</button>
        </form>
      </div>
    )
  }
}
