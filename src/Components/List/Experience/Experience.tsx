import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const Experience = () => {
  return (
    <>
      <div className={styles.experience_parent} id="experience">
        <div className={styles.title_experience}>EXPERIENCE</div>
        <div className={styles.cards}>
          <div className={styles.cards_header}>
            <img src="https://media.licdn.com/dms/image/C4D0BAQG4GmePqcnGGQ/company-logo_100_100/0/1657375523893?e=1716422400&v=beta&t=yD0SSSOe-TQOjzjxbronvMFIPUFQYGVcbqWck2LIfRY" />
            <Link
              to="https://isidoreagric.co/"
              target="_blank"
              className={styles.company_of_experience_link}
            >
              ISIDORE AGRICTECH LIMITED
            </Link>

            <span className={styles.job_title}>
              Principle Frontend Developer
            </span>
          </div>

          <div className={styles.cards_contents}>
            <p>
              The one stop platform for providing finance, technology and
              extension services to allow agro-businesses achieve exponential
              growth.
            </p>
            <ul>
              <li>
                Focused on front-end development and integrating Upserve's
                best-in-class insights product into Isidore's flagship
                all-in-one cloud-based POS system.
              </li>
              <li>
                Provided valuable inputs and feedback to create intuitive and
                visually appealing user interfaces.
              </li>
              <li>
                Responsible for building admin application features with backend
                services
              </li>
              <li>
                Collaborated effectively with a UI/UX designer to implement new
                features
              </li>
            </ul>
          </div>
          <div className={styles.cards_footer}>
            <span>Dec. 2022 - August 2023</span>
          </div>
        </div>

        <div className={styles.cards}>
          <div className={styles.cards_header}>
            <img src="https://media.licdn.com/dms/image/C4D0BAQFchp0dotqSmA/company-logo_200_200/0/1630556643863/kadick_integrated_limited_logo?e=1716422400&v=beta&t=juO-2sdgkJPqm7U3sCyojz-5XAUZKLS0cxUDENHSmG0" />
            <Link
              to="https://kadickintegrated.com/"
              target="_blank"
              className={styles.company_of_experience_link}
            >
              KADICK INTERGRATED LIMITED
            </Link>
            <span className={styles.job_title}>
              Fullstack Software Developer
            </span>
          </div>

          <div className={styles.cards_contents}>
            <p>
              Fast-track relevance in the airtime distribution space. Over 20
              Years Of Experience In Airtime Services.
            </p>
            <ul>
              <li>
                Managed testing of enterprise applications on the local server
                for quality assurance
              </li>
              <li>
                Provided APIs to the frontend teams for new feature integration
                and implementation
              </li>
              <li>
                Collaborated with the backend team on API design and
                documentation.
              </li>
              <li>
                Engaged actively with product managers for project planning and
                innovation.
              </li>
            </ul>
          </div>
          <div className={styles.cards_footer}>
            <span>Sep. 2022 - Dec 2023</span>
          </div>
        </div>

        <div className={styles.last_card}>
          <div className={styles.cards_header}>
            <img src="https://media.licdn.com/dms/image/C4D0BAQF_9_QNa8xobQ/company-logo_200_200/0/1630470807476/decagon_logo?e=1716422400&v=beta&t=a-jsUi7SGYkrhUYnLj6PA_u1cEBVjOa1D6ZAGBJhfmA" />
            <Link
              to="https://decagonhq.com/"
              target="_blank"
              className={styles.company_of_experience_link}
            >
              DECAGON INSTITUTION
            </Link>
            <span className={styles.job_title}>
              Fullstack Software Developer
            </span>
          </div>

          <div className={styles.cards_contents}>
            <p>
              Topnotch Software Engineering training institute for IT Services
              and IT Consultation.
            </p>
            <ul>
              <li>
                Responsible for designing and implementing frontend components
                which interacted with RESTful APIs.
              </li>
              <li>
                Joined a team of developers to build web applications according
                to set-out requirements, including the design of database
                schema, integration of front-end and back-end parts of the
                application as well as deployment and hosting.
              </li>
              <li>
                Completed weekly challenges on algorithms and data structures.
              </li>
              <li>
                Participated in team-building activities and scrum ceremonies.
              </li>
              <li>
                Implemented and updated application modules under the direction
                of a tech lead
              </li>
              <li>Familiarity with GitHub workflows.</li>
            </ul>
          </div>
          <div className={styles.cards_footer}>
            <span>Oct. 2021 - June 2022</span>
          </div>
        </div>
      </div>
    </>
  );
};
