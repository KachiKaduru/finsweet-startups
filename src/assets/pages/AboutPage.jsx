import styles from "./AboutPage.module.css";
import missionImg1 from "../images/about-page/a-man-standing.png";
// import missionImg2 from "../images/about-page/photo-of women.png";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { BenefitCard, BenefitCardContainer } from "../components/FeaturesSection";
import Sponsors from "../components/Sponsors";

import icon1 from "../images/icons/featuresIcon1.svg";
import icon3 from "../images/icons/featuresIcon3.svg";
import icon6 from "../images/icons/featuresIcon6.svg";

import profileImg1 from "../images/profiles/img1.png";
import profileImg2 from "../images/profiles/img2.png";
import profileImg3 from "../images/profiles/img3.png";

const attributeArr = ["Goal focussed", "Continuous improvement"];

const processArr = ["Planning", "Conception", "Design", "Development"];

export const benefitsArr = [
  { id: 1, heading: "Customize with ease", icon: icon3 },
  { id: 1, heading: "Perfectly Responsive", icon: icon6 },
  { id: 3, heading: "Friendly Support", icon: icon1 },
];

const teamArr = [
  { id: 1, name: "John Smith", role: "CEO", img: profileImg1 },
  { id: 2, name: "Simon Adams", role: "CTO", img: profileImg2 },
  { id: 3, name: "Sarah Hardin", role: "Project Manager", img: profileImg3 },
  { id: 4, name: "Paul Jones", role: "Design Lead", img: profileImg1 },
];

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
      <BenefitSection people="us">
        <Sponsors />
      </BenefitSection>
      <TeamSection />
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

export function BenefitSection({ children, people = "us", padding = "pd-128" }) {
  return (
    <div className={styles.benefitSection}>
      <section className={padding}>
        <h2 className="fs-48-600">The benefits of working with {people}</h2>

        <BenefitCardContainer>
          {benefitsArr.map((card) => (
            <BenefitCard key={card.id} card={card} bgColor="#F4F6FC" />
          ))}
        </BenefitCardContainer>

        {children}
      </section>
    </div>
  );
}

function TeamSection() {
  return (
    <div className={styles.teamSection}>
      <section className="pd-128">
        <h2 className="fs-48-600">Meet our Team</h2>

        <div className={styles.team}>
          {teamArr.map((person) => (
            <div className={styles.profile} key={person.id}>
              <div className={styles.imgHolder}>
                <img src={person.img} alt="" />
              </div>

              <h4 className="fs-24-400">{person.name}</h4>
              <p className="fs-16-400">{person.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
