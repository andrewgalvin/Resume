import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Project from "./Project";
import { projectInfo } from "../../constants";

export default function Projects() {
  const [projectNum, setProjectNum] = useState(2);

  const handleViewMoreProjects = (e) => {
    e.preventDefault();
    setProjectNum(projectNum + 2);
  };

  const handleViewLessProjects = (e) => {
    e.preventDefault();
    if (projectNum === 2) {
      setProjectNum(2);
    } else {
      setProjectNum(projectNum - 2);
    }
  };
  return (
    <Box
      id="projects"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        padding: "100px 100px",
      }}
    >
      <Typography
        variant="h3"
        component="div"
        sx={{
          color: "secondary.light",
          borderBottom: "2px solid #EC9A9A",
          marginBottom: "48px",
        }}
      >
        Projects I've Worked On
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "left",
          textAlign: "left",
          flexDirection: "column",
          padding: "24px 24px",
        }}
      >
        {projectInfo.slice(0).reverse().slice(0, projectNum).map((project) => {
          return (
            <Box key={project.projectTitle}>
              <Project project={project} />
            </Box>
          );
        })}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-evenly",
          }}
        >
          <Button
            style={{
              border: "2px solid #A8DADC",
              borderRadius: "50px",
              padding: "10px 15px",
              color: "#FFF",
              boxShadow: "0px 7px 20px #1D3557",
              textDecoration: "none",
              minWidth: "100px",
              fontWeight: "500",
              "&:hover": {
                backgroundColor: "#A8DADC",
                color: "white",
              },

            }}
            variant="outlined"
            onClick={handleViewLessProjects}
          >
            View Less
          </Button>
          <Button
            style={{
              border: "2px solid #A8DADC",
              borderRadius: "50px",
              padding: "10px 15px",
              color: "#FFF",
              boxShadow: "0px 7px 20px #1D3557",
              textDecoration: "none",
              minWidth: "100px",
              fontWeight: "500",
              "&:hover": {
                backgroundColor: "#A8DADC",
                color: "white",
              },
            }}
            variant="outlined"
            onClick={handleViewMoreProjects}
          >
            View More
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
