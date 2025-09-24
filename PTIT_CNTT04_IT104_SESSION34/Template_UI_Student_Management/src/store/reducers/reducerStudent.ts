import type { Action, Student } from "../../utils/types"

const initialState:Student[] =[
        {
            id: "SV001",
            name: "Kim Lệ",
            age: 20,
            gender: 'Nữ',
            birthday:"11/11/2001",
            hometown:"Thanh Hóa",
            address:"Thanh Hóa"
        },
        {
            id: "SV001",
            name: "Kim Kim",
            age: 20,
            gender: 'Nữ',
            birthday:"11/11/2001",
            hometown:"Thanh Hóa",
            address:"Thanh Hóa"
        },
        {
            id: "SV001",
            name: "Nguyễn Lệ",
            age: 20,
            gender: 'Nam',
            birthday:"11/11/2001",
            hometown:"Thanh Hóa",
            address:"Thanh Hóa"
        }
    ]
export const reducerStudent = (state=initialState,action:Action)=>{
    switch (action.type) {
        case "ADD":
            return [...state,action.payload];
        case "EDIT":
            return state;            
        case "DELETE":
            return state;           
        default:
            return state;
    }
}