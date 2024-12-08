import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Container, Typography } from "@mui/material";
import HelmetComponent from "../components/Helmet";

const Home: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <HelmetComponent title="Hjem | Holten intstitutt" />
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
          sx={{
            color: theme.palette.primary.main,
            marginTop: "2rem",
            fontSize: {
              xs: "1.6rem",
              md: "2.5rem",
            },
          }}
        >
          Velkommen til
          <span style={{ fontWeight: 500 }}> Holten institutt</span>
        </Typography>
        <Typography sx={{ width: { xs: "100%", md: "70%" } }}>
          Vi er en gjeng erfarne fysioterapeuter og manuellterapeuter med bred
          kompetanse innen behandling av muskel- og skjelettplager. Vi
          undersøker og behandler alt fra akutte skader til langvarige
          smertetilstander.
        </Typography>
        <Typography sx={{ width: { xs: "100%", md: "70%" }, mt: "1rem" }}>
          Uttrykket &quot;Bevegelse er medisin&quot; gir en god beskrivelse av
          det som bør være en grunnpilar i god evidensbasert fysioterapi
          praksis, og uttrykket beskriver en felles rød tråd i våre terapeuters
          paraksisprofil.
        </Typography>
      </Container>
    </>
  );
};

export default Home;
