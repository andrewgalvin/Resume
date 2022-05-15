import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from '@mui/material/CssBaseline';

import Header from "./Header";
// import About from "./About";
import Home from "./Home";
import Experience from "./Experience";
import theme from "./Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Header />
        <Box sx={{ bgcolor: "primary.main" }}>
          <Home />
        </Box>
        <Box sx={{ bgcolor: "primary.main" }}>
          <Experience />
        </Box>
    </ThemeProvider>
  );
}

export default App;
