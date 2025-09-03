
import React, { useReducer } from 'react'

export default function Exercise() {
    const initialState={
        count:0
    };
    const countReducer=(state1:any,action1:any)=> {
        console.log("action",action1);
        switch (action1.type) {
            case "INCREASE":
                return {count: state1.count+action1.payload};
            case "DECREASE":
                return {count: state1.count-action1.payload};
            default:
               return state1;
        }
    }
    const [state, dispatch]= useReducer(countReducer,initialState);
    const increase=()=>{
        dispatch({type:"INCREASE",payload:1});
    }
    const decrease=()=>{
        dispatch({type:"DECREASE",payload:1})
    }
  return (
    <div>
      <p> Số đếm: {state.count}</p>
      <button onClick={increase}>Tăng</button>
      <button onClick= {decrease}>Giảm</button>
    </div>
  )
}
