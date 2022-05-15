import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#A8DADC",
      main: "#1D3557",
      dark: "#457B9D",
      contrastText: "#C4C4C4"
    },
    secondary: {
      light: "#F1FAEE",
      main: "#E63946",
      dark: "#EC9A9A",
      contrastText: "#FFF"
    }
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    fontWeight: "500",
  },
});

export default theme;
