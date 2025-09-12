
import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <p>Trang goi thieu</p>
      <Link to={`/home`}>Quay về trang chủ</Link>
    </div>
  )
}
