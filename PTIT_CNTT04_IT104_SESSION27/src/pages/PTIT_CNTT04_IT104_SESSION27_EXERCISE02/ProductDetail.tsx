
import React from 'react'
import { Link, useParams } from 'react-router-dom'

const products = [
  {
    id: 1,
    name: "Laptop Dell XPS 13",
    price: 35000000,
    description: "Laptop cao cấp với thiết kế mỏng nhẹ"
  },
  {
    id: 2,
    name: "Iphone 17 Air",
    price: 45000000,
    description: "Hơi xấu nhưng mà đắt"
  },
  {
    id: 3,
    name: "Samsung Galaxy S22",
    price: 25000000,
    description: "Camera 120Hz, chụp sắc nét"
  },
  {
    id: 4,
    name: "Apple Watch Series 8",
    price: 12000000,
    description: "Nhỏ nhẹ tiện lợi khi mang theo"
  },
]

export default function ProductDetail() {
  const { id } = useParams() 
  const product = products.find(p => p.id === Number(id))

  if (!product) {
    return <div><h2>Không tìm thấy sản phẩm</h2></div>
  }

  return (
    <div>
      <h1 style={{ backgroundColor: '#2f94ffff',  color: 'white', textAlign: 'center', padding: '20px 0', margin: 0 }}>Trang chi tiết sản phẩm</h1>
      <h1>Chi tiết sản phẩm</h1>
      <div style={{ border: '1px solid #ccc',width:'200px', padding: '15px', borderRadius: '8px', minWidth: '250px', background: '#f9f9f9', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
        <h3>{product.name}</h3>
        <p><strong>Giá:</strong> {product.price.toLocaleString()} VND</p>
        <p><strong>Mô tả:</strong> {product.description}</p>
        <Link to={`/products`}>Quay lại trang danh sách sản phẩm</Link>
      </div>
    </div>
  )
}
