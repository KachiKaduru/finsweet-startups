import styles from "./BenefitCard.module.css";

export default function BenefitCard({ card, bgColor }) {
  return (
    <div style={{ background: bgColor }} className={styles.benefitCard}>
      <img src={card.icon} alt="icon" />
      <h3 className="fs-24-500">{card.heading}</h3>
      <p className="fs-16-400">
        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu
        gravida mi. Pellentesque et velit aliquam sed mi.
      </p>
    </div>
  );
}
