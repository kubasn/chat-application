import React from 'react'
import { MessageComponent,MessageContent, MessageHeader, MessageSender, MessageTimestamp } from './Message.module'

const Message = ({type,message}) => {

  let myMessage ={bgColor: '#BDD2B6',color:'#ffff'}
  let anotherMessage = {bgColor:'#f1f0f0',color:'#1D1E22'}
  return (
    <MessageComponent color={type ==='my' ? myMessage.bgColor : anotherMessage.bgColor} >
  <MessageHeader>
    <MessageSender color={type ==='my' ? myMessage.color : anotherMessage.color}>John Smith</MessageSender>
    <MessageTimestamp>2h ago</MessageTimestamp>
  </MessageHeader>
  <MessageContent>
    <p>{message}</p>
  </MessageContent>
</MessageComponent>
  )
}

export default Message