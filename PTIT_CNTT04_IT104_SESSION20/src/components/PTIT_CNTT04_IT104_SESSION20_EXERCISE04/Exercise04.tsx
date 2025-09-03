import React, { useEffect, useState } from 'react'

export default function Exercise04() {
    const [title,setTitle] = useState<string>('');
    useEffect (()=>{
        document.title = title;
    })
  return (
    <div>
      <h2>Chào mừng bạn đến với tang web của chúng tôi</h2>
      <input type="text" placeholder='Mời bạn nhập....' onChange={(e)=>setTitle(e.target.value)}/>
      <p>Tiêu đề trang sẽ thay đổi khi bạn nhập tên vào trường tên</p>
    </div>
  )
}
