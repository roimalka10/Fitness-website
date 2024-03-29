import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.scss";

// const scrollToTop = () => {
//   window.scrollTo(0, 0);
// };

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const changeBackground = () => {
    if (window.scrollY >= 150) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <motion.div
        className={navbar ? "navbar active" : "navbar"}
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        // transition={{ duration: 0.6, delay: 0.6, type: "tween" }}
      >
        <NavLink exact to="/" className="logo">
          <img src="https://res.cloudinary.com/noname-m-/image/upload/v1623682047/images/fitnesspage/logo2_udbo0y.png" />
        </NavLink>
        <div
          className={showMenu ? "navbar-items active" : "navbar-items"}
          onClick={handleClick}
        >
          <NavLink exact to="/" activeClassName="active" onClick={handleClick}>
            <span>Home</span>
          </NavLink>
          <NavLink
            exact
            to="/about"
            activeClassName="active"
            onClick={handleClick}
          >
            <span>About</span>
          </NavLink>

          <NavLink
            exact
            to="/success"
            activeClassName="active"
            onClick={handleClick}
          >
            <span>Success Stories</span>
          </NavLink>
          <NavLink
            exact
            to="/contact"
            activeClassName="active"
            onClick={handleClick}
          >
            <span>Contact</span>
          </NavLink>
        </div>
        <div className="burger-icon" onClick={handleClick}>
          {showMenu ? <FaTimes size={34} /> : <FaBars size={28} />}
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
