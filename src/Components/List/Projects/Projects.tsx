import React from "react";
import styles from "./styles.module.css";
import { ChildrenProjects } from "./ChildrenProjects";
const data = [
  {
    imageUrl:
      "https://unblast.com/wp-content/uploads/2019/12/eCommerce-Mobile-App-Template-1.jpg",
    title: "Amazon-Clone",
    description:
      "Bring the familiar Amazon shopping experience to your fingertips with a wide range of products, an intuitive interface, and a seamless checkout process.",
    link: "https://e-commercesiteamazoneclone.netlify.app/",
  },
  {
    imageUrl:
      "https://img.poki.com/cdn-cgi/image/quality=78,width=314,height=314,fit=cover,f=auto/d07c1db617a36898b5e8c71013d228d11003eb36d7150b7abfe988fe097c7d66.png",
    title: "Tic-Tac-Toe",
    description:
      "A two-player game where the goal is to alternately mark spaces on a 3x3 grid, aiming to align three marks in a row, column, or diagonal.",
    link: "https://game-app-tictactoe.netlify.app/",
  },
  {
    imageUrl:
      "https://play-lh.googleusercontent.com/mGZWYVjeRCqmoIIYerstJOWjE1JgcZ7ngDJ4sLvAuD32BvOd4b8cfn2EavL9Jia5H1I",
    title: "Daily Order (Todos)",
    description:
      "Enhance your productivity by focusing on what truly matters. Simplify your shopping, task management, and note-taking with ease.",
    link: "https://dailyorder.netlify.app/",
  },
  {
    imageUrl:
      "https://st4.depositphotos.com/24409500/25635/i/450/depositphotos_256359544-stock-photo-saint-petersburg-russia-april-6.jpg",
    title: "Star Wars",
    description: "Movie characters and with their individual discription",
    link: "/",
  },
  {
    imageUrl:
      "https://embed-ssl.wistia.com/deliveries/892ad6326a677713f5242156d44a0c95489287f3.webp?image_crop_resized=960x780",
    title: "Reward your teachers app",
    description:
      "An impactful application that facilitates the expression of gratitude from former students to their influential teachers through monetary rewards. ",
    link: "/",
  },
  {
    imageUrl:
      "https://assets-global.website-files.com/5e38f1a8e654dab96f303972/624ef2cb8f89985d78076a56_Portada.png",
    title: "Chat box",
    description: "A chatting app",
    link: "/",
  },
];

export const Projects = () => {
  return (
    <>
      <div className={styles.parent} id={"projects"}>
        <div className={styles.title}>PROJECTS</div>
        <div className={styles.wrapper}>
          {data.map((item) => (
            <ChildrenProjects
              key={item.title}
              image={<img src={item.imageUrl} alt={"images"} />}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </>
  );
};
