import { createSlice } from "@reduxjs/toolkit";
import { rooms } from "../../db";
import { userJoinRoom } from "../../dbOperations/userJoinRoom";
import {
  allSame,
  createPrivateRoom,
  findPrivateRoomByUsers,
  getUsersByIds,
  setRoomState,
} from "../helpers/roomHelpers";

const initialState = {
  roomID: "",
  roomName: " ",
  picture: "",
  roomDescription: "",
  users: [],
  creationDate: "",
  messages: [],
};

rooms.forEach((room) => (room.users = getUsersByIds(room.users)));

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    createRoom: (state, { payload }) => {
      state.roomID = payload.roomID;
      state.roomName = payload.roomName;
      state.picture = payload.picture;
      state.roomDescription = payload.roomDescription;
      state.users = [];
      state.creationDate = payload.creationDate;
      state.messages = [];
    },

    removeRoom: (state, { payload }) => {
      state.roomID = "";
      state.roomName = "";
      state.picture = "";
      state.roomDescription = "";
      state.users = [];
      state.creationDate = "";
      state.messages = [];
    },
    addUser: (state, { payload }) => {
      const users = state.users;
      users.push(payload);
      state.users = users;
    },

    changeRoom: (state, { payload }) => {
      const { id: usersId, type: roomType, actType } = payload;

      if (roomType === "private") {
        const roomId = usersId.join("");

        // If we are chatting with ourselves, remove one user ID from the array [1, 1]
        if (allSame(usersId)) {
          usersId.pop();
        }

        const privateRoom = findPrivateRoomByUsers(usersId);

        if (privateRoom) {
          setRoomState(state, privateRoom);
        } else {
          const newPrivateRoom = createPrivateRoom(usersId, roomId);

          setRoomState(state, newPrivateRoom);
        }
      } else if (roomType === "public") {
        if (actType === "JOIN") {
          userJoinRoom(payload.user, usersId);
        }

        const room = rooms.find((room) => room.roomID === usersId);

        if (room) {
          setRoomState(state, room);
        }
      }
    },

    deleteMessage: (state, { payload }) => {
      const { messageId, roomId } = payload;
      const roomIndex = rooms.findIndex((room) => room.roomID === roomId);

      const newRooms = rooms.map((room) => {
        if (room.roomID === roomId) {
          return {
            ...room,
            messages: room.messages.map((message) => {
              if (message.id === messageId) {
                return {
                  ...message,
                  content: "Message has been deleted",
                };
              }
              return message;
            }),
          };
        }
        return room;
      });

      rooms[roomIndex] = newRooms[roomIndex];
      state.messages = rooms[roomIndex].messages;
    },

    sendMessage: (state, { payload }) => {
      const messages = state.messages;
      messages.push(payload.message);
      const roomIndex = rooms.findIndex(
        (room) => room.roomID === payload.roomId
      );
      rooms[roomIndex] = {
        ...rooms[roomIndex],
        messages: [...rooms[roomIndex].messages, payload.message],
      };
      state.messages = messages;
    },
  },
});

export const {
  createRoom,
  removeRoom,
  addUser,
  changeRoom,
  deleteMessage,
  sendMessage,
} = roomSlice.actions;

export const roomReducer = roomSlice.reducer;
