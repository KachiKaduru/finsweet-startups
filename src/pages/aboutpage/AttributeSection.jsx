import { attributeArr } from "../../services/arrays";
import styles from "./AttributeSection.module.css";

export default function AttributeSection() {
  return (
    <div className={styles.attrStn}>
      <section>
        <div className={styles.attrTop}>
          <h5 className="fs-16-500">Who we are</h5>

          <div className={styles.attributes}>
            {attributeArr.map((attribute, i) => (
              <div className={styles.attribute} key={i}>
                <h3 className="fs-38-600">{attribute}</h3>

                <p className="fs-16-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.imageBox}></div>
      </section>
    </div>
  );
}
