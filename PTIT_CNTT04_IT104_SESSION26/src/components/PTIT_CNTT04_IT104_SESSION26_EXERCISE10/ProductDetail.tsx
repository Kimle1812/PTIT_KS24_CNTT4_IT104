import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetail() {
    const products = JSON.parse(localStorage.getItem("products") || "[]");
    const {index}=useParams();
  return (
    <div style={{display: "flex"}}>
      <img src={products[Number(index)].image} alt="" />
      <div>
        <p>Id: {products[Number(index)].id}</p>
        <p>Name: {products[Number(index)].name}</p>
        <p>Price: {products[Number(index)].price}</p>
      </div>
    </div>
  )
}