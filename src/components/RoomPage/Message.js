import React from 'react'
import { MessageComponent,MessageContent, MessageHeader, MessageSender, MessageTimestamp } from './Message.module'

const Message = (props) => {

  let myMessage ={bgColor: '#BDD2B6',color:'#ffff'}
  let anotherMessage = {bgColor:'#f1f0f0',color:'#1D1E22'}
  return (
    <MessageComponent color={props.type ==='my' ? myMessage.bgColor : anotherMessage.bgColor} >
  <MessageHeader>
    <MessageSender color={props.type ==='my' ? myMessage.color : anotherMessage.color}>John Smith</MessageSender>
    <MessageTimestamp>2h ago</MessageTimestamp>
  </MessageHeader>
  <MessageContent>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt semper velit eget condimentum.</p>
  </MessageContent>
</MessageComponent>
  )
}

export default Message