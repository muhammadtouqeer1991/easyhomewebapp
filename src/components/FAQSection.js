"use client";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    question: "How Do You Qualify For A Loan?",
    answer:
      "Lenders check your income, credit score, and debt-to-income ratio.",
  },
  {
    question: "A Good Lender Will Clearly Explain Mortgage?",
    answer:
      "A good lender will guide you through all terms and conditions clearly.",
  },
  {
    question: "Can You Get A Mortgage Without A Credit Score?",
    answer:
      "Yes, but options are limited and may require alternative documentation.",
  },
  {
    question: "How Much Home Can You Afford?",
    answer: "It depends on your income, debts, and down payment.",
  },
];

export default function CreativeFAQ({ img }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <Container>
        <div className="text-center mb-5">
          <h6 className="sub-title">FAQ</h6>
          <h2 className="main-title">Frequently Asked Questions</h2>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, nesciunt velit necessitatibus odit laboriosam fugiat
            qui
          </p>
        </div>
        <Row className="align-items-center">
          {/* LEFT FAQ */}
          <Col md={6}>
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${openIndex === index ? "active" : ""}`}
                onClick={() => toggle(index)}
              >
                <div className="faq-question">
                  <h6>{item.question}</h6>

                  <div className="icon">
                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                  </div>
                </div>

                <div
                  className="faq-answer"
                  style={{
                    maxHeight: openIndex === index ? "200px" : "0px",
                  }}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </Col>

          {/* RIGHT IMAGE */}
          <Col md={6} className="text-center">
            <div className="faq-image-wrapper">
              <img src={img} alt="faq" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
