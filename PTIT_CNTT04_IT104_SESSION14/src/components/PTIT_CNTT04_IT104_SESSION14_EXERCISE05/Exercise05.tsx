import React, { Component } from 'react'
interface Product {
    product:{
        id:string,
        name:string,
        price:number,
        quantity:number,
    }
}

export default class Exercise05 extends Component <{}, Product>{
    constructor(props:{}){
        super(props);
        this.state = {
            product:{
                id: "",
                name:"",
                price: 0,
                quantity: 0
            }
        }
    }
    handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
            e.preventDefault();
            console.log(this.state.product);
            this.state = {
                product:{
                    id:"",
                    name:"",
                    price: 0,
                    quantity:0
                }
            }
        }
    handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target;
        this.setState({
            product:{...this.state.product, [name]:value}
        })
        
    }
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
            <h2>Thêm mới sản phẩm</h2>
            <label htmlFor="">Mã sản phẩm</label><br />
            <input type="text" onChange={this.handleChange} name='id'/><br />
            <label htmlFor="">Tên sản phẩm</label><br />
            <input type="text" onChange={this.handleChange} name='name'/><br />
            <label htmlFor="">Giá</label><br />
            <input type="text" onChange={this.handleChange} name='price'/><br />
            <label htmlFor="">Số lượng</label><br />
            <input type="number" max={10} min={0} onChange={this.handleChange} name='quantity'/><br />
            <button>Đăng ký</button>
        </form>
      </div>
    )
  }
}
