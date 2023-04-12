import { styled } from "@mui/system";
import { Box } from "@mui/material";
import wallpaper from "assets/img/wallpaper.jpg";

export const BackgroundWrapper = styled(Box)({
  backgroundImage: `url("${wallpaper}")`,
  backgroundSize: "cover",
  height: "100vh",
});
