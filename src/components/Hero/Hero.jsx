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
            <span className="secondaryText">Find a variety of properties that suit you very easilty</span>
            <span className="secondaryText">Forget all difficulties in finding a residence for you </span>
          </div>

          <div className="search-bar">
            <input type="text" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColStart stat">
              <div>
                {/* <CountQueuingStrategy start={8800} end={9000} duration={4}/> */}
                <span>9,000</span>
                <span>+</span>
              </div>
                <span className="secondaryText">Premium Product</span>
            </div>

            <div className="flexColStart stat">
              <div>
                {/* <CountQueuingStrategy start={8800} end={9000} duration={4}/> */}
                <span>2,000</span>
                <span>+</span>
              </div>
                <span className="secondaryText">Happy custmers</span>
            </div>

            <div className="flexColStart stat">
              <div>
                {/* <CountQueuingStrategy start={8800} end={9000} duration={4}/> */}
                <span>28</span>
                <span>+</span>
              </div>
                <span className="secondaryText">Award winning</span>
            </div>
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
