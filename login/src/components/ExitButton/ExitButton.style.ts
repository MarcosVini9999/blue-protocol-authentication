import { styled } from "@mui/system";
import { Link } from "react-router-dom";

export const LinkButton = styled(Link)({
  background: "rgba(0,255,212, 0.7)",
  boxShadow: "5px 1px 30px rgba(1, 1, 1, 0.3)",
  paddingInline: "15px",
  borderRadius: "5px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "5px",
  position: "fixed",
  top: "5px",
  left: "5px",
  textDecoration: "none",
  color: "white",
  transition: "all 0.3s ease",
  "& p": {
    fontSize: "23px",
    fontFamily: "fantasy",
  },
  "&:hover": {
    background: "rgba(0,230,212, 0.65)",
  },
});
