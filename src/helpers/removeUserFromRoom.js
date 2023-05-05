import { rooms, users } from "../db";

export default function removeUserFromRoom(userID, roomID) {
    console.log(userID,roomID)
    // Find the room
    let roomIndex = rooms.findIndex((room) => room.roomID === roomID);
console.log(roomIndex)
   console.log( rooms[roomIndex].users)

let findRoom = rooms[roomIndex]
const findUsers = findRoom.users.filter((obj) => obj.userID !== userID);
findRoom = {...findRoom,users:findUsers}
console.log(findUsers)
console.log(findRoom)

rooms[roomIndex] = {...findRoom,findUsers}
console.log(rooms)


let userIndex = users.findIndex((user) => user.userID == userID);
console.log(userIndex)
let findUser = users[userIndex]
console.log(findUser)
const findRoomsInUser = findUser.rooms.filter((id) => id !== roomID);
findUser = {...findUser,rooms:findRoomsInUser}
users[userIndex] = {...findUser,findRoomsInUser}

console.log(findUser)










//    rooms[roomIndex] 


    // console.log(room)
    // // If the room is not found, return
    // if (!room) {
    //   console.error("Room not found");
    //   return;
    // }
    // console.log(room)
  
    // // Find the index of the user in the room's users array
    // // const userIndexInRoom = room.users.indexOf(userID);
    // const userIndexInRoom = room.users.findIndex((obj) => obj.userID === userID);
    // console.log(userIndexInRoom)
    // // If the user is not found in the room, return
    // if (userIndexInRoom === -1) {
    //   console.error("User not found in room");
    //   return;
    // }

    // let usersInRoom = room.users;
    // room = {...room,[users]:[1]};
    // console.log(room)
    // // room.users.splice(userIndexInRoom,1)
    // // console.log(room)
    // // Remove the user from the room's users array
    // console.log(room.users)
    // // room.users.splice(userIndexInRoom, 1);
    // // console.log(room)



    // // Find the user in the users array
    // const user = users.find((user) => user.userID === userID);
  
    // // If the user is not found, return
    // if (!user) {
    //   console.error("User not found");
    //   return;
    // }
  
    // // Find the index of the room in the user's rooms array
    // const roomIndexInUser = user.rooms.indexOf(roomID);
  
    // // If the room is not found in the user's rooms array, return
    // if (roomIndexInUser === -1) {
    //   console.error("Room not found in user");
    //   return;
    // }
  
    // // Remove the room from the user's rooms array
    // user.rooms.splice(roomIndexInUser, 1);

    // return room
    return findRoom
  }
  
  // Usage:
