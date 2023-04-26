import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roomID: "",
  messages: [],
};

//kiedy aplikacja rozpoczyna swoje działanie, wszystko jest jeszcze puste

const messageHistory = createSlice({
  name: "messageHistory",
  initialState,
  reducers: {
    createHistory: (state,{payload}) =>{
        state.roomID = payload
    },
      cleanHistory: (state,{payload}) =>{
        const users = state.users;
        users.push(payload)
        state.users = users;
    },
    sendMessage: (state, {payload}) => {
        const messages = state.messages;
        messages.push(payload)
        state.messages = messages;
    },

    deleteMessage: (state, {payload}) => {
        state.roomID = null
        state.messageHistoryID = null
        state.users = null
        state.creationDate = null
      },

 
  },
});

export const { createHistory, cleanHistory,sendMessage,deleteMessage } = messageHistory.actions;


export default messageHistory.reducer;