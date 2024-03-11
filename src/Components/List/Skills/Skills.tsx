import React from "react";
import styles from "./styles.module.css";
import { ChildrenSkillsHTML } from "./ChildrenSkillsHTML";
import { ChildrenSkillsCSS } from "./ChildrenSkillsCSS";
import { ChildrenSkillsJavascript } from "./ChildrenSkillsJavascript";
import { ChildrenSkillsOthers } from "./ChildrenSkillsOthers";
import { data } from "./ChildrenSkillsHTML";

export const Skills = () => {
  return (
    <>
      <div className={styles.parent} id={"skills"}>
        <div className={styles.title}>SKILLS</div>

        <ChildrenSkillsHTML title="HTML" subtitle="" />
        <ChildrenSkillsCSS title="CSS" subtitle="" />
        <ChildrenSkillsJavascript title="Javascript" subtitle="" />
        <ChildrenSkillsOthers title="Devops" subtitle="" />
      </div>
    </>
  );
};
