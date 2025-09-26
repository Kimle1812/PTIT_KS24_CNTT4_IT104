import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, editUser, getAllUser } from '../store/slices/userSlice';

export default function UserManager() {
    const result = useSelector((data:any)=>{
        
        return data.users.users
    })
    const dispatch:any= useDispatch();
    useEffect(()=>{
        dispatch(getAllUser());
    },[]);
    const handleDelete =(id:number)=>{
        dispatch(deleteUser(id))
    }
    const handleEdit=(item:any)=>{
    let newName = prompt("Nhập tên mới: ");
    const newUser={...item,name:newName};
    dispatch(editUser(newUser))
  }
  return (
    <div>
      <h2>Demo Buổi 36</h2>
      <ul>
        {result.map((item:any,index:number)=>{
            return <li key={item.id}>{item.name}
            <button onClick={() => handleDelete(item.id)}>Xóa</button>
            <button onClick={() => handleEdit(item)}>Sửa</button></li>
        })}
      </ul>
    </div>
  )
}
