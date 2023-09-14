import React from "react";
import styles from "../styles/Footer.module.css";
import ContactForm from "./ContactForm";

type FooterProps = {
  id: string;
};

const Footer: React.FC<FooterProps> = ({ id }) => {
  return (
    <footer id={id} className={styles.footer}>
      <div className={styles.footerContactForm}>
        <h2 className={styles.connecteWithMe}>Connect with me</h2>
        <ContactForm />
      </div>
      <div className={styles.footerContent}>
        <p>&copy; {new Date().getFullYear()} Zouina</p>
        <div className={styles.footerLinks}>
          <a href="#section1">Home</a>

          <a href="#section2">About</a>

          <a href="#section3">Skills</a>

          <a href="#section4">Portfolio</a>

          <a href="#section5">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
