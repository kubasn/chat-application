import {
  Avatar,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rooms, users } from "../../db";
import { AdminInput } from "./AdminInput";
import AddRoomForm from "./AddRoomForm";
import date from "../utils/date";
import removeUserFromRoom from "../../helpers/removeUserFromRoom";
import { StyledBigBox } from "../utils/StyledBackground";

const AdminPage = () => {
  const [text, setText] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [findRooms, setFindRooms] = useState([]);
  const [clickedRoom, setClickedRoom] = useState({});

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  //filter rooms public
  const filterRooms = () => {
    const newRooms = rooms.filter((room) => {
      const newRooms = room.roomName.toLowerCase().includes(text.toLowerCase());
      const publicRooms = room.type != "private";
      return newRooms && publicRooms;
    });
    return newRooms;
  };

  const onSearch = () => {
    const newRooms = rooms.filter((room) => {
      const newRooms = room.roomName.toLowerCase().includes(text.toLowerCase());
      const publicRooms = room.type != "private";
      return newRooms && publicRooms;
    });
    setFindRooms(newRooms);
  };

  const onTextChange = (e) => {
    setFindRooms([]);
    setText(e.target.value);
  };

  //   useEffect(setFindRooms(),[clickedRoom])

  const onRoomDelete = (roomID) => {
    // let arooms = rooms.filter(room => room.roomID !== roomID);
    // rooms = [...arooms]
    const id = rooms.findIndex((room) => room.roomID === roomID);
    // delete rooms[id]
    if (id !== -1) {
      rooms.splice(id, 1);
    }
    const newRooms = filterRooms();
    setFindRooms(newRooms);

    // rooms
  };

  const onRoomEdit = (room) => {
    setClickedRoom(room);
    handleOpen();
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

    const onDeleteUser = (e, userID, roomID) => {
      e.preventDefault();
      let room = removeUserFromRoom(userID, roomID);
      setClickedRoom(room);
      let newRooms = findRooms;
      let roomIndex = newRooms.findIndex((el) => el.roomID === room.roomID);
      newRooms[roomIndex] = room;
    };

    const handleAddRoom = (roomName, roomDescription) => {
      // Add the new room to your rooms array or state here.
      let newRoom = {
        roomID: "",
        creationDate: date(),
        roomName: roomName,
        roomDescription: roomDescription,
        messageHistoryID: "",
        messages: [],
      };
      rooms.push(newRoom);
    };

    const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 400,
      bgcolor: "background.paper",
      border: "2px solid #000",
      boxShadow: 24,
      p: 4,
    };

    return (
      <StyledBigBox
        bgcolor="#1C1D22"
        color="white"
        p={10}
        textAlign="center"
        min-height="100vh"
        width="50%"
        margin="auto"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
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
            <Button
              onClick={onSave}
              sx={{ marginBottom: "1rem" }}
              variant="contained"
              color="success"
            >
              SAVE
            </Button>
            <Box>
              <Typography variant="h4" gutterBottom>
                Users
              </Typography>
              <List>
                {clickedRoom.users &&
                  clickedRoom.users.map((user) => (
                    <ListItem sx={{ display: "flex", gap: "5px" }} key={user}>
                      <Avatar src={user.avatarID} />
                      <ListItemText
                        sx={{ textAlign: "center" }}
                        primary={`ID: ${user.userID}`}
                      />
                      <ListItemText
                        sx={{ textAlign: "center" }}
                        primary={`login: ${user.login}`}
                      />
                      <Button
                        onClick={(e) =>
                          onDeleteUser(e, user.userID, clickedRoom.roomID)
                        }
                        variant="contained"
                        color="error"
                      >
                        DELETE
                      </Button>
                    </ListItem>
                  ))}
              </List>
            </Box>
          </Box>
        </Modal>
        <Typography variant="h1" mb={4}>
          Admin panel
        </Typography>
        <Box mb={2}>Fill below field to search for room</Box>
        <Box display="flex" alignItems="center">
          <TextField
            onChange={onTextChange}
            sx={{
              "& label.Mui-focused": {
                color: "rgba(255,255,255,0.6)",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "rgba(255,255,255,0.6)",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "rgba(255,255,255,0.6)",
                },
                "&:hover fieldset": {
                  borderColor: "rgba(255,255,255,0.6)",
                },
                "&:hover ": {
                  borderColor: "rgba(255,255,255,0.6)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "whirgba(255,255,255,0.6)te",
                },
              },
            }}
            label="Search"
            variant="outlined"
            size="small"
          />
          <Box ml={2} mr={2}>
            <Button onClick={onSearch} variant="contained" color="primary">
              Search
            </Button>
          </Box>
        </Box>
        {findRooms.length != 0 && (
          <Box
            mb={2}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <h2>Found rooms</h2>
            <ul>
              {findRooms.map((room) => (
                <li
                  key={room.roomID}
                  style={{ listStyleType: "none", marginBottom: "10px" }}
                >
                  <div
                    style={{
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      backgroundColor: "#37393C",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <h3>{room.roomName}</h3>
                    <p>{room.roomDescription}</p>
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
                  </div>
                </li>
              ))}
            </ul>
            <Box></Box>
          </Box>
        )}
        <AddRoomForm onSubmit={handleAddRoom} />
      </StyledBigBox>
    );
  };
};
export default AdminPage;
