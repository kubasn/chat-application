import { rooms, users } from "../db";

const userJoinRoom = (user, roomID) => {
  let roomIndex = rooms.findIndex((room) => room.roomID === roomID);
  let findRoom = rooms[roomIndex];
  findRoom = { ...findRoom, users: [...findRoom.users, user] };
  rooms[roomIndex] = findRoom;
  let userIndex = users.findIndex((user) => user.userID === user.userID);
  let findUser = users[userIndex];
  findUser = { ...findUser, rooms: [...findUser.rooms, roomID] };
  users[userIndex] = findUser;
};

export { userJoinRoom };
