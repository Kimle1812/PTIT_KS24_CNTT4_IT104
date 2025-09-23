import React, { useState } from 'react'
import bread from "../images/bread.jpg"
import hamburger from "../images/Hamburger.jpg"
import pizza from "../images/pizza.jpg"
import cake from "../images/Cake.jpg"
import type { Product } from '../interface/interface'

const data = [
        {
            id:1,
            title:"Pizza",
            image:pizza,
            content:"pizza",
            price:30,
            quantity:100
        },
        {
            id:2,
            title:"Hamburger",
            image:hamburger,
            content:"hamburger",
            price:15,
            quantity:100
        },
        {
            id:1,
            title:"Bread",
            image:bread,
            content:"Bread",
            price:10,
            quantity:100
        },
        {
            id:1,
            title:"Cake",
            image:cake,
            content:"cake",
            price:30,
            quantity:100
        }
    ]
export default function ProductList() {
    const [products,setProducts] = useState<Product[]>(data);
  return (
    <div>
      <div >
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h1 className="panel-title">List Products</h1>
                  </div>
                  <div className="panel-body" id="list-product">
                    {products.map((item:Product,index:number)=>{
                        return <div key={item.id}>
                            <div className="media product">
                            <div className="media-left">
                                <a href="#">
                                <img
                                    className="media-object"
                                    src={item.image}
                                    alt="pizza"
                                />
                                </a>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">{item.title}</h4>
                                <p>{item.content}
                                </p>
                                <input
                                name="quantity-product-1"
                                type="number"
                                defaultValue={4}
                                />
                                <a data-product={1} className="price">
                                {item.price} USD{" "}
                                </a>
                            </div>
                            </div>
                        </div>
                    })}
                  </div>
                </div>
              </div>
            </div>
            
    </div>
  )
}
