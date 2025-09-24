import { createSlice } from "@reduxjs/toolkit";
import type { NumberState } from "../../utils/type";

const initialState: NumberState = {
  numbers: []
};
const numberListSlice = createSlice({
    name:"numberList",
    initialState,
    reducers:{
        randomNumbers: (state) => {
      const length = Math.floor(Math.random() * 6) + 3;
      const arr = Array.from({ length }, () =>
        Math.floor(Math.random() * 11)
      );
      state.numbers = arr;
    },
    }
});
export const { randomNumbers } = numberListSlice.actions;
export default numberListSlice.reducer;