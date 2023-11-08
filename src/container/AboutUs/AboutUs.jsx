import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutUs app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutUs-overlay flex__center">
      <img src={images.G} alt="G letter" />
    </div>

    <div className="app__aboutUs-content flex__center">
      <div className="app__aboutUs-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about spoon" className="spoon__img" />
        <p className="p__opensans">Established with a passion for creating unforgettable moments around the table, Gericht is a culinary haven nestled in the heart of Lviv. But it's not just about the food—it's about the entire journey. Our warm and hospitable staff ensures that every visit to Gericht is an enchanting experience.</p>
        <button type="button" className="custom__button">
          Know more
        </button>
      </div>

      <div className="app__aboutUs-content_knife flex__center">
        <img src={images.knife} alt="about us knife" />
      </div>

      <div className="app__aboutUs-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about spoon" />
        <p className="p__opensans">Our story began 12 years ago when a group of food enthusiasts, led by our visionary chef Kevion Luo, set out on a mission to redefine the local dining scene. What started as a dream has evolved into a vibrant culinary destination, celebrated for its delectable cuisine and inviting ambiance.</p>
        <button type="button" className="custom__button">
          Know more
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
