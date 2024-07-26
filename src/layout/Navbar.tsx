import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import close from "assets/close.svg";
import menu from "assets/menu.svg";
import { navLinks, profile } from "constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { hash } = useLocation();

  return (
    <nav className={"w-full py-5 mx-auto fixed top-0 z-20 bg-primary"}>
      <div className="max-w-7xl px-16 flex gap-20 justify-between items-center  mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <p className="text-white text-[18px] font-medium cursor-pointer flex ">
            {profile.name}
          </p>
        </Link>

        <ul className="list-none hidden lg:flex flex-row flex-wrap gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                hash === nav.id ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              <Link to={`/${nav.id}`}>{nav.title}</Link>
            </li>
          ))}
        </ul>

        <div className="lg:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    hash === nav.id ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
