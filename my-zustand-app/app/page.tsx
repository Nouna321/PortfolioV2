import Boxe from "@/Components/BoxSocialNetwork";
import DownloadButton from "@/Components/DownloadButton";
import Layout from "@/Components/Layout";
import Navbar from "@/Components/Navbar";
import Background from "../Components/ImageBackground";
import "../styles/globals.css";
import PieChart from "../Components/PieChart";
import { FaFaceSmileBeam, FaFaceGrinHearts } from "react-icons/fa6";
export default function Home() {
  return (
    <Layout>
      <Background id="section1">
        <div style={{ display: "flex", width: "100%" }}>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <h1 className="prenomLogo">Zouina</h1>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
            <Navbar />
          </div>
        </div>
        <div style={{ display: "flex", width: "100%", height: "90%" }}>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%", width: "100%" }}>
            <Boxe />
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "end", padding: "20px" }}>
            <DownloadButton fileName="CV_english_Zouina_Ait Sadoune.pdf" />
          </div>
        </div>
      </Background>
      <section id="section2" style={{ padding: "100px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <h1 className="TtilebottomPage">About me</h1>
          <FaFaceSmileBeam size={23} />
        </div>
        <div className="textAboutMe">Hey there! 👋. I'm Zouina, a Front End Engineer based in Algeria, who loves to code and build products with a delightful user experience. Currently working at Maystro Delivery as a Front End Web Developer Engineer, building beautiful websites and applications that customers use. I love working in between product, engineering, and developer experience. Some things that make me excited are JavaScript, frameworks such as React, Next, Jest..., CI & CD systems, simplicity, automating things, and building meaningful products. I was born and raised in Tizi Ouzou (Algeria) and come from a background of studying Computer Science. Outside of work, I'm obsessed with sports, doing and traveling with my family.</div>
      </section>
      <section id="section3" style={{ padding: "100px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: "50px" }}>
          <h1 className="TtilebottomPage">My Skills</h1>
          <FaFaceGrinHearts size={23} />
        </div>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", width: "100%" }}>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <PieChart tech="JS" />
            <span className="textAboutMe">JavaScprit</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <PieChart tech="TS" />
            <span className="textAboutMe">TypeScript</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <PieChart tech="React" />
            <span className="textAboutMe">React JS</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <PieChart tech="Redux" />
            <span className="textAboutMe">Redux</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <PieChart tech="Next" />
            <span className="textAboutMe">Next JS</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <PieChart tech="Node" />
            <span className="textAboutMe">Node JS</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <PieChart tech="Tailwind" />
            <span className="textAboutMe">Tailwind CSS</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <PieChart tech="MUI" />
            <span className="textAboutMe">Material UI</span>
          </div>
        </div>
      </section>
      <section id="section4">
        <h1>Section 3</h1>
        {/* Add your content for Section 3 here */}
      </section>
    </Layout>
  );
}
