import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import logoImg from "../_images/Finsweet Logo.svg";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // console.log("menu toggled:", !isOpen);
  };

  return (
    <header className={styles.navbar}>
      <section>
        <Link to="/" className={styles.logo}>
          <img src={logoImg} alt="" />
        </Link>

        <svg
          onClick={toggleMenu}
          className={`${styles.hamburger} ${isOpen ? styles.active : ""}`}
          viewBox="0 0 100 80"
          width="30"
          height="20"
        >
          <rect width="100" height="12" rx="10"></rect>
          <rect y="30" width="100" height="12" rx="10"></rect>
          <rect y="60" width="100" height="12" rx="10"></rect>
        </svg>

        <nav className={`${styles.nav} ${isOpen ? styles.show : ""}`}>
          <ul>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/features">Features</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
            {/* <NavLink to="/faq">FAQ</NavLink> */}
            <NavLink to="/blog">Blog</NavLink>
          </ul>

          <NavLink to="/contact" className={styles.contactBtn}>
            Contact us
          </NavLink>
        </nav>
      </section>
    </header>
  );
}
