import { Typography } from "@mui/material";

export const Welcome = () => {
  return (
    <>
      <Typography
        variant="h2"
        align="center"
        sx={{
          paddingBottom: "25px",
        }}
      >
        Sportsbook
      </Typography>
      <Typography variant="subtitle2" align="center">
        Welcome to our Sportsbook page! <br />
        To chat with your friends, please sign in.
      </Typography>
    </>
  );
};
