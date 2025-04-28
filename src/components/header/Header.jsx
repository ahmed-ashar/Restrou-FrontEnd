import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import { navLinks } from "../../Data";
import ScrollLink from "../link/ScrollLink.jsx";
import { FaCircleArrowRight } from "react-icons/fa6";
import { CgMenuLeft } from "react-icons/cg";
import { animateScroll } from "react-scroll";
import { Link } from "react-scroll";
import "./Header.css";

const Header = () => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const scrollTop = () => {
    animateScroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  });

  return (
    <header className={`${scrollNav ? "scroll-header" : ""} header`}>
      <nav className="nav container">
        <Link to="/" onClick={scrollTop} className="nav-logo">
          <img src={Logo} alt="" className="nav-logo-img" />
        </Link>

        <div className="nav-menu">
          <ul className="nav-list">
            {navLinks.map((navLink, index) => {
              return (
                <li className="nav-item" key={index}>
                  <ScrollLink
                    to={navLink}
                    name={navLink}
                    extraProps={{ spy: true }}
                    className="nav-link"
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="nav-buttons">
          <ScrollLink
            to="reservation"
            name="Book Now"
            extraProps={{ offset: -150 }}
            className="button"
            icon={<FaCircleArrowRight className="button-icon" />}
          />

          <CgMenuLeft className="nav-toggler" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
