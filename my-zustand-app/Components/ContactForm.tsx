import React, { useState } from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import Icon from "../Components/Icon";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CustomInput label="Your Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
      <CustomInput label="Your Message" name="message" type="text" value={formData.message} onChange={handleChange} required />
      <div style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
        <CustomButton label="Stay connected" icon={<Icon />} onClick={handleSubmit} />
      </div>
    </form>
  );
};

export default ContactForm;
