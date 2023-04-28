// import { createSlice } from "@reduxjs/toolkit";
// import { messageHistoryDB } from "../../db";

// // const initialState = {
// //   roomID: "",
// //   messages: [],
// // };


// // const initialState = {
// //   roomID: 1,
// //   messages: [],
// // };


// const initialState = messageHistoryDB[1]

// //kiedy aplikacja rozpoczyna swoje działanie, wszystko jest jeszcze puste

// const messageHistory = createSlice({
//   name: "messageHistory",
//   initialState,
//   reducers: {
//     createHistory: (state,{payload}) =>{
//         state.roomID = payload
//     },
//       cleanHistory: (state,{payload}) =>{
//         const users = state.users;
//         users.push(payload)
//         state.users = users;
//     },
//     sendMessage: (state, {payload}) => {
//       console.log(payload)
//         const messages = state.messages;
//         messages.push(payload)
//         state.messages = messages;
//     },

//     deleteMessage: (state, {payload}) => {
      
//         // Find the room with the specified roomID
// //messageID,room
// const {id,roomId} = payload;
// console.log(id,roomId)
// const messages = state.messages;
//       const messageIndex = messages.findIndex(message => message.id === id);
//        console.log(messageIndex)
  
//        if (messageIndex === -1) {
//         console.log('Message not found');
//         return state;
//       }
    
//       // Remove the message with the specified id
//       state.messages.splice(messageIndex, 1);
    
//     }
 
  
// },
// });
// export const { createHistory, cleanHistory,sendMessage,deleteMessage } = messageHistory.actions;


// export default messageHistory.reducer;