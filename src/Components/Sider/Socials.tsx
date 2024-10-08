import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link as RouterLink } from "react-router-dom";

import styles from "./styles.module.css";

export const Socials = () => {
  return (
    <>
      <div className={styles.socials}>
        <RouterLink
          to="https://www.facebook.com/ugochinyere.iwuchukwu"
          target="blank"
        >
          <FacebookIcon />
        </RouterLink>
        <RouterLink to="" target="blank">
          <XIcon />
        </RouterLink>
        <RouterLink
          to="https://www.linkedin.com/in/judith-iwuchukwu/"
          target="blank"
        >
          <LinkedInIcon />
        </RouterLink>
        <RouterLink
          to="https://www.instagram.com/ugochicodes?igsh=cHdsa3l5b2kzMG5q&utm_source=qr"
          target="blank"
        >
          <InstagramIcon />
        </RouterLink>
      </div>
    </>
  );
};
