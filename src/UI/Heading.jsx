import React from "react";

const Heading = ({ label }) => {
  return (
    <h1 className="be-vietnam-pro-bold text-[34px] lg:text-[40px] leading-10 lg:leading-12 text-(--DarkBlue)">
      {label}
    </h1>
  );
};

export default Heading;
