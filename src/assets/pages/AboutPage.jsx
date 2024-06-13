import NavBar from "../components/NavBar";

import styles from "./AboutPage.module.css";

export default function AboutPage() {
  return (
    <div>
      <NavBar />
      <AboutUsSection />
    </div>
  );
}

function AboutUsSection() {
  return (
    <div className={styles.aboutStn}>
      <section className="pd-128">
        <header>
          <h5 className="fs-18-400">About Us</h5>
          <h1 className="fs-54-600">Our designs solve problems</h1>
          <p className="fs-16-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </header>
        <div className={styles.imgContainer}></div>
      </section>
    </div>
  );
}
