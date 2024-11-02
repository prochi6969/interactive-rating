import React from "react";
import StarImg from "../assets/Star.svg";

const Star = () => {
  return (
    <div style={{ width: "48px", height: "48px", backgroundColor: "#262E38", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <img src={StarImg} alt="Little organge star" />
    </div>
  );
};

export default Star;
