import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import {
  LoginFormContainer,
  LoginFormWrapper,
  StyledOr,
} from "./LoginForm.styles";
import logoLogin from "assets/img/bp-logo.webp";
import { ExitButton } from "components/ExitButton/ExitButton";
import { Link } from "react-router-dom";
import { validateEmail, validatePassword } from "utils";
import { SociaLogin } from "components/SocialLogin/SociaLogin";

export const LoginForm: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [emailStatus, setEmailStatus] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setEmailStatus(!validateEmail(email));
  };
  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <LoginFormWrapper>
      <ExitButton to="/" />
      <LoginFormContainer>
        <img src={logoLogin} alt="" />
        <TextField
          id="outlined-basic"
          label="E-mail"
          variant="filled"
          value={email}
          onChange={onEmailChange}
          error={emailStatus}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          value={password}
          onChange={onPasswordChange}
          error={!validatePassword(password)}
        />
        <Button variant="contained">
          <Typography>LOG IN</Typography>
        </Button>
        <Typography>
          <StyledOr />
          OR
          <StyledOr />
        </Typography>
        <SociaLogin />
        <Link to="/register">
          <Typography>Don't you have an account ?</Typography>
        </Link>
      </LoginFormContainer>
    </LoginFormWrapper>
  );
};
