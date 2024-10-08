import React, { ReactNode, useState, useEffect } from "react";
import { Element } from "react-scroll";
import styles from "./styles.module.css";
import { SiderMenu } from "../Components/Sider";
import { About } from "../Components/List/About";
import { Home } from "../Components/List/Home/Home";
import { Projects } from "../Components/List/Projects";
import { Contacts } from "../Components/List/Contacts";
import { ResponsiveHeader } from "../Components/ResponsiveHeader";
import StraightIcon from "@mui/icons-material/Straight";
import { Recommendations } from "../Components/recommendations/Recommendations";

export const Wrapper = ({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) => {
  return (
    <Element style={{ display: "contents" }} id={id} name={id}>
      {children}
    </Element>
  );
};

export const Profile = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  const scrollToTop = () => {
    const element = document.getElementById("home");
    if (element) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const homeElement = document.getElementById("home");
      if (homeElement) {
        const topPosition = homeElement.getBoundingClientRect().top;
        if (topPosition < -200) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={styles.home_page}>
        <SiderMenu />
        <div id="res">
          <ResponsiveHeader />
        </div>
        <div className={styles.main_wrapper}>
          <div id="home">
            <Home />
          </div>

          <div id="about">
            <About />
          </div>
          <div id="projects">
            <Projects />
          </div>

          <div>
            <Recommendations />
          </div>

          <div id="contacts">
            <Contacts />
          </div>
        </div>
      </div>

      {showButton && (
        <a href="" onClick={scrollToTop} className={styles.scroll_to_top}>
          <StraightIcon />
        </a>
      )}
    </>
  );
};
