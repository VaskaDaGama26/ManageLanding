import React, { useState, useEffect } from "react";
import logo from "/images/logo.svg";
import burger from "/icons/burger.svg";
import close from "/icons/close.svg";
import Nav from "../UI/NavItem";
import StartedButton from "../UI/StartedButton";
import { handleStart } from "../utils/handleStart";
import Logo from "../UI/Logo";

const Header = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const navItems = [
    {
      id: 1,
      label: "Pricing",
      route: "/",
    },
    {
      id: 2,
      label: "Product",
      route: "/",
    },
    {
      id: 3,
      label: "About Us",
      route: "/",
    },
    {
      id: 4,
      label: "Careers",
      route: "/",
    },
    {
      id: 5,
      label: "Community",
      route: "/",
    },
  ];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1280px)");

    const handleResize = () => {
      if (mediaQuery.matches) {
        setIsMobileMenu(false);
      }
    };

    handleResize();
    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <header className="flex flex-row justify-between items-center max-w-7xl mx-auto px-2.5 lg:px-8">
      {/* LOGO */}
      <a className="w-[120px] lg:w-auto" href="/">
        <Logo />
      </a>
      {isMobileMenu && (
        <div className="lg:hidden fixed inset-0 bg-(--VeryDarkBlue) opacity-25 z-10"></div>
      )}
      {/* NAV */}
      <nav>
        <ul
          className={`${
            !isMobileMenu
              ? "hidden text-base lg:flex flex-row gap-8 be-vietnam-pro-regular"
              : "z-30 text-sm bg-white lg:hidden absolute w-(--wMobileMenu) left-(--left45) mt-12 py-8 flex flex-col items-center justify-center gap-6 be-vietnam-pro-medium"
          }`}
        >
          <Nav items={navItems} />
        </ul>
      </nav>
      {/* BUTTON */}
      <StartedButton
        action={handleStart}
        scheme="primary"
        classes="hidden lg:block"
      />

      {/* Mobile Burger Icon */}
      <button
        className="z-20 cursor-pointer lg:hidden"
        onClick={() => setIsMobileMenu(!isMobileMenu)}
      >
        <img src={isMobileMenu ? close : burger} alt="Menu" />
      </button>
    </header>
  );
};

export default Header;
