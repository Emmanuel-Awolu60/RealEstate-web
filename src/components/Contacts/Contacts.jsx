import React from "react";
import "./Contacts.css";
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
