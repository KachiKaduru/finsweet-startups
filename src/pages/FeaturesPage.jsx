import { Link } from "react-router-dom";

import NavBar from "../components/NavBar";
import Sponsors from "../components/Sponsors";
import { BenefitSection } from "./AboutPage";
import { Statement } from "./AboutPage";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";

import styles from "./FeaturesPage.module.css";
import FeaturesHeroImg from "../_images/features-page/Feature Hero Illustration.svg";

import featuresImg1 from "../_images/features-page/features-img-1.png";
import featuresImg2 from "../_images/features-page/features-img-2.png";
import featuresImg3 from "../_images/features-page/features-img-3.png";
import featuresImg4 from "../_images/features-page/features-img-4.png";

const featuresPageArr = [
  {
    id: 1,
    title: "Use Client-first",
    heading: "Top agencies and freelancers around the world use Client-first ",
    image: featuresImg1,
    direction: "row",
    background: "#fff",
  },
  {
    id: 2,
    title: "Free Revision Rounds",
    heading: "Get free Revisions and one week of free maintenance",
    image: featuresImg2,
    direction: "row-reverse",
    background: "#F4F6FC",
  },
  {
    id: 3,
    title: "24/7 Support",
    heading: "Working with us, you will be getting 24/7 priority support",
    image: featuresImg3,
    direction: "row",
    background: "#fff",
  },
  {
    id: 4,
    title: "Quick Delivery",
    heading: "Guranteed 1 week delivery for standard five pager website",
    image: featuresImg4,
    direction: "row-reverse",
    background: "#FCD9801A",
  },
];

export default function FeaturesPage() {
  return (
    <div>
      <NavBar />
      <FeaturesHero />
      <Sponsors padding="pd-96" />
      <BenefitSection people="our team" padding="" />
      <StatementSection />
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

function StatementSection() {
  return (
    <div className={styles.statementSection}>
      {featuresPageArr.map((feature) => (
        <div style={{ background: feature.background }} key={feature.id}>
          <section>
            <Statement
              mission={feature}
              padding="9.6rem 0"
              direction={feature.direction}
              gap="8rem"
              width="57.5rem"
              height="39.8rem"
            />
          </section>
        </div>
      ))}
    </div>
  );
}
