import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const messagesSlice = createSlice({
    name: 'messages',
    initialState,

    reducers: {
        addToMessages: (state, {payload: message}) => {
            state.push(message)
        }
    }
})


export const {actions, reducer} = messagesSlice