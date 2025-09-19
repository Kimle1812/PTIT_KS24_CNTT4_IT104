import { useSelector } from 'react-redux'
export default function Profile() {
      const result:any = useSelector((data:any)=>{
        console.log("data",data);
        return data.profile.user;
    })
  return (
    <div>
        <b>Thông tin cá nhân</b>
        <p>Id:{result.id}</p>
        <p>Họ và tên :{result.userName}</p>
        <p>Giới tính:{result.gender}</p>
        <p>Ngày sinh:{result.dateBirth}</p>
        <p>Địa chỉ:{result.address}</p> 
            
    </div>
  )
}
