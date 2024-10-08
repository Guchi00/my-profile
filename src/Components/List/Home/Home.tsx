import React from "react";
import { Link } from "react-scroll";
import styles from "./styles.module.css";
import FadeInText from "../../FadeInText";

export const Home = () => {
  return (
    <>
      <div className={styles.home} id={"home"}>
        <div className={styles.container}>
          <div className={styles.text_contents}>
            <FadeInText delay={300}>
              <div className={styles.target_hi}>
                <span>Hi, my </span>
                name is
              </div>

              <h1>
                Ugochi Iwuchukwu
                <span style={{ color: "purple" }}>.</span>
              </h1>
            </FadeInText>

            <FadeInText delay={400}>
              <p>
                (fondly called Guchi) <br></br> I am a frontend focused Software
                Engineer <br></br> based in Prague, Czech Republic.
              </p>
            </FadeInText>

            <FadeInText delay={600}>
              <Link to={"about"} spy={true} smooth={true}>
                <button>About Me</button>
              </Link>
            </FadeInText>
          </div>
        </div>
      </div>
    </>
  );
};
