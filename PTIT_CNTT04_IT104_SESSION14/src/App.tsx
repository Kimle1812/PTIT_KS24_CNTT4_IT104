import React, { Component } from 'react'
import Controll from './components/Controll';
import Exercise05 from './components/PTIT_CNTT04_IT104_SESSION14_EXERCISE05/exercise05';
import Exercise06 from './components/PTIT_CNTT04_IT104_SESSION14_EXERCISE06/Exercise06';


export default class App extends Component<{}> {
constructor(props:{}){
  super(props);
  this.state ={
    name:"Hong Van"
  }
}
  componentDidMount():void{

  }
  render() {
    return (
      <div>
        {/* <Controll></Controll> */}
        {/* Bài 1 */}
        {/* Bài 2 */}
        {/* Bài 3 */}
        {/* Bài 4 */}
        {/* Bài 5 */}
        {/* <Exercise05></Exercise05> */}
        {/* Bài 6 */}
        <Exercise06></Exercise06>
        {/* Bài 7 */}
        {/* Bài 8 */}
        {/* Bài 9 */}
        {/* Bài 10 */}
      </div>
    )
  }
}
