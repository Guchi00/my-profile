import React, { useState } from "react";
// import { Link, Events, scrollSpy } from "react-scroll";
import type { DrawerProps } from "antd";
import { Button, Drawer, Space } from "antd";
import PersonIcon from "@mui/icons-material/Person";
import MovingIcon from "@mui/icons-material/Moving";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import BarChartIcon from "@mui/icons-material/BarChart";
import SchoolIcon from "@mui/icons-material/School";
import EmailIcon from "@mui/icons-material/Email";
import InterestsIcon from "@mui/icons-material/Interests";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import styles from "./styles.module.css";

export const ResponsiveDrawer: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [placement] = useState<DrawerProps["placement"]>("left");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Space>
        <Button
          type="primary"
          onClick={showDrawer}
          className={styles.drawer_btn}
        >
          <DensityMediumIcon className={styles.drawer_icon} />
        </Button>
      </Space>
      <Drawer
        // title="Basic Drawer"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
        onClick={onClose}
        className={styles.drawer}
      >
        <div>
          <PersonIcon className={styles.person_icon_drawer} />
          <a href={"#about"} className={styles.drawer_text_link}>
            About
          </a>
        </div>
        <div>
          <MovingIcon className={styles.experience_icon} />
          <a href={"#experience"} className={styles.drawer_text_link}>
            Experience
          </a>
        </div>
        <div>
          <DeveloperBoardIcon className={styles.project_icon} />
          <a href={"#projects"} className={styles.drawer_text_link}>
            Project
          </a>
        </div>

        <div>
          <BarChartIcon className={styles.skill_icon} />
          <a href={"#skills"} className={styles.drawer_text_link}>
            Skill
          </a>
        </div>

        <div>
          <SchoolIcon className={styles.education_icon} />
          <a href={"#education"} className={styles.drawer_text_link}>
            Education
          </a>
        </div>

        <div>
          <InterestsIcon className={styles.interest_icon} />
          <a href={"#interest"} className={styles.drawer_text_link}>
            Interest
          </a>
        </div>

        <div>
          <EmailIcon className={styles.contact_icon} />
          <a href={"#contacts"} className={styles.drawer_text_link}>
            Contact
          </a>
        </div>

        <div>
          <FileCopyIcon className={styles.resume_icon} />
          <a
            href="https://www.canva.com/design/DAFtNLRdW8g/RUGm-vOvx6jdMIuaqbmjNw/edit?utm_content=DAFtNLRdW8g&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            rel="noopener"
            className={styles.drawer_text_link}
          >
            Resume
          </a>
        </div>
      </Drawer>
    </>
  );
};
