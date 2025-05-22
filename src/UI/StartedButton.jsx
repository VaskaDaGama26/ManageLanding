import React from "react";
import { useNavigate } from "react-router-dom";

const StartedButton = ({ shadow = "shadow-(--buttonShadow)", label = "Get Started", scheme, action, classes }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (typeof action === "function") {
      action(e, navigate);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`${classes} ${shadow} w-fit cursor-pointer text-base be-vietnam-pro-medium rounded-full px-8 py-3 duration-300 hover:opacity-70 ${
        scheme === "primary"
          ? "text-white bg-(--BrightRed)"
          : "text-(--BrightRed) bg-white"
      }`}
    >
      {label}
    </button>
  );
};

export default StartedButton;
