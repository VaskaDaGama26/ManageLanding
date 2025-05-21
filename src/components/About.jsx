import React from "react";
import ListItem from "../UI/ListItem";
import Heading from "../UI/Heading";

const About = () => {
  const listItems = [
    {
      id: 1,
      label: "Track company-wide progress",
      text: "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
    },
    {
      id: 2,
      label: "Advanced built-in reports",
      text: "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
    },
    {
      id: 3,
      label: "Everything you need in one place",
      text: "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
    },
  ];
  return (
    <div className="about flex flex-col gap-12 lg:gap-0 lg:flex-row justify-between items-center lg:items-start max-w-7xl mx-auto mt-24 lg:mt-24">
      <div className="flex px-2 lg:ps-2 lg:pe-16 flex-col gap-2 lg:gap-6 max-w-none lg:max-w-[500px] items-center lg:items-start text-center lg:text-start">
        <Heading label="What’s different about Manage?" />
        <h3 className="be-vietnam-pro-regular text-sm leading-8 lg:text-base text-(--DarkGrayishBlue) max-w-[400px] lg:max-w-[340px]">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </h3>
      </div>
      <div className="w-full lg:max-w-[600px]">
        <ul className="flex justify-start flex-col gap-10">
          {listItems.map((item, index) => (
            <ListItem key={index} label={item.label} text={item.text} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
