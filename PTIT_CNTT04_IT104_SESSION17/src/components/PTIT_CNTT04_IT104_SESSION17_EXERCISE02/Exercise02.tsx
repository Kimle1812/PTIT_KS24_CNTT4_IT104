import React, { useState } from "react";
type State = {
  id: number;
  name: string; 
  price: number;
  quantity: number;
};
export default function Exercise02() {
  const [state] = useState<State>({
    id: 1,
    name: "Coca cola",
    price: 1000,
    quantity: 10,
  });
  return (
    <div>
      <h2>Thong tin san pham</h2>
      <div>id: {state.id}</div>
      <div>name: {state.name}</div>
      <div>price: {state.price} $</div>
      <div>quantity: {state.quantity}</div>
    </div>
  );
}