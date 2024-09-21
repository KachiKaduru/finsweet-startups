import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import personImg from "../_images/home-page/person.png";

import NavBar from "../components/NavBar";
import HomepageHero from "../components/HomepageHero";
import FeaturesSection from "../components/FeaturesSection";
import FaqSection from "../components/FaqSection";
import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";

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
      <FaqSection />
      <InquirySection />
      <BlogSection />
      <Footer />
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

        <div className={styles.down}>
          <div className={styles.cardOne}></div>
          <div className={styles.cardThree}></div>
          <div className={styles.cardTwo}></div>
        </div>
      </section>
    </div>
  );
}

function ReviewSection() {
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

function InquirySection() {
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
