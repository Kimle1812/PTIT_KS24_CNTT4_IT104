const initialState={
    users:[
        {
            id:1,
            name:"Nguyễn Lệ"
        },
        {
            id:2,
            name:"Kim Kim"
        },
        {
            id:3,
            name:"Kim Lệ"
        }
    ]
}
export const reducerStudents = (state= initialState,action:any)=>{
    switch (action.type) {
        case "ADD":
            return state;
        case "EDIT":
            return state;
        case "DELETE":
            return state;
        default:
            return state;
    }
}