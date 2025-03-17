import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slice"

 export const reduxStore = configureStore({
    reducer :{
            products : cartReducer
       }
})