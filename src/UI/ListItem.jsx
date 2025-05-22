import React from "react";

const ListItem = ({ label, text }) => {

  return (
    <div className="flex flex-col ps-2.5 items-end justify-between gap-4 lg:gap-2 be-vietnam-pro-medium">
      <li
        className="pe-4 relative h-full w-full flex bg-(--VeryPaleRed) lg:bg-transparent rounded-tl-full rounded-bl-full text-xs lg:text-lg flex-row items-center gap-2 lg:gap-6 be-vietnam-pro-bold text-(--DarkBlue) before:w-fit before:h-fit before:text-white before:px-6 before:py-2 before:rounded-full before:bg-(--BrightRed)"
      >
        {label}
      </li>
      <p className="lg:ps-24 be-vietnam-pro-regular text-sm lg:text-base text-(--DarkGrayishBlue) leading-7 lg:leading-8 pe-2.5">
        {text}
      </p>
    </div>
  );
};

export default ListItem;
