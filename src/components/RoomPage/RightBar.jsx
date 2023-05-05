import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Side } from "./LeftBar.styles";
import "react-multi-carousel/lib/styles.css";
import { ButtonSettings, PrimaryText, SecondaryText } from "./RightBar.styles";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";
import { useDispatch } from "react-redux";
import { leaveRoom } from "../../store/reducers/userSlice";
import { deleteRoom, removeUser } from "../../store/reducers/roomSlice";
import { useNavigate } from "react-router-dom";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const rooms = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

const RoomBox = (props) => {
  return (
    <div
      style={{
        background: "#D9D9D9",
        height: "4rem",
        width: "4rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {props.id}
    </div>
  );
};

const RightBar = (props) => {
  const navigate = useNavigate();
  const drawerWidth = "50%";
  // const classes = useStyles();
  const dispatch = useDispatch();
  let anchor = "right";

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const onLeave = () => {
    dispatch(leaveRoom({ roomID: props.roomID, userID: props.userID }));
    dispatch(deleteRoom());
    navigate("/selection");
  };

  return (
    <Side sx={{ width: "10%" }}>
      <Button onClick={toggleDrawer(anchor, true)}>
        <InfoIcon sx={{ color: "white", positon: "sticky" }} />
      </Button>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          overflow: "hidden",
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "#1C1D22",
            color: "white",
            borderLeftColor: "#37393C",
          },
        }}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
        anchor="right"
      >
        <Toolbar />
        <List>
          <Typography
            sx={{ marginLeft: "2vw" }}
            align="left"
            variant="h5"
            color="inherit"
            noWrap
          >
            Room info
          </Typography>
          <Divider sx={{ background: "#37393C" }} />
          <List>
            <List
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2rem",
                marginTop: "1rem",
              }}
            >
              <div
                style={{
                  background: "#D9D9D9",
                  height: "8rem",
                  width: "8rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              ></div>
              <Typography variant="h5" color="inherit" noWrap>
                {props.roomName}
              </Typography>
            </List>
          </List>
          <Divider sx={{ background: "#37393C" }} />
          <List
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              marginLeft: "2rem",
            }}
          >
            <>
              <PrimaryText>Info</PrimaryText>
              <SecondaryText>{props.roomDescription}</SecondaryText>
            </>
            <>
              <PrimaryText>Active users</PrimaryText>
              <SecondaryText>{props.users.length}</SecondaryText>
            </>
          </List>
          <Box sx={{ display: "flex" }}>
            <ButtonSettings
              onClick={onLeave}
              sx={{
                borderColor: "red",
                color: "red",
                ":hover": { borderColor: "#843030", color: "#843030" },
                gap: "5px",
                mx: "auto",
                display: "flex",
                justifyContent: "center",
              }}
              variant="outlined"
            >
              <SettingsIcon />
              Leave room
            </ButtonSettings>
          </Box>
        </List>
      </Drawer>
    </Side>
  );
};

export default RightBar;
