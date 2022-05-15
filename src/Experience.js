import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { experienceInfo } from "./constants";

export default function Experience() {
  const [selectedJob, setSelectedJob] = useState("Bay State Physical Therapy");

  const handleJobOnClick = (job) => {
    setSelectedJob(job.company);
  };

  return (
    <Box id="experience">
      <Box
        style={{
          height: "60vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "left",
            textAlign: "left",
            flexDirection: "row",
            width: "100%",
            padding: "24px 24px"
          }}
        >
          <div style={{ width: "200px" }}>
            {experienceInfo.map((job, num) => {
              return (
                <Box
                  onClick={(e) => handleJobOnClick(job)}
                  style={{
                    borderLeft:
                      selectedJob === job.company
                        ? "2px solid #0FFF95"
                        : "2px solid #87BDC0",
                  }}
                >
                  <Button color="secondary" style={{ textTransform: "none" }}>
                    {job.company}
                  </Button>
                </Box>
              );
            })}
          </div>
          <div style={{ width: "500px" }}>
            {experienceInfo
              .filter((job) => job.company === selectedJob)
              .map((job, num) => {
                return (
                  <Box>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ color: "secondary.main" }}
                    >
                      {job.jobTitle}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      component="div"
                      sx={{ color: "secondary.main" }}
                    >
                      {job.durationWorked}
                    </Typography>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ color: "primary.light" }}
                    >
                      {job.company}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "secondary.main" }}
                      component="div"
                    >
                      {job.location}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{ color: "secondary.main" }}
                      component="div"
                    >
                      {job.jobDescription}
                    </Typography>
                  </Box>
                );
              })}
          </div>
        </div>
      </Box>
    </Box>
  );
}
