import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const Resume = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title_education}>EDUCATION</div>
        <div className={styles.cards}>
          <div className={styles.card_title}></div>
        </div>
      </div>
    </>
  );
};
