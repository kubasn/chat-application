import React, { useState } from "react";
import {
  Button,
  TextField,
  Container,
  Box,
  Typography,
  Modal,
} from "@mui/material";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const AddRoomForm = ({ open, onClose, onSubmit }) => {
  const [roomName, setRoomName] = useState("");
  const [roomDescription, setRoomDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(roomName, roomDescription);
    setRoomName("");
    setRoomDescription("");
    onClose();
    Notify.success("New room is added!");
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          border: "2px solid #000",
          boxShadow: 24,
          padding: 8,
          color: "black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: "black",
          }}
        >
          Add New Room
        </Typography>
        <form
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
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
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            sx={{ mt: 2, width: "100%" }}
          >
            Add Room
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default AddRoomForm;
