import React from "react";

const ReviewCard = ({ index, img, name, text }) => {
  return (
    <div
      className="shrink-0 pt-12 w-full max-w-[800px] lg:w-[40%] snap-center relative"
    >
      <div className="relative flex flex-col gap-4 items-center w-full h-full bg-(--VeryLightGray) pt-12 pb-8 px-6">
        <img
          className="h-18 absolute -top-7 left-1/2 -translate-x-1/2"
          src={img}
          alt={name}
        />
        <h5 className="be-vietnam-pro-bold text-(--DarkBlue) pt-4">{name}</h5>
        <p className="be-vietnam-pro-regular text-(--DarkGrayishBlue) leading-7 text-center">
          {text}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
