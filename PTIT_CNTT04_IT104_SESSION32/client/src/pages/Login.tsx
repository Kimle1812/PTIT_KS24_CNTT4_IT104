
import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Login() {
    const reslut = useSelector((data:any) => {
        console.log(data.register);
        return data.register; 
    })

    const [email, setEmail] = useState(reslut.email);
    const [password, setPassword] = useState(reslut.pass);
    const handleEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    const handlePass = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const handleLogin = () => {
        if(reslut.email!== email || reslut.pass !== password){
            alert("Tài khoản hoặc mật khẩu không hợp lệ ");
            return
        }
        alert("Dăng nhập thành công");  
        setEmail("");
        setPassword("");
    }
  return (
    <div>
      <h1 >Đăng nhập</h1>
      <input type="text" placeholder="NHập email " onChange={handleEmail} value={email}/>
      <br />
      <input type="password" placeholder="Nhập mật khẩu" onChange={handlePass} value={password}/>
      <br />
      <button onClick={handleLogin}>Đăng nhập</button>
    </div>
  );
}
