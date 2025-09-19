import { combineReducers } from "redux";
import { reducerStudents } from "./ReducerStudent";
import { reducerCounter } from "./ReducerCounter";
import { reducerProfile } from "./ReducerProfile";
import { reducerChange } from "./ReducerChange";
import { reducerDark } from "./ReducerDark";
import { reducerRandomNumber } from "./ReducerRandomNumber";
import { login } from "./ReducerLogin";
import { account } from "./ReducerRegister";
import { reducerUser } from "./ReducerUser";

export const rootReducer = combineReducers({
    counter :reducerCounter,
    students: reducerStudents,
    profile: reducerProfile,
    change: reducerChange,
    dark: reducerDark,
    random: reducerRandomNumber,
    login: login,
    register: account,
    listUser: reducerUser
})