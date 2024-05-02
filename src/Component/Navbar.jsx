import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { Close, Menu } from "@mui/icons-material";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [active, setActive] = useState("aboutus");
  const handleNav = () => {
    setNav(!nav);
  };
  const handleActive = (link) => {
    setActive(link);
  };

  return (
    <nav className="sticky top-0 z-10">
      <div className="flex sm:justify-between justify-between lg:gap-5 items-center pt-10 px-5 lg:px-10 md:px-10 xl:mx-auto xl:justify-center xl:items-center xl:flex">
        <div className="flex gap-2 items-center md:border md:border-[#24232c] lg:px-4 xl:px-7 py-3">
          <img src={logo} alt="logo" />
          <h1 className="font-semibold text-xl">BitBullBot</h1>
        </div>
        <div>
          <ul className="hidden font-semibold lg:flex space-x-8 xl:text-[15px] bg-[#1a1a1a] px-14 py-3 lg:text-[13px]">
            <Link
              to="aboutus"
              smooth={true}
              duration={500}
              activeClass="active_link"
              onSetActive={() => handleActive("aboutus")}
            >
              <li
                className={
                  active === "aboutus"
                    ? "cursor-pointer text-white"
                    : "text-[#666]"
                }
              >
                ABOUT US
              </li>
            </Link>
            <Link
              to="ability"
              smooth={true}
              duration={500}
              activeClass="active_link"
              onSetActive={() => handleActive("ability")}
            >
              <li
                className={
                  active === "ability"
                    ? "text-white cursor-pointer"
                    : "text-[#666] cursor-pointer"
                }
              >
                ABILITY
              </li>
            </Link>
            <Link
              to="roadmap"
              smooth={true}
              duration={500}
              activeClass="active_link"
              onSetActive={() => handleActive("roadmap")}
            >
              <li
                className={
                  active === "roadmap"
                    ? "text-white cursor-pointer"
                    : "text-[#666] cursor-pointer"
                }
              >
                ROADMAP
              </li>
            </Link>
            <li className="text-[#666]">TELEGRAM</li>
            <li className="text-[#666]">TWITTER</li>
          </ul>
        </div>
        <div className="hidden  lg:flex gap-3">
          <button className="lg:px-2 lg:py-2 xl:px-11 xl:py-3 border border-[#24232c] font-bold text-base">
            TRY BBB
          </button>
          <button className="lg:px-2 lg:py-2 xl:px-11 xl:py-3 bg-[#FD532f] font-bold text-base text-black ">
            BUY $BBB
          </button>
        </div>
        <div onClick={handleNav} className="lg:hidden flex items-center z-10">
          {!nav ? <Menu /> : <Close />}
        </div>
        <ul
          className={`lg:hidden fixed top-0 tracking-[.56px] px-10 left-0 w-full h-screen bg-[#1a1a1a] flex flex-col pt-20 transform ${
            nav ? "translate-x-0" : "translate-x-full"
          } transition-transform ease-in-out duration-300 gap-4 sm:${
            nav ? "w-full" : "w-full"
          } sm:fixed sm:left-80 md:left-[55%] `}
        >
          <li className="text-white font-bold">
            <Link onClick={handleNav} to="aboutus" smooth={true} duration={500}>
              ABOUT US
            </Link>
          </li>
          <li className="text-[#666] font-bold">
            <Link onClick={handleNav} to="ability" smooth={true} duration={500}>
              ABILITY
            </Link>
          </li>
          <li className="text-[#666] font-bold">
            <Link onClick={handleNav} to="roadmap" smooth={true} duration={500}>
              ROADMAP
            </Link>
          </li>
          <li className="text-[#666] font-bold">
            <Link onClick={handleNav} to="work" smooth={true} duration={500}>
              TELEGRAM
            </Link>
          </li>
          <li className="text-[#666] font-bold">
            <Link onClick={handleNav} to="contact" smooth={true} duration={500}>
              TWITTER
            </Link>
          </li>
          <div className="flex flex-col sm:items-start items-center border-none  justify-center gap-3">
            <button className="py-3 border border-[#26242c] sm:w-64 font-bold text-lg w-full">
              TRY BBB
            </button>
            <button className="py-3 bg-[#FD532f] sm:items-start sm:w-64 font-bold text-lg w-full text-black ">
              BUY $BBB
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
