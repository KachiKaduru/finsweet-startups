import BenefitCardContainer from "../../components/BenefitCardContainer";
import { featuresStnArr } from "../../services/arrays";

import styles from "./FeaturesSection.module.css";

export default function FeaturesSection() {
  return (
    <div className={styles.featuresStn}>
      <section className="pd-128">
        <header>
          <h5 className="fs-16-500">Features</h5>
          <h2 className="fs-48-600">Design that solves problems, one product at a time</h2>
        </header>

        <BenefitCardContainer array={featuresStnArr} bgColor={"#fff"} />
      </section>
    </div>
  );
}
