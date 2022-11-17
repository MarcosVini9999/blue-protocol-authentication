import { SignUpForm } from "components";
import React from "react";
import { SignUpPageWrapper } from "./SignUpPage.styles";

export const SignUpPage: React.FC = () => {
  return (
    <SignUpPageWrapper>
      <SignUpForm />
    </SignUpPageWrapper>
  );
};
