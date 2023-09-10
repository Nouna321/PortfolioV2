import { LiaFacebook } from "react-icons/lia";
import { TiSocialTwitterCircular, TiSocialLinkedinCircular, TiSocialInstagramCircular, TiSocialGithubCircular } from "react-icons/ti";
import styles from "../styles/background.module.css";
import RoundedImage from "./RoundedImage";

export default function Boxe() {
  return (
    <div className={styles.box}>
      <RoundedImage src="/images/nouna.jpeg" alt="Image description" />
      <h1 className={styles.TitlePersn}>Zouina AIT SADOUNE</h1>
      <h3 className={styles.frontendEngineer}>Front end Engineer Developer</h3>
      <div style={{ marginTop: "60px" }}>
        <LiaFacebook className={styles.socialIcons} />
        <TiSocialTwitterCircular className={styles.socialIcons} />
        <TiSocialLinkedinCircular className={styles.socialIcons} />
        <TiSocialGithubCircular className={styles.socialIcons} />
        <TiSocialInstagramCircular className={styles.socialIcons} />
      </div>
    </div>
  );
}
