import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#0FFF95",
      main: "#2274A5",
      dark: "#c4c4c4",
      contrastText: "#87BDC0"
    },
    secondary: {
      main: "#FFF",
      dark: "#3C6E71",
    }
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    fontWeight: "500",
  },
});

export default theme;
