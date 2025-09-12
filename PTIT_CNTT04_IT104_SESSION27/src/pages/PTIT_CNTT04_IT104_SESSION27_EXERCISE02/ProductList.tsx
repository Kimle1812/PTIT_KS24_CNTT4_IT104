
import React from 'react'
import { Link } from 'react-router-dom'

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

export default function ProductList() {
  return (
    <div>
      <h1 style={{ backgroundColor: '#2f94ffff',  color: 'white', textAlign: 'center', padding: '20px 0', margin: 0 }}>Trang danh sách sản phẩm</h1>
      <h1>Danh sách sản phẩm</h1>
      <div style={{ display: 'flex', gap: '20px', padding: '20px', overflowX: 'auto' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', minWidth: '250px', background: '#f9f9f9', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <h3>{product.name}</h3>
            <p><strong>Giá:</strong> {product.price.toLocaleString()} VND</p>
            <Link to={`/products/${product.id}`}>Xem chi tiết</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
