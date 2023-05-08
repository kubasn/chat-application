import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userSlice";
import { roomReducer } from "./reducers/roomSlice";

const reducer = combineReducers({
  user: userReducer,
  room: roomReducer,
});

const store = configureStore({
  reducer: reducer,
});

export default store;
