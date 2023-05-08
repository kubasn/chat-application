import {
  Button,
  Divider,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Side } from "./LeftBar.styles";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { changeRoom } from "../../store/reducers/roomSlice";
import { useNavigate } from "react-router-dom";
import UserSearch from "./UserSearch";
import Avatar from "@mui/material/Avatar";
import AddBoxIcon from "@mui/icons-material/AddBox";
import returnRoomPicture from "../../helpers/returnRoomPicture";

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

const SideBar = ({ users, rooms, currentRoom }) => {
  const drawerWidth = "20%";
  let anchor = "left";
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState("");
  const current = useSelector((state) => state.user);

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  let navigate = useNavigate();
  const onClickHandler = (roomID) => {
    dispatch(changeRoom({ id: roomID, type: "public" }));
  };

  const onUserClick = (user) => {
    dispatch(
      changeRoom({ id: [user.userID, current.userID], type: "private" })
    );
  };

  const RoomBox = ({ id, currentRoomId }) => {
    return (
      <div
        onClick={() =>
          id === "+" ? navigate("/selection") : onClickHandler(id)
        }
        onChange
        style={{
          border: "2px solid",
          borderColor: currentRoomId === id ? "red" : "#D9D9D9",
          height: "4rem",
          width: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {id === "+" ? (
          <AddBoxIcon />
        ) : (
          <img
            src={returnRoomPicture(id)}
            width="100%"
            height="100%"
            style={{ objectFit: "fill" }}
          />
        )}
      </div>
    );
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Side sx={{}}>
      <Button onClick={toggleDrawer(anchor, true)}>
        <MenuIcon sx={{ color: "white" }} />
      </Button>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            overflowX: "hidden",
            overflowY: "auto",
            width: drawerWidth,
            boxSizing: "border-box",
            background: "#1C1D22",
            color: "white",
            borderRightColor: "#37393C",
          },
        }}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
        anchor="left"
      >
        <Toolbar />
        <List>
          <Typography
            sx={{ marginLeft: "2vw", color: "secondary.main" }}
            variant="h5"
          >
            ROOMS
          </Typography>
          <div
            style={{
              marginTop: "1rem",
              marginBottom: "1rem",
              marginInline: "1rem",
            }}
          >
            <Carousel
              style={
                {
                  //display: "flex",
                  //justifyContent: "center",
                  //alignItems: "center",
                }
              }
              swipeable={false}
              draggable={true}
              responsive={responsive}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              <RoomBox id="+" />
              {rooms.map((room) => (
                <RoomBox id={room} currentRoomId={currentRoom.roomID}></RoomBox>
              ))}
            </Carousel>
          </div>
        </List>

        <Divider sx={{ background: "#37393C" }} />

        <List>
          <Typography
            sx={{
              marginLeft: "2vw",
              marginBottom: "1rem",
              color: "secondary.main",
            }}
            variant="h5"
          >
            USERS IN ROOM
          </Typography>
          <List>
            {users.map((user, index) => (
              <ListItem
                onClick={() => onUserClick(user)}
                key={user.userID}
                disablePadding
                style={{ marginLeft: "0.5rem", marginBottom: "1.5rem" }}
              >
                <ListItemDecorator style={{}}>
                  <Avatar alt="User picture" src={user.avatarID} />
                </ListItemDecorator>
                <ListItemButton>
                  <Hidden mdDown>
                    <ListItemText
                      sx={{ fontSize: "2rem" }}
                      primary={user.login}
                    />
                  </Hidden>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </List>

        <Divider sx={{ background: "#37393C" }} />

        <UserSearch onUserClick={onUserClick} />
      </Drawer>
    </Side>
  );
};

export default SideBar;
