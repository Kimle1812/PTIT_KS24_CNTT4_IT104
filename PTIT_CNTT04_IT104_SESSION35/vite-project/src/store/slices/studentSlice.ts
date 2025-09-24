import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { InitialStudentState } from "../../utils/type";

const studentSlice = createSlice({
    name:"student",
    initialState:{
        students:[
            {
                id:1,
                name:"Kim Kim",

            },{
                id:2,
                name:"Nguyễn Lệ"
            }
        ]
    },
    reducers:{
        //cài đặt những hành động
        addStudent:(state:InitialStudentState,action)=>{
            state.students.push(action.payload)
        },
        delStudent: (state, action: PayloadAction<number>) => {
            state.students = state.students.filter(
                (student) => student.id !== action.payload
            );
        },
    }
});
export const {addStudent, delStudent} = studentSlice.actions;
export default studentSlice.reducer;