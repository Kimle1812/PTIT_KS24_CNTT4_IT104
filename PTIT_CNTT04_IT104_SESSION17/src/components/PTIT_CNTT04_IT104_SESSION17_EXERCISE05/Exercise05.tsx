
import React, { useState } from 'react'

export default function Exercise05() {
    const [name, setName]=useState<string>("")
  return (
    <div>
      <input type="text" value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setName(e.target.value)}}/>
      <p>name: {name}</p>
    </div>
  )
}
