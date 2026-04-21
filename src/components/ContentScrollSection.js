"use client";

import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";

const content = [
  {
    title: "Your Journey Towards Owning a Perfect Property Starts Here",
    paragraphs: [
      "Finding the right property is not just about location — it’s about long-term value, security, and peace of mind Finding the right property is not just about location — it’s about long-term value, security, and peace of mind Finding the right property is not just about location — it’s about long-term value, security, and peace of mind.",
      "We carefully select projects that align with your financial goals and lifestyle needs so you never have to compromise.",
    ],
    points: [
      "Verified and Trusted Projects",
      "Flexible Installment Plans",
      "Prime Locations",
    ],
    moreText:
      "Our goal is to simplify your buying journey with complete transparency and expert guidance at every step oal is to simplify your buying journey with complete transparency and expert guidance at every step.",
  },
  {
    title: "Secure Investments with High Returns for Modern Buyers",
    paragraphs: [
      "Real estate remains one of the most powerful ways to build wealth over time. We ensure every opportunity we present has strong growth potential and minimal risk  We ensure every opportunity we present has strong growth potential and minimal risk  ",
      "We ensure every opportunity we present has strong growth potential and minimal risk mains one of the most powerful ways to build wealth over time. We ensure ev mains one of the most powerful ways to build wealth over time. We ensure ev  .",
    ],
    points: [
      "Transparent Pricing",
      "Quick Booking Process",
      "Legal Assistance",
    ],
    moreText:
      "With our expert insights, you can confidently invest in properties that deliver both stability and growth.",
  },
];

export default function ContentScrollSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".scroll-area");
      if (!section) return;

      const top = section.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className="wrapper">
        <Container>
          <div className="scroll-area">
            <Row>
              {content.map((col, index) => (
                <Col md={6} key={index}>
                  <div className={`content-box ${visible ? "show" : ""}`}>
                    <h2>{col.title}</h2>

                    {col.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}

                    {/* Points */}
                    <ul className="list">
                      {col.points.map((point, i) => (
                        <li key={i}>
                          <FaCheckCircle /> {point}
                        </li>
                      ))}
                    </ul>

                    <p>{col.moreText}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </section>

      <style jsx>{`
        .wrapper {
          padding: 20px 0;
          // background: #f9fafb;
        }

        /* SCROLL AREA */
        .scroll-area {
          max-height: 450px;
          overflow-y: auto;

          padding: 20px 20px;
        }

        .content-box {
          padding: 20px;
          margin-bottom: 40px;
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.7s ease;
          box-shadow: 0px 0px 10px #3333;
        }

        .show {
          opacity: 1;
          transform: translateY(0);
        }

        h2 {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 20px;
          line-height: 1.4;
        }

        p {
          font-size: 16px;
          color: #555;
          line-height: 1.7;
          margin-bottom: 15px;
        }

        .list {
          margin: 20px 0;
          padding: 0;
          list-style: none;
        }

        .list li {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
          font-weight: 500;
        }

        .list svg {
          color: #28a745;
        }

        /* Scrollbar */
        .scroll-area::-webkit-scrollbar {
          width: 6px;
          background: #1855a5;
        }

        .scroll-area::-webkit-scrollbar-thumb {
          background: #5fb43d;
          border-radius: 10px;
        }

        @media (max-width: 768px) {
          .scroll-area {
            max-height: 350px;
          }

          h2 {
            font-size: 22px;
          }
        }
      `}</style>
    </>
  );
}
