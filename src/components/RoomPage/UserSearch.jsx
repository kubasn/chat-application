import { Box, Button, Checkbox, FormControlLabel, Hidden, ListItem, ListItemButton, ListItemText, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { users } from '../../db';
import { ListItemDecorator } from '@mui/joy';

const UserSearch = ({onUserClick}) => {
    const [text, setText] = useState("");
    const [foundUsers, setFoundUsers] = useState([]);



    const onTextChange = (e) => {
        setFoundUsers([]);
        setText(e.target.value);
      };
    
      const onSearch = () => {
        const newUsers = users.filter((user) => user.login.toLowerCase().includes(text.toLowerCase())
        );
        setFoundUsers(newUsers);
      };



  return (
    <Box>
    <Typography variant='h5'>Write to another user</Typography>
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
      </Box>
      {foundUsers.length != 0 && (
        <Box
          mb={2}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <h2>Found users</h2>
          <ul>
            {foundUsers.map((user) => (
 <ListItem
  onClick={() => onUserClick(user)}
  key={user.userID}
  disablePadding
  style={{ marginLeft: "0.5rem", marginBottom: "1.5rem" }}
>
  <ListItemDecorator style={{}}>
    <img
      style={{
        width: "4rem",
        height: "4rem",
        borderRadius: "100%",
      }}
      src="https://picsum.photos/200/300"
    />
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
  )
}

export default UserSearch