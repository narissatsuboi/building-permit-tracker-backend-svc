import { Button, styled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CustomButton = ({
  href, 
  backgroundColor,
  color,
  buttonText,
  heroBtn,
  guideBtn,
}) => {
  const CustomButton = styled(Button)(({ theme }) => ({
    href: href,
    backgroundColor: backgroundColor,
    color: color,
    fontWeight: "700",
    fontSize: "14px",
    cursor: "pointer",
    padding: "0.5rem 1.25rem",
    borderRadius: "7px",
    textTransform: "none",
    display: "block",
    border: "2px solid transparent",
    "&:hover": {
      backgroundColor: color,
      color: backgroundColor,
      borderColor: backgroundColor,
    },
    [theme.breakpoints.down("md")]: {
      margin: (heroBtn) && theme.spacing(0, "auto", 3, "auto"),
      width: (heroBtn) && "90%",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: guideBtn && theme.spacing(3),
      width: guideBtn && "90%",
    },
  }));

  return <CustomButton>{buttonText}</CustomButton>;
};

export default CustomButton;
