import React from "react";
import styles from "../styles/RoundedImage.module.css";

interface RoundedImageProps {
  src: string;
  alt: string;
}

const RoundedImage: React.FC<RoundedImageProps> = ({ src, alt }) => {
  return <img className={styles.roundedImage} src={src} alt={alt} />;
};

export default RoundedImage;
