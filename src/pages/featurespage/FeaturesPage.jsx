import NavBar from "../../components/NavBar";
import Sponsors from "../../components/Sponsors";
import FaqSection from "../../components/FaqSection";
import FeaturesHero from "./FeaturesHero";
import BenefitSection from "../../components/BenefitSection";
import Footer from "../../components/Footer";

import styles from "./FeaturesPage.module.css";
import { featuresPageArr } from "../../services/arrays";
import Statement from "../../components/Statement";

export default function FeaturesPage() {
  return (
    <div>
      <NavBar />
      <FeaturesHero />
      <Sponsors padding="pd-96" />
      <BenefitSection people="our team" />
      <StatementSection />
      <FaqSection />
      <Footer />
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
