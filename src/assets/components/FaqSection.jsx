/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import styles from "../components/FaqSection.module.css";

import plusImg from "../images/icons/plus.png";
import { useState } from "react";

const faqsArr = [
  { id: 1, question: "How much time does it take?" },
  { id: 2, question: "What is your class naming convention?" },
  { id: 3, question: "How do you communicate?" },
  { id: 4, question: "I have a bigger project. Can you handle it?" },
  { id: 5, question: "What is your class naming convention?" },
];

const answer =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

export default function FAQSection() {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className={styles.faqSection}>
      <section className="pd-128">
        <div className={styles.left}>
          <h2 className="fs-38-600">Frequently asked questions</h2>

          <Link to="/contact" className="fs-18-500">
            Contact us for more info
          </Link>
        </div>

        <div className={styles.faqBox}>
          {faqsArr.map((item) => (
            <Faq
              key={item.id}
              question={item.question}
              num={item.id}
              curOpen={curOpen}
              onOpen={setCurOpen}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function Faq({ question, num, curOpen, onOpen }) {
  // const [isOpen, setIsOpen] = useState(false);
  const isOpen = num === curOpen;

  function handleToggle() {
    // setIsOpen((isOpen) => !isOpen);
    // onOpen(num);
    isOpen ? onOpen(null) : onOpen(num);
  }

  return (
    <div className={styles.faq}>
      <div className={styles.questionBar}>
        <p className="fs-24-500">0{num}</p>
        <h4 className="fs-24-500">{question}</h4>

        <div className={styles.imgCtn} onClick={handleToggle}>
          <img src={plusImg} alt="" className={isOpen ? "turn" : null} />
        </div>
      </div>

      {isOpen && (
        <div className={styles.answerBar}>
          <p className="fs-18-500">{answer}</p>
        </div>
      )}
    </div>
  );
}
