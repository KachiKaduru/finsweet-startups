import Statement from "../../components/Statement";
import { missionArr } from "../../services/arrays";
import styles from "./MissionSection.module.css";

export default function MissionSection() {
  return (
    <div className={styles.missionSection}>
      <section className="pd-128">
        {missionArr.map((mission) => (
          <Statement mission={mission} key={mission.id} direction={mission.direction} />
        ))}
      </section>
    </div>
  );
}
