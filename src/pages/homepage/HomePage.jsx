import styles from "./HomePage.module.css";

import NavBar from "../../components/NavBar";
import HomepageHero from "./HomepageHero";
import FeaturesSection from "../featurespage/FeaturesSection";
import FaqSection from "../../components/FaqSection";
import BlogSection from "../../components/BlogSection";
import Footer from "../../components/Footer";
import WorkSection from "./WorkSection";
import ProjectSection from "./ProjectSection";
import ReviewSection from "./ReviewSection";
import InquirySection from "./InquirySection";

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
