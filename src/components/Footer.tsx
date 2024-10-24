import React from "react";
import { Container, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Footer
      </Typography>
      <Typography>This is the Footer</Typography>
    </Container>
  );
};

export default Footer;
