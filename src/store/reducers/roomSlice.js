import { createSlice } from "@reduxjs/toolkit";
import {rooms, users } from "../../db";

// const initialState = {
//   roomID: "",
//   roomName:'',
//   roomDescription:'',
//   messageHistoryID: "",
//   users:[],
//   creationDate:''
// };


// const initialState = {
//   roomID: 1,
//   roomName:'CSS lovers',
//   roomDescription:'Room made specialify for CSS lvoers group. Since 2023.',
//   messageHistoryID: 534,
//   users:[34234,4132,5213,343],
//   creationDate:'03/04/2023'
// };
rooms.forEach(room=>room.users = getUsersByIds(room.users));
const initialState = rooms[1]
// initialState.users  = getUsersByIds(initialState.users)


function getUsersByIds(ids) {
  return users.filter(user => ids.includes(user.userID));
}

//kiedy aplikacja rozpoczyna swoje działanie, wszystko jest jeszcze puste

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    //kiedy uzytkownik loguje się -> zapamiętaj poniższe rzeczy
    createRoom: (state, {payload}) => {
      state.roomID = payload.roomID;
      state.creationDate = payload.creationDate;
      state.roomName=payload.roomName;
      state.roomDescription=payload.roomDescription
      state.messageHistoryID = payload.messageHistoryID;
      state.messages = []
    },

    deleteRoom: (state, {payload}) => {
        state.roomID = null
        state.messageHistoryID = null
        state.users = null
        state.creationDate = null
        state.roomName=null
        state.roomDescription=null
      },
      addUser: (state,{payload}) =>{
        const users = state.users;
        users.push(payload)
        state.users = users;
    },
    changeRoom:(state,{payload}) => {
    const roomId = payload;
    const id = rooms.findIndex(room => room.roomID === roomId);
    console.log(rooms[id].users)

    state.roomID = rooms[id].roomID
    state.creationDate = rooms[id].creationDate
    state.messageHistoryID = rooms[id].messageHistoryID
    state.roomDescription = rooms[id].roomDescription
    state.roomName = rooms[id].roomName
    state.users = rooms[id].users
    state.messages = rooms[id].messages

    },


      removeUser:(state,{payload}) => {
        const users = state.users;
        const filteredUsers = users.filter((id)=>id !== payload)
        state.rooms = filteredUsers;
    },
  //   createHistory: (state,{payload}) =>{
  //     state.roomID = payload
  // },
  //   cleanHistory: (state,{payload}) =>{
  //     const users = state.users;
  //     users.push(payload)
  //     state.users = users;
  // },
  sendMessage: (state, {payload}) => {
    console.log(payload.message)
      const messages = state.messages;
      messages.push(payload.message)
      const roomIndex = rooms.findIndex(room => room.roomID === payload.roomId);
      rooms[roomIndex] = {...rooms[roomIndex],messages:[...rooms[roomIndex].messages,payload.message]};
      state.messages = messages;
   
  },

  deleteMessage: (state, {payload}) => {

const {id,roomId} = payload;
const roomIndex = rooms.findIndex(room => room.roomID === roomId);

rooms[roomIndex] = {...rooms[roomIndex],messages:[rooms[roomIndex].messages.filter(message=>message.id != id)]};

const messages = state.messages;
    const messageIndex = messages.findIndex(message => message.id === id);

     if (messageIndex === -1) {
      return state;
    }
  
    // Remove the message with the specified id
    state.messages.splice(messageIndex, 1);
  
  }
    
  },
});

export const { createRoom, deleteRoom,addUser,removeUser,changeRoom,createHistory, cleanHistory,sendMessage,deleteMessage } = roomSlice.actions;


export default roomSlice.reducer;