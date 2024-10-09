import React, { useEffect } from "react";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import { Link, Events, scrollSpy } from "react-scroll";
import styles from "./styles.module.css";
import { Socials } from "./Socials";

const { Sider } = Layout;

export const SiderMenu: React.FC = () => {
  const handleSetInactive = (key: number) => {
    console.log(key, "in active");
  };

  const items: MenuProps["items"] = [
    {
      key: 1,
      label: (
        <Link
          to={"home"}
          className={styles.list_link}
          spy={true}
          smooth={true}
          activeClass="active_menu_link"
          onSetInactive={() => handleSetInactive(1)}
        >
          Home
        </Link>
      ),
    },

    {
      key: 2,
      label: (
        <Link
          to={"about"}
          className={styles.list_link}
          spy={true}
          smooth={true}
          activeClass="active_menu_link"
          // onSetInactive={() => handleSetInactive(1)}
        >
          About
        </Link>
      ),
    },
    {
      key: 3,
      label: (
        <Link
          to={"projects"}
          className={styles.list_link}
          spy={true}
          smooth={true}
          activeClass="active_menu_link"
          hashSpy={true}
        >
          Portfolio
        </Link>
      ),
    },
    {
      key: 4,
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
      <div className={styles.sider_content}>
        <div>
          <Link
            to="home"
            className={styles.title}
            spy={true}
            smooth={true}
            activeClass="active_menu_link"
            hashSpy={true}
          >
            <h1>Ugochi.</h1>
          </Link>

          <Menu theme="light" mode="inline" items={items} />
        </div>

        <Socials />
      </div>
    </Sider>
  );
};
