import React from 'react'
import Counter from './components/Counter'
import StudentManager from './components/StudentManager'
import ListNumber from './components/ListNumber'
import Dark from './components/Dark'
import ListMode from './components/ListMode'
import Language from './components/Language'
import Favorites from './components/Favorites'
import Menu from './components/Menu'

export default function App() {
  return (
    <div>
      <hr /><h2>Bài 1</h2><br />
      <Counter></Counter><br /><hr />
      <h2>Bài 2</h2><br />
      <br /><ListNumber></ListNumber> <hr />
      <Dark></Dark>
     <hr />
     <ListMode></ListMode>
     <hr />
      <Menu></Menu> 
     <hr />
     <Language></Language> 
     <hr />
      <Favorites></Favorites>  
      {/* <StudentManager></StudentManager> */}
    </div>
  )
}
