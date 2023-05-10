import { rooms, users } from "../../db";

function findPrivateRoomByUsers(userIDs) {
    console.log(userIDs,rooms)
    return rooms.find(
      (room) =>
        room.users.length === userIDs.length &&
        room.hasOwnProperty("type") &&
        room.type === "private" &&
        room.users.every((user) => userIDs.includes(user.userID))
    );
  }

const allSame = (arr) => arr.every(element => element === arr[0]);


function getUsersByIds(ids) {
    return users.filter((user) => ids.includes(user.userID));
  }
  


  function setRoomState(state, room) {
    state.roomID = room.roomID;
    state.creationDate = room.creationDate;
    state.roomDescription = room.roomDescription;
    state.roomName = room.roomName;
    state.picture = room.picture;
    state.users = room.users;
    state.messages = room.messages;
  }
  
  function createPrivateRoom(usersId, roomId) {
    const newPrivateRoom = {
      roomID: roomId,
      creationDate: "",
      type: "private",
      roomDescription: "Private chat",
      roomName: "Chat between users",
      users: getUsersByIds(usersId),
      messages: [],
    };
  
    rooms.push(newPrivateRoom);
  
    return newPrivateRoom;
  }

  export {findPrivateRoomByUsers,allSame,getUsersByIds,setRoomState,createPrivateRoom}