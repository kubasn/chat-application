import React, { useState } from 'react';
import { Button, TextField, Container, Box, Typography } from '@mui/material';

function AddRoomForm({ onSubmit }) {
  const [roomName, setRoomName] = useState('');
  const [roomDescription, setRoomDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(roomName, roomDescription);
    setRoomName('');
    setRoomDescription('');
  };

  return (
    <Container>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Add New Room
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: 400 }}>
            <TextField
              label="Room Name"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
              required
              margin="normal"
              fullWidth
            />
            
            <TextField
              label="Room Description"
              value={roomDescription}
              onChange={(e) => setRoomDescription(e.target.value)}
              required
              margin="normal"
              fullWidth
            />
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
              Add Room
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
}

export default AddRoomForm;