import React from "react";
import styles from "../styles/background.module.css";
type BackgroundProps = {
  children: any;
};

const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <div className={styles["background-container"]} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      {children}
    </div>
  );
};

export default Background;
