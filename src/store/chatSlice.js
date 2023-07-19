import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentChatUsers: [],
  chats: [
      {chatUsers: ["Asad", "Amir"], messages:[
        {id: 0, sendedBy: "Amir", message: "HEllo", sendedTime: Date.now()},
        {id: 1, sendedBy: "Asad", message: "Good", sendedTime: Date.now()}
      ]},  
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
        chat.chatUsers.includes(actionChatUsers[0]) && chat.chatUsers.includes(actionChatUsers[1])
        ? chat.messages.push(action.payload.message)
        : console.log()
      ))
    },
    deleteMessage(state, action){
      state.chats.map(chat => (
        chat.chatUsers.includes(action.payload.currentChatUsers[0]) && chat.chatUsers.includes(action.payload.currentChatUsers[1])
          ? chat.messages = chat.messages.filter(message => message.id !== action.payload.message.id)
          : console.log(chat)
      ))
    },
    setChatUsers(state, action) {
      state.currentChatUsers = action.payload
    }
  },
});

export const { addMessage, addChat, deleteMessage, setChatUsers} = chatSlice.actions;

export default chatSlice.reducer;