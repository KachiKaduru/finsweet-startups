import logoImg from "../images/Finsweet Logo.svg";
import styles from "../components/NavBar.module.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className={styles.navbar}>
      <section>
        <div className="logo">
          <img src={logoImg} alt="" />
        </div>

        <nav>
          <ul>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/features">Features</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
            <NavLink to="/blog">Blog</NavLink>
          </ul>

          <NavLink to="/contact">Contact us</NavLink>
        </nav>
      </section>
    </header>
  );
}
