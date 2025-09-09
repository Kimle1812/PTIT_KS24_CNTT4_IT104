import React, { useState, type ChangeEvent } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import "./app.scss";

type Payment = {
  id:number,
  name:string,
  price:number,
  status:boolean
}
export default function App() {

  const [datas, setDatas] = useState<any>([]);
  const [data, setData] = useState<Payment>({
    id:1,
    name:"",
    price:0,
    status:false
  });
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) =>{
    e.preventDefault();
    setDatas([...datas,{...data,id:datas.length?datas[datas.length - 1].id+1 :1}])
  }
  const hanleChange =(e: ChangeEvent<HTMLInputElement>) =>{
    const {name,value} = e.target;
    setData({...data, [name]:value})
  }
  console.log(datas);
  
  return (
    <div className="container">
      {/* <Header></Header>
      <Main></Main>
      <Footer></Footer> */}

      <div className="title">Quản lý hóa đơn tiền điện</div>
      <form action="" onSubmit={handleSubmit}>
        <h2>Form nhập dữ liệu</h2>
        <input placeholder="Nhập tên chủ hộ" type="text" onChange={hanleChange} />
        <input placeholder="Giá tiền" type="text" onChange={hanleChange}/>
        <button>Thêm</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Tên chủ hộ</th>
            <th>Số tiền</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((item:Payment,index:number)=>{
            return <tr>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>1</td>
              <td>
                <button>Sua</button>
                <button>Xoa</button>
              </td>
            </tr>
          })}
        </tbody>
      </table>

      <ul className="pagination">
        <li>Phần phân trang!</li>
      </ul>
    </div>
  );
}
