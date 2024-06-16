import NavBar from "../components/NavBar";
import Sponsors from "../components/Sponsors";
import { BenefitSection } from "./AboutPage";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import styles from "../pages/FeaturesPage.module.css";
import FeaturesHeroImg from "../images/features-page/Feature Hero Illustration.svg";

export default function FeaturesPage() {
  return (
    <div>
      <NavBar />
      <FeaturesHero />
      <Sponsors padding="pd-96" />
      <BenefitSection people="our team" padding="" />
      <FaqSection />
      <Footer />
    </div>
  );
}

function FeaturesHero() {
  return (
    <div className={styles.heroStn}>
      <section className="pd-128">
        <div className={styles.left}>
          <h1 className="fs-54-600">All the features you need</h1>
          <p className="fs-16-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <Link to="/pricing" className="fs-18-600">
            View pricing
          </Link>
        </div>

        <div className={styles.right}>
          <img src={FeaturesHeroImg} alt="" />
        </div>
      </section>
    </div>
  );
}
