import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import { users } from "../../db";
import removeUserFromRoom from "../../helpers/removeUserFromRoom";

const avatar = nanoid();
const userInitialState = {
  userID: "",
  login: "",
  email: "",
  password: "",
  avatarID: "",
  lastRoom: "",
  rooms: [],
  role: "user",
};

//const initialState = users[0];

//kiedy aplikacja rozpoczyna swoje działanie, wszystko jest jeszcze puste

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    setUserIsLogged: (state, { payload }) => {
      state.userID = payload.userID;
      state.login = payload.login;
      state.email = payload.email;
      state.password = payload.password;
      state.avatarID = payload.avatarID;
      state.lastRoom = payload.lastRoom;
      state.status = payload.status;
      state.rooms = payload.rooms;
      state.role = payload.role;
    },
    setUserRegisterDetails: (state, { payload }) => {
      let id = nanoid();
      state.userID = id;
      state.login = payload.login;
      state.email = payload.email;
      state.password = payload.password;
      state.avatarID = `https://api.multiavatar.com/${avatar} Bond.png`;
      state.lastRoom = [];
      state.status = "";
      state.role = payload.role;
      users.push({
        userID: id,
        login: payload.login,
        email: payload.email,
        password: payload.password,
        avatarID: "",
        lastRoom: [],
        status: "",
        rooms: [],
        role: payload.role,
      });
      console.log(users)
    },

    setSignOut: (state) => {
      state.userID = null;
      state.login = null;
      state.email = null;
      state.password = null;
      state.avatarID = null;
      state.lastRoom = null;
      state.status = null;
      state.rooms = [];
    },
    joinRoom: (state, { payload }) => {
      const rooms = state.rooms;
      let { roomID } = payload;
      rooms.push(roomID);
      state.rooms = rooms;
    },
    leaveRoom: (state, { payload }) => {
      // const rooms = state.rooms;
      const { roomID, userID } = payload;
      removeUserFromRoom(userID, roomID);

      let newRooms = state.rooms;
      let indexInArray = newRooms.findIndex((id) => id == roomID);
      newRooms.splice(indexInArray, 1);
      state.rooms = newRooms;
    },
  },
});

export const {
  setUserIsLogged,
  setUserRegisterDetails,
  setSignOut,
  joinRoom,
  leaveRoom,
} = userSlice.actions;

export const userReducer = userSlice.reducer;
