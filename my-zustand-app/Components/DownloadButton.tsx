"use client";

import React from "react";
import styles from "../styles/downloadButton.module.css";
import { IoCloudDownload } from "react-icons/io5";

interface DownloadButtonProps {
  fileName: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ fileName }) => {
  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = `/${fileName}`;
    downloadLink.download = fileName;
    downloadLink.click();
  };
  return (
    <button className={styles.downloadButton} onClick={handleDownload} title="Download CV">
      <IoCloudDownload className={styles.styleIcons} />
    </button>
  );
};

export default DownloadButton;
