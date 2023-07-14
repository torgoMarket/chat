import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authUser: {}
  };

const authUserSlice = createSlice({
    name: "authUser",
    initialState,
    reducers: {
        setAuthUser(state, action) {
            state.authUser = action.payload
        }
    } 
})

export const {setAuthUser} = authUserSlice.actions
export default authUserSlice.reducer