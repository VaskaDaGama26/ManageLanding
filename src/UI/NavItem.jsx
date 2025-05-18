import React from "react";

const Nav = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <a key={index} href={item.route}>
          <li className="cursor-pointer duration-300 hover:text-(--DarkGrayishBlue)">
            {item.label}
          </li>
        </a>
      ))}
    </>
  );
};

export default Nav;
