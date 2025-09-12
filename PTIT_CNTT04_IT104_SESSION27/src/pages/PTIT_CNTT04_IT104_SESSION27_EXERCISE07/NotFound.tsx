import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Trang bạn tìm không tồn tại.</h1>
      <div>
        <Link to="/home">
          <button style={{ marginRight: '10px' }}>Quay về trang chủ</button>
        </Link>
        <button onClick={() => window.history.back()}>Quay lại</button>
      </div>
    </div>
  )
}