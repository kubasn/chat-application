import styled from "styled-components";
import {
  AppBar,
  Avatar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  IconButton,
  InputBase,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";

export const Chat = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  background-color: "red";
  z-index: 100;
  width: 100%;
`;

export const TextF = styled(TextField)`
  color: "white";
`;

export const BottomNav = styled(BottomNavigation)`
  width: 10px;
`;
