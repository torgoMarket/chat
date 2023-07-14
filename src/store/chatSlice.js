import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentChatUsers: [],
  chats: [
      {chatUsers: ["Asad", "Amir"], messages:[
        {id: 0, sendedBy: "Amir", message: "HEllo", sendedTime: Date.now()},
        {id: 1, sendedBy: "Asad", message: "Good", sendedTime: Date.now()}
      ]},
      {chatUsers: ["Amir", "Sarvar"], messages:[
        {id: 0, sendedBy: "Amir", message: "HEllo", sendedTime: Date.now()},
        {id: 1, sendedBy: "Sarvar", message: "Good", sendedTime: Date.now()}
      ]}
  ], 
};

const chatSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    addChat(state, action) {
      state.chats.push(action.payload); 
    },
    addMessage(state, action){
      const actionChatUsers = action.payload.chatUsers
      state.chats.map(chat => (
        chat.chatUsers.includes(actionChatUsers)
        ? chat.messages.push(action.payload.message)
        : console.log()
      ))
      state.chats.chatName.push(action.payload.message)
    },
    setChatUsers(state, action) {
      state.currentChatUsers = action.payload
    }
  },
});

export const { addMessage, addChat, setChatUsers } = chatSlice.actions;

export default chatSlice.reducer;