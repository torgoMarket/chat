import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {id: 0, userName: "Amir", password: "hello"},
    {id: 1, userName: "Asad", password: "good"},
    {id: 2, userName: "Sarvar", password: "good"},
  ], 
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser(state, action) {
      state.users.push(action.payload); 
    },
  },
});

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;