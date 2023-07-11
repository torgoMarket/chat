import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./chat/messages.slice";

export const store = configureStore({
    reducer: reducer
})
