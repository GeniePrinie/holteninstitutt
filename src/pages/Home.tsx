import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Container, Typography } from "@mui/material";

const Home: React.FC = () => {
  const theme = useTheme();

  return (
    <>

      <Box sx={{ width: "100%", height: "auto", position: "relative" }}>

        <img
          src="/images/hiking.jpg"
          alt="hiking"
          style={{ width: "100%", height: "auto", display: "block" }}
        />

        <Typography
          variant="h2"
          component="div"
          sx={{
            position: "absolute",
            top: "50%",
            left: "10%",
            transform: "translateY(-50%)",
            color: "white",
            padding: "0.5rem 1rem",
            borderRadius: "8px",
            width: "80%",
            "@media (max-width: 600px)": {
              top: "auto",
              bottom: "10%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "90%",
              fontSize: "1.5rem",
            },
          }}
        >
          Bevegelse er medisin
        </Typography>

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
