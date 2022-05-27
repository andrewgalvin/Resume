import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { experienceInfo } from "../../constants";

export default function Experience() {
  const [selectedJob, setSelectedJob] = useState("Bay State Physical Therapy");

  const handleJobOnClick = (job) => {
    setSelectedJob(job.company);
  };

  return (
    <Box
      id="experience"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        padding: "20px 20px",
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
        Where I've Worked
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "left",
          textAlign: "left",
          flexDirection: "row",
          width: "100%",
          padding: "24px 24px",
        }}
      >
        <Box sx={{ width: "200px" }}>
          {experienceInfo.map((job, num) => {
            return (
              <Box
                onClick={(e) => handleJobOnClick(job)}
                style={{
                  borderLeft:
                    selectedJob === job.company
                      ? "2px solid #EC9A9A"
                      : "2px solid #F1FAEE",
                }}
                key={job.company}
              >
                <Button
                  color="secondary"
                  sx={{
                    color:
                      selectedJob === job.company
                        ? "secondary.dark"
                        : "secondary.light",
                    width: "100%",
                    textAlign: "left",
                    display: "flex",
                    alignItems: "left",
                    justifyContent: "left",
                    textTransform: "none",
                  }}
                >
                  {job.company}
                </Button>
              </Box>
            );
          })}
        </Box>
        <Box style={{ width: "500px" }}>
          {experienceInfo
            .filter((job) => job.company === selectedJob)
            .map((job, num) => {
              return (
                <Box key={job.company}>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ color: "primary.contrastText" }}
                  >
                    {job.jobTitle}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    component="div"
                    sx={{ color: "primary.contrastText" }}
                  >
                    {job.durationWorked}
                  </Typography>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ color: "secondary.dark" }}
                  >
                    {job.company}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ color: "primary.contrastText" }}
                    component="div"
                  >
                    {job.location}
                  </Typography>
                  {job.jobDescription.map((desc, num) => {
                    return (
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: "primary.contrastText",
                          "::before": {
                            content: '"-"',
                            color: "secondary.dark",
                            fontWeight: "bold",
                            display: "inline-",
                            width: "1em",
                          },
                        }}
                        key={desc}
                        component="div"
                      >
                        {desc}
                      </Typography>
                    );
                  })}
                </Box>
              );
            })}
        </Box>
      </Box>
    </Box>
  );
}
