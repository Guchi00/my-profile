import React from "react";
import { Link } from "react-router-dom";
import { Button, Popover } from "antd";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import styles from "./styles.module.css";

export const Contacts = () => {
  return (
    <>
      <div className={styles.container} id={"contacts"}>
        <div className={styles.title_contacts}>CONTACTS</div>

        <div className={styles.contact_container_first}>
          <Popover content="Email Ugochi">
            <Button type="primary" className={styles.button}>
              <EmailIcon className={styles.icon} />
            </Button>
          </Popover>

          <Link
            to="mailto:iwuchukwuugochij@gmail.com"
            className={styles.action_link}
          >
            iwuchukwuugochij@gmail.com
          </Link>
        </div>

        <div className={styles.contact_container}>
          <Popover content="Message Ugochi on Linkedln">
            <Button type="primary" className={styles.button}>
              <LinkedInIcon className={styles.icon} />
            </Button>
          </Popover>
          <Link
            to="https://www.linkedin.com/in/judith-iwuchukwu/"
            target="_blank"
            className={styles.action_link}
          >
            Ugochi Iwuchukwu
          </Link>
        </div>

        <div className={styles.contact_container}>
          <Popover content="Message Ugochi on Twitter">
            <Button type="primary" className={styles.button}>
              <XIcon className={styles.icon} />
            </Button>
          </Popover>
          <Link to="" className={styles.action_link}>
            ugochicodes
          </Link>
        </div>

        <div className={styles.contact_container}>
          <Popover content="Message Ugochi on Instagram">
            <Button type="primary" className={styles.button}>
              <InstagramIcon className={styles.icon} />
            </Button>
          </Popover>
          <Link to="" className={styles.action_link}>
            ugochicodes
          </Link>
        </div>
      </div>
    </>
  );
};
