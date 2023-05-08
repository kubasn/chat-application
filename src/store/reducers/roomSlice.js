import { createSlice } from "@reduxjs/toolkit";
import { rooms, users } from "../../db";
import { userJoinRoom } from "../../dbOperations/userJoinRoom";



const initialState = {
  roomID: "",
  roomName: " ",
  picture: "",
  roomDescription: "",
  users: [],
  creationDate: "",
  messages: [],
};



function findPrivateRoomByUsers(userIDs) {
  return rooms.find(
    (room) =>
      room.users.length === userIDs.length &&
      room.hasOwnProperty("type") &&
      room.type === "private" &&
      room.users.every((user) => userIDs.includes(user.userID))
  );
}

// zamiana id usersów na obiekty
rooms.forEach((room) => (room.users = getUsersByIds(room.users)));



function getUsersByIds(ids) {
  return users.filter((user) => ids.includes(user.userID));
}


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

    deleteRoom: (state, { payload }) => {
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
      if (payload.type === "private") {
        let message = findPrivateRoomByUsers(payload.id);
        if (typeof message !== "undefined") {
          state.roomID = message.roomID;
          state.roomName = message.roomName;
          state.picture = message.picture;
          state.roomDescription = message.roomDescription;
          state.league = message.league;
          state.users = message.users;
          state.creationDate = message.creationDate;
          state.messages = message.messages;
        } else {
          rooms.push({
            roomID: 4,
            creationDate: "",
            type: "private",
            roomDescription: "Chat betwen users",
            roomName: "Chat betwen users",
            users: getUsersByIds(payload.id),
            messages: [],
          });
          state.roomID = 4;
          state.creationDate = "";
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
        state.roomDescription = rooms[id].roomDescription;
        state.roomName = rooms[id].roomName;
        state.picture = rooms[id].picture;
        state.league = rooms[id].league;
        state.users = rooms[id].users;
        state.messages = rooms[id].messages;
      }
    },

    deleteMessage: (state, { payload }) => {
      //id - message id, roomId - roomId
      const { messageId, roomId } = payload;
      const roomIndex = rooms.findIndex((room) => room.roomID === roomId);

      let selectedRoom = rooms[roomIndex];

      let newRooms = rooms.map((room) => {
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
    // state.messages[id].content = 'Message has been deleted'  
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
  deleteRoom,
  addUser,
  changeRoom,
  deleteMessage,
  sendMessage,
} = roomSlice.actions;

export const roomReducer = roomSlice.reducer;


