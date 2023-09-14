import React from "react";
import styles from "../styles/CustomButton.module.css";

interface CustomButtonProps {
  label: string;
  icon: JSX.Element;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ label, icon, onClick }) => {
  return (
    <button className={styles.customButton} onClick={onClick}>
      {label}
      {icon}
    </button>
  );
};

export default CustomButton;
