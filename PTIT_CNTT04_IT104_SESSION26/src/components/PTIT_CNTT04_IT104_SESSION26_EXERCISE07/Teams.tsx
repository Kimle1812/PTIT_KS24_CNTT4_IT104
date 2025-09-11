import React from "react"
import { Outlet, Link } from "react-router-dom"

export default function Teams() {
  return (
    <div>
      <h1>Teams Page</h1>
      <ul className="list-disc pl-5">
        <li><Link to="1">Team 1</Link></li>
        <li><Link to="2">Team 2</Link></li>
        <li><Link to="3">Team 3</Link></li>
      </ul>
      <div className="mt-4 p-3 border rounded">
        <Outlet /> 
      </div>
    </div>
  )
}
