import sponsorLogo1 from "../images/icons/Logo 1.svg";
import sponsorLogo2 from "../images/icons/Logo 2.svg";
import sponsorLogo3 from "../images/icons/Logo 3.svg";
import sponsorLogo4 from "../images/icons/Logo 4.svg";
import sponsorLogo5 from "../images/icons/Logo 5.svg";

import styles from "../components/Sponsors.module.css";

const sponsorsArr = [
  { id: 1, icon: sponsorLogo1 },
  { id: 2, icon: sponsorLogo2 },
  { id: 3, icon: sponsorLogo3 },
  { id: 4, icon: sponsorLogo4 },
  { id: 5, icon: sponsorLogo5 },
];

export default function Sponsors({ padding = "" }) {
  return (
    <div className={`${styles.sponsorSection} ${padding}`}>
      <section>
        <div className={styles.stats}>
          <h3 className="fs-38-600">100,000 +</h3>
          <p className="fs-16-400">Finsweet Users</p>
        </div>

        <div className={styles.sponsorLogos}>
          {sponsorsArr.map((spons) => (
            <img src={spons.icon} alt="sponsor" key={spons.id} />
          ))}
        </div>
      </section>
    </div>
  );
}
