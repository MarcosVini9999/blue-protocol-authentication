import { styled } from "@mui/system";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export const SignMenuWrapper = styled(Box)({
  height: "100vh",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  alignItems: "center",
  justifyItems: "center",
});
export const ButtonLog = styled(Link)({
  background: "rgba(1, 1, 1, .40)",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  transition: "all 0.3s ease",
  cursor: "pointer",
  "& h1": {
    fontFamily: "fantasy",
    gap: "5px",
    height: "19px",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "75px",
    lineHeight: "19px",
    color: "#000000",
  },
  "&:hover": {
    background: "rgba(1, 1, 1, .0)",
    "& h1": {
      transform: "translateY(-10px)",
      transition: "all 3s ease",
    },
  },
});
export const PreLoader = styled(Box)({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  zIndex: "1000",
  position: "fixed",
  "&  img": {
    width: "320px",
  },
});
