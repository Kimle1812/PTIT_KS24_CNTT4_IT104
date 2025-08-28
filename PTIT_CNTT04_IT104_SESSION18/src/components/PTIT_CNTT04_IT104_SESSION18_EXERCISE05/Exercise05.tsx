import React, { useReducer } from "react";

export default function Exercise05() {
  const reducer = (state: { text: string }, action: { type: string; payload: string }) => {
    switch (action.type) {
      case "CHANGE_INPUT":
        return { ...state, text: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { text: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "CHANGE_INPUT", payload: e.target.value });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>{state.text || "Input change"}</h2>
      <input type="text" value={state.text} onChange={handleChange} />
    </div>
  );
}
