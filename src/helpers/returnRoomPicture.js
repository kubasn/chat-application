import { rooms } from "../db";

//return rooms pictures that is used on 'leftBar'
const returnRoomPicture = (roomId) => {
  const room = rooms.find((room) => room.roomID === roomId);

  if (room) {
    return room.picture;
  }
  return "";
};

export default returnRoomPicture;
