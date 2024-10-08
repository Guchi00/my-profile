import styles from "./styles.module.css";
import { ResponsiveDrawer } from "./ResponsiveDrawer";

export const ResponsiveHeader = () => {
  return (
    <>
      <div className={styles.responsive_nav_parent}>
        <ResponsiveDrawer />

        <span className={styles.title}>Ugochi.</span>
      </div>
    </>
  );
};
