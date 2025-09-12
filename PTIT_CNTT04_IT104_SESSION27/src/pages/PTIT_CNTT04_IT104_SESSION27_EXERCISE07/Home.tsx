
import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>Trang chu</h1>
      <p>Day la trang chu t</p>
      <button>
        <Link to={`/about`}>About</Link>
      </button>
    </div>
  )
}
