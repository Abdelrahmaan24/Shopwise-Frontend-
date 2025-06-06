"use client";
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./redux/cart/cartSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
    },
});

export default store;
