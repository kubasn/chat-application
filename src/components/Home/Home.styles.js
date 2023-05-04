import styled from "styled-components";
import { Box } from "@mui/material";

export const StyledBigBox = styled(Box)`
  background-color: rgba(28, 29, 34, 0.95);
  height: 100vh;
  min-height:100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin: 30px;
`;
