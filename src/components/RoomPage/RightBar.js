
import { Box, Button, Card, Divider, Drawer, Hidden, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Side } from './SideBar.module';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import { Home } from '@mui/icons-material';
import { ButtonSettings, PrimaryText, SecondaryText } from '../RightBar.module';
import SettingsIcon from '@mui/icons-material/Settings';
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
const rooms = [{'id':1},{'id':2},{'id':3},{'id':4},{'id':5}]

  const RoomBox = (props) => {
    return(<div style={{background:'#D9D9D9',height:'4rem',width:'4rem',display:'flex', justifyContent:'center', alignItems:'center'}}>{props.id}</div>)
  }



const RightBar = () => {
    const drawerWidth = '30%';
  return (
    <Side>
    <Drawer
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      overflow:'hidden',
      '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
        background:"#1C1D22",
        color:'white',
        borderLeftColor:'#37393C'

      },
    }}
    variant="permanent"
    anchor="right"
  >
    <Toolbar />
    <List>
    <Typography sx={{marginLeft:'2vw'}} align="left" variant="h5" color="inherit" noWrap>Room info</Typography>
    <Divider sx={{background:'#37393C'}} />
    <List>
        <List style={{display:'flex', flexDirection:'column',alignItems:'center', gap:'2rem', marginTop:'1rem'}}>
        <div style={{background:'#D9D9D9',height:'8rem',width:'8rem',display:'flex', justifyContent:'center', alignItems:'center'}}></div>
        <Typography   variant="h5" color="inherit" noWrap>Nazwa pokoju</Typography>
        </List>
    </List>
    <Divider sx={{background:'#37393C'}} />
<List style={{display:'flex',flexDirection:'column',alignItems:'start', marginLeft:'2rem'}}>
    <>
    <PrimaryText>Info</PrimaryText>
<SecondaryText>This is room for football lovers</SecondaryText>

</>
<>
<PrimaryText>Active users</PrimaryText>
<SecondaryText>10</SecondaryText>
</>
</List>
<ButtonSettings  sx={{borderColor: 'white',color:'white', ":hover":{borderColor:'whitesmoke'},gap:'5px' }}
  variant="outlined"><SettingsIcon/>Settings</ButtonSettings>
    </List>
  </Drawer>
  </Side>
  )
}

export default RightBar