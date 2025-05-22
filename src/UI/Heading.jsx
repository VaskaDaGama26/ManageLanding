import React from "react";

const Heading = ({ label, color = "(--DarkBlue)", weight = "bold" }) => {
  return (
    <h1
      className={`be-vietnam-pro-${weight} text-[34px] lg:text-[40px] leading-10 lg:leading-12 text-${color}`}
    >
      {label}
    </h1>
  );
};

export default Heading;
