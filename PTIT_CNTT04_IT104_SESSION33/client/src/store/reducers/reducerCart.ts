interface Action{
    type:string,
    payload:any
}
const initialState ={
    cart:[
        {
            id:1,
            title:"Cake",
            price:10,
            quantity:15
        },
        {
            id:2,
            title:"Hamburger",
            price:15,
            quantity:32
        },
        {
            id:3,
            title:"Pizza",
            price:30,
            quantity:15
        }
    ]
}
export const reducerCart =(state=initialState,action:Action)=>{
    switch (action.type) {
        case "ADD":
            return { ...state };

        case "INCREAMENT":
            return {
                ...state,
                cart: state.cart.map((item) =>
                item.id === action.payload.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                ),
            };
        case "DECREASE":
            return {
                ...state,
                cart: state.cart.map((item) =>
                item.id === action.payload.id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
                ),
            };
        default:
            return state;

    }
}