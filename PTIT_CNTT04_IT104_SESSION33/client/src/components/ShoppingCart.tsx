import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { Product } from '../interface/interface'

export default function ShoppingCart() {
    const result = useSelector((data:any)=> data.cart.cart);
    const dispatch = useDispatch();
    const increase = () => {
        dispatch({
            type:"INCREAMENT"
        })
    }
    const decrease=()=>{
        dispatch({
            type:"DECREASE"
        })
    }
  return (
    <div>
      <div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-danger">
                  <div className="panel-heading">
                    <h1 className="panel-title">Your Cart</h1>
                  </div>
                  <div className="panel-body">
                    <table className="table">
                      <thead>
                        <tr>
                          <th >STT</th>
                          <th>Name</th>
                          <th>Price</th>
                          <th >Quantity</th>
                          <th >Action</th>
                        </tr>
                      </thead>
                      <tbody id="my-cart-body">
                        {result.map((item:Product, index:number) => (
                  <tr key={item.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.title}</td>
                    <td>{item.price} USD</td>
                    <td>
                      <button onClick={decrease}>-</button>
                      {item.quantity}
                      <button onClick={increase}>+</button>
                    </td>
                    <td>
                      <a
                        className="label label-info update-cart-item"
                        data-product={item.id}
                      >
                        Update
                      </a>
                      <a
                        className="label label-danger delete-cart-item"
                        data-product={item.id}
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
                      </tbody>
                      <tfoot id="my-cart-footer">
                        <tr>
                          <td colSpan={4}>
                            There are <b>2</b> items in your shopping cart.
                          </td>
                          <td colSpan={2} className="total-price text-left">
                            {result.reduce((acc:any,item:any)=>{
                                return acc + item.price*item.quantity
                            },0)} USD
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
                <div className="alert alert-success" role="alert" id="mnotification">
                  Add to cart successfully
                </div>
              </div>
            </div>
    </div>
  )
}
