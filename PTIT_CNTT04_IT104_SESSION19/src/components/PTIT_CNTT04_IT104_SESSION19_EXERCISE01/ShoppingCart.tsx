import React from 'react'
 
export default function ShoppingCart() {
    type Product = {
        id:number;
        name:string;
        price:number;
        quantity:number
    }
    const ProductList: Product[] = [
        {
            id:1,
            name:"Bun bo",
            price:30000,
            quantity:5
        }
    ]
  return (
    <div>
      
    </div>
  )
}
