
const initialState = {
    check : true
}
export const reducerDark = (state = initialState , action:any) => {
    switch (action.type) {
        case "DARK":
            return {...state , check : !state.check}
        default:
            return state
    }
}
