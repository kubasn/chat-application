import styled from "styled-components";
import { Box } from "@mui/material";

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  height: 100vh;
`;

const StyledHeading = styled.h3`
  font-size: 64px;
  font-style: bold;
  color: red;
`;

const StyledParagraph = styled.p`
  font-size: 23px;
  font-style: bold;
  color: red;
  text-align: center;
`;

export const NotFound = () => {
  return (
    <StyledBox>
      <StyledHeading>404</StyledHeading>
      <StyledParagraph>
        Sorry, something went wrong. Please try again!
      </StyledParagraph>
    </StyledBox>
  );
};
