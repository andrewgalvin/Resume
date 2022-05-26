import React from "react";
import { Box, Typography, Button } from "@mui/material";

export default function Project(props) {
  return (
    <Box
      sx={{
        width: "95%",
        position: "relative",
        maxWidth: "1000px",
        margin: "24px auto",
        backgroundColor: "#457B9D",
        boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
        padding: "25px",
        borderRadius: "25px",
        height: "400px",
        transition: "all .3s",
        "@media (max-width: 950px)": {
          maxWidth: "575px",
          height: "425px",
        },
        "@media (max-width: 1280px)": {
          minHeight: "500px",
          height: "auto",
          marginBottom: "40px",
          marginTop: "120px",
        },
        "@media (max-height: 500px) and (min-width: 950px)": {
          height: "350px",
          margin: "200px",
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "@media screen and (max-width: 1280px)": {
          flexDirection: "column",
          marginLeft: "auto",
          marginRight: "auto",
        },
        marginLeft: props.num % 2 === 0 ? "0" : "auto",
        marginRight: props.num % 2 === 0 ? "auto" : "0",
        "& > *": {
          transition: "all 0.4s",
        },
        top: "0",
        ":hover": {
          top: "-15px",
        },
      }}
      xs={10}
    >
      <Box
        sx={{
          position: "relative",
          width: "300px",
          flexShrink: 0,
          height: "300px",
          backgroundImage: "linear-gradient(147deg, #457B9D 0%, #A8DADC 74%)",
          boxShadow: "4px 13px 30px 1px #333",
          borderRadius: "20px",
          transform: "translateX(-150px)",
          overflow: "hidden",
          "@media (max-width: 1575px)": {
            transform: "translateX(-20px)",
          },
          "@media (max-width: 1280px)": {
            transform: "translateX(-80px)",
            // eslint-disable-next-line
            transform: "translateY(-20%)",
            width: "90%",
          },
          "@media (max-height: 500px) and (min-width: 992px)": {
            height: "270px",
          },
        }}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            borderRadius: "20px",
          }}
          alt={"Project"}
          src={props.project.projectImg}
          loading="lazy"
        />
      </Box>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          paddingRight: "25px",
          color: "#FFF",
          "@media (maxWidth: 1280px)": {
            marginTop: "125px",
            padding: "0 30px",
          },
          "& > *": {
            transition: "all .4s",
          },
        }}
      >
        <Typography
          style={{ marginBottom: "15px", display: "block", fontWeight: 500 }}
          variant="subtitle1"
        >
          {props.project.projectLanguage}
        </Typography>
        <Typography
          variant="h5"
          style={{
            fontSize: "24px",
            fontWeight: 700,
            marginBottom: "20px",
            wordWrap: "break-word",
          }}
        >
          {props.project.projectTitle}
        </Typography>
        <Typography style={{ marginBottom: "30px", textAlign: "center" }}>
          {props.project.projectDescription} <br /> <br />
          {props.project.yearCreated}
        </Typography>
        {props.project.githubLink && (
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
            href={props.project.githubLink}
          >
            Github
          </Button>
        )}
        {props.project.websiteLink && (
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
            href={props.project.websiteLink}
          >
            View Site
          </Button>
        )}
      </Box>
    </Box>
  );
}
