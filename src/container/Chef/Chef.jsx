import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info ">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant"> What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content-quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">At Gericht, we believe in the power of flavors, the beauty of fresh, locally sourced ingredients, and the art of craftsmanship in every dish</p>
        </div>
        <p className="p__opensans">Cooking is a language through which we express passion, creativity, and the pursuit of perfection.</p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="signature" />
      </div>
    </div>
  </div>
);

export default Chef;
