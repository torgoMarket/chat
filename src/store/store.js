import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./chatSlice";
import usersReducer from "./usersSlice";
import authUserReducer from "./authUserSlice";


const store = configureStore({
  reducer: {
    chats: chatReducer,
    users: usersReducer,
    authUser: authUserReducer,
  },
});

export default store; 