import React, { useState } from "react";
import type { DrawerProps } from "antd";
import { Button, Drawer, Space, Grid } from "antd";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import styles from "./styles.module.css";
import { Socials } from "../Sider/Socials";

const { useBreakpoint } = Grid;

export const ResponsiveDrawer: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [placement] = useState<DrawerProps["placement"]>("left");
  const screens = useBreakpoint();

  console.log(screens, "screens");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Space>
        <Button
          type="primary"
          onClick={showDrawer}
          className={styles.drawer_btn}
        >
          Menu
          <DensityMediumIcon className={styles.drawer_icon} />
        </Button>
      </Space>
      <Drawer
        // title="Basic Drawer"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
        onClick={onClose}
        className={styles.drawer}
        width={screens.xs ? 200 : 378}
      >
        <div className={styles.drawer_content}>
          <div className={styles.drawer_items}>
            <div>
              <a href={"#home"} className={styles.drawer_text_link}>
                Home
              </a>
            </div>
            <div>
              <a href={"#about"} className={styles.drawer_text_link}>
                About
              </a>
            </div>
            <div>
              <a href={"#projects"} className={styles.drawer_text_link}>
                Portfolio
              </a>
            </div>

            <div>
              <a href={"#interest"} className={styles.drawer_text_link}>
                Interest
              </a>
            </div>

            <div>
              <a href={"#contacts"} className={styles.drawer_text_link}>
                Contact
              </a>
            </div>
          </div>

          <Socials />
        </div>
      </Drawer>
    </>
  );
};
