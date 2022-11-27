import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import {
  LoginFormContainer,
  LoginFormWrapper,
  SociaLogin,
  StyledOr,
} from "./LoginForm.styles";
import logoLogin from "assets/img/bp-logo.webp";
import discordIcon from "assets/svg/discord-icon.svg";
import facebookIcon from "assets/svg/facebook-icon.svg";
import instagramIcon from "assets/svg/instagram-icon.svg";
import twitterIcon from "assets/svg/twitter-icon.svg";
import { ExitButton } from "components/ExitButton/ExitButton";
import { Link } from "react-router-dom";
import { validateEmail, validatePassword } from "utils";

export const LoginForm: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [emailStatus, setEmailStatus] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [passwordStatus, setPasswordStatus] = React.useState(false);
  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setEmailStatus(!validateEmail(email));
  };
  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setPasswordStatus(!validatePassword(password));
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
          error={passwordStatus}
        />
        <Button variant="contained">
          <Typography>LOG IN</Typography>
        </Button>
        <Typography>
          <StyledOr />
          OR
          <StyledOr />
        </Typography>
        <SociaLogin>
          <Link to="/login">
            <img src={discordIcon} alt="" />
          </Link>
          <Link to="/login">
            <img src={facebookIcon} alt="" />
          </Link>
          <Link to="/login">
            <img src={instagramIcon} alt="" />
          </Link>
          <Link to="/login">
            <img src={twitterIcon} alt="" />
          </Link>
        </SociaLogin>
        <Link to="/register">
          <Typography>Don't you have an account ?</Typography>
        </Link>
      </LoginFormContainer>
    </LoginFormWrapper>
  );
};
