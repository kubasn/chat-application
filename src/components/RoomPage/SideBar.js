
import { Box, Button, Card, Divider, Drawer, Hidden, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Side } from './SideBar.module';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import { Home } from '@mui/icons-material';

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



const SideBar = () => {
    const drawerWidth = '20%';
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
        borderRightColor:'#37393C'
      },
    }}
    variant="permanent"
    anchor="left"
  >
    <Toolbar />
    <List>
    <Typography sx={{marginLeft:'2vw'}} align="left" variant="h5" color="inherit" noWrap>Rooms</Typography>
   <div style={{marginTop:'1rem',marginBottom:'1rem', marginInline:'1rem'}} >
    <Carousel
    style={{display:'flex', justifyContent:'center', alignItems:'center' }}
  swipeable={false}
  draggable={true}
  responsive={responsive}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
    <RoomBox id='+' />
  {rooms.map((room)=>  <RoomBox id={room.id}/>)}
</Carousel>
  </div>
    </List>   
    <List>

    </List>
    <Divider sx={{background:'#37393C'}} />

    <List>
    <Typography sx={{marginLeft:'2vw',marginBottom:'1rem'}} align="left" variant="h5" color="inherit" noWrap>Users</Typography>
    <List>
      {['Sara Maw', 'Cameron Wiliams', 'Andrzej Nowak'].map((text, index) => (
        <ListItem key={text} disablePadding style={{marginLeft:'0.5rem',marginBottom:'1.5rem'}}>
               <ListItemDecorator style={{}}>
               <img
               style={{width:"3rem",hieght:"3rem",borderRadius:'100%'}}
        src='https://picsum.photos/200/300'
      />
                </ListItemDecorator>
          <ListItemButton>
          <Hidden  mdDown>

            <ListItemText  sx={{fontSize:'2rem'}} primary={text} />
            </Hidden>

          </ListItemButton>
        </ListItem>
      ))}
    </List>
    </List>
  </Drawer>
  </Side>
  )
}

export default SideBar