"use client";

import React from "react";
import Boxe from "@/Components/BoxSocialNetwork";
import DownloadButton from "@/Components/DownloadButton";
import Layout from "@/Components/Layout";
import Navbar from "@/Components/Navbar";
import Background from "../Components/ImageBackground";
import "../styles/globals.css";
import PieChart from "../Components/PieChart";
import { FaFaceSmileBeam, FaFaceGrinHearts } from "react-icons/fa6";
import { PiSmileyXEyesFill } from "react-icons/pi";
import { motion } from "framer-motion";
import ImageSlider from "@/Components/ImageSlider";
import Footer from "@/Components/Footer";

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
      <section id="section3" style={{ padding: "100px", display: "flex", paddingTop: "0px", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: "50px" }}>
          <h1 className="TtilebottomPage">My Skills</h1>
          <FaFaceGrinHearts size={23} />
        </div>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", width: "100%" }}>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <motion.div animate={{ rotate: 360 }} transition={{ type: "spring", duration: 5, bounce: 0.6, repeat: Infinity }}>
              <PieChart tech="JS" />
            </motion.div>
            <span className="textAboutMe">JavaScprit</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <motion.div animate={{ rotate: 360 }} transition={{ type: "spring", duration: 5, bounce: 0.6, repeat: Infinity }}>
              <PieChart tech="TS" />
            </motion.div>
            <span className="textAboutMe">TypeScript</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <motion.div animate={{ rotate: 360 }} transition={{ type: "spring", duration: 5, bounce: 0.6, repeat: Infinity }}>
              <PieChart tech="React" />
            </motion.div>
            <span className="textAboutMe">React JS</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <motion.div animate={{ rotate: 360 }} transition={{ type: "spring", duration: 5, bounce: 0.6, repeat: Infinity }}>
              <PieChart tech="Redux" />
            </motion.div>

            <span className="textAboutMe">Redux</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <motion.div animate={{ rotate: 360 }} transition={{ type: "spring", duration: 5, bounce: 0.6, repeat: Infinity }}>
              <PieChart tech="Next" />
            </motion.div>

            <span className="textAboutMe">Next JS</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <motion.div animate={{ rotate: 360 }} transition={{ type: "spring", duration: 5, bounce: 0.6, repeat: Infinity }}>
              <PieChart tech="Node" />
            </motion.div>
            <span className="textAboutMe">Node JS</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <motion.div animate={{ rotate: 360 }} transition={{ type: "spring", duration: 5, bounce: 0.6, repeat: Infinity }}>
              <PieChart tech="Tailwind" />
            </motion.div>
            <span className="textAboutMe">Tailwind CSS</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <motion.div animate={{ rotate: 360 }} transition={{ type: "spring", duration: 5, bounce: 0.6, repeat: Infinity }}>
              <PieChart tech="MUI" />
            </motion.div>
            <span className="textAboutMe">Material UI</span>
          </div>
        </div>
      </section>
      <section id="section4" style={{ padding: "100px", paddingTop: "0px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <h1 className="TtilebottomPage">My Portfolio</h1>
          <PiSmileyXEyesFill size={30} />
        </div>
        <ImageSlider />
      </section>
      <Footer id="section5" />
    </Layout>
  );
}
