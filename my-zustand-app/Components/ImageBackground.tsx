import React from "react";
import styles from "../styles/background.module.css";
type BackgroundProps = {
  children: any;
  id: string;
};

const Background: React.FC<BackgroundProps> = ({ children, id }) => {
  return (
    <div id={id} className={styles["background-container"]}>
      {children}
    </div>
  );
};

export default Background;
