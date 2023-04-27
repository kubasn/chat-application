import React, { useEffect, useRef, useState } from 'react';
import {
  AppBar,
  Avatar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  CssBaseline,
  FormControl,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material'
import Message from './Message';
import { BottomNav, Chat, TextF } from './ChatWindow.module';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './Chat.css'
import AddReactionIcon from '@mui/icons-material/AddReaction';




function ownOrAuthor() {
  // Generate a random number between 0 and 1
  const randomNumber = Math.random();

  // If the random number is less than 0.5, return 'own'
  if (randomNumber < 0.5) {
    return 'my';
  } 
  // Otherwise, return 'author'
  else {
    return 'other';
  }
}


function ChatWindow() {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const [messages, setMessages] = useState([]);
  const [newMessage,setNewMessage] = useState('')


  useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
  }, [value, setMessages]);


const onWriteMessage = (e) => {
  setNewMessage(e.target.value)
console.log(newMessage)
}

const sendMessage = () => {
  console.log('awdawd')
  const  messagesList = messages;
  setMessages([...messagesList,newMessage])
  console.log(messages)
  setNewMessage('')

}


  return (
    <Box  sx={{ pb: 7, background:'#141416' }} ref={ref}>
      <CssBaseline />
      <List>
        {messages.map(( text, index) => (
          <ListItem  button key={index}>
           <Message message={text} type={ownOrAuthor()}/>
          </ListItem>
        ))}
      </List>
      <Paper sx={{ position: 'fixed', pb:2,pt:2, bottom: 0, left: 0, right: 0, backgroundColor:'#1C1D22' }} elevation={3}>
        <BottomNavigation
          showLabels
          sx={{backgroundColor:'#1C1D22'}}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
              <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <AddReactionIcon sx={{color:'#F1F0F0', marginTop:'12px'}}/>
        <TextF
          value={newMessage}
          id="outlined-multiline-flexible"
          label="Write a message"
          onKeyUp={(event) => {
            if (event.key== 'Enter')
                sendMessage();
        }}
          onChange = {onWriteMessage}
          size="small"
          multiline
          className='textfield'
          maxRows={4}
          InputLabelProps={{className: 'textfield__label'}}
          sx={{ '& label.Mui-focused': {
            color: 'rgba(255,255,255,0.6)'
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'rgba(255,255,255,0.6)',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(255,255,255,0.6)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(255,255,255,0.6)',
            },
            '&:hover ': {
              borderColor: 'rgba(255,255,255,0.6)',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'whirgba(255,255,255,0.6)te',
            }}}}
        />
    </Box>
          <BottomNavigationAction label="Favorites"  style={{ color: 'rgba(255,255,255,0.6)' }} icon={<FavoriteIcon style={{ color: 'rgba(255,255,255,0.6)' }} />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

const messageExamples = [
  {
    primary: 'Brunch this week?',
    secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
    person: '/static/images/avatar/5.jpg',
  },
  {
    primary: 'Birthday Gift',
    secondary: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
    person: '/static/images/avatar/1.jpg',
  },

];





export default ChatWindow;