import styles from "./ReviewSection.module.css";

import personImg from "../../_images/home-page/person.png";

export default function ReviewSection() {
  return (
    <div className={styles.reviewStn}>
      <section className="pd-128">
        <div className={styles.reviewLeft}>
          <h2 className="fs-38-600">What our clients say about us</h2>
          <p className="fs-16-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
        </div>

        <div className={styles.reviewRight}>
          <h2 className="fs-32-500">
            &quot;The best agency we’ve worked with so far. They understand our product and are able
            to add new features with a great focus.&quot;
          </h2>

          <div className={styles.details}>
            <div className={styles.person}>
              <img src={personImg} alt="" />

              <h4 className="fs-18-400">
                Jenny Wilson
                <p className="fs-12-400">Vice President</p>
              </h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
