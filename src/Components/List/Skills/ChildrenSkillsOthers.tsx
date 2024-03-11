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
    imageUrl: "https://andrewborstein.com/assets/img/github.png",
    subtitle: "Github",
  },
  {
    imageUrl: "https://andrewborstein.com/assets/img/heroku.png",
    subtitle: "Heroko",
  },
  {
    imageUrl:
      "https://cdn.sanity.io/images/ti7si9cx/production/656e951d31f3dc0f061a57466d01def70a81a6af-1500x1000.gif?w=1382",
    subtitle: "Netlify",
  },
];

export const ChildrenSkillsOthers = (props: SkillsProps) => {
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
