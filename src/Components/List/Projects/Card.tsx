import styles from "./styles.module.css";
import { Project } from "./Projects";
import { useNavigate } from "react-router-dom";

export type ProjectProps = {
  data: Project;
};
export const Card = (props: ProjectProps) => {
  const { data } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    if (!data.isReady) {
      navigate("/not-found");
    } else {
      window.location.href = data.link;
    }
  };
  return (
    <div className={styles.card}>
      <div className={styles.img_container}>
        <img src={data.imageUrl} alt={data.title} />
      </div>

      {data.isReady && (
        <a href={data.link} target="_blank" rel="noopener noreferrer">
          <div className={styles.overlay}>
            <span className={styles.view_text}>View Project</span>
          </div>
        </a>
      )}

      {!data.isReady && (
        <div onClick={handleClick}>
          <div className={styles.overlay}>
            <span className={styles.view_text}>View Project</span>
          </div>
        </div>
      )}
    </div>
  );
};
