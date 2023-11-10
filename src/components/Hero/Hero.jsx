import React from "react";
import "./Hero.css";
// import CountQueuingStrategy from "react countQueuingStrategy"
// import {HTMLLocationMarker} from "react-icon/h1"

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="flexColStart hero-left">
          <div className="orange-cicle" />
          <div className="hero-title">
            <h1>
              {" "}
              Discover <br /> Most Suitabale <br /> Property
            </h1>
          </div>

          <div className="flexColStart hero-des">
            <span>Find a variety of properties that suit you very easilty</span>
            <span>Forget all difficulties in finding a residence for you </span>
          </div>

          <div className="search-bar">
            <input type="text" />
            <button className="button">Search</button>
          </div>
        </div>

        <div className="flexCenter stats">
          <div className=" stat">
            <span>
              {/* <CountQueuingStrategy start={8800} end={9000} duration={4}/> */}
              <span>9000</span>
              <span>+</span>
              <span>Premium Product</span>
            </span>
          </div>


          <div className="flexColStart stat">
            <span>
              {/* <CountQueuingStrategy start={8800} end={9000} duration={4}/> */}
              <span>9000</span>
              <span>+</span>
              <span>Happy custmers</span>
            </span>
          </div>


          <div className="flexColStart stat">
            <span>
              {/* <CountQueuingStrategy start={8800} end={9000} duration={4}/> */}
              <span>9000</span>
              <span>+</span>
              <span>Award winning</span>
            </span>
          </div>
        </div>

        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
