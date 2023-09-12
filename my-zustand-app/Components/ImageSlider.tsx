import React, { useState } from "react";
import styles from "../styles/ImageSlider.module.css";
import "../styles/globals.css";

const ImageSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 3); // Adjust the number of slides as needed
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 3) % 3);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "50px" }}>
      <div className={styles.sliderContainer}>
        <div className={styles.slider} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          <div className={styles.slide}>
            <img src="/images/gopass.png" alt="Image 1" />
            <div className="textAboutMe">Mobile and desktop health pass application</div>
          </div>
          <div className={styles.slide}>
            <img src="/images/studapp.png" alt="Image 2" />
            <div className="textAboutMe">Social network for university</div>
          </div>
          <div className={styles.slide}>
            <img src="/images/mdsite.png" alt="Image 3" />
            <div className="textAboutMe">Web Site of Maystro Dellivery</div>
          </div>
          {/* Add more slides as needed */}
        </div>
      </div>
      <div className={styles.sliderNav}>
        {Array.from({ length: 3 }, (_, index) => (
          <div key={index} className={`${styles.sliderPoint} ${index === currentSlide ? styles.active : ""}`} onClick={() => goToSlide(index)}></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
