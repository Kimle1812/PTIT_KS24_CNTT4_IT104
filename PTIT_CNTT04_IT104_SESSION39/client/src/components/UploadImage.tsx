import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../store/slices/productSlice";

export default function UploadImage() {
  const [image, setImage] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const result = useSelector((state:any)=>{
    return state.products.products
  })
  const dispatch:any = useDispatch();
  useEffect(()=>{
    dispatch(getAllProduct())
  })
  const handleChange = (e: any) => {
    console.log("Giá trị e", e.target.files[0]);
    setImage(e.target.files[0]);
  };
  const saveImage = async () => {
    const formData = new FormData();
    if(image ==="") return;
    formData.append("file", image);
    formData.append("upload_preset", "upload_image"); // tên dự án
    formData.append("cloud_name", "dludetzl9"); // tên cloud name
    try {
        const response = await axios.post("https://api.cloudinary.com/v1_1/dludetzl9/image/upload",formData);
        console.log("RESPONSE", response);
        setUrl(response.data.secure_url)
    } catch (error) {
        console.log("ERROR", error);
    }
  };
  return (
    <div>
      <h2>Upload ảnh lên trên CLOUDINARY</h2>
      <input type="file" onChange={handleChange} />
      <button onClick={saveImage}>Lưu ảnh</button>
      <h2>ẢNH SAU KHI ĐÃ LƯU</h2>
      <img src={url} alt="" />
      <button>Thêm sản phẩm</button>

      <h2>Danh sách sản phẩm</h2>
      <table>
        <thead>
            <tr>
                <th>STT</th>
                <th>Tên</th>
                <th>Ảnh</th>
            </tr>
        </thead>
        <tbody>
            {result.map((item:any,index:number)=>{
                return <>
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                    <td><img src={item.image} alt="" /></td>
                </>
            })}
        </tbody>
      </table>
    </div>
  );
}