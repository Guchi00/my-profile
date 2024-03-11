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
    imageUrl: "https://andrewborstein.com/assets/img/react.png",
    subtitle: "React",
  },
  {
    imageUrl:
      "https://images.ctfassets.net/9ynx8gh7pmzk/3zywxqIxpGCcsZl5QTUxA5/5d22d2fe2a393f46eb9d424a32749ddb/AdobeStock_485795755_Editorial_Use_Only_thumb_resized.jpg?w=800&h=536&fl=progressive&q=100&fm=jpg",
    subtitle: "Next",
  },
  {
    imageUrl: "https://andrewborstein.com/assets/img/javascript.png",
    subtitle: "Javascript",
  },
  {
    imageUrl:
      "https://www.freecodecamp.org/news/content/images/2023/11/thumbnail.001.jpeg",
    subtitle: "Typescript",
  },
  {
    imageUrl: "https://andrewborstein.com/assets/img/nodejs.png",
    subtitle: "Node",
  },
];

export const ChildrenSkillsJavascript = (props: SkillsProps) => {
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
