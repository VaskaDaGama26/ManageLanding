import React, { useState } from "react";
import Heading from "../UI/Heading";
import StartedButton from "../UI/StartedButton";
import Logo from "../UI/Logo";

import FacebookIcon from "../iconsSocial/icon-facebook.svg?react";
import YoutubeIcon from "../iconsSocial/icon-youtube.svg?react";
import TwitterIcon from "../iconsSocial/icon-twitter.svg?react";
import PinterestIcon from "../iconsSocial/icon-pinterest.svg?react";
import InstagramIcon from "../iconsSocial/icon-instagram.svg?react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);

  const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const showError = touched && !isValidEmail(email);

  const socialsItems = [
    {
      id: 1,
      link: "https://facebook.com",
      Icon: FacebookIcon,
      name: "Facebook",
    },
    { id: 2, link: "https://youtube.com", Icon: YoutubeIcon, name: "YouTube" },
    { id: 3, link: "https://x.com", Icon: TwitterIcon, name: "Twitter" },
    {
      id: 4,
      link: "https://pinterest.com",
      Icon: PinterestIcon,
      name: "Pinterest",
    },
    {
      id: 5,
      link: "https://instagram.com",
      Icon: InstagramIcon,
      name: "Instagram",
    },
  ];
  const navItems = {
    left: [
      { id: 1, label: "Home", link: "/" },
      { id: 2, label: "Pricing", link: "/" },
      { id: 3, label: "Products", link: "/" },
      { id: 4, label: "About Us", link: "/" },
    ],
    right: [
      { id: 5, label: "Careers", link: "/" },
      { id: 6, label: "Community", link: "/" },
      { id: 7, label: "Privacy Policy", link: "/" },
    ],
  };

  return (
    <footer>
      <div className="px-8 py-20 relative overflow-hidden bg-(--BrightRed)">
        {/* UPPER FOOTER */}
        <div className="footer__pattern max-w-7xl mx-auto flex flex-col gap-8 lg:gap-0 lg:flex-row items-center justify-between text-center lg:text-left">
          <div className="z-10 max-w-none lg:max-w-[500px]">
            <Heading
              color="white"
              weight="medium"
              label="Simplify how your team works today."
            />
          </div>
          <StartedButton classes="z-10" />
        </div>
      </div>
      {/* MAIN FOOTER */}
      <div className="px-8 py-20 bg-(--VeryDarkBlue)">
        <div className="max-w-7xl gap-12 lg:gap-0 h-full w-full mx-auto flex flex-col-reverse lg:flex-row justify-between items-stretch">
          {/* COPYRIGHT MOBILE */}
          <p className="lg:hidden block text-center mt-6 be-vietnam-pro-regular text-xs lg:text-sm text-(--DarkGrayishBlue)">
            Copyright 2020. All Rights Reserved
          </p>
          {/* LOGO + SOCIALS */}
          <div className="flex flex-col-reverse lg:items-start items-center lg:flex-col gap-10 lg:gap-0 justify-between">
            <Logo textcolor="#FFFFFF" />
            <div className="flex w-fit flex-row items-center gap-8 lg:gap-4">
              {socialsItems.map(({ id, link, Icon, name }) => (
                <a
                  key={id}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit h-fit"
                >
                  <Icon aria-label={name} />
                </a>
              ))}
            </div>
          </div>
          {/* LISTS */}
          <div className="lg:contents flex flex-row justify-around">
            {Object.entries(navItems).map(([groupName, items]) => (
              <ul key={groupName} className="flex flex-col gap-4">
                {items.map((item) => (
                  <a
                    className="text-white duration-300 hover:text-(--BrightRed) be-vietnam-pro-regular text-xs lg:text-base"
                    key={item.id}
                    href={item.link}
                  >
                    <li>{item.label}</li>
                  </a>
                ))}{" "}
              </ul>
            ))}
          </div>
          <div className="flex flex-col justify-between items-center lg:items-end">
            {/* INPUT */}
            <form className="flex relative flex-row gap-2">
              <input
                onBlur={() => setTouched(true)}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`bg-white rounded-full text-xs lg:text-sm ps-4 pe-8 lg:pe-12 ${
                  showError
                    ? "text-red-700 border-1 border-red-700"
                    : "text-(--GrayishBlue)"
                }`}
                placeholder="Updates in your inbox…"
                type="email"
              />
              {showError && (
                <p className="absolute top-14 left-5 text-xs be-vietnam-pro-regular text-red-700">
                  Please insert a valid email
                </p>
              )}
              <StartedButton shadow="" scheme="primary" label="Go" />
            </form>
            {/* COPYRIGHT DESKTOP */}
            <p className="hidden lg:block be-vietnam-pro-regular text-xs lg:text-sm text-(--DarkGrayishBlue)">
              Copyright 2020. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
