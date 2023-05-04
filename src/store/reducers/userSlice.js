import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import { users } from "../../db";
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
    //kiedy uzytkownik loguje się -> zapamiętaj poniższe rzeczy
    setUserIsLogged: (state, { payload }) => {
      //state.push(action.payload);
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
      state.userID = nanoid();
      state.login = payload.login;
      state.email = payload.email;
      state.password = payload.password;
      state.avatarID = `https://api.multiavatar.com/${avatar} Bond.png`;
      state.lastRoom = [];
      state.status = "";
      state.role = payload.role;
      users.push({
        userID: payload.userID,
        login: payload.login,
        email: payload.email,
        password: payload.password,
        avatarID: "",
        lastRoom: [],
        status: "",
        rooms: [],
        role: payload.role,
      });
    },
    //kiedy użytkownik wylogowuje się -> zapomnij
    setSignOut: (state) => {
      state.userID = null;
      state.login = null;
      state.email = null;
      state.password = null;
      state.avatarID = null;
      state.lastRoom = null;
      state.status = null;
    },
    updateUserData: (state, { payload }) => {
      state = { ...state, payload };
    },
    setStatus: (state, { payload }) => {
      state.status = payload;
    },
    joinRoom: (state, { payload }) => {
      const rooms = state.rooms;
      rooms.push(payload);
      state.rooms = rooms;
    },
    leaveRoom: (state, { payload }) => {
      const rooms = state.rooms;
      const filteredRooms = rooms.filter((id) => id !== payload);
      state.rooms = filteredRooms;
    },
  },
});

export const {
  setUserIsLogged,
  setUserRegisterDetails,
  setSignOut,
  updateUserData,
  setStatus,
  joinRoom,
  leaveRoom,
} = userSlice.actions;

export const userReducer = userSlice.reducer;
