// import styles from "./AboutPage.module.css";

import NavBar from "../../components/NavBar";
import AboutUsSection from "./AboutUsSection";
import AttributeSection from "./AttributeSection";

import BenefitSection from "../../components/BenefitSection";
import Sponsors from "../../components/Sponsors";
import Footer from "../../components/Footer";
import ProcessSection from "./ProcessSection";
import MissionSection from "./MissionSection";
import TeamSection from "./TeamSection";

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
