import React from "react";
import styles from "./styles.module.css";
import { ResponsiveDrawer } from "./ResponsiveDrawer";

export const ResponsiveHeader = () => {
  return (
    <>
      <div className={styles.responsive_nav_parent}>
        <div>
          <ResponsiveDrawer />
        </div>
        <div className={styles.titles}>
          <span className={styles.title}>Ugochi Iwuchukwu</span>
          <span className={styles.title_occupation}>Frontend Engineer</span>
        </div>
      </div>
    </>
  );
};
