import React, { useRef, useState } from 'react'

export default function Ex03() {
    const [inputValue,setInputValue] = useState('');
    const ref = useRef(0);
    const handleChange =(e:React.ChangeEvent<HTMLInputElement>) =>{
      setInputValue(e.target.value)
      ref.current++;
    }
  return (
    <div>
      <input value={inputValue} onChange={handleChange} type="text" placeholder='Nhap vao day...' />
      <p>Component da render: {ref.current} lan</p>
    </div>
  )
}
