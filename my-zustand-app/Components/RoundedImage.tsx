import React from "react";
import Image from "next/image";
import styles from "../styles/RoundedImage.module.css";

interface RoundedImageProps {
  src: string;
  alt: string;
}

const RoundedImage: React.FC<RoundedImageProps> = ({ src, alt }) => {
  return <Image className={styles.roundedImage} src={src} alt={alt} width={400} height={200} />;
};

export default RoundedImage;
