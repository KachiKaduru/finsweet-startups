import { processArr } from "../../services/arrays";
import styles from "./ProcessSection.module.css";

export default function ProcessSection() {
  return (
    <div className={styles.processStn}>
      <section className="pd-128">
        <h2 className="fs-48-600">The process we follow</h2>

        <div className={styles.processes}>
          {processArr.map((process) => (
            <div className={styles.process} key={process}>
              <div className={styles.design}>
                <span className={styles.ball}></span>
                <div className={styles.dashes}></div>
              </div>

              <h4 className="fs-24-500">{process}</h4>
              <p className="fs-16-400">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
