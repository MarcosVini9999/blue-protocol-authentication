import { Button, TextField } from "@mui/material";
import React from "react";
import { LoginFormWrapper } from "./LoginForm.styles";

export const LoginForm: React.FC = () => {
  return (
    <LoginFormWrapper>
      <TextField id="outlined-basic" label="E-mail" variant="filled" />
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="filled"
      />
      <Button variant="contained">LOG IN</Button>
    </LoginFormWrapper>
  );
};
