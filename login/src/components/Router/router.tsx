import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { Background } from "components/Background/Background";
import { SignMenu } from "pages";
import { LoginForm } from "components/LoginForm/LoginForm";
import { SignUpForm } from "components/SignUpForm/SignUpForm";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Background />}>
          <Route path="/" element={<SignMenu />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<SignUpForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
