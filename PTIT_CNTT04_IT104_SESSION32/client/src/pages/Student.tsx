import { useSelector } from 'react-redux'

export default function Student() {
    const result = useSelector((data:any)=>{
        console.log("data", data);
        return data.students.users;
        
    })
  return (
    <div>
      <h1>Quản lý sinh viên</h1>
      {result.map((item:any,index:number)=>{
        return <li key={item.id}>{item.name}</li>
      })}
    </div>
  )
}
