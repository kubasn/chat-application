import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./users/userSlice";
import { roomReducer } from "./rooms/roomSlice";

const reducer = combineReducers({
  user: userReducer,
  room: roomReducer,
});

const store = configureStore({
  reducer: reducer,
});

export default store;
