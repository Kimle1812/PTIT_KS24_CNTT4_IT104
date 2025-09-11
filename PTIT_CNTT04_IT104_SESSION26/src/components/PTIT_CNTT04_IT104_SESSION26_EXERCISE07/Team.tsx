import React from "react"
import { useParams } from "react-router-dom"

export default function Team() {
  const { teamId } = useParams()
  return (
    <div>
      <h2>Chi tiết Team {teamId}</h2>
      <p>Thông tin về team {teamId}...</p>
    </div>
  )
}
