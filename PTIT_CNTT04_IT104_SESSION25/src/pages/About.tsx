import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function About() {
    const navigate = useNavigate();
    
    const handleLogin = ()=>{
        navigate("/login");
    }
  return (
    <div>
      Ve chung toi
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}
