import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export interface ProjectsProps {
  image: React.ReactNode;
  title: String;
  description: string;
  link: string;
}
export const ChildrenProjects = (props: ProjectsProps) => {
  const { link } = props;
  return (
    <>
      <div className={styles.card}>
        <a href={link} target="_blank" className={styles.img_container}>
          {props.image}
        </a>
        <div className={styles.cards_texts}>
          <span className={styles.card_title}>{props.title}</span>
          <span className={styles.card_description}>{props.description}</span>
        </div>
      </div>
    </>
  );
};
