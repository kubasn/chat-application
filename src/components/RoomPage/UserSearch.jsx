import {
  Box,
  Hidden,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { users } from "../../db";
import { ListItemDecorator } from "@mui/joy";
import Avatar from "@mui/material/Avatar";
import { SearchInput } from "../utils/SearchInput";

const UserSearch = ({ onUserClick }) => {
  const [foundUsers, setFoundUsers] = useState([]);

  const onTextChange = (e) => {
    const txt = e.target.value;
    const newUsers = users.filter((user) =>
      user.login.toLowerCase().includes(txt.toLowerCase())
    );
    setFoundUsers(newUsers);
  };

  return (
    <Box>
      <Typography
        sx={{
          marginLeft: "2vw",
          marginBottom: "1rem",
          marginTop: "1rem",
          color: "secondary.main",
        }}
        variant="h6"
      >
        PRIVATE MESSAGES
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        gap="18px"
        padding="10px 30px"
      >
        <SearchInput
          inputType="text"
          inputName="search"
          onChange={onTextChange}
        >
          Search for user
        </SearchInput>
      </Box>

      {foundUsers.length !== 0 && (
        <Box mb={2} display="flex" flexDirection="column">
          <Typography
            sx={{
              marginLeft: "4vw",
              marginBottom: "1rem",
              marginTop: "1rem",
              color: "secondary.main",
            }}
            variant="h6"
          >
            FOUND USERS:
          </Typography>
          <ul>
            {foundUsers.map((user) => (
              <ListItem
                onClick={() => onUserClick(user)}
                key={user.userID}
                disablePadding
                style={{
                  marginLeft: "0.5rem",
                  marginBottom: "1.5rem",
                }}
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
          </ul>
        </Box>
      )}
    </Box>
  );
};

export default UserSearch;
