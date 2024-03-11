import React from "react";
import styles from "./styles.module.css";

export interface SkillsProps {
  title?: String;
  // image: React.ReactNode;
  subtitle: string;
}
export const data = [
  {
    title: "HTML",
    imageUrl: "https://andrewborstein.com/assets/img/html5.png",
    subtitle: "HTML5",
  },
  {
    imageUrl: "https://andrewborstein.com/assets/img/react.png",
    subtitle: "JSX",
  },
  {
    imageUrl: "https://andrewborstein.com/assets/img/haml.png",
    subtitle: "Haml",
  },

  {
    imageUrl: "https://andrewborstein.com/assets/img/jade.png",
    subtitle: "Jade",
  },
  {
    imageUrl: "https://andrewborstein.com/assets/img/jekyll.png",
    subtitle: "Jekyll",
  },
];

export const ChildrenSkillsHTML = (props: SkillsProps) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_header}>{props.title}</div>
        <div className={styles.contents}>
          {data.map((item) => (
            <div className={styles.image_and_subtitle_container}>
              <img src={item.imageUrl} alt={item.subtitle} />
              <span className={styles.subtitle}>{item.subtitle}</span>
            </div>
          ))}
        </div>
        <span className={styles.card_subtitle}>{props.subtitle}</span>
      </div>
    </>
  );
};
