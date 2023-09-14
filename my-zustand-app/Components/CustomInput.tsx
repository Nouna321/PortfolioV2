import React from "react";
import styles from "../styles/CustomInput.module.css";

interface CustomInputProps {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({ label, name, type, value, onChange, required }) => {
  return (
    <div className={styles.customInput}>
      <input className={styles.customInputFiled} type={type} id={name} name={name} value={value} placeholder={label} onChange={onChange} required={required} />
    </div>
  );
};

export default CustomInput;
