import { Link } from "react-router-dom";
import { workStnArr } from "../../services/arrays";
import styles from "./WorkSection.module.css";

export default function WorkSection() {
  return (
    <div className={styles.workStn}>
      <section className="pd-128">
        <div className={styles.workStnLeft}>
          <h2 className="fs-48-600">How we work</h2>
          <p className="fs-16-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>

          <Link to="/contact" className="fs-18-500">
            Get in touch with us &rarr;
          </Link>
        </div>

        <div className={styles.workStnRight}>
          {workStnArr.map((attr) => (
            <div className={styles.attribute} key={attr.id}>
              <div className="card">
                <span className="fs-18-500">0{attr.id}</span>
              </div>

              <h3 className="fs-32-500">{attr.heading}</h3>
              <p className="fs-16-400">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
