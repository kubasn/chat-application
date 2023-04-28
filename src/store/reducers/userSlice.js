import { createSlice } from "@reduxjs/toolkit";
import { users } from "../../db";

// const initialState = {
//   userID: "",
//   login: "",
//   email:"",
//   password: "",
//   avatarID:"",
//   lastRoom:"",
//   status:"",
//   rooms:[]
// };



const initialState = users[0]
//kiedy aplikacja rozpoczyna swoje działanie, wszystko jest jeszcze puste

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //kiedy uzytkownik loguje się -> zapamiętaj poniższe rzeczy
    setUserLoginDetails: (state, {payload}) => {
      state.userID = payload.userID;
      state.login = payload.login;
      state.email = payload.email;
      state.password = payload.password;
      state.avatarID = payload.avatarID;
      state.lastRoom = payload.lastRoom;
      state.status = payload.status;
      state.rooms = payload.rooms

    },
    setUserRegisterDetails: (state, {payload}) => {
        state.userID = payload.userID;
        state.login = payload.login;
        state.email = payload.email;
        state.password = payload.password;
        state.avatarID = '';
        state.lastRoom = [];
        state.status = '';

  
      },
    //kiedy użytkownik wylogowuje się -> zapomnij
    setSignOut: (state) => {
        state.userID = null
        state.login = null
        state.email = null
        state.password = null
        state.avatarID = null
        state.lastRoom = null;
        state.status = null;
    },
    updateUserData:(state,{payload}) => {
        state =  {...state,payload}
    },
    setStatus:(state,{payload}) => {
        state.status = payload
    },
    joinRoom:(state,{payload}) => {
        const rooms = state.rooms
        rooms.push(payload)
        state.rooms = rooms
    },
    leaveRoom:(state,{payload}) => {
        const rooms = state.rooms;
        const filteredRooms = rooms.filter((id)=>id !== payload)
        state.rooms = filteredRooms;
    },
  },
});

export const { setUserLoginDetails, setSignOut,updateUserData,setStatus,joinRoom,leaveRoom } = userSlice.actions;


export default userSlice.reducer;