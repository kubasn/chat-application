import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rooms } from "../../db";
import { changeRoom } from "../../store/reducers/roomSlice";
import { useNavigate } from "react-router-dom";
import { StyledBackground, StyledSmallBox } from "../utils/StyledBackground";
import { joinRoom } from "../../store/reducers/userSlice";
import { SearchInput } from "../utils/SearchInput";
import { Topbar } from "../RoomPage/TopBar";

const SelectRoom = () => {
  const [findRooms, setFindRooms] = useState([]);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  useEffect(() => {
    let newRooms = rooms.filter((room) => {
      return room.type !== "private";
    });
    newRooms = newRooms.splice(0, 5);
    setFindRooms(newRooms);
  }, []);

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

  const onCheckboxChange = (event) => {
    let myUserRooms = true;
    const newRooms = rooms.filter((room) => {
      const roomNameMatches = room.roomName.toLowerCase();
      const publicRooms = room.type !== "private";

      if (event.target.checked === true) {
        myUserRooms = room.users.some(
          (obj) => obj.hasOwnProperty("userID") && obj.userID === user.userID
        );
        return roomNameMatches && myUserRooms && publicRooms;
      }
      return roomNameMatches && publicRooms;
    });
    setFindRooms(newRooms);
  };

  const onRoomJoin = (roomID, type) => {
    if (type === "JOIN") {
      dispatch(joinRoom({ roomID: roomID }));
      dispatch(
        changeRoom({ id: roomID, user: user, type: "public", actType: "JOIN" })
      );
    } else {
      dispatch(
        changeRoom({ id: roomID, user: user, type: "public", actType: "GOTO" })
      );
    }
    navigate("/room");
  };

  return (
    <>
      <Topbar />
      <StyledBackground>
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

            <FormControlLabel
              control={
                <Checkbox
                  name="my-rooms"
                  color="secondary"
                  onChange={onCheckboxChange}
                />
              }
              labelPlacement="end"
              label="My rooms"
            />
          </Box>
          {findRooms.length !== 0 && (
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
                {findRooms &&
                  findRooms.map((room) => (
                    <li style={{ marginBottom: "10px" }} key={room.roomID}>
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
                            onClick={() => onRoomJoin(room.roomID, "GOTO")}
                            sx={{ marginBottom: "1rem" }}
                            variant="contained"
                            color="primary"
                          >
                            GO TO
                          </Button>
                        ) : (
                          <Button
                            onClick={() => onRoomJoin(room.roomID, "JOIN")}
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
    </>
  );
};

export default SelectRoom;
