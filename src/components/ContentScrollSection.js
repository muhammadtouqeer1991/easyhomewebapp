"use client";

import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";

export default function ContentScrollSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("long-content");
      if (section) {
        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {
          setVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section id="long-content" className="long-section">
        <Container>
          <Row className="scrollcontent">
            {/* LEFT SIDE */}
            <Col md={6} className={`content ${visible ? "show" : ""}`}>
              <h2>
                Your Journey Towards Owning a Perfect Property Starts Here with
                Trusted Experts and Flexible Planning Options
              </h2>

              <p>
                Finding the right property is not just about location — it’s
                about security, long-term value, and peace of mind. We bring you
                carefully selected projects that match your vision and financial
                comfort, ensuring you never have to compromise.
              </p>

              <p>
                Our platform connects you directly with verified developers,
                making the entire process smooth and transparent from start to
                finish. Whether you're planning your first home or investing for
                the future, we provide complete guidance at every step.
              </p>

              <ul className="list">
                <li>
                  <FaCheckCircle /> Verified and Trusted Projects Only
                </li>
                <li>
                  <FaCheckCircle /> Flexible Installment Plans
                </li>
                <li>
                  <FaCheckCircle /> Prime Locations Across the City
                </li>
              </ul>

              <p>
                We understand that every buyer has unique needs. That’s why our
                solutions are designed to adapt to your requirements — from
                budget-friendly options to premium investments.
              </p>

              <p>
                With a strong focus on customer satisfaction, we ensure that
                every detail is handled professionally so you can move forward
                with confidence.
              </p>
            </Col>

            {/* RIGHT SIDE */}
            <Col md={6} className={`content ${visible ? "show" : ""}`}>
              <h2>
                Secure Investments with High Returns and a Hassle-Free Buying
                Experience Tailored for Modern Buyers
              </h2>

              <p>
                Real estate investment is one of the most reliable ways to build
                long-term wealth. Our carefully curated projects offer strong
                growth potential while minimizing risks.
              </p>

              <p>
                From documentation to booking and final possession, our process
                is streamlined to save you time and effort. We eliminate
                unnecessary complexities so you can focus on making the right
                decision.
              </p>

              <ul className="list">
                <li>
                  <FaCheckCircle /> Transparent Pricing Structure
                </li>
                <li>
                  <FaCheckCircle /> Quick Booking & Approval
                </li>
                <li>
                  <FaCheckCircle /> Dedicated Customer Support
                </li>
                <li>
                  <FaCheckCircle /> Legal & Documentation Assistance
                </li>
              </ul>

              <p>
                Our goal is to provide you with not just a property, but a
                secure future. With expert insights and market knowledge, we
                guide you towards investments that truly matter.
              </p>

              <p>
                Take the first step today and explore opportunities that bring
                both comfort and financial growth together in one place.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* INTERNAL CSS */}
      <style jsx>{`
        .long-section {
          padding: 100px 0;
          background: #ffffff;
        }
        .scrollcontent {
          height: 300px;
          overflow: scroll;
        }

        h2 {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 20px;
          line-height: 1.4;
        }

        p {
          font-size: 16px;
          color: #555;
          margin-bottom: 15px;
          line-height: 1.7;
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

        /* Scroll Animation */
        .content {
          opacity: 0;
          transform: translateY(60px);
          transition: all 0.8s ease;
        }

        .show {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          h2 {
            font-size: 26px;
          }
        }
      `}</style>
    </>
  );
}
