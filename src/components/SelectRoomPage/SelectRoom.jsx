import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rooms } from "../../db";
import { changeRoom } from "../../store/reducers/roomSlice";
import { useNavigate } from "react-router-dom";
import { StyledBackground, StyledSmallBox } from "../utils/StyledBackground";
import { joinRoom } from "../../store/reducers/userSlice";

const SelectRoom = () => {
  const [text, setText] = useState("");
  const [findRooms, setFindRooms] = useState([]);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  let navigate = useNavigate();

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

  const onCheckboxChange = (event) => {
    let myUserRooms = true;
    let myRooms = findRooms;
    const newRooms = rooms.filter((room) => {
      const roomNameMatches = room.roomName
        .toLowerCase()
        .includes(text.toLowerCase());
      const publicRooms = room.type != "private";

      if (event.target.checked === true) {
        myUserRooms = room.users.some(
          (obj) => obj.hasOwnProperty("userID") && obj.userID === user.userID
        );
        return roomNameMatches && myUserRooms && publicRooms;
      }
      return roomNameMatches && publicRooms;
    });
    // do something else based on checkbox value
    setFindRooms(newRooms);
  };

  const onRoomJoin = (roomID,type) => {
    if(type === "JOIN"){
         dispatch(joinRoom({roomID:roomID}))
         dispatch(changeRoom({ id: roomID,user:user, type: "public",actType:"JOIN" }));

    } else {
      dispatch(changeRoom({ id: roomID,user:user, type: "public",actType:"GOTO" }));

    }
    navigate("/room");
  };

  return (
    <StyledBackground>
      <Box mb={2}>Fill below field to search for room</Box>
      <StyledSmallBox>
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
          <FormControlLabel
            control={
              <Checkbox
                name="moje-pokoje"
                color="primary"
                onChange={onCheckboxChange}
              />
            }
            labelPlacement="end"
            label="Moje pokoje"
          />
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
                    {room.users.some(
                      (obj) =>
                        obj.hasOwnProperty("userID") &&
                        obj.userID === user.userID
                    ) ? (
                      <Button
                        onClick={() => onRoomJoin(room.roomID,"GOTO")}
                        sx={{ marginBottom: "1rem" }}
                        variant="contained"
                        color="primary"
                      >
                        GO TO
                      </Button>
                    ) : (
                      <Button
                        onClick={() => onRoomJoin(room.roomID,"JOIN")}
                        sx={{ marginBottom: "1rem" }}
                        variant="contained"
                        color="success"
                      >
                        JOIN
                      </Button>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Box>
        )}
      </StyledSmallBox>
    </StyledBackground>
  );
};

export default SelectRoom;
