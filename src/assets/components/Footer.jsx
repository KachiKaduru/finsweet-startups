import { Link } from "react-router-dom";
import styles from "../components/Footer.module.css";

import logoImg from "../images/Finsweet Logo.svg";
import facebookIcon from "../images/icons/facebook.svg";
import twitterIcon from "../images/icons/twitter.svg";
import instagramIcon from "../images/icons/instagram.svg";
import linkedinIcon from "../images/icons/linkedin.svg";

export default function Footer() {
  return (
    <footer className={styles.footerStn}>
      <MainFooter />
      <NavFooter />
    </footer>
  );
}

function MainFooter() {
  return (
    <main>
      <section className="pd-96">
        <div className={styles.left}>
          <Link to="/" className={styles.logo}>
            <img src={logoImg} alt="" />
          </Link>

          <p className="fs-16-500">
            We are always open to discuss your project and improve your online
            presence.
          </p>
        </div>

        <div className={styles.right}>
          <h2 className="fs-48-600">Lets Talk!</h2>

          <p className="fs-16-400">
            We are always open to discuss your project, improve your online
            presence and help with your UX/UI design challenges.
          </p>

          <SocialLinks className={styles.socialLinks} />
        </div>
      </section>
    </main>
  );
}

export function SocialLinks({ className }) {
  return (
    <div className={className}>
      <a href="#">
        <img src={facebookIcon} alt="facebook" />
      </a>
      <a href="#">
        <img src={twitterIcon} alt="twitter" />
      </a>
      <a href="#">
        <img src={instagramIcon} alt="instagram" />
      </a>
      <a href="#">
        <img src={linkedinIcon} alt="linkedIn" />
      </a>
    </div>
  );
}

function NavFooter() {
  return (
    <aside>
      <section>
        <h5 className="fs-16-500">Copyright 2022, Finsweet.com</h5>

        <nav className={styles.footerNav}>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/features">Features</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/blog">Blog</Link>
        </nav>
      </section>
    </aside>
  );
}
