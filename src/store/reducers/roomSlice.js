import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roomID: "",
  messageHistoryID: "",
  users:[],
  creationDate:''
};

//kiedy aplikacja rozpoczyna swoje działanie, wszystko jest jeszcze puste

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    //kiedy uzytkownik loguje się -> zapamiętaj poniższe rzeczy
    createRoom: (state, {payload}) => {
      state.roomID = payload.roomID;
      state.creationDate = payload.creationDate;
      state.messageHistoryID = payload.messageHistoryID
    },

    deleteRoom: (state, {payload}) => {
        state.roomID = null
        state.messageHistoryID = null
        state.users = null
        state.creationDate = null
      },
      addUser: (state,{payload}) =>{
        const users = state.users;
        users.push(payload)
        state.users = users;
    },
      removeUser:(state,{payload}) => {
        const users = state.users;
        const filteredUsers = users.filter((id)=>id !== payload)
        state.rooms = filteredUsers;
    },
  },
});

export const { createRoom, deleteRoom,addUser,removeUser } = roomSlice.actions;


export default roomSlice.reducer;