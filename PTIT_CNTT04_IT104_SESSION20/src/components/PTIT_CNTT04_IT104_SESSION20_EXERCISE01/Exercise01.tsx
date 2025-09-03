import React, { useState } from 'react'

export default function Exercise01() {
    const [value, setValue] = useState<string>('');
    const [error, setError] = useState<string>('');
    const handleChange=( e: React.ChangeEvent<HTMLInputElement>) =>{
        if(e.target.value.length > 5){
            setError('Chuỗi nhập vào dài hơn 5 kí tự');
        }else{
            setError('');
        }
    }
  return (
    <div>
        <p>Kiểm tra độ dài chuỗi nhập vào</p>
        <input type="text" placeholder='Nhap vao day...' onChange={handleChange}/>
        <p style={{color:'red'}}>{error}

        </p>
    </div>
  )
}
