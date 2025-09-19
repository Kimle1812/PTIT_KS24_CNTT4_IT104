
const initialState = {
  arrNumberRandom: [],
};
export const reducerRandomNumber: any = (state = initialState, action: any) => {
  switch (action.type) {
    case "RANDOM":
      const newRandomNumber = Math.floor(Math.random() * 100);
      return {
        ...state,
        arrNumberRandom: [...state.arrNumberRandom, newRandomNumber],
      };
    default:
      return state;
  }
};
