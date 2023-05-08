import React from "react";
import {
  MessageComponent,
  MessageContent,
  MessageHeader,
  MessageSender,
  MessageTimestamp,
} from "./Message.styles";
import DeleteIcon from "@mui/icons-material/Delete";
import getTimeSince from "../utils/getTimeSince";
import { Typography } from "@mui/material";
const Message = ({ user, message, onDelete }) => {

  let myMessage = {
    bgColor: "#BDD2B6",
    color: "#ffff",
    padding: "200px",
    left: "20px",
  };
  let anotherMessage = { bgColor: "#f1f0f0", color: "#1D1E22", left: "-20px" };
  return (
    <MessageComponent
      left={ user.login === message.senderName ? myMessage.left : anotherMessage.left}
      color={message.content === 'Message has ben deleted' ? "transparent"  : user.login === message.senderName ? myMessage.bgColor : anotherMessage.bgColor}
    >
      <MessageHeader>
        <MessageSender
          color={user.login === message.senderName ? myMessage.color : anotherMessage.color}
        >
          {message.senderName}
        </MessageSender>
        <MessageTimestamp>{getTimeSince(message.timestamp)}</MessageTimestamp>
      </MessageHeader>
      <MessageContent>
        <Typography sx={{color:'black'}}   variant='body2' >{message.content}</Typography>
      </MessageContent>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        {(user.login === message.senderName && message.content != 'Message has ben deleted') && <DeleteIcon onClick={() => onDelete(message.id)} />}
      </div>
    </MessageComponent>
  );
};

export default Message;
