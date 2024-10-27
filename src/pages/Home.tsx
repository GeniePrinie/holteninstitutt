import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Container, Typography } from "@mui/material";

const Home: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <Box sx={{ width: "100%", height: "auto" }}>
        <img
          src="/images/hiking.jpg"
          alt="hiking"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </Box>
      <Container>
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          sx={{ color: theme.palette.primary.main, marginTop: "2rem" }}
        >
          Velkommen til
          <span style={{ fontWeight: 500 }}> Holten institutt</span>, medisinsk
          treningsterapi
        </Typography>
        <Typography sx={{ width: "70%" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam a
          corporis nam rerum nulla voluptate dolorum, modi expedita, quasi
          mollitia fugit corrupti aliquid accusantium nihil illum porro quis
          adipisci commodi!
        </Typography>
      </Container>
    </>
  );
};

export default Home;
