import { configureStore } from "@reduxjs/toolkit";
import counter from "./slices/counterSlice"
import students from "./slices/studentSlice"
//import listNumber from "./slices/numberListSlice"
import  dark  from "./slices/darkSlice";
import listMode from "./slices/listModeSlice";
import menu from "./slices/menuSlice";
import language from "./slices/languageSlice";
import favorites from "./slices/favoritesSlice";
import users from "./slices/userSlice";

export const store = configureStore({
    reducer: {
        counter,
        students,
        //listNumber,
        dark,
        listMode,
        menu,
        language,
        favorites,
        users
    }
    
})