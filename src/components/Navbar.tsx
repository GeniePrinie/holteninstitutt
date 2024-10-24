import { useTheme } from "@emotion/react";
import { Box, Container, Link, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const theme = useTheme();
  const location = useLocation();

  return (
    <>
      <Container>
        <Box>
          <Link href="/" variant="body1">
            Hjem
          </Link>
          <Link href="/fysioterapeuter" variant="body1">
            Fysioterapeuter
          </Link>

          <Link href="/kontakt" variant="body1">
            Kontakt
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default Navbar;
