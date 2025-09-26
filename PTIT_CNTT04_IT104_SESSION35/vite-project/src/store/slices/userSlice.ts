import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Lấy dữ liệu trên server (json-server)
export const getAllUser = createAsyncThunk("getAllUser", async () => {
    try {
      const response = await axios.get("http://localhost:8080/users");
      return response.data;
    } catch (error) {
      console.log(error);
    }

});
export const deleteUser = createAsyncThunk("get/deleteUser", async(id:number)=>{
    try {
      await axios.delete(`http://localhost:8080/users/${id}`);
      return id;
    } catch (error) {
      console.log(error);
    }
})
export const editUser = createAsyncThunk("get/editUser",async (newUser:any)=>{
    console.log("New",newUser);
    
    try {
        const res =await axios.put(`http://localhost:8080/users/${newUser.id}`,newUser)
        return res.data;
    } catch (error) {
        console.log(error)
    }
})
const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {},
  extraReducers:(builder) =>{
      builder
      .addCase(getAllUser.pending,()=>{
        console.log("Đang xử lý");
        
      })
      .addCase(getAllUser.fulfilled,(state,action)=>{
        state.users = action.payload;        
      })
      .addCase(getAllUser.rejected,()=>{
        console.log("Quá trình lấy dữ liệu thất bại");
      })
      .addCase(deleteUser.fulfilled,(state,action)=>{
        state.users = state.users.filter((u:any)=> u.id != action.payload)
      })
      .addCase(editUser.fulfilled,(state:any,action)=>{
        const index= state.users.findIndex((item:any)=>item.id==action.payload.id);
        state.users[index]= action.payload;
    })
  },
});

export default userSlice.reducer;