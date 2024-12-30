import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";


export const store=configureStore({
    reducer:{
        user:userSlice

    },
    //to prevent any errors in our browser
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck:false
        })
})