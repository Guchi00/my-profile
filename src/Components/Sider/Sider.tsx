import React, { useEffect, useRef, useState } from "react";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
// import { Link } from "react-router-dom";
import { Link, Events, scrollSpy } from "react-scroll";
import PersonIcon from "@mui/icons-material/Person";
import MovingIcon from "@mui/icons-material/Moving";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import BarChartIcon from "@mui/icons-material/BarChart";
import SchoolIcon from "@mui/icons-material/School";
import EmailIcon from "@mui/icons-material/Email";
import InterestsIcon from "@mui/icons-material/Interests";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import styles from "./styles.module.css";

const { Sider } = Layout;

export const SiderMenu: React.FC = () => {
  const [activeLink, setActiveLink] = useState("1");
  const linksRef = useRef<HTMLElement[]>([]);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleSetActive = (key: number) => {
    console.log(key, "active");
    // setActiveLink(key.toString());
  };

  const handleSetInactive = (key: number) => {
    console.log(key, "in active");
    // setActiveLink("9");
  };

  const items: MenuProps["items"] = [
    {
      key: 1,
      icon: <PersonIcon className={styles.person_icon} />,
      label: (
        <Link
          // ref={(el: any) => (linksRef.current[0] = el)}
          to={"about"}
          className={styles.list_link}
          spy={true}
          smooth={true}
          activeClass="active_menu_link"
          onSetInactive={() => handleSetInactive(1)}
        >
          About
        </Link>
      ),
    },
    {
      key: 2,
      icon: <MovingIcon className={styles.experience_icon} />,
      label: (
        <Link
          to={"experience"}
          className={styles.list_link}
          spy={true}
          smooth={true}
          activeClass="active_menu_link"
          hashSpy={true}
        >
          Experience
        </Link>
      ),
    },
    {
      key: 3,
      icon: <DeveloperBoardIcon className={styles.project_icon} />,
      label: (
        <Link
          to={"projects"}
          className={styles.list_link}
          spy={true}
          smooth={true}
          activeClass="active_menu_link"
          hashSpy={true}
        >
          Projects
        </Link>
      ),
    },
    {
      key: 4,
      icon: <BarChartIcon className={styles.skill_icon} />,
      label: (
        <Link
          to={"skills"}
          className={styles.list_link}
          spy={true}
          smooth={true}
          activeClass="active_menu_link"
          hashSpy={true}
        >
          Skills
        </Link>
      ),
    },
    {
      key: 5,
      icon: <SchoolIcon className={styles.education_icon} />,
      label: (
        <Link
          to={"education"}
          className={styles.list_link}
          spy={true}
          smooth={true}
          activeClass="active_menu_link"
          hashSpy={true}
        >
          Education
        </Link>
      ),
    },
    {
      key: 6,
      icon: <InterestsIcon className={styles.interest_icon} />,
      label: (
        <Link
          to={"interest"}
          className={styles.list_link}
          spy={true}
          smooth={true}
          activeClass="active_menu_link"
          hashSpy={true}
        >
          Interest
        </Link>
      ),
    },
    {
      key: 7,
      icon: <EmailIcon className={styles.contact_icon} />,
      label: (
        <Link
          to={"contacts"}
          className={styles.list_link}
          spy={true}
          smooth={true}
          activeClass="active_menu_link"
          hashSpy={true}
        >
          Contacts
        </Link>
      ),
    },
    {
      key: 8,
      icon: <FileCopyIcon className={styles.resume_icon} />,
      label: (
        <a
          href="https://www.canva.com/design/DAFtNLRdW8g/RUGm-vOvx6jdMIuaqbmjNw/edit?utm_content=DAFtNLRdW8g&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
          target="_blank"
          className={styles.list_link}
        >
          Resume
        </a>
      ),
    },
  ];

  useEffect(() => {
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <Sider className={styles.sider_parent}>
      {/* <div className="demo-logo-vertical" /> */}
      <Link
        to="home"
        className={styles.title}
        spy={true}
        smooth={true}
        activeClass="active_menu_link"
        hashSpy={true}
      >
        <h2>
          Ugochi <br></br>Iwuchukwu <br></br>
          <span id={styles.profession}>Frontend Engineer</span>
        </h2>
      </Link>
      <Menu
        theme="dark"
        mode="inline"
        // defaultSelectedKeys={["1"]}
        // selectedKeys={[activeLink]}
        items={items}
        className={styles.menu}
      />
    </Sider>
  );
};
