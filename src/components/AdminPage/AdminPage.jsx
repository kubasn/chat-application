import {
  Avatar,
  Box,
  Button,
  List,
  ListItem,
  Modal,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { rooms, users } from "../../db";
import { AdminInput } from "./AdminInput";
import AddRoomForm from "./AddRoomForm";
import date from "../../helpers/date";
import removeUserFromRoom from "../../helpers/removeUserFromRoom";
import { StyledBackground, StyledSmallBox } from "../utils/StyledBackground";
import { Topbar } from "../RoomPage/TopBar";
import { nanoid } from "@reduxjs/toolkit";
import { SearchInput } from "../utils/SearchInput";
import { Notify } from "notiflix";

const AdminPage = () => {
  //const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [addNewRoomOpen, setaddNewRoomOpen] = useState(false);
  const handleaddNewRoomOpen = () => setaddNewRoomOpen(true);
  const handleaddNewRoomClose = () => setaddNewRoomOpen(false);

  const [findRooms, setFindRooms] = useState([]);
  const [clickedRoom, setClickedRoom] = useState({});

  const filterRooms = () => {
    const newRooms = rooms.filter((room) => {
      const newRooms = room.roomName.toLowerCase();
      const publicRooms = room.type !== "private";
      return newRooms && publicRooms;
    });
    return newRooms;
  };

  const onTextChange = (e) => {
    const newRooms = rooms.filter((room) => {
      const newRooms = room.roomName
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
      const publicRooms = room.type !== "private";
      return newRooms && publicRooms;
    });
    setFindRooms(newRooms);
  };

  const onRoomDelete = (roomID) => {
    const id = rooms.findIndex((room) => room && room.roomID === roomID);
    delete rooms[id];

    //in users table, for each user delete specific room[roomId] from rooms array
    users.map((user, key) => {
      const newUser = { ...user };

      if (newUser.rooms.includes(roomID)) {
        newUser.rooms = newUser.rooms.filter((room) => room !== roomID);
      }

      return (users[key] = newUser);
    });

    if (id !== -1) {
      rooms.splice(id, 1);
    }

    const newRooms = filterRooms();
    setFindRooms(newRooms);
    Notify.success("Your changes has been saved");
  };

  const onRoomEdit = (room) => {
    setClickedRoom(room);
    handleOpen();
  };

  const openAddNewRoom = () => {
    handleaddNewRoomOpen();
  };

  const onChange = (value, field) => {
    let room = clickedRoom;
    room = { ...room, [field]: value };
    setClickedRoom(room);
  };

  const onSave = () => {
    const roomIndex = rooms.findIndex(
      (room) => room.roomID === clickedRoom.roomID
    );
    rooms[roomIndex] = { ...rooms[roomIndex], ...clickedRoom };
    const newRooms = filterRooms();
    setFindRooms(newRooms);
    handleClose();
    Notify.success("Your changes has been saved");
  };

  const onDeleteUser = (e, userID, roomID, login) => {
    e.preventDefault();
    let room = removeUserFromRoom(userID, roomID);
    setClickedRoom(room);
    let newRooms = findRooms;
    let roomIndex = newRooms.findIndex((el) => el.roomID === room.roomID);
    newRooms[roomIndex] = room;
    Notify.success(`${login} has been deleted`);
  };

  const handleAddRoom = (roomName, roomDescription) => {
    let newRoom = {
      roomID: nanoid(),
      creationDate: date(),
      picture: "https://picsum.photos/200",
      roomName: roomName,
      roomDescription: roomDescription,
      messageHistoryID: "",
      messages: [],
      users: [],
    };
    rooms.push(newRoom);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    color: "black",
  };

  return (
    <>
      <Topbar />

      <StyledBackground>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h4"
              sx={{ color: "black" }}
            >
              Edit room
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <AdminInput
                field="roomName"
                onChange={onChange}
                value={clickedRoom.roomName}
                inputType="text"
                inputName="login"
              >
                Room name
              </AdminInput>
              <AdminInput
                field="roomDescription"
                onChange={onChange}
                value={clickedRoom.roomDescription}
                inputType="text"
                inputName="login"
              >
                Room description
              </AdminInput>
            </Typography>

            <Box>
              <Typography
                variant="h4"
                sx={{
                  color: "black",
                  marginTop: "30px",
                }}
              >
                Users
              </Typography>
              <List>
                {clickedRoom.users && clickedRoom.users.length > 0 ? (
                  clickedRoom.users.map((user) => (
                    <ListItem sx={{ display: "flex", gap: "5px" }} key={user}>
                      <Avatar src={user.avatarID} />
                      <Typography
                        sx={{
                          color: "black",
                          textAlign: "center",
                          width: "70%",
                          fontWeight: "bold",
                        }}
                      >
                        {user.login}
                      </Typography>

                      <Button
                        onClick={(e) =>
                          onDeleteUser(
                            e,
                            user.userID,
                            clickedRoom.roomID,
                            user.login
                          )
                        }
                        variant="contained"
                        color="error"
                      >
                        DELETE
                      </Button>
                    </ListItem>
                  ))
                ) : (
                  <p>There is no users</p>
                )}
              </List>
              <Button
                onClick={onSave}
                sx={{
                  marginBottom: "1rem",
                  marginTop: "1rem",
                  width: "100%",
                }}
                variant="contained"
                color="success"
              >
                SAVE
              </Button>
            </Box>
          </Box>
        </Modal>

        <Typography
          variant="h2"
          align="center"
          sx={{
            paddingBottom: "25px",
          }}
        >
          Admin panel
        </Typography>
        <Typography variant="h6">
          Fill below field to search for room
        </Typography>

        <StyledSmallBox>
          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            gap="18px"
          >
            <SearchInput
              inputType="text"
              inputName="search"
              onChange={onTextChange}
            >
              Search for rooms
            </SearchInput>
          </Box>

          {findRooms.length !== 0 && (
            <Box
              mb={2}
              marginTop={4}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Typography variant="h6">Found rooms</Typography>
              <ul style={{ listStyleType: "none", paddingLeft: "0px" }}>
                {findRooms.map((room) => (
                  <li key={room.roomID} style={{ marginBottom: "10px" }}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      gap="10px"
                      padding="10px"
                      style={{
                        background: "rgba( 255, 255, 255, 0.25 )",
                        backdropFilter: "blur( 3.5px )",
                        borderRadius: "10px",
                        border: "1px solid rgba( 255, 255, 255, 0.18 )",
                      }}
                    >
                      <Typography variant="h4">{room.roomName}</Typography>
                      <Typography variant="body2">
                        {room.roomDescription}
                      </Typography>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          gap: "1rem",
                        }}
                      >
                        <Button
                          onClick={() => onRoomEdit(room)}
                          sx={{ marginBottom: "1rem" }}
                          variant="contained"
                          color="warning"
                        >
                          EDIT
                        </Button>
                        <Button
                          onClick={() => onRoomDelete(room.roomID)}
                          sx={{ marginBottom: "1rem" }}
                          variant="contained"
                          color="error"
                        >
                          DELETE
                        </Button>
                      </div>
                    </Box>
                  </li>
                ))}
              </ul>
              <Box></Box>
            </Box>
          )}

          <Button
            variant="contained"
            color="secondary"
            onClick={openAddNewRoom}
            sx={{ width: "100%", marginTop: "30px" }}
          >
            Add new room
          </Button>
          <AddRoomForm
            open={addNewRoomOpen}
            onClose={handleaddNewRoomClose}
            onSubmit={handleAddRoom}
          />
        </StyledSmallBox>
      </StyledBackground>
    </>
  );
};
export default AdminPage;
