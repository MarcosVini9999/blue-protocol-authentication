import { Typography } from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { LinkButton } from "./ExitButton.style";

interface ExitButtonProps {
  to: string;
}

export const ExitButton: React.FC<ExitButtonProps> = ({ to }) => {
  return (
    <LinkButton to={to}>
      <ArrowBackIcon fontSize="medium" />
      <Typography component={"span"} variant={"body2"}>
        BACK
      </Typography>
    </LinkButton>
  );
};
