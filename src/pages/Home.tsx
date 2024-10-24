import React from "react";
import { Container, Typography } from "@mui/material";

const Home: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Welcome to Hjem
      </Typography>
      <Typography>This is the Hjem page.</Typography>
    </Container>
  );
};

export default Home;
