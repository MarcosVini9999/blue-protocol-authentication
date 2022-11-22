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
    "& .MuiTypography-root": {
      fontFamily: "fantasy",
      fontSize: "18px",
    },
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
