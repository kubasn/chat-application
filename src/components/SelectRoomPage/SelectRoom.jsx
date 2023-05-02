import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { rooms } from '../../db'
import { joinRoom } from '../../store/reducers/userSlice'

const SelectRoom = () => {
  const [text,setText] = useState('')
  const [findRooms,setFindRooms] = useState([])
  const user = useSelector(state=>state.user)
  const dispatch = useDispatch();
  const onSearch = () => {
    const newRooms = rooms.filter(room => room.roomName.toLowerCase().includes(text.toLowerCase()));
     setFindRooms(newRooms)
  }

  const onTextChange = (e) => {
    setFindRooms([])
    setText(e.target.value)
  }

  const onRoomJoin = (roomID) => {
  dispatch(joinRoom(roomID))
  }

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
        <Box ml={2}>
          <Button onClick={onSearch} variant="contained" color="primary">Search</Button>
        </Box>
      </Box>
      {findRooms.length != 0 &&  <Box mb={2}    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center" >
      <h2>Found rooms</h2>
      <ul>
        {findRooms.map(room => (
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
              {
                user.rooms.includes(room.roomID) ? <Button onClick={()=>onRoomJoin(room.roomID)} sx={{marginBottom:'1rem'}} variant="contained" color="primary">GO TO</Button> :
              <Button onClick={()=>onRoomJoin(room.roomID)} sx={{marginBottom:'1rem'}} variant="contained" color="success">JOIN</Button>
              }
              </div>
            
          </li>
        ))}
        
      </ul>

      </Box>}
  </Box>
  )
}

export default SelectRoom