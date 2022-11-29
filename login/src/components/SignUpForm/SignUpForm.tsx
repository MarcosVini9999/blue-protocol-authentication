import { Button, TextField, Typography } from "@mui/material";
import { ExitButton } from "components/ExitButton/ExitButton";
import React from "react";
import {
  RegisterFormContainer,
  RegisterImage,
  SignUpFormWrapper,
  StyledOr,
} from "./SignUpForm.styles";
import logoRegister from "assets/img/bp-logo.webp";
import { Link } from "react-router-dom";
import { validateEmail, validatePassword } from "utils";
import { SociaLogin } from "components/SocialLogin/SociaLogin";

export const SignUpForm: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [emailStatus, setEmailStatus] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [confirmationPassword, setConfirmationPassword] = React.useState("");

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setEmailStatus(!validateEmail(email));
  };
  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onConfirmationPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setConfirmationPassword(event.target.value);
  };

  return (
    <SignUpFormWrapper>
      <ExitButton to="/" />
      <RegisterFormContainer>
        <RegisterImage src={logoRegister} alt="" />
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
          label="User Name"
          type="text"
          variant="filled"
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
        <TextField
          id="outlined-password-input"
          label="Password Confirmation"
          type="password"
          autoComplete="current-password"
          variant="filled"
          value={confirmationPassword}
          onChange={onConfirmationPasswordChange}
          error={!(password === confirmationPassword)}
          disabled={!validatePassword(password)}
        />
        <Button
          variant="contained"
          disabled={
            !(password === confirmationPassword) || !validatePassword(password)
          }
        >
          <Typography>Register</Typography>
        </Button>
        <Typography>
          <StyledOr />
          OR
          <StyledOr />
        </Typography>
        <SociaLogin />
        <Link to="/login">Do you have an account ?</Link>
      </RegisterFormContainer>
    </SignUpFormWrapper>
  );
};
