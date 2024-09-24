import { teamArr } from "../../services/arrays";
import styles from "./TeamSection.module.css";

export default function TeamSection() {
  return (
    <div className={styles.teamSection}>
      <section className="pd-128">
        <h2 className="fs-48-600">Meet our Team</h2>

        <div className={styles.team}>
          {teamArr.map((person) => (
            <div className={styles.profile} key={person.id}>
              <div className={styles.imgHolder}>
                <img src={person.img} alt="" />
              </div>

              <h4 className="fs-24-400">{person.name}</h4>
              <p className="fs-16-400">{person.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
