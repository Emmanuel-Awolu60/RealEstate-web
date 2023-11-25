import React from "react";
import "./Contacts.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contacts = () => {
  return (
    <section className="c-wrapper">
      <div className="padding innerWidth flexCenter c-container">
        {/* letf side */}
        <div className="flexColStart c-left">
          <span className="flexColStart orangeText">Our Contacts</span>
          <span className="primaryText">Easy to Contact us</span>
          <span className="secondaryText">
            We always ready to help by providing best services for you.
            <br />
            We beleive a good blace to live can nake your life better
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexColStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter button">
                    Call Now
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
