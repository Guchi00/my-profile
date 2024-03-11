import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const Education = () => {
  return (
    <>
      <div className={styles.container} id={"education"}>
        <div className={styles.title_education}>EDUCATION</div>
        <div className={styles.cards_parent}>
          <div className={styles.card}>
            <Link
              to="https://unizik.edu.ng/"
              target="_blank"
              className={styles.card_title}
            >
              NNAMDI AZIKIWE UNIVERSITY
            </Link>
            <span>Nnambra, Nigeria.</span>
            <ul>
              <li>BSC. in Masscommunication</li>
            </ul>
          </div>

          <div className={styles.card}>
            <Link
              to="https://unizik.edu.ng/"
              target="_blank"
              className={styles.card_title}
            >
              NNAMDI AZIKIWE UNIVERSITY
            </Link>
            <span>Nnambra, Nigeria.</span>
            <ul>
              <li>DIPLOMA in Masscommunication</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
