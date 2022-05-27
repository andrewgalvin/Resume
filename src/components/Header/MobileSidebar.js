import {
  Toolbar,
  IconButton,
  Drawer,
  Link,
  Menu,
  MenuItem,
  Button,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { headerInfo, decToBinary } from "../../constants";
import logo from "../../files/avatar.png";
import resume from "../../files/resume.pdf";

export default function MobileSidebar(props) {
  const handleDrawerOpen = () =>
    props.setState((prevState) => ({ ...prevState, drawerOpen: true }));
  const handleDrawerClose = () =>
    props.setState((prevState) => ({ ...prevState, drawerOpen: false }));
  const handleButtonOnClick = (href) => {
    props.setState((prevState) => ({ ...prevState, drawerOpen: false }));
  };

  return (
    <Toolbar>
      {props.toolboxLogo}

      <IconButton
        {...{
          edge: "start",
          color: "inherit",
          "aria-label": "menu",
          "aria-haspopup": "true",
          onClick: handleDrawerOpen,
        }}
      >
        <MenuIcon style={{ color: "var(--text-primary)", fontSize: "40px" }} />
      </IconButton>

      <Drawer
        {...{
          anchor: "right",
          open: props.drawerOpen,
          onClose: handleDrawerClose,
        }}
      >
        <Box
          sx={{
            backgroundColor: "primary.main",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "left",
            flexDirection: "column",
          }}
        >
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              m: 2,
            }}
          >
            <img height="32px" width="32px" src={logo} />
          </Box>
          {headerInfo.map((info, num) => {
            return (
              <Box sx={{ m: 1 }} key={decToBinary(num + 1)}>
                <Button
                  href={info.href}
                  onClick={() => handleButtonOnClick(info.href)}
                  color="secondary"
                  sx={{
                    color: "secondary.light",
                    ":hover": { color: "secondary.dark" },
                  }}
                >
                  {`0${decToBinary(num + 1)}. ${info.text}`}
                </Button>
              </Box>
            );
          })}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              m: 2,
            }}
          >
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
        </Box>
      </Drawer>
    </Toolbar>
  );
}
