import React from "react";
import Nav from "./Menu";
import "../styles.css";

const AboutUs = () => {
  return (
    <div>
      <Nav />
      <div className="about__us">
        <h1>About Us</h1>
        <p className="my-1">
          We are bridging the gap between the farmers and the society by
          providing a platform wherein farmers can contact the end-customer
          directly.We are committed to work for betterment of farmers and
          improve their economical condition via 'GreenFarm'. Also,
          End-constumer will be able to cut down his expenses by buying directly
          from farmers.
        </p>
        <p className="bg-dark p">
          <strong>Version: </strong> 1.0.0
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
