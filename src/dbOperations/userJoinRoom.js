import { rooms, users } from "../db";


//when user join room -> add user to room and room to user rooms array
const userJoinRoom = (user, roomID) => {
  const roomIndex = rooms.findIndex((room) => room.roomID === roomID);
  let findRoom = rooms[roomIndex];
  findRoom = { ...findRoom, users: [...findRoom.users, user] };
  rooms[roomIndex] = findRoom;
  const userIndex = users.findIndex((us) => us.userID === user.userID);
  let findUser = users[userIndex];
  findUser = { ...findUser, rooms: [...findUser.rooms, roomID] };
  users[userIndex] = findUser;
};

export { userJoinRoom };
