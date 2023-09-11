import React from "react";
import styles from "../styles/PieChart.module.css";

interface PieChartProps {
  tech: string;
}

const PieChart: React.FC<PieChartProps> = ({ tech }) => {
  return <div className={styles.pieChartCercle}>{tech}</div>;
};

export default PieChart;
