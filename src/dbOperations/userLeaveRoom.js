//when user leave room -> remove user from room and room from user rooms array

const removeUserFromRoom = (userID, roomID) => {
  const roomIndex = rooms.findIndex((room) => room.roomID === roomID);
  let findRoom = rooms[roomIndex];
  const findUsers = findRoom.users.filter((obj) => obj.userID !== userID);
  findRoom = { ...findRoom, users: findUsers };

  rooms[roomIndex] = { ...findRoom, findUsers };

  const userIndex = users.findIndex((user) => user.userID == userID);
  let findUser = users[userIndex];
  const findRoomsInUser = findUser.rooms.filter((id) => id !== roomID);
  findUser = { ...findUser, rooms: findRoomsInUser };
  users[userIndex] = { ...findUser, findRoomsInUser };
};

export { removeUserFromRoom };
