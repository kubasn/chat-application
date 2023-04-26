import { AppBar, CssBaseline, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Page } from './RoomPage.module'
import SideBar from './SideBar'
import RightBar from './RightBar'
import ChatWindow from './ChatWindow'
import { createTheme } from '@mui/material/styles';

const RoomPage = () => {



  return (
    // <ThemeProvider theme={theme}>
    <Page>
    <CssBaseline />
    <AppBar sx={{background:'#1C1D22'}} position="relative">
        <Toolbar  sx={{display:'flex', justifyContent:'center', background:'#1C1D22'}}>
          <Typography sx={{marginLeft:'-80px'}} variant="h6" color="inherit" noWrap>Room 2
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
      <SideBar/>
      <ChatWindow/>
      <RightBar/>
      </div>
      </Page>
      // </ThemeProvider>

  )
}

export default RoomPage