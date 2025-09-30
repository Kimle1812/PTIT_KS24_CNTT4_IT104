import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Lấy tất cả dữ liệu sản phẩm
export const getAllProduct = createAsyncThunk("getAllProduct", async() => {
    try {
        const res: any = await axios.get("http://localhost:8080/products");
        return res.data;
      } catch (error) {
        console.log(error);
      }
});

// Thêm mới sản phẩm
const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getAllProduct.pending,()=>{

    })
    .addCase(getAllProduct.fulfilled,(state:any,action)=>{
        state.products = action.payload
    })
  },
});
export default productSlice.reducer;