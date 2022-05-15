import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { headerInfo, decToBinary } from "../../constants";
import resume from "../../files/resume.pdf";

export default function Header() {
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  return (
    <Box>
      <AppBar position="sticky">
        <Toolbar style={{margin: 0}}>
          <Box
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              flexDirection: state.mobileView ? "column" : "row",
            }}
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />
            {headerInfo.map((info, num) => {
              return (
                <Box sx={{ m: 1 }}>
                  <Button href={info.href} color="secondary" sx={{color: "secondary.light", ":hover":{color: "secondary.dark"}}}>
                    {!state.mobileView
                      ? `0${decToBinary(num + 1)}. ${info.text}`
                      : `${info.text}`}
                  </Button>
                </Box>
              );
            })}

            <Box sx={{ m: 1 }}>
              <Button
                color="secondary"
                sx={{
                  border: 1,
                  borderColor: "secondary.dark",
                  color: "secondary.dark",
                  ":hover": {
                    color: "secondary.light",
                    borderColor: "secondary.light",
                  }
                }}
                href={resume}
              >
                Resume
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
