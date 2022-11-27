import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const SignUpFormWrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  height: "100vh",
});

export const RegisterFormContainer = styled(Box)({
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
    marginTop: "20px",
    marginBottom: "5px",
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

export const RegisterImage = styled("img")({
  "&": { width: "100px" },
});

export const StyledOr = styled(Box)({
  display: "inline-block",
  height: "1px",
  width: "140px",
  backgroundColor: "rgba(0, 0, 0, 0.42)",
  marginBottom: "7px",
  marginInline: "5px",
});
