import { rooms } from "../db"

const returnRoomPicture = (roomId) => {
    const room = rooms.find(room => room.roomID === roomId);

    if (room) {
        return room.picture;
      }
    
      return '';

}

export default returnRoomPicture