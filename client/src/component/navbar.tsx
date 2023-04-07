import React, { useState, FC } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

type Theme = "light" | "dark";
interface NavbarProps {
  setTheme: (theme: Theme) => void;
  theme: Theme;
}
const Navbar: FC<NavbarProps> = ({ setTheme, theme }) => {
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <div className={theme}>
        <div className="navbar">
          <div className="left-side-navbar">
            <NavLink to="/">Home</NavLink>
          </div>

          <input className="search" type="text" placeholder="search" />
          <div className="right-side-navbar">
            <NavLink to="/cart">Cart</NavLink>
            <NavLink to="/auth">Login/Register</NavLink>
          </div>
          <button className="toggle-theme-button" onClick={toggleTheme}>
            Toggle Theme
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
