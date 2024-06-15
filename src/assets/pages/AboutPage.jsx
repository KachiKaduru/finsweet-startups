import styles from "./AboutPage.module.css";
import missionImg1 from "../images/about-page/a-man-standing.png";
// import missionImg2 from "../images/about-page/photo-of women.png";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const attributeArr = ["Goal focussed", "Continuous improvement"];

const processArr = ["Planning", "Conception", "Design", "Development"];

// const missionArr = [
//   { id: 1, title: "Our Mission", heading: "Inspire, Innovate, Share", image: missionImg1 },
//   { id: 2, title: "Our Vision", heading: "Laser focus", image: missionImg2 },
// ];

export default function AboutPage() {
  return (
    <div>
      <NavBar />
      <AboutUsSection />
      <AttributeSection />
      <ProcessSection />
      <MissionSection />
      <Footer />
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

function AttributeSection() {
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

function ProcessSection() {
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

function MissionSection() {
  return (
    <div className={styles.missionSection}>
      <section className="pd-128">
        <div className={styles.statement}>
          <div className="stm-details">
            <h5 className="fs-16-500">xyz</h5>
            <h3 className="fs-38-600">abc</h3>
            <p className="fs-16-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className={styles.stmImgBox}>
            <img src={missionImg1} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}
