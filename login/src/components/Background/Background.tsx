import React from "react";
import { BackgroundWrapper } from "./Background.style";
import { Outlet } from "react-router-dom";

export const Background: React.FC = () => (
  <BackgroundWrapper>
    <Outlet />
  </BackgroundWrapper>
);
