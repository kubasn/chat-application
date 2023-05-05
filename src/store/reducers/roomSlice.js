import { createSlice } from "@reduxjs/toolkit";
import {rooms, users } from "../../db";


function findPrivateRoomByUsers(userIDs) {
  console.log(userIDs,rooms)
  return rooms.find((room) => (
    room.users.length === userIDs.length &&
    room.hasOwnProperty('type') &&
    room.type === 'private' &&
     room.users.every((user) => userIDs.includes(user.userID))
  ));}



rooms.forEach(room=>room.users = getUsersByIds(room.users));
const initialState =   {
  roomID: '',
  roomName: "CSS ",
  roomDescription: "",
  messageHistoryID: null,
  users: [],
  creationDate: "",
  messages: []
}
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
      if(payload.type == 'private'){
let message = findPrivateRoomByUsers(payload.id)
console.log(rooms)
if(typeof message != 'undefined'){
state.roomID = message.roomID
    state.creationDate = message.creationDate
    state.messageHistoryID = message.messageHistoryID
    state.roomDescription = message.roomDescription
    state.roomName = message.roomName
    state.users = message.users
    state.messages = message.messages
} else {

  rooms.push({
    roomID : 4,
    creationDate : '',
    messageHistoryID : '',
    type:'private',
    roomDescription : 'Chat betwen users',
    roomName : 'Chat betwen users',
    users : getUsersByIds(payload.id),
    messages : []
  })
     state.roomID = 4
    state.creationDate = ''
    state.messageHistoryID = ''
    state.type='private'

    state.roomDescription = 'Chat betwen users'
    state.roomName = 'Chat betwen users'
    state.users = getUsersByIds(payload.id)
    state.messages = []

 
}




      }else{
    const roomId = payload.id;
    const id = rooms.findIndex(room => room.roomID === roomId);

    state.roomID = rooms[id].roomID
    state.creationDate = rooms[id].creationDate
    state.messageHistoryID = rooms[id].messageHistoryID
    state.roomDescription = rooms[id].roomDescription
    state.roomName = rooms[id].roomName
    state.users = rooms[id].users
    state.messages = rooms[id].messages
      }
    },


      removeUser:(state,{payload}) => {
        const users = state.users;
        const filteredUsers = users.filter(obj => obj.userID !== payload);
        state.users = filteredUsers;
    },

  sendMessage: (state, {payload}) => {
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