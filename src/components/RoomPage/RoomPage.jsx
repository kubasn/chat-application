import { AppBar, CssBaseline, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Page } from "./RoomPage.styles";
import SideBar from "./SideBar";
import RightBar from "./RightBar";
import ChatWindow from "./ChatWindow.jsx";
import { useSelector } from "react-redux";
import { Topbar } from "./TopBar";
import { styled } from "@mui/material/styles";
//import ChatWindow from "./ChatWindow";

const StyledTopBar = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    height: "25px",
    minHeight: "0px",
  },
  [theme.breakpoints.up("s")]: {
    height: "25px",
    minHeight: "0px",
  },
}));

const RoomPage = () => {
  const user = useSelector((state) => state.user);
  const room = useSelector((state) => state.room);

  return (
    <Page>
      <CssBaseline />
      <Topbar />
      <AppBar position="relative">
        <StyledTopBar
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" color="inherit" noWrap>
            {room.roomName}
          </Typography>
        </StyledTopBar>
      </AppBar>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <SideBar currentRoom={room} rooms={user.rooms} users={room.users} />
        <ChatWindow room={room} />
        <RightBar {...room} {...user} />
      </div>
    </Page>
  );
};

export default RoomPage;
