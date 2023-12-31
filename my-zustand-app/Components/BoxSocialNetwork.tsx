import { LiaFacebook } from "react-icons/lia";
import { TiSocialTwitterCircular, TiSocialLinkedinCircular, TiSocialInstagramCircular, TiSocialGithubCircular } from "react-icons/ti";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import styles from "../styles/background.module.css";
import RoundedImage from "./RoundedImage";

export default function Boxe() {
  return (
    <div className={styles.box}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <RoundedImage src="/images/nouna.jpeg" alt="Image description" />
        <div className={styles.grpTitle}>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            <h1 className={styles.TitlePersn} style={{ marginRight: "20px" }}>
              <span>Z</span>ouina
            </h1>
            <h1 className={styles.TitlePersn}>
              <span>A</span>it <span>S</span>adoune
            </h1>
          </div>
          <h3 className={styles.frontendEngineer}>Front end Engineer Developer</h3>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>
            <MdEmail style={{ marginRight: "7px" }} size={23} color="white" />
            <h3 className={styles.frontendEngineer}>E-mail : zaitsadoune@gmail.com</h3>
          </div>

          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>
            <MdLocalPhone style={{ marginRight: "7px" }} size={23} color="white" />
            <h3 className={styles.frontendEngineer}>Phone: +213698434961</h3>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "60px", display: "flex", flexDirection: "row" }}>
        <LiaFacebook className={styles.socialIcons} />
        <TiSocialTwitterCircular className={styles.socialIcons} />
        <TiSocialLinkedinCircular className={styles.socialIcons} />
        <TiSocialGithubCircular className={styles.socialIcons} />
        <TiSocialInstagramCircular className={styles.socialIcons} />
      </div>
    </div>
  );
}
