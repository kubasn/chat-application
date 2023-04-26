import styled from "styled-components";

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHeading = styled.h3`
  font-size: 64px;
  font-style: bold;
  color: white;
`;

const StyledParagraph = styled.p`
  font-size: 20px;
  color: white;
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
