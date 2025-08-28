import React, { useReducer } from "react";

export default function Exercise01() {
  const initialState = { count: 0 };

  const countReducer = (state: typeof initialState, action: { type: string }) => {
    switch (action.type) {
      case "INCREASE":
        return { count: state.count + 1 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(countReducer, initialState);

  return (
    <div>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: "INCREASE" })}>Increase</button>
    </div>
  );
}
