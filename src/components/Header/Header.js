import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

import { headerInfo, decToBinary } from "../../constants";
import MobileSidebar from "./MobileSidebar";
import logo from "../../files/avatar.png";
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
    <header>
      <AppBar position="fixed">
        {!state.mobileView ? (
          <Box>
            <Toolbar style={{ margin: 0 }}>
              <Box component="div" sx={{ flexGrow: 1 }}>
                <img height="32px" width="32px" src={logo} alt="logo" />
              </Box>
              {headerInfo.map((info, num) => {
                return (
                  <Box sx={{ m: 1 }} key={decToBinary(num + 1)}>
                    <Button
                      href={info.href}
                      color="secondary"
                      sx={{
                        color: "secondary.light",
                        ":hover": { color: "secondary.dark" },
                      }}
                    >
                      {!state.mobileView
                        ? `${decToBinary(num + 1)}. ${info.text}`
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
                    },
                  }}
                  href={resume}
                >
                  Resume
                </Button>
              </Box>
              <Box />
            </Toolbar>
          </Box>
        ) : (
          <MobileSidebar
            setState={setState}
            drawerOpen={state.drawerOpen}
            toolboxLogo={
              <Box component="div" sx={{ flexGrow: 1 }}>
                <img height="32px" width="32px" src={logo} alt="logo" />
              </Box>
            }
          />
        )}
      </AppBar>
    </header>
  );
}
