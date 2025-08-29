import React, { useEffect, useState } from 'react'

export default function Exercise06() {
    const [myKey, setMyKey] = useState('');
    useEffect(() => {
        const getKey = (e:React.KeyboardEvent<HTMLDivElement>) =>{
            setMyKey(e.key);
        }
        window.addEventListener('keydown', getKey);
        return ()=>{
            window.removeEventListener('keydown', getKey)
        }

    }, []);
  return (
    <div>
        <h2>Phim ban nhap: {myKey}</h2>
    </div>
  )
}
