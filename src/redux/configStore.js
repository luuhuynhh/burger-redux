import { configureStore } from "@reduxjs/toolkit";
import { burgerState } from "../reducers/burgerReducer";

export const store = configureStore({
    reducer: {
        burgerState: burgerState,
    }
})