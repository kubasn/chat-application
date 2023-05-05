import React, { useEffect, useRef, useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  CssBaseline,
  List,
  ListItem,
  Paper,
  TextField,
} from "@mui/material";
import Message from "./Message";
import { TextF } from "./ChatWindow.styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import { useDispatch, useSelector } from "react-redux";
import { deleteMessage, sendMessage } from "../../store/reducers/roomSlice";
import date from "../utils/date";

const initialMessage = {
  id: "",
  senderID: "",
  content: "",
  timestamp: "",
  type: "",
};

function addTagToMessages(history, specificId, type) {
  history = history.map((message) => {
    if (message.senderID === specificId) {
      return Object.assign({}, message, { type });
    }
    return message;
  });
  return history;
}

const ChatWindow = ({ room }) => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState(initialMessage);
  const dispatch = useDispatch();

  const chatHistory = useSelector((state) => state.room);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
  }, [value, setMessages]);

  useEffect(() => {
    let newHistory = chatHistory.messages;
    newHistory = addTagToMessages(newHistory, user.userID, "my");
    setMessages(newHistory);
  }, []);

  useEffect(() => {
    let newHistory = chatHistory.messages;
    newHistory = addTagToMessages(newHistory, user.userID, "my");

    setMessages(newHistory);
  }, [chatHistory]);

  const onWriteMessage = (e) => {
    setNewMessage({ ...newMessage, content: e.target.value });
  };

  const onSubmit = () => {
    const messagesList = messages;
    let message = {
      ...newMessage,
      id: Math.floor(Math.random() * 10000),
      type: "my",
      senderID: user.userID,
      senderName: user.login,
      timestamp: date(),
    };
    setMessages([...messagesList, message]);
    dispatch(sendMessage({ message, roomId: room.roomID }));
    setNewMessage({ ...newMessage, content: "" });
  };

  const onDelete = (id) => {
    const messagesList = messages;
    dispatch(deleteMessage({ id: id, roomId: room.roomID }));
    const filteredMessages = messagesList.filter(
      (message) => message.id !== id
    );
    setMessages(filteredMessages);
  };

  return (
    <Box sx={{ pb: 7, background: "#141416" }} ref={ref}>
      <CssBaseline />
      <List>
        {messages.map((message, index) => (
          <ListItem button key={index}>
            <Message
              onDelete={onDelete}
              message={message}
              type={message.type}
            />
          </ListItem>
        ))}
      </List>
      <Paper
        sx={{
          position: "fixed",
          pb: 2,
          pt: 2,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "#1C1D22",
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          sx={{ backgroundColor: "#1C1D22" }}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "50ch" },
              display: "flex",
              gap: "10px",
              alignItems: "center",
              justifyContent: "center",
            }}
            noValidate
            autoComplete="off"
          >
            <AddReactionIcon
              sx={{
                color: "#F1F0F0",
              }}
            />
            <TextField
              value={newMessage.content}
              id="outlined-multiline-flexible"
              label="Write a message"
              onKeyUp={(event) => {
                if (event.key == "Enter") onSubmit();
              }}
              onChange={onWriteMessage}
              size="small"
              multiline
              className="textfield"
              maxRows={4}
              InputLabelProps={{ className: "textfield__label" }}
              sx={{
                "& label": {
                  color: "white",
                },
                "& label.MuiFormLabel-root-MuiInputLabel-root": {
                  color: "white",
                },
                "& label.Mui-focused": {
                  color: "white",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "rgba(255,255,255,0.6)",
                },
                "& .MuiOutlinedInput-root": {
                  color: "white",
                  //width: "100%",
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
                    color: "white",

                    borderColor: "whirgba(255,255,255,0.6)te",
                  },
                },
              }}
            />
          </Box>
          <BottomNavigationAction
            label="Favorites"
            style={{ color: "rgba(255,255,255,0.6)" }}
            icon={<FavoriteIcon style={{ color: "rgba(255,255,255,0.6)" }} />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default ChatWindow;
