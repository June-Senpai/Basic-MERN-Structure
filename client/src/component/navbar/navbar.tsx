import React, { useState, FC } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import searchImage from "../../public/search.png";

import ReactSwitch from "react-switch";

type Theme = "light" | "dark";
interface NavbarProps {
  setTheme: (theme: Theme) => void;
  theme: Theme;
}

const Navbar: FC<NavbarProps> = ({ setTheme, theme }) => {
  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.style.setProperty("--color1", "black");
      document.documentElement.style.setProperty("--color2", "teal");
      document.documentElement.style.setProperty("--color3", "white");
      document.documentElement.style.setProperty("--direction", "45deg");
      document.documentElement.style.setProperty("--search-bg-color", "black");
      document.documentElement.style.setProperty(
        "--search-text-color",
        "white"
      );
      setTheme("dark");
    } else {
      document.documentElement.style.setProperty("--color1", "white");
      document.documentElement.style.setProperty("--color2", "green");
      document.documentElement.style.setProperty("--color3", "teal");
      document.documentElement.style.setProperty("--direction", "0deg");
      document.documentElement.style.setProperty("--search-bg-color", "white");
      document.documentElement.style.setProperty(
        "--search-text-color",
        "black"
      );
      setTheme("light");
    }
  };
  const [showLinks, setShowLinks] = useState(true);
  return (
    <div>
      <div className={theme}>
        <div className="navbar">
          <div className="left-side-navbar" id={showLinks ? "hidden" : ""}>
            <NavLink to="/">Home</NavLink>
          </div>

          <div className="search-container">
            <button className="🍔">Open</button>
            <input className="search" type="text" placeholder="search" />
            <button className="searchBtn">Search</button>
          </div>

          <div className="right-side-navbar" id={showLinks ? "hidden" : ""}>
            <NavLink to="/cart">Cart</NavLink>
            <NavLink to="/auth">Login/Register</NavLink>
          </div>

          {/* <button className="toggle-theme-button" onClick={toggleTheme}>
            Toggle Theme
          </button> */}

          <div className="toggle-theme-button">
            <ReactSwitch
              checked={theme === "dark"}
              onChange={toggleTheme}
              uncheckedIcon={<div>☀️</div>}
              checkedIcon={<div>🌙</div>}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
