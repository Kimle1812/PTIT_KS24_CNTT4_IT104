const initialState = {
    count:0,
    status: true
}

export const reducerCounter:any = (state = initialState, action:any)=>{
    switch(action.type){
        case "INCREAMENT":
            state.count = state.count + 1;
            return {...state};
        case "DECREASE":
            state.count = state.count - 1;
            return {...state};
        default:
            return state;
    }
}