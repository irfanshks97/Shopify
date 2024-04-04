import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "../Slices/slice";

export const store = configureStore({
     reducer : {
        cart : CartSlice
     }
})