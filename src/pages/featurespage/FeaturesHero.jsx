import { Link } from "react-router-dom";
import styles from "../homepage/HomepageHero.module.css";

import FeaturesHeroImg from "../../_images/features-page/Feature Hero Illustration.svg";

export default function FeaturesHero() {
  return (
    <div className={styles.hero}>
      <section className="pd-128">
        <div className={styles.left}>
          <h1 className="fs-54-600">All the features you need</h1>
          <p className="fs-16-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <div className={styles.links}>
            <Link to="/pricing" className={`fs-18-600 ${styles.work}`}>
              View pricing
            </Link>
          </div>
        </div>

        <div className={styles.right}>
          <img src={FeaturesHeroImg} alt="" />
        </div>
      </section>
    </div>
  );
}
