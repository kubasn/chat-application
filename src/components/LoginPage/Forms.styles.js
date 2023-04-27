import styled from "styled-components";

import { Box, Typography } from "@mui/material";

export const StyledSmallBox = styled(Box)`
  background-color: #343434;
  border-radius: 20px;
  margin: 60px 60px;
  width: 95%;
`;

export const StyledForm = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 30px;
`;

export const StyledTypoSub = styled(Typography)`
  color: white;
  padding-bottom: 30px;
`;
