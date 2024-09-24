import styles from "./InquirySection.module.css";
import { Link } from "react-router-dom";

export default function InquirySection() {
  return (
    <div className={styles.inqStn}>
      <section>
        <div className={styles.inqLeft}>
          <h1 className="fs-54-600">Building stellar websites for early startups</h1>
          <p className="fs-16-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua ut enim.
          </p>
        </div>

        <div className={styles.inqRight}>
          <form action="">
            <legend>
              <h3 className="fs-32-500">Send inquiry</h3>
              <p className="fs-16-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore.
              </p>
            </legend>

            <div>
              <input type="text" name="name" id="" placeholder="Your name" />
              <input type="email" name="" id="" placeholder="Email" />
              <input type="url" name="" id="" placeholder="Paste your Figma design URL" />
            </div>

            <div className={styles.inqBottom}>
              <button className="fs-18-600">Send an Inquiry</button>

              <Link>Get in touch with us &rarr;</Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
