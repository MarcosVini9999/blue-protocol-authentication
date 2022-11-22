import { Typography } from "@mui/material";
import React from "react";
import { ButtonLog, PreLoader, SignMenuWrapper } from "./SignMenu.styles";
import logo from "assets/svg/blue-protocol-logo.svg";

export const SignMenu: React.FC = () => {
  const [loading, setLoading] = React.useState(true);
  setTimeout(() => setLoading(false), 500);

  return (
    <SignMenuWrapper>
      {loading ? (
        <PreLoader>
          <img src={logo} alt="Pre-loader" />
        </PreLoader>
      ) : (
        <React.Fragment>
          <ButtonLog to="/login">
            <Typography variant="h1">LOG IN</Typography>
          </ButtonLog>
          <ButtonLog to="/register">
            <Typography variant="h1">REGISTER</Typography>
          </ButtonLog>
        </React.Fragment>
      )}
    </SignMenuWrapper>
  );
};
