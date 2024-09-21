import styles from "./WorkPage.module.css";

import NavBar from "../components/NavBar";
import { SocialLinks } from "../components/Footer";

export default function WorkPage() {
  return (
    <div>
      <NavBar />
      <WorkPageHero />
    </div>
  );
}

function WorkPageHero() {
  return (
    <div className={styles.workHero}>
      <section className="pd-96">
        <p className="fs-16-500">What we created</p>
        <h2 className="fs-38-600">Our Work Portfolio</h2>
        <p className="fs-16-500">
          We help teams create great digital products by providing them with tools and technology to
          make the design-to-code process universally accessible.
        </p>
        <SocialLinks className={styles.socialLinks} />
      </section>
    </div>
  );
}
