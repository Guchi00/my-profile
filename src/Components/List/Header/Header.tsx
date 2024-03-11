import React from "react";
import styles from "./styles.module.css";

export const Header = () => {
  return (
    <>
      <div className={styles.header_parent}>
        <img src="self2.jpg" className={styles.img} alt="my_profile_image" />
        <h1 className={styles.text}>
          Hey<br></br>
          <span className={styles.text_you_found_me}>you found me. </span>
          <br></br>
          <span className={styles.text_you_found_me}>
            Let's{" "}
            <span className={styles.text_work_together}>work together.</span>
          </span>
        </h1>
      </div>
    </>
  );
};
