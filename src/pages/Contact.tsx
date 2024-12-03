import React from "react";
import { Box, Container, Link, Typography, useTheme } from "@mui/material";
import Map from "../components/Map";
import HelmetComponent from "../components/Helmet";

const Contact: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <HelmetComponent title="Kontakt | Holten intstitutt" />
      <Container>
        <Typography
          variant="body1"
          component="h1"
          gutterBottom
          sx={{ color: theme.palette.primary.main }}
        >
          Kontakt
        </Typography>
      </Container>
      <Box
        sx={{
          backgroundColor: theme.palette.tertiary.main,
          padding: "2rem",
        }}
      >
        <Container>
          <Typography
            variant="h6"
            component="h2"
            gutterBottom
            sx={{ paddingBottom: "1rem" }}
          >
            Kontaktinformasjon
          </Typography>

          <Box sx={{ paddingBottom: "2rem" }}>
            <Typography variant="body2" component="h3">
              Telefon
            </Typography>
            <Typography variant="body1" component="p">
              +47 22 15 12 64
            </Typography>
          </Box>

          <Box sx={{ paddingBottom: "2rem" }}>
            <Typography variant="body2" component="h3">
              Epost
            </Typography>
            <Typography variant="body1" component="p">
              <Link
                href="mailto:post@holteninstitutt.no"
                sx={{
                  textDecoration: "underline",
                  color: "inherit",
                  "&:hover": {
                    textDecoration: "underline",
                    color: "primary.main",
                  },
                }}
              >
                post@holteninstitutt.no
              </Link>
            </Typography>
            <Typography variant="body1" component="p">
              Vi svarer så fort vi kan innenfor våre åpningstider.
            </Typography>
          </Box>

          <Box sx={{ paddingBottom: "2rem", maxWidth: "45rem" }}>
            <Typography variant="body2" component="h3">
              Adresse
            </Typography>
            <Typography variant="body1" component="p">
              <Link
                href="https://www.google.com/maps/place/Holten+Institutt+For+Medisinsk+Treningsterapi/@59.9389391,10.7670797,16z/data=!3m1!4b1!4m6!3m5!1s0x46416e15c6358007:0x1ffdd472373d1033!8m2!3d59.9389372!4d10.7689399!16s%2Fg%2F1w6r6w8_?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener"
                sx={{
                  textDecoration: "underline",
                  color: "inherit",
                  "&:hover": {
                    textDecoration: "underline",
                    color: theme.palette.primary.main,
                  },
                }}
              >
                Sandakerveien 59 - 0477 Oslo
              </Link>
            </Typography>
            <Typography variant="body1" component="p">
              Inngangen til klinikken er fra gateplan rett ved
              trikkeholdeplassen. Du tar trapp/heis en etasje opp, går inn til
              høyre, skiltet Holten institutt.
            </Typography>
          </Box>
        </Container>
      </Box>
      <Container sx={{ marginY: "3rem" }}>
        <Map />
      </Container>
    </>
  );
};

export default Contact;
