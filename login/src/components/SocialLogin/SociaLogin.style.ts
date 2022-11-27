import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const SociaMedias = styled(Box)({
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
