import React, { useState } from "react";
import { Link } from "react-scroll";
import styles from "./styles.module.css";
import FadeInText from "../../FadeInText";

export const About = () => {
  const [showSkills, setShowSkills] = useState(false);

  const handleShowSkills = () => {
    setShowSkills(!showSkills);
  };

  return (
    <>
      <div className={styles.container} id={"about"}>
        <div className={styles.img_content}>
          <FadeInText delay={600}>
            <img
              src="IMG_2509.jpg"
              alt="Ugochi profile"
              className={styles.passport_profile_img}
            />
          </FadeInText>
        </div>

        <div className={styles.about_text_content}>
          <div className={styles.texts}>
            <FadeInText delay={400}>
              <h1>
                About <span style={{ color: "purple" }}>Me</span>
              </h1>
            </FadeInText>

            <FadeInText delay={600}>
              <p>
                Hey, I’m Ugochi! My coding journey began in 2021, and I’ve been
                hooked ever since.
                <br></br>
                <br></br>
                I’ve had the exciting opportunity to build an entire e-commerce
                platform from the ground up, making sure it's not only
                functional but also easy and fun to use. Whether I'm designing
                in React or connecting the frontend to backend services, I love
                creating experiences that users enjoy.
                <br></br>
                <br></br>
                Learning new tech is part of the thrill, and I'm always looking
                for new challenges. I pride myself on working well with teams,
                ensuring seamless integration and optimal performance across all
                my projects. When I’m not knee-deep in code, you’ll catch me
                watching movies with my husband—snuggled up and loving every
                minute!
              </p>
            </FadeInText>

            <FadeInText delay={800}>
              <button onClick={handleShowSkills}>
                {showSkills ? "Close" : "Show My Skills"}
              </button>
              <a href="/Ugochi.pdf" download="Ugochi Iwuchukwu Resume.pdf">
                <button style={{ marginLeft: "30px" }}>Download Resume</button>
              </a>
            </FadeInText>
          </div>
        </div>
      </div>

      <div
        style={{ height: showSkills ? 300 : 0 }}
        className={styles.skills_section_container}
      >
        {showSkills && (
          <FadeInText>
            <div className={styles.skills_section}>
              <div className={styles.skills}>
                <div>
                  <img src="react.png" alt="reactjs" />
                  <label>React</label>
                </div>

                <div>
                  <img src="ts_image.png" alt="typecript" />
                  <label>Typescript</label>
                </div>

                <div>
                  <img src="javascript.png" alt="javascript" />
                  <label>Javascript</label>
                </div>

                <div>
                  <img src="nextjs.jpg" alt="nextjs" />
                  <label>Nextjs</label>
                </div>

                <div>
                  <img src="html5.png" alt="html" />
                  <label>HTML5</label>
                </div>

                <div>
                  <img src="css3.png" alt="css" />
                  <label>CSS3</label>
                </div>

                <div>
                  <img src="tailwind_css.png" alt="Tailwind CSS" />
                  <label>Tailwind CSS</label>
                </div>

                <div>
                  <img src="styled-com_image.jpeg" alt="Styled component" />
                  <label>Styled Component</label>
                </div>

                <div>
                  <img src="nodejs.png" alt="nodejs" />
                  <label>Nodejs</label>
                </div>

                <div>
                  <img src="docker.webp" alt="docker" />
                  <label>Docker</label>
                </div>

                <div>
                  <img src="cloud.webp" alt="AWS" />
                  <label>AWS</label>
                </div>

                <div>
                  <img src="github.png" alt="Github" />
                  <label>Git</label>
                </div>
              </div>
            </div>
          </FadeInText>
        )}
      </div>

      <FadeInText>
        <div className={styles.hire_me_con}>
          <h1>I Am Available For Freelance</h1>
          <FadeInText delay={1000}>
            <Link to={"contacts"} spy={true} smooth={true}>
              <button className={styles.hire_me_btn}>Hire Me</button>
            </Link>
          </FadeInText>
        </div>
      </FadeInText>
    </>
  );
};
