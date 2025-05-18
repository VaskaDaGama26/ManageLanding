import React, { useState, useEffect } from "react";
import logo from "/images/logo.svg";
import { useNavigate } from "react-router-dom";
import burger from "/icons/burger.svg";
import close from "/icons/close.svg";
import Nav from "../UI/NavItem";

const Header = () => {
  const navigate = useNavigate();
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

  const startedButton = (e) => {
    e.preventDefault();
    navigate("/");
  };

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
    <div className="flex flex-row justify-between items-center max-w-7xl px-2 lg:px-16 mx-auto">
      {/* LOGO */}
      <a className="w-[120px] lg:w-auto" href="/">
        <img src={logo} alt="Manage Logo" />
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
      <button
        onClick={startedButton}
        className="hidden lg:block cursor-pointer text-base be-vietnam-pro-medium rounded-full px-8 py-3 text-white bg-(--BrightRed) duration-300 hover:opacity-70 hover:shadow-(--buttonShadow)"
      >
        Get Started
      </button>

      {/* Mobile Burger Icon */}
      <button
        className="z-20 cursor-pointer lg:hidden"
        onClick={() => setIsMobileMenu(!isMobileMenu)}
      >
        <img
          src={isMobileMenu ? close : burger}
          alt="Menu"
        />
      </button>
    </div>
  );
};

export default Header;
