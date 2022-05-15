import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
      id="about"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "left",
          textAlign: "left",
          flexDirection: "column",
        }}
      >
        <Box style={{ padding: "24px 24px", width: "100%" }}>
          <Typography
            variant="h3"
            component="div"
            sx={{ color: "primary.dark" }}
          >
            Hello, my name is
          </Typography>
          <Typography
            variant="h2"
            component="div"
            sx={{ color: "primary.light" }}
          >
            Andrew Galvin
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: "primary.contrastText" }}
          >
            I'm an undergraduate student at Wentworth Institute of Technology{" "}
            <br />
            pursing my bachelor's degree in CS and master's degree in Applied
            Computer <br />
            Science in Artificial Intelligence & Machine Learning.
          </Typography>
        </Box>
      </div>
    </Box>
  );
}
