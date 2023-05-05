import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rooms } from "../../db";
import { changeRoom } from "../../store/reducers/roomSlice";
import { useNavigate } from "react-router-dom";
import { StyledBackground, StyledSmallBox } from "../utils/StyledBackground";
import { BasicInput } from "../LoginPage/BasicInput";

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
    console.log(`Checkbox clicked: ${event.target.checked}`);
    let myUserRooms = true;
    let myRooms = findRooms;
    const newRooms = rooms.filter((room) => {
      const roomNameMatches = room.roomName
        .toLowerCase()
        .includes(text.toLowerCase());
      const publicRooms = room.type != "private";

      console.log(myUserRooms);
      if (event.target.checked === true) {
        myUserRooms = room.users.some(
          (obj) => obj.hasOwnProperty("userID") && obj.userID === user.userID
        );
        return roomNameMatches && myUserRooms && publicRooms;
      }
      return roomNameMatches && publicRooms;
    });
    console.log(newRooms);
    // do something else based on checkbox value
    setFindRooms(newRooms);
  };

  const onRoomJoin = (roomID) => {
    dispatch(changeRoom({ id: roomID, type: "public" }));
    navigate("/room");
  };

  return (
    <StyledBackground>
      <Typography variant="h6">Fill below field to search for room</Typography>
      <StyledSmallBox>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          gap="18px"
        >
          <BasicInput
            inputType="text"
            inputName="search"
            onChange={onTextChange}
          >
            Search for rooms
          </BasicInput>
          <Button
            onClick={onSearch}
            variant="contained"
            color="secondary"
            fullWidth
          >
            Search
          </Button>

          <FormControlLabel
            control={
              <Checkbox
                name="moje-pokoje"
                color="secondary"
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
            <Typography variant="h4" marginTop="25px">
              Rooms found
            </Typography>
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
                    {room.users.some(
                      (obj) =>
                        obj.hasOwnProperty("userID") &&
                        obj.userID === user.userID
                    ) ? (
                      <Button
                        onClick={() => onRoomJoin(room.roomID)}
                        sx={{ marginBottom: "1rem" }}
                        variant="contained"
                        color="primary"
                      >
                        GO TO
                      </Button>
                    ) : (
                      <Button
                        onClick={() => onRoomJoin(room.roomID)}
                        sx={{ marginBottom: "1rem" }}
                        variant="contained"
                        color="success"
                      >
                        JOIN
                      </Button>
                    )}
                  </Box>
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
