import React from "react";
import ADS from "../images/adc.jpg";
import { Link } from "react-router-dom";

function Ads() {
  return (
    <div
      style={{
        marginTop: "10px",
        marginBottom: "20px",
        marginLeft: "60px",
      }}
    >
      <Link to="/shop">
        <img src={ADS} alt="advertisemet" />
      </Link>
    </div>
  );
}

export default Ads;
