import React from "react";
import styles from "./styles.module.css";
import { ChildrenProjects } from "./ChildrenProjects";
const data = [
  {
    imageUrl:
      "https://unblast.com/wp-content/uploads/2019/12/eCommerce-Mobile-App-Template-1.jpg",
    title: "Amazon Clone",
    description: "An E-commerce App just like that of Amazon",
    link: "https://e-commercesiteamazoneclone.netlify.app/",
  },
  {
    imageUrl:
      "https://s3-alpha.figma.com/hub/file/5146522907/d4c107c7-e837-44e9-90b0-5b39c0746e43-cover.png",
    title: "Wallent Web UI",
    description: "A wallet web app",
    link: "/",
  },
  {
    imageUrl:
      "data:image/png;base64,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",
    title: "wori app",
    description: "An Static web app",
    link: "/",
  },
  {
    imageUrl:
      "https://st4.depositphotos.com/24409500/25635/i/450/depositphotos_256359544-stock-photo-saint-petersburg-russia-april-6.jpg",
    title: "Star Wars",
    description: "An movie character and their individual discriptions",
    link: "/",
  },
  {
    imageUrl:
      "https://embed-ssl.wistia.com/deliveries/892ad6326a677713f5242156d44a0c95489287f3.webp?image_crop_resized=960x780",
    title: "Reward your teachers app",
    description:
      "A student application for providing money rewards to their teachers",
    link: "/",
  },
  {
    imageUrl:
      "https://assets-global.website-files.com/5e38f1a8e654dab96f303972/624ef2cb8f89985d78076a56_Portada.png",
    title: "Chat box",
    description: "An interactive app",
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
