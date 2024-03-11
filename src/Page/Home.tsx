import React, { ReactNode } from "react";
import { Element } from "react-scroll";
import styles from "./styles.module.css";
import { SiderMenu } from "../Components/Sider";
import { AboutMe } from "../Components/List/About";
import { Header } from "../Components/List/Header/Header";
import { Experience } from "../Components/List/Experience/Experience";
import { Projects } from "../Components/List/Projects";
import { Skills } from "../Components/List/Skills";
import { Education } from "../Components/List/Education";
import { Contacts } from "../Components/List/Contacts";
import { ResponsiveHeader } from "../Components/ResponsiveHeader";

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

export const Home = () => {
  return (
    <>
      <div className={styles.home_page}>
        <SiderMenu />
        <div id="home">
          <ResponsiveHeader />
        </div>
        <div className={styles.main_wrapper}>
          <Header />
          <div id="about">
            <AboutMe />
          </div>
          <div id="experience">
            <Experience />
          </div>
          <div id="projects">
            <Projects />
          </div>

          <div id="skills">
            <Skills />
          </div>
          <div id="education">
            <Education />
          </div>

          <div id="contacts">
            <Contacts />
          </div>
        </div>
      </div>
    </>
  );
};
