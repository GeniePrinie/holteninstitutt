import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    tertiary: Palette["primary"];
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions["primary"];
  }
}

const colors = {
  lightBlue: "#E8E8F4",
  darkBlue: "#312973",
  blue: "#313194",
  white: "#FFFFFF",
  gray: "#84848C",
  black: "#000000",
};

const theme = createTheme({
  palette: {
    primary: {
      main: colors.darkBlue,
    },
    secondary: {
      main: colors.blue,
    },
    tertiary: {
      main: colors.lightBlue,
    },
    background: {
      default: colors.white,
    },
    text: {
      primary: colors.black,
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    button: {
      textTransform: "none",
    },
  },
});

export default theme;