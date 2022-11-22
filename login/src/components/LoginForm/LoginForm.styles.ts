import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const LoginFormWrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  height: "100vh",
});
export const LoginFormContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  height: "568px",
  width: "320px",
  borderRadius: "20px",
  background: "rgba(255, 255, 255, 0.65)",
  boxShadow: "5px 5px 5px rgba(1, 1, 1, 0.3)",
  "& .MuiTypography-root": {
    fontFamily: "fantasy",
    fontSize: "18px",
  },
  "& .MuiTextField-root": {
    marginBottom: "10px",
  },
  "& .MuiButton-root": {
    backgroundColor: "#00ffd4",
    width: "100%",
    marginBlock: "20px",
    transition: "all 0.3s ease",
    boxShadow: "5px 1px 30px rgba(1, 1, 1, 0.3)",
    borderRadius: "0px",
    "&:hover": {
      backgroundColor: "#00E6D4",
    },
  },
  "& a:last-child": {
    fontFamily: "fantasy",
    fontSize: "18px",
    color: "black",
    "&:hover": {
      color: "#00E6D4",
    },
  },
});
export const StyledOr = styled(Box)({
  display: "inline-block",
  height: "1px",
  width: "140px",
  backgroundColor: "rgba(0, 0, 0, 0.42)",
  marginBottom: "7px",
  marginInline: "5px",
});
export const SociaLogin = styled(Box)({
  display: "flex",
  marginBlock: "15px",
  "& img": {
    width: "30px",
  },
  "& a": {
    display: "flex",
    marginInline: "10px",
    "& img:hover": {
      filter:
        "invert(87%) sepia(9%) saturate(5899%) hue-rotate(100deg) brightness(109%) contrast(102%)",
    },
  },
});
