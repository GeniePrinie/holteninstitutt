import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import HelmetComponent from "../components/Helmet";

interface Physiotherapist {
  id: number;
  name: string;
  position: string;
  background: string[];
  description: string;
  desktopImageUrl: string;
  phoneImageUrl: string;
  email: string;
  phone: string;
}

const Physiotherapists: React.FC = () => {
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const [physiotherapists, setPhysiotherapists] = useState<Physiotherapist[]>(
    []
  );

  useEffect(() => {
    fetch("/data/PhysiotherapistsData.json")
      .then((response) => response.json())
      .then((data) => setPhysiotherapists(data.PhysiotherapistsData))
      .catch((error) =>
        console.error("Error fetching physiotherapists data:", error)
      );
  }, []);

  return (
    <>
      <HelmetComponent title="Fysioterapeuter | Holten intstitutt" />
      <Container>
        <Typography
          variant="body1"
          component="h1"
          gutterBottom
          sx={{ color: theme.palette.primary.main }}
        >
          Fysioterapeuter
        </Typography>
        <Grid container spacing={4} direction="column">
          {physiotherapists.map((physio) => (
            <Grid item key={physio.id}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: { xs: "center", sm: "flex-start" },
                  borderRadius: "12px",
                  backgroundColor: theme.palette.tertiary.main,
                  padding: "0.7rem",
                  width: "100%",
                  boxShadow: "none",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: { xs: "100%", sm: 250 },
                    height: { xs: "auto", sm: "auto" },
                    borderRadius: "6px",
                    objectFit: "cover",
                    marginRight: { xs: 0, sm: "1rem" },
                    marginBottom: { xs: "1rem", sm: 0 },
                  }}
                  image={
                    isDesktop ? physio.desktopImageUrl : physio.phoneImageUrl
                  }
                  alt={physio.name}
                />
                <CardContent sx={{ flex: 1, px: "0.5rem", py: "0rem" }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    sx={{
                      color: theme.palette.primary.main,
                      marginBottom: "0.1rem",
                    }}
                  >
                    {physio.name}
                  </Typography>
                  <Typography variant="h6" component="h3">
                    {physio.position}
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{ my: "0.5rem" }}
                  >
                    <ul style={{ paddingLeft: "1rem" }}>
                      {physio.background.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </Typography>
                  <Typography variant="body1" component="p">
                    {physio.description}
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{
                      paddingTop: "0.7rem",
                      marginBottom: "0.1rem",
                    }}
                  >
                    Epost:
                    <Link
                      href={`mailto:${physio.email}`}
                      sx={{
                        marginLeft: "0.5rem",
                        color: "inherit",
                        "&:hover": {
                          textDecoration: "underline",
                          color: "primary.main",
                        },
                      }}
                    >
                      {physio.email}
                    </Link>
                  </Typography>
                  <Typography variant="body1" component="p">
                    Timebestilling gjøres per telefon
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Physiotherapists;
