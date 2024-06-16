import styles from "../pages/PricingPage.module.css";

import NavBar from "../components/NavBar";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";

const pricingListArr = [
  {
    id: 1,
    title: "Landing Page",
    price: 299,
    priceType: "Per Design",
    subheading: "When you’re ready to go beyond prototyping in Figma, ",
    benefits: ["All limited links", "Own analytics platform", "Chat support"],
    buttonText: "Get Started",
  },
  {
    id: 2,
    title: "Website Page",
    price: 399,
    priceType: "Multi Design",
    subheading: "When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help.",
    benefits: [
      "All limited links",
      "Own analytics platform",
      "Chat support",
      "Optimize hashtags",
      "Unlimited users",
    ],
    buttonText: "Get Started",
  },
  {
    id: 3,
    title: "Complex Project",
    price: 499,
    priceType: "Per Design",
    subheading: "When you’re ready to go beyond prototyping in Figma, ",
    benefits: [
      "All limited links",
      "Own analytics platform",
      "Chat support",
      "Optimize hashtags",
      "Unlimited users",
      "Assist and Help",
    ],
    buttonText: "Contact Us",
  },
];

export default function PricingPage() {
  return (
    <div>
      <NavBar />
      <PricingSection />
      <FaqSection />
      <Footer />
    </div>
  );
}

function PricingSection() {
  return (
    <div className={styles.pricingStn}>
      <section className="pd-128">
        <header>
          <h2 className="fs-48-600">Our Pricing Plans</h2>
          <p className="fs-16 500">
            When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring
            your designs to life — without coding them.
          </p>
        </header>

        <div className={styles.pricingList}>
          {pricingListArr.map((priceList) => (
            <PricingPackage key={priceList.id} priceList={priceList} />
          ))}
        </div>
      </section>
    </div>
  );
}

function PricingPackage({ priceList }) {
  return (
    <div className={styles.pricingPackage}>
      <div className={styles.pricesCtn}>
        <h3 className="fs-38-600">${priceList.price}</h3>
        <p className="fs-16-400">{priceList.priceType}</p>
      </div>

      <div className={styles.pricingDetails}>
        <h4 className="fs-24-500">{priceList.title}</h4>
        <p className="fs-16-400">{priceList.subheading}</p>
      </div>

      <ul>
        {priceList.benefits.map((benefit, i) => (
          <li className="fs-16-400" key={i + 1}>
            <span>▶ </span> {benefit}
          </li>
        ))}
      </ul>

      <button>{priceList.buttonText}</button>
    </div>
  );
}
