import React from "react";
import charts from "/images/illustration-intro.svg";
import StartedButton from "../UI/StartedButton";
import { handleStart } from "../utils/handleStart";
const Charts = () => {

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between items-center max-w-7xl mx-auto mt-6 lg:mt-24">
      <div className="flex flex-col gap-2 lg:gap-10 max-w-[400px] lg:max-w-[600px] items-center lg:items-start text-center lg:text-start">
        <h1 className="be-vietnam-pro-bold text-3xl lg:text-[52px] leading-10 lg:leading-16 text-(--DarkBlue)">
          Bring everyone together to build better products.
        </h1>
        <h3 className="be-vietnam-pro-regular text-sm leading-6 lg:text-base text-(--DarkGrayishBlue) max-w-[260px] lg:max-w-[340px]">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </h3>
        <StartedButton
          action={handleStart}
          scheme="primary"
          classes="lg:mt-0 mt-4"
        />
      </div>
      <div>
        <img className="lg:max-w-max max-w-[300px]" src={charts} alt="" />
      </div>
    </div>
  );
};

export default Charts;
