import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import styles from "../pages/ContactPage.module.css";

export default function ContactPage() {
  return (
    <div>
      <NavBar />

      <ContactSection />
      <Footer />
    </div>
  );
}

function ContactSection() {
  return (
    <div className={styles.contactSection}>
      <section className="pd-128">
        <div className={styles.heading}>
          <h2 className="fs-48-600">Contact Us</h2>
          <p className="fs-16-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore.
          </p>
        </div>

        <form action="">
          <fieldset>
            <legend>Name</legend>
            <input type="text" required placeholder="Enter your name" />
          </fieldset>

          <fieldset>
            <legend>Email</legend>
            <input type="email" required placeholder="Enter your email" />
          </fieldset>

          <fieldset>
            <legend>Subject</legend>
            <input type="text" placeholder="Provide context" required />
          </fieldset>

          <fieldset>
            <legend>Subject</legend>
            <select name="project">
              <option value="landing page">Landing page</option>
              <option value="design">Website Page</option>
              <option value="multi">Multi-Page Project</option>
            </select>
          </fieldset>

          <fieldset className={styles.txtArea}>
            <legend>Message</legend>
            <textarea name="" id="" placeholder="Write your question here"></textarea>
          </fieldset>

          <button className="fs-18-600">Send Message</button>
        </form>
      </section>
    </div>
  );
}
