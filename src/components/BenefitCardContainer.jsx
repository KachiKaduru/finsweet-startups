import BenefitCard from "./BenefitCard";
import styles from "./BenefitCardContainer.module.css";

export default function BenefitCardContainer({ array, bgColor }) {
  return (
    <div className={styles.benefitContainer}>
      {array.map((card) => (
        <BenefitCard bgColor={bgColor} card={card} key={card.id} />
      ))}
    </div>
  );
}
