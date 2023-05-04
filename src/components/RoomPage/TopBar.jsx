import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";
import { selectAvatar } from "../../store/selectors";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSignOut } from "../../store/reducers/userSlice";

export const Topbar = () => {
  const dispatch = useDispatch();
  const avatar = useSelector(selectAvatar);

  let navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/");
    dispatch(setSignOut());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          background: "#1C1D22",
        }}
      >
        <Toolbar>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            Sportsbook
          </Typography>
          <Avatar alt="User picture" src={avatar} />

          <Button color="inherit" onClick={handleClick}>
            LOG OUT
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
