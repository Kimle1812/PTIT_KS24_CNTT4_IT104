import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import axios from "axios";
import Exercise from "./components/PTIT_CNTT04_IT104_SESSION30_EXERCISE01-8/Exercise";

interface User{
  id:number,
  name:string,
  email:string,
  age:number
}
export default function App() {
  
  const[loading,setLoading] = useState<boolean>(true);
  const [users,setUsers] = useState<User[]>([]);
  async function getAllUser(){
    let result:User[];
    try {
      const response = await axios.get("http://localhost:8080/users");
      
      result = response.data;
    } catch (error) {
      
    }finally{
      setTimeout(()=>{
        setLoading(false);
        setUsers([...result]);
      },3000);
    }
  }
  useEffect(()=>{
    getAllUser();
  },[]);
  return (
    <div>
      {/* <div>Hoc API</div>
      {loading ? <Loading></Loading>:""}
      {
        users.map((user:User,index:number)=>{
          return <>
          <li key={index}>{user.name}</li>
          </>
        })
      } */}
      {/* Bài 1-8 */}
      <Exercise></Exercise>
    </div>
  )
}
