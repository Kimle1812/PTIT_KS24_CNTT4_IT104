import React, { useState, type ChangeEvent } from 'react'
import { useSearchParams } from 'react-router-dom';

export default function Student() {
    const [studentName, setStudentName] = useState("");
    const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
        setStudentName(e.target.value);
    }
    const [name, setSeachParamName] = useSearchParams();

    const handleClick = ()=>{
        //setSeachParamNAme truyền dữ liệu lên thanh URL
        setSeachParamName ({
            name:studentName,
            age:"18"
        })
    }
  return (
    <div>
      Trang hoc sinh <br />
      <input type="text" placeholder='Nhap ten sinh vien' onChange={handleChange} />
      <button onClick={handleClick} className="bg-blue-300 rounded-xl p-1">Tim kiem</button>

      <div>Gia tri vua tim kiem: {name.get("name")}</div>
    </div>
  )
}
