import { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import Project from "./Project";
import { projectInfo } from "../../constants";

export default function Projects() {
  const [projectNum, setProjectNum] = useState(2);
  const firstRender = useRef(true);

  const handleViewMoreProjects = (e) => {
    e.preventDefault();
    if (projectNum === projectInfo.length) {
      setProjectNum(2);
    } else {
      setProjectNum(projectNum + 2);
    }
  };

  useEffect(() => {
    if (!firstRender.current) {
      var element = document.getElementById(`scroll-to`);
      element.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    } else {
      firstRender.current = false;
    }
  }, [projectNum]);

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
        {projectInfo
          .slice(0)
          .reverse()
          .slice(0, projectNum)
          .map((project, num) => {
            return (
              <Box
                sx={{ width: "80vw" }}
                key={project.projectTitle}
                id={`project-${num}`}
              >
                <Project project={project} num={num} />
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
          <IconButton
            aria-label="delete"
            size="large"
            sx={{ color: "secondary.main", border: "2px solid #E63946" }}
            onClick={handleViewMoreProjects}
            id="scroll-to"
          >
            {projectNum === projectInfo.length ? (
              <ExpandLessIcon fontSize="inherit" />
            ) : (
              <ExpandMoreIcon fontSize="inherit" />
            )}
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
