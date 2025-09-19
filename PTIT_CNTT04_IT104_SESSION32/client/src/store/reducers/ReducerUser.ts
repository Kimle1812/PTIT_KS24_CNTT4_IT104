

export interface User {
  id: number;
  userName: string;
  gender: string;
  dateBirth: string;
  address: string;
}

const initialState: User[] = [
  {
    id: 1,
    userName: "Kim Kim",
    gender: "Nam",
    dateBirth: "10/ 10/2001",
    address: "Hà Nội",
  },
  {
    id: 2,
    userName: "Nguyễn Lệ",
    gender: "Nữ",
    dateBirth: "02/12/2000",
    address: "Thanh Hóa",
  },
];

export const reducerUser = (state = initialState, action: any): User[] => {
  switch (action.type) {
    case "DELETE_USER":
      return state.filter((user) => user.id !== action.payload);
    case "EDIT_USER":
      return state.map((user) =>
        user.id === action.payload.id ? { ...user, ...action.payload } : user
      );
    default:
      return state;
  }
};

