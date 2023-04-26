import { StyledTypographyH2, StyledTypographyH6 } from "./Welcome.styles";

export const Welcome = () => {
  return (
    <>
      <StyledTypographyH2 variant="h2" align="center">
        Sportsbook
      </StyledTypographyH2>
      <StyledTypographyH6 variant="subtitle2" align="center">
        Welcome to our Sportsbook page! <br />
        To chat with your friends, please sign in.
      </StyledTypographyH6>
    </>
  );
};
