import React from "react";
import { SociaMedias } from "./SociaLogin.style";
import discordIcon from "assets/svg/discord-icon.svg";
import facebookIcon from "assets/svg/facebook-icon.svg";
import instagramIcon from "assets/svg/instagram-icon.svg";
import twitterIcon from "assets/svg/twitter-icon.svg";
import { Link } from "react-router-dom";

export const SociaLogin: React.FC = () => {
  return (
    <SociaMedias>
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
    </SociaMedias>
  );
};
