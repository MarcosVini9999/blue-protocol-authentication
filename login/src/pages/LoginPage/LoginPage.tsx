import { LoginForm } from "components";
import React from "react";
import { LoginPageWrapper } from "./LoginForm.styles";

export const LoginPage: React.FC = () => {
  return (
    <LoginPageWrapper>
      <LoginForm />
    </LoginPageWrapper>
  );
};
