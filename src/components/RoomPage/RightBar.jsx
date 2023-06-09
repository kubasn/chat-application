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
import { leaveRoom } from "../../store/users/userSlice";
import { removeRoom } from "../../store/rooms/roomSlice";
import { useNavigate } from "react-router-dom";

const RightBar = (props) => {
  const navigate = useNavigate();
  const drawerWidth = "30%";
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
    dispatch(removeRoom());
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
              <img
                width="160rem"
                height="160rem"
                src={props.picture}
                alt="Room avatar"
              />
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
          <Box marginLeft={2}>
            <Typography variant="h5" color="inherit" noWrap>
              Commands:
            </Typography>
            <Typography variant="h6" color="inherit" noWrap>
              Display results of football matches:
            </Typography>
            <Typography variant="p" color="inherit" noWrap>
              #results/'league'/'round' <br />
            </Typography>
            <Typography variant="p" color="inherit" noWrap>
              <b>league</b> - What football league results do you want to
              display?. <br /> Currently supported: ekstraklasa,bundesliga,
              laliga, seriaA, premierleague
            </Typography>
            <br />
            <Typography variant="p" color="inherit" noWrap>
              <b>round</b> - Which round results do you want to display?.
            </Typography>
          </Box>
        </List>
      </Drawer>
    </Side>
  );
};

export default RightBar;
