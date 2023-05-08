import React from "react";
import {
  MessageComponent,
  MessageContent,
  MessageHeader,
  MessageSender,
  MessageTimestamp,
} from "./Message.styles";
import DeleteIcon from "@mui/icons-material/Delete";
import getTimeSince from "../../helpers/getTimeSince";
import { Typography } from "@mui/material";
const Message = ({ user, message, onDelete }) => {
 
  const currentUserMessage = {
    bgColor: "#BDD2B6",
    color: "#ffff",
    padding: "200px",
    left: "20px",
  };
  const anotherUserMessage = { bgColor: "#f1f0f0", color: "#1D1E22", left: "-20px" };

const messageDeletedContent = 'Message has been deleted'

  return (
    <MessageComponent
      left={ user.login === message.senderName ? currentUserMessage.left : anotherUserMessage.left}
      color={message.content === messageDeletedContent ? "transparent"  : user.login === message.senderName ? currentUserMessage.bgColor : anotherUserMessage.bgColor}
      style= {{ border:message.content === messageDeletedContent && '1px solid #ededed'}}
    >
      <MessageHeader>
        <MessageSender
          color={user.login === message.senderName ? currentUserMessage.color : anotherUserMessage.color}
        >
          {message.senderName}
        </MessageSender>
        <MessageTimestamp>{getTimeSince(message.timestamp)}</MessageTimestamp>
      </MessageHeader>
      <MessageContent>
        <Typography sx={{color: message.content !== messageDeletedContent && 'black'}}   variant='body2' >{message.content}</Typography>
      </MessageContent>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        {(user.login === message.senderName && message.content != messageDeletedContent) && <DeleteIcon onClick={() => onDelete(message.id)} />}
      </div>
    </MessageComponent>
  );
};

export default Message;
