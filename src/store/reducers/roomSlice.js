import { createSlice } from "@reduxjs/toolkit";
import { rooms, users } from "../../db";
import { userJoinRoom } from "../../dbOperations/userJoinRoom";

function findPrivateRoomByUsers(userIDs) {
  return rooms.find(
    (room) =>
      room.users.length === userIDs.length &&
      room.hasOwnProperty("type") &&
      room.type === "private" &&
      room.users.every((user) => userIDs.includes(user.userID))
  );
}

rooms.forEach((room) => (room.users = getUsersByIds(room.users)));
const initialState = {
  roomID: "",
  roomName: " ",
  picture: "https://picsum.photos/200",
  roomDescription: "",
  messageHistoryID: null,
  users: [],
  creationDate: "",
  messages: [],
};
// initialState.users  = getUsersByIds(initialState.users)

function getUsersByIds(ids) {
  return users.filter((user) => ids.includes(user.userID));
}

//kiedy aplikacja rozpoczyna swoje działanie, wszystko jest jeszcze puste

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    //kiedy uzytkownik loguje się -> zapamiętaj poniższe rzeczy
    createRoom: (state, { payload }) => {
      state.roomID = payload.roomID;
      state.roomName = payload.roomName;
      state.picture = payload.picture;
      state.roomDescription = payload.roomDescription;
      state.messageHistoryID = payload.messageHistoryID;
      state.users = [];
      state.creationDate = payload.creationDate;
      state.messages = [];
    },

    deleteRoom: (state, { payload }) => {
      state.roomID = "";
      state.roomName = "";
      state.picture = "";
      state.roomDescription = "";
      state.messageHistoryID = null;
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
      if (payload.type === "private") {
        let message = findPrivateRoomByUsers(payload.id);
        if (typeof message !== "undefined") {
          state.roomID = message.roomID;
          state.roomName = message.roomName;
          state.picture = message.picture;
          state.roomDescription = message.roomDescription;
          state.messageHistoryID = message.messageHistoryID;
          state.users = message.users;
          state.creationDate = message.creationDate;
          state.messages = message.messages;
        } else {
          rooms.push({
            roomID: 4,
            creationDate: "",
            messageHistoryID: "",
            type: "private",
            roomDescription: "Chat betwen users",
            roomName: "Chat betwen users",
            users: getUsersByIds(payload.id),
            messages: [],
          });
          state.roomID = 4;
          state.creationDate = "";
          state.messageHistoryID = "";
          state.type = "private";
          state.roomDescription = "Chat betwen users";
          state.roomName = "Chat betwen users";
          state.users = getUsersByIds(payload.id);
          state.messages = [];
        }
      } else {
        if (payload.actType === "JOIN") {
          userJoinRoom(payload.user, payload.id);
        }

        const roomId = payload.id;
        const id = rooms.findIndex((room) => room.roomID === roomId);

        state.roomID = rooms[id].roomID;
        state.creationDate = rooms[id].creationDate;
        state.messageHistoryID = rooms[id].messageHistoryID;
        state.roomDescription = rooms[id].roomDescription;
        state.roomName = rooms[id].roomName;
        state.users = rooms[id].users;
        state.messages = rooms[id].messages;
      }
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

    deleteMessage: (state, { payload }) => {
      const { id, roomId } = payload;
      const roomIndex = rooms.findIndex((room) => room.roomID === roomId);

      let selectedRoom = rooms[roomIndex];
      let selectedMessage = selectedRoom.messages.find(
        (message) => message.id == id
      );
      let selectedMessageIndex = selectedRoom.messages.findIndex(
        (message) => message.id == id
      );

      let newRooms = rooms.map((room) => {
        if (room.roomID === roomId) {
          return {
            ...room,
            messages: room.messages.map((message) => {
              if (message.id === id) {
                return {
                  ...message,
                  content: "Message has ben deleted",
                };
              }
              return message;
            }),
          };
        }
        return room;
      });

      rooms[roomIndex] = newRooms[roomIndex];
    },
  },
});

export const {
  createRoom,
  deleteRoom,
  addUser,
  removeUser,
  changeRoom,
  createHistory,
  cleanHistory,
  sendMessage,
  deleteMessage,
} = roomSlice.actions;

export default roomSlice.reducer;
