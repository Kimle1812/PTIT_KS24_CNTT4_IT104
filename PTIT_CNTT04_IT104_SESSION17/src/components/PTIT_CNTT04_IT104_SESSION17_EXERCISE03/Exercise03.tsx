import React, { useState } from 'react'

export default function Exercise03() {
    const [color, setColor]=useState<string>("black");
  return (
    <div>
      <h1 style={{color: `${color=="black" ? "black" : "red"}`}}>Tieu de van ban</h1>
      <button onClick={()=>{setColor(`${color=="black" ? "red" : "black"}`)}}>Thay doi mau</button>
    </div>
  )
}