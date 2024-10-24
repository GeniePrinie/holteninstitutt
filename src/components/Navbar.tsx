import { useTheme } from "@mui/material/styles";
import { Box, Container, Link, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const theme = useTheme();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        marginTop: "2rem",
      }}
    >
      <Box>
        <Link href="/" variant="body1" sx={{ textDecoration: "none" }}>
          <img
            src="/images/holtenhorizontal.png"
            alt="logo"
            style={{ width: "200px", height: "auto" }}
          />
        </Link>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "3rem",
        }}
      >
        <Box sx={{ width: "2.5rem" }}>
          <Link
            href="/"
            variant="body1"
            sx={{
              textDecoration: "none",
              color: theme.palette.secondary.main,
              fontWeight: isActive("/") ? "bold" : "normal",
              "&:hover": {
                fontWeight: "bold",
              },
            }}
          >
            Hjem
          </Link>
        </Box>
        <Box sx={{ width: "7.2rem" }}>
          <Link
            href="/fysioterapeuter"
            variant="body1"
            sx={{
              textDecoration: "none",
              color: theme.palette.secondary.main,
              fontWeight: isActive("/fysioterapeuter") ? "bold" : "normal",
              "&:hover": {
                fontWeight: "bold",
              },
            }}
          >
            Fysioterapeuter
          </Link>
        </Box>
        <Box sx={{ width: "4rem" }}>
          <Link
            href="/kontakt"
            variant="body1"
            sx={{
              textDecoration: "none",
              color: theme.palette.secondary.main,
              fontWeight: isActive("/kontakt") ? "bold" : "normal",
              "&:hover": {
                fontWeight: "bold",
              },
            }}
          >
            Kontakt
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Navbar;
