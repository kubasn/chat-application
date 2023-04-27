import { AppBar, CssBaseline, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Page } from './RoomPage.module'
import SideBar from './SideBar'
import RightBar from './RightBar'
import ChatWindow from './ChatWindow'
import { createTheme } from '@mui/material/styles';

const RoomPage = () => {

const room = {
  roomID: "2442",
  roomName:'CSS lovers',
  roomDescription:'canal for css enthuisiast, since 2023',
  messageHistoryID: "",
  users:[{  userID: "",
  login: "marek nowak",
  email:"mareknowak@gmail.com",
  password: "12345",
  avatarID:"",
  lastRoom:"3",
  status:"online"},{  userID: "234523",
  login: "darek kowalski",
  email:"dkowal@gmail.com",
  password: "12345",
  avatarID:"",
  lastRoom:"3",
  status:"online"},{  userID: "235232323",
  login: "andrzej nowakowski",
  email:"a.nowak@gmail.com",
  password: "12345",
  avatarID:"",
  lastRoom:"3",
  status:"online"}],
  creationDate:'04/05/2023'
}

const user = {
  userID: "5235",
  login: "kubasn",
  email:"kubasn@gmail.com",
  password: "6534",
  avatarID:"",
  lastRoom:"5",
  status:"active",
  rooms:[6,5,4,3,6]
}



  return (
    // <ThemeProvider theme={theme}>
    <Page>
    <CssBaseline />
    <AppBar sx={{background:'#1C1D22'}} position="relative">
        <Toolbar  sx={{display:'flex', justifyContent:'center', background:'#1C1D22'}}>
          <Typography sx={{marginLeft:'-80px'}} variant="h6" color="inherit" noWrap>{room.roomName}
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
      <SideBar rooms={user.rooms} users={room.users}/>
      <ChatWindow/>
      <RightBar {...room}/>
      </div>
      </Page>
      // </ThemeProvider>

  )
}

export default RoomPage