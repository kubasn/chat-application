import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  CssBaseline,
  List,
  ListItem,
  Paper,
  TextField,
} from "@mui/material";
import Message from "./Message";
import { useDispatch, useSelector } from "react-redux";
import { deleteMessage, sendMessage } from "../../store/reducers/roomSlice";
import date from "../../helpers/date";
import sortByDate from "../../helpers/sortByDate";
import { sportsResults } from "../../sportsResults";
import splitCommandInfo from "../../helpers/splitCommandInfo";

const initialMessage = {
  id: "",
  senderID: "",
  content: "",
  timestamp: "",
  type: "",
};

function addTagToMessages(history, specificId) {
  history = history.map((message) => {
    if (message.senderID === specificId) {
      return Object.assign({}, message);
    }
    return message;
  });
  return history;
}

const ChatWindow = ({ room }) => {
  const messagesEndRef = useRef(null);
  //console.log("ref", ref.current);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState(initialMessage);
  const dispatch = useDispatch();
  const chatHistory = useSelector((state) => state.room);
  const user = useSelector((state) => state.user);
  async function fetchData(league, round) {
    const data = await sportsResults(league, round);
    const message = {
      ...newMessage,
      id: Math.floor(Math.random() * 10000),
      senderID: 0,
      senderName: "Sportsbook bot",
      timestamp: date(),
      content: data,
    };
    setMessages([...messages, message]);
    dispatch(sendMessage({ message, roomId: room.roomID }));
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    let newHistory = chatHistory.messages;
    newHistory = sortByDate(newHistory);
    const sortedMessages = addTagToMessages(newHistory, user.userID);
    setMessages(sortedMessages);
  }, []);

  useEffect(() => {
    let newHistory = chatHistory.messages;
    newHistory = sortByDate(newHistory);
    const sortedMessages = addTagToMessages(newHistory, user.userID);
    setMessages(sortedMessages);
  }, [chatHistory]);

  const onWriteMessage = (e) => {
    setNewMessage({ ...newMessage, content: e.target.value });
  };

  const onSubmit = () => {
    const messagesList = messages;
    let message = {
      ...newMessage,
      id: Math.floor(Math.random() * 10000),
      senderID: user.userID,
      senderName: user.login,
      timestamp: date(),
    };
    if (!message.content.includes("#results")) {
      setMessages([...messagesList, message]);
      dispatch(sendMessage({ message, roomId: room.roomID }));
    } else {
      const { league, round } = splitCommandInfo(message.content);

      fetchData(league, round);
    }
    setNewMessage({ ...newMessage, content: "" });
  };

  const onDelete = (id) => {
    const messagesList = messages;
    dispatch(deleteMessage({ messageId: id, roomId: room.roomID }));
    const filteredMessages = messagesList.map((message) => {
      if (message.id === id) {
        return {
          ...message,
          content: "Message has been deleted",
        };
      }
      return message;
    });
    setMessages(filteredMessages);
  };

  return (
    <Box sx={{ pb: 7, background: "#141416" }}>
      <CssBaseline />
      <List>
        {messages.map((message, index) => (
          <ListItem key={index}>
            <Message
              onDelete={onDelete}
              message={message}
              user={user}
              ref={messagesEndRef}
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
          <TextField
            value={newMessage.content}
            id="outlined-multiline-flexible"
            label="Write a message"
            onKeyUp={(event) => {
              if (event.key === "Enter") onSubmit();
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
      </Paper>
    </Box>
  );
};

export default ChatWindow;
