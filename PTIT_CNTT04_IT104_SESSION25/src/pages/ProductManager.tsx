import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const data = [
    {
        id:1,
        name:"iphone6",
        price: 5000
    },
    {
        id:2,
        name:"iphone7",
        price: 15000
    },
    {
        id:3,
        name:"iphone8",
        price: 25000
    }
]
export default function ProductManager() {
    const [products, setProducts] = useState (data);
    const navigate = useNavigate();
    const handleClick = (id:any)=>{
        navigate(`/admin/product/${id}`)
    }
  return (
    <div>
      <h1>DANH SACH SAN PHAM</h1>
      <table>
        <thead>
            <tr>
                <th>STT</th>
                <th>Ten san pham</th>
                <th>Gia</th>
                <th>Hanh dong</th>
            </tr>
        </thead>
        <tbody>
            {products.map((item:any, index:number)=>{
                return (
                    <tr>
                        <td>{index +1}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td><button onClick={()=> handleClick(item.id)}>Xem chi tiet</button></td>
                    </tr>
                );
            })}
        </tbody>
      </table>
    </div>
  )
}
