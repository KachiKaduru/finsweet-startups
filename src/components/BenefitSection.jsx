import { benefitsArr } from "../services/arrays";
import BenefitCardContainer from "./BenefitCardContainer";
import styles from "./BenefitSection.module.css";

export default function BenefitSection({ children, padding = "", people }) {
  return (
    <div className={styles.benefitSection}>
      <section className={padding}>
        <h2 className="fs-48-600">The benefits of working with {people}</h2>

        <BenefitCardContainer array={benefitsArr} bgColor={"#f4f6fc"} />

        {children}
      </section>
    </div>
  );
}
