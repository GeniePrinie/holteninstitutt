import React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";

const Footer: React.FC = () => {
  const theme = useTheme();
  return (
    <Typography
      sx={{
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.text.secondary,
        paddingLeft: "3rem",
        paddingY: "0.5rem",
        marginTop: "2rem",
      }}
    >
      © Holten Institutt for medisinsk treningsterapi
    </Typography>
  );
};

export default Footer;
