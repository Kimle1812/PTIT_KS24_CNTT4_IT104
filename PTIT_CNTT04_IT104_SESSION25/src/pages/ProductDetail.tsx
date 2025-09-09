import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetail() {
    const param = useParams();

  return (
    <div>
      Chi tiet san pham
      <div>Id:</div>
    </div>
  )
}
