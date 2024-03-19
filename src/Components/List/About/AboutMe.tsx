import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const AboutMe = () => {
  return (
    <>
      <div className={styles.container} id={"about"}>
        <div className={styles.title_about}>ABOUT</div>
        <div className={styles.about_description}>
          <p>
            Mission-driven frontend developer with a passion for thoughtful UI
            design, collaboration, and team work.
          </p>
        </div>
        <div className={styles.all_about_me}>
          <p>
            I’ve always sought out opportunities and challenges that are
            meaningful to me. Although my career path has taken many twists and
            turns — from studying mass communication to being a small business
            owner and entrepreneur, to a customer representative at a retail
            store — I've never stopped engaging my passion to help others and
            solve problems.
            <br></br>
            <br></br>
            As a web developer, I enjoy using my obsessive attention to detail,
            unequivocal love for making things, and mission-driven work ethic to
            change the world. That's why I’m excited to make a big impact at a
            high-growth company.
            <br></br>
            <br></br>
            In my professional journey, I had the privilege of contributing to
            the development of "Reward your Teacher," an impactful application
            that facilitates the expression of gratitude from former students to
            their influential teachers through monetary rewards. This project
            involved leveraging technologies such as Typescript, React.js,
            Node.js, Express, Tailwind CSS, and MongoDB.
            <br></br>
            <br></br>I was also part of the team that built "Appoga.com". A web
            enterprise application solution for providing top-notch IT services
            to users. Technologies used are Typescript, Reactjs, Nodejs,
            Express, and MongoDB.
            <br></br>
            <br></br>I am seeking to utilize my skills to thrive as an
            entry-level software engineer while delivering value and
            contributing to business growth. In my immediate previous role, I
            serve as a junior frontend developer, actively developing the
            company's admin website and overseeing various web applications. My
            responsibilities include maintenance, feature adding, and ensuring
            optimal responsiveness across all screens. The technologies at the
            core of my work include React, Typescript, Next.ts, GraphQL/Urql,
            and CSS3.
            <br></br>
            <br></br>I am excited about the ever-evolving landscape of web
            development and look forward to contributing my skills and passion
            to future projects that drive innovation and make a positive impact.
          </p>
        </div>
        <div className={styles.current_focus}>
          <span className={styles.focus}>Current Focus:</span>
          <Link to="" className={styles.link_current_focus}>
            Design Principles //
          </Link>{" "}
          <Link to="" className={styles.link_current_focus}>
            React //
          </Link>
          <Link to="" className={styles.link_current_focus}>
            System Design
          </Link>
        </div>
      </div>
    </>
  );
};
