
const initialState = {
  email: "",
  pass: "",
};

export const login = (state = initialState, action: any) => {
  switch (action.type) {
    case "Login":
      return {
        ...state,
        email: action.payload.email,
        pass: action.payload.pass,
      };
    default:
      return state;
  }
};
