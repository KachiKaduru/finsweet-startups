import NavBar from "../components/NavBar";
import HomepageHero from "../components/HomepageHero";
import FeaturesSection from "../components/FeaturesSection";

import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";

const workStnArr = [
  { id: 1, heading: "Strategy" },
  { id: 2, heading: "Wireframing" },
  { id: 3, heading: "Design" },
  { id: 4, heading: "Development" },
];

export default function HomePage() {
  return (
    <div className={styles.home}>
      <NavBar />
      <HomepageHero />
      <WorkSection />
      <ProjectSection />
      <FeaturesSection />
      <ReviewSection />
    </div>
  );
}

function WorkSection() {
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

function ProjectSection() {
  return (
    <div className={styles.projectStn}>
      <section className="pd-128">
        <div className={styles.projectTop}>
          <h2 className="fs-48-600">View our projects</h2>
          <Link to="/work" className="fs-16-500">
            View More &rarr;
          </Link>
        </div>

        <div className="down">
          <main></main>
          <div className="others">
            <div className="card-top"></div>
            <div className="card-down"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ReviewSection() {
  return (
    <div className={styles.reviewStn}>
      <section className="pd-128">
        <div className="left">
          <h2 className="fs-38-600">What our clients say about us</h2>
          <p className="fs-16-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
        </div>

        <div className="right"></div>
      </section>
    </div>
  );
}
