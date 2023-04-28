import React from 'react'
import { MessageComponent,MessageContent, MessageHeader, MessageSender, MessageTimestamp } from './Message.module'
import DeleteIcon from '@mui/icons-material/Delete';
import getTimeSince from '../utils/getTimeSince';
const Message = ({type,message,onDelete}) => {

  let myMessage ={bgColor: '#BDD2B6',color:'#ffff'}
  let anotherMessage = {bgColor:'#f1f0f0',color:'#1D1E22'}
  return (
    <MessageComponent color={type ==='my' ? myMessage.bgColor : anotherMessage.bgColor} >
  <MessageHeader>
    <MessageSender color={type ==='my' ? myMessage.color : anotherMessage.color}>{message.senderName}</MessageSender>
    <MessageTimestamp>{getTimeSince(message.timestamp)}</MessageTimestamp>
  </MessageHeader>
  <MessageContent>
    <p>{message.content}</p>
  </MessageContent>
  <div style={{display:'flex', justifyContent:'flex-end'}}>
  {type==='my' && <DeleteIcon onClick={()=>onDelete(message.id)} />}
</div>
</MessageComponent>
  )
}

export default Message