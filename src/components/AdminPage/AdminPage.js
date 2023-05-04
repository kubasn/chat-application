import { Box, Button, Checkbox, FormControlLabel, Modal, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { rooms } from '../../db'
import { joinRoom } from '../../store/reducers/userSlice'
import { BasicInput } from '../LoginPage/BasicInput'
import { AdminInput } from './AdminInput'

const AdminPage = () => {
  const [text,setText] = useState('')
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [findRooms,setFindRooms] = useState([])
  const [clickedRoom,setClickedRoom] = useState({})

  const user = useSelector(state=>state.user)
  const dispatch = useDispatch();
  const onSearch = () => {
    const newRooms = rooms.filter(room => 
      {
     const newRooms = room.roomName.toLowerCase().includes(text.toLowerCase())
     const publicRooms = room.type != 'private'
     return newRooms && publicRooms
  });
     setFindRooms(newRooms)
  }

  const onTextChange = (e) => {
    setFindRooms([])
    setText(e.target.value)
  }


  const onRoomJoin = (roomID) => {
  dispatch(joinRoom(roomID))
  }


const onRoomDelete = (roomID) => {
    console.log(roomID)
    // rooms
}

const onRoomEdit = (room) => {
    setClickedRoom(room)
    console.log(clickedRoom)
    handleOpen()
}


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Box
    bgcolor="#1C1D22"
    color="white"
    p={10}
    textAlign="center"
    width="50%"
    margin="auto"
    marginTop='300px'
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
  >
         <Modal
        open={open}
        onClose={handleClose}> 
   <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit room
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <AdminInput value={clickedRoom.roomName} inputType="text" inputName="login">
                Room name
              </AdminInput>
              <AdminInput value={clickedRoom.roomDescription} inputType="text" inputName="login">
                Room description
              </AdminInput>
          </Typography>
          <Button  sx={{marginBottom:'1rem'}} variant="contained" color="success">SAVE</Button>

        </Box>
    </Modal>
    <Typography variant='h1' mb={4}>Admin panel</Typography>
     <Box mb={2}>
        Fill below field to search for room
      </Box>
      <Box display="flex" alignItems="center">
     
        <TextField onChange={onTextChange}       sx={{ '& label.Mui-focused': {
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
            }}}} label="Search" variant="outlined" size="small" />
        <Box ml={2} mr={2}>
          <Button onClick={onSearch} variant="contained" color="primary">Search</Button>
        </Box>
   
      </Box>
      {findRooms.length != 0 &&  <Box mb={2}    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center" >
      <h2>Found rooms</h2>
      <ul>
        {findRooms.map(room =>  
  
          (
          <li key={room.roomID} style={{ listStyleType: 'none', marginBottom: '10px' }}>
            <div
              style={{
                border: '1px solid #ccc',
                borderRadius: '5px',
                backgroundColor: '#37393C',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}
            >
              <h3>{room.roomName}</h3>
              <p>{room.roomDescription}</p>
              <div style={{display:'flex', justifyContent:'center',gap:'1rem'}}>
              <Button onClick={()=>onRoomEdit(room)} sx={{marginBottom:'1rem'}} variant="contained" color="warning">EDIT</Button>
              <Button onClick={()=>onRoomDelete(room.roomID)} sx={{marginBottom:'1rem'}} variant="contained" color="error">DELETE</Button>
              </div>
              </div>
            
          </li>
        ))}
        
      </ul>

      </Box>}
  </Box>
  )
}

export default AdminPage