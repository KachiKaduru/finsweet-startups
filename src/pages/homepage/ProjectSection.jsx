import { Link } from "react-router-dom";

import styles from "./ProjectSection.module.css";
export default function ProjectSection() {
  return (
    <div className={styles.projectStn}>
      <section className="pd-128">
        <div className={styles.projectTop}>
          <h2 className="fs-48-600">View our projects</h2>
          <Link to="/work" className="fs-16-500">
            View More &rarr;
          </Link>
        </div>

        <div className={styles.down}>
          <div className={styles.cardOne}></div>
          <div className={styles.cardThree}></div>
          <div className={styles.cardTwo}></div>
        </div>
      </section>
    </div>
  );
}
