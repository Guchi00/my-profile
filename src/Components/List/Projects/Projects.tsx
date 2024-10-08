import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { Card } from "./Card";
import FadeInText from "../../FadeInText";

export type Project = {
  title: string;
  imageUrl: string;
  link: string;
  category: string;
  isReady: boolean;
};

const data: Project[] = [
  {
    imageUrl:
      "https://unblast.com/wp-content/uploads/2019/12/eCommerce-Mobile-App-Template-1.jpg",
    title: "Amazon-Clone",
    link: "https://e-commercesiteamazoneclone.netlify.app/",
    category: "E-commerce",
    isReady: true,
  },
  {
    imageUrl:
      "https://media.istockphoto.com/id/1272981812/photo/excited-young-asian-woman-lying-on-the-bed-in-the-bedroom-playing-mobile-game-on-smartphone.jpg?s=170667a&w=0&k=20&c=dK39BD_W6aqKp0SfWBNm7q3yb7XJur_pPOC-_jAbdoU=",
    title: "Tic-Tac-Toe",
    link: "https://game-app-tictactoe.netlify.app/",
    category: "Game",
    isReady: true,
  },
  {
    imageUrl:
      "https://play-lh.googleusercontent.com/mGZWYVjeRCqmoIIYerstJOWjE1JgcZ7ngDJ4sLvAuD32BvOd4b8cfn2EavL9Jia5H1I",
    title: "Daily Order",
    link: "https://dailyorder.netlify.app/",
    category: "Management",
    isReady: true,
  },
  {
    imageUrl:
      "https://assets.isu.pub/document-structure/230111204101-6aebb8bebfa4befa4a1665901a8c500d/v1/574b1cda9f152ea6756be6b12eb0e3a3.jpeg",
    title: "Movie",
    link: "/",
    category: "Entertainment",
    isReady: false,
  },
  {
    imageUrl:
      "https://freerangestock.com/sample/118474/game-pad-vector-icon.jpg",
    title: "country-match",
    link: "https://capital-match.netlify.app/",
    category: "Game",
    isReady: true,
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/5868241/pexels-photo-5868241.jpeg",
    title:
      "This is a QRCode reusme generator app, I just put it under e-commerce category",
    link: "/",
    category: "E-commerce",
    isReady: false,
  },
];

export const Projects = () => {
  const [selectedCategory, setSeletedCategory] = useState<string>("All");
  const [projectsData, setProjectsData] = useState<Project[]>(data);

  const handleCategoryChange = (category: string) => {
    setSeletedCategory(category);
  };

  useEffect(() => {
    setProjectsData([]);
    const id = setTimeout(() => {
      const filteredProjects =
        selectedCategory === "All"
          ? data
          : data.filter((project) => project.category === selectedCategory);
      setProjectsData(filteredProjects);
    }, 10);

    return () => {
      clearTimeout(id);
    };
  }, [selectedCategory]);

  const selected = (tag: string): React.CSSProperties => {
    return {
      backgroundColor: tag === selectedCategory ? "purple" : "",
      color: tag === selectedCategory ? "#fff" : "",
    };
  };

  return (
    <>
      <div className={styles.projects_container} id={"projects"}>
        <p>Portfolio</p>
        <h1>I Love What I Do</h1>
        <ul className={styles.navbar}>
          <li>
            <button
              onClick={() => handleCategoryChange("All")}
              style={selected("All")}
            >
              All PROJECTS
            </button>
          </li>

          <li>
            <button
              onClick={() => handleCategoryChange("E-commerce")}
              style={selected("E-commerce")}
            >
              E-COMMERCE
            </button>
          </li>

          <li>
            <button
              onClick={() => handleCategoryChange("Game")}
              style={selected("Game")}
            >
              GAME
            </button>
          </li>
          <li>
            <button
              onClick={() => handleCategoryChange("Management")}
              style={selected("Management")}
            >
              TASK MANAGEMENT
            </button>
          </li>

          <li>
            <button
              onClick={() => handleCategoryChange("Entertainment")}
              style={selected("Entertainment")}
            >
              ENTERTAINMENT
            </button>
          </li>
        </ul>

        <div className={styles.wrapper}>
          {projectsData.map((project) => (
            <FadeInText delay={500}>
              <Card data={project} />
            </FadeInText>
          ))}
        </div>
      </div>
    </>
  );
};
