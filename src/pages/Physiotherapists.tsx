import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";

interface Physiotherapist {
  id: number;
  name: string;
  position: string;
  description: string;
  imageUrl: string;
  email: string;
  phone: string;
}

const Physiotherapists: React.FC = () => {
  const theme = useTheme();
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
                  height: { xs: "auto", sm: 250 },
                  borderRadius: "6px",
                  objectFit: "cover",
                  marginRight: { xs: 0, sm: "1rem" },
                  marginBottom: { xs: "1rem", sm: 0 },
                }}
                image={physio.imageUrl}
                alt={physio.name}
              />
              <CardContent sx={{ flex: 1, padding: "0.5rem" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  sx={{
                    color: theme.palette.primary.main,
                    marginTop: "0.5rem",
                    marginBottom: "0.1rem",
                  }}
                >
                  {physio.name}
                </Typography>
                <Typography variant="h6" component="h3">
                  {physio.position}
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
                  Epost: {physio.email}
                </Typography>
                <Typography variant="body1" component="p">
                  tlf: {physio.phone}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Physiotherapists;
