import icon1 from "../images/icons/featuresIcon1.svg";
import icon2 from "../images/icons/featuresIcon2.svg";
import icon3 from "../images/icons/featuresIcon3.svg";
import icon4 from "../images/icons/featuresIcon4.svg";
import icon5 from "../images/icons/featuresIcon5.svg";
import icon6 from "../images/icons/featuresIcon6.svg";

import styles from "./FeaturesSection.module.css";

const featuresStnArr = [
  { id: 1, icon: icon1, heading: "Uses Client First" },
  { id: 2, icon: icon2, heading: "Two Free Revision Round" },
  { id: 3, icon: icon3, heading: "Template Customization" },
  { id: 4, icon: icon4, heading: "24/7 Support" },
  { id: 5, icon: icon5, heading: "Quick Delivery" },
  { id: 6, icon: icon6, heading: "Hands-on approach" },
];

export default function FeaturesSection() {
  return (
    <div className={styles.featuresStn}>
      <section className="pd-128">
        <header>
          <h5 className="fs-16-500">Features</h5>
          <h2 className="fs-48-600">Design that solves problems, one product at a time</h2>
        </header>

        <div className={styles.cards}>
          {featuresStnArr.map((card) => (
            <div className={styles.card} key={card.id}>
              <img src={card.icon} alt="icon" />
              <h3 className="fs-24-500">{card.heading}</h3>
              <p className="fs-16-400">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib
                turpis eu gravida mi. Pellentesque et velit aliquam sed mi.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
