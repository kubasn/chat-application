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
import { BasicInput } from "../LoginPage/BasicInput";
import { joinRoom } from "../../store/reducers/userSlice";
import { SearchInput } from "../utils/SearchInput";

const SelectRoom = () => {
  const [text, setText] = useState("");
  const [findRooms, setFindRooms] = useState([]);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  let navigate = useNavigate();



  useEffect(()=> {
    
    let newRooms = rooms.filter((room) => {
      return room.type != "private";
      
    });
    newRooms = newRooms.splice(0,5)
    console.log(newRooms)
    setFindRooms(newRooms)
    console.log(findRooms)

  },[])


  const onTextChange = (e) => {

    const newRooms = rooms.filter((room) => {
      const newRooms = room.roomName.toLowerCase().includes(e.target.value.toLowerCase());
      const publicRooms = room.type != "private";
      return newRooms && publicRooms;
    });
    setFindRooms(newRooms);
    console.log(newRooms,text)
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
    <StyledBackground>
      <Typography variant="h6">Fill below field to search for room</Typography>
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
          {/* <Button
            onClick={onSearch}
            variant="contained"
            color="secondary"
            fullWidth
          >
            Search
          </Button> */}

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
              {findRooms && findRooms.map((room) => (
                <li style={{ marginBottom: "10px" }}>
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
              )
              )}
            </ul>
          </Box>
        )}
      </StyledSmallBox>
    </StyledBackground>
  );
};

export default SelectRoom;
