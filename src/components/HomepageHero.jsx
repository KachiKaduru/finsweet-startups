import { Link } from "react-router-dom";
import styles from "./HomepageHero.module.css";

import heroImg from "../_images/home-page/Illustration.png";

export default function HomepageHero() {
  return (
    <div className={styles.hero}>
      <section className="pd-128">
        <div className={styles.left}>
          <h1 className="fs-54-600">Building stellar websites for early startups</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt.
          </p>

          <div className={styles.links}>
            <Link className={`fs-18-600 ${styles.work}`} to="/work">
              View our work
            </Link>
            <Link className={styles.pricing} to="/pricing">
              View Pricing &rarr;
            </Link>
          </div>
        </div>

        <div className={styles.right}>
          <img src={heroImg} alt="" />
        </div>
      </section>
    </div>
  );
}
