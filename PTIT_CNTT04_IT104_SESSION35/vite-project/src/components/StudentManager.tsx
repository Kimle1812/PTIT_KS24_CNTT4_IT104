import { useState, type ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { Student } from '../utils/type';
import { addStudent, delStudent } from '../store/slices/studentSlice';

export default function StudentManager() {
    const [user,setUser] = useState<Student>({
        id:Math.floor(Math.random()*99999),
        name:""
    })
    const dispatch = useDispatch();
    const result = useSelector((data:any)=>{
        return data.students.students
    });
    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setUser({...user,name:e.target.value})
    }
    const addStudents=()=>{
        dispatch(addStudent(user));
    }
    const deleteStudent=(id:number)=>{
        dispatch(delStudent(id));
    }
  return (
    <div>
        
        <h1>QUản lý sinh viên</h1>
        <input type="text" value={user.name} onChange={handleChange}/>
        <button onClick={addStudents}>Thêm</button>

        <ul>
            {result.map((item:Student,index:number)=>{
                return <li key={item.id}>{item.name} <button onClick={() => deleteStudent(item.id)}>Xóa</button></li>
            })}
        </ul>
    </div>
  )
}

